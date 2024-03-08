# sveltekit + paraglide step by step guide

## svelte kit 셋업
1. pnpm create svelte@latest [app-name]
  - Skeleton project (Barebones scaffolding for your new SvelteKit app)
  - Yes, using TypeScript syntax
  - Add ESLint for code linting, Add Prettier for code formatting
2. pnpm i
3. cd [app-name]

## paraglide js
1. inlang/paraglide-js 설치
```
pnpm i -D @inlang/paraglide-js-adapter-sveltekit
```
2. inlang/paraglide-js-adapter-sveltekit 설치 & vite.config.ts 환경 설정
```
pnpm i -D @inlang/paraglide-js-adapter-sveltekit
```

``` ts
// vite.config.ts
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		// 삽입
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		sveltekit()
	]
});
```
3. paraglide alias 설정 & postinstall 커맨드 실행
```
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// alias 설정 후에 pnpm run postinstall 로 inlang 한 번 실행시켜주기
		alias: {
			$paraglide: './src/paraglide'
		}
	}
};

export default config;
```

```
pnpm run postinstall
```

4. lib 폴더에 i8n 인스턴스 생성
``` ts
// src/lib/i18n.ts

import * as runtime from '$paraglide/runtime.js';

import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';

export const i18n = createI18n(runtime);

```

5. 최상단 레이아웃을 <ParaglideJS /> 컴포넌트로 감싸기
``` ts
<script>
	import { i18n } from '$lib/i18n.js';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
</script>

<!-- 
	This will do a few things for you:
1. Automatically set the language for Paraglide
2. Automatically add rel="alternate" links to your page head
3. Automatically translate any <a href> attributes on your page. You don't need to change them
-->
<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>

```

6. i18n의reroute hook 사용 & sveltejs/kit 버전 올리기 (최소 2.3 이상)
```
// src/hooks.ts

import { i18n } from '$lib/i18n';
/*
https://www.reddit.com/r/sveltejs/comments/193wvz8/sveltekit_230_is_out_with_a_new_hook/
SvelteKit 2.3.0 adds a new reroute hook that allows you to change which route get's rendered in response to a request.
Let's say you have a src/about/+page.svelte page, and you want /en/about, /de/ueber-uns, /fr/a-propos to all render that page. With reroute you can now easily do that.
*/
export const reroute = i18n.reroute();

```

7. app.html 수정 & hooks.server.ts 로 SEO 향상
```
// src/app.html
<!doctype html>
<html lang="%paraglide.lang%" dir="%paraglide.dir%"> <-- 변경

<head>
	<meta charset="utf-8" />
	<link rel="icon" href="%sveltekit.assets%/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	%sveltekit.head%
</head>

<body data-sveltekit-preload-data="hover">
	<div style="display: contents">%sveltekit.body%</div>
</body>

</html>
```

```
// src/hooks.server.ts

import { i18n } from '$lib/i18n';
// This function will modify the HTML before it is sent to the client. (SEO)
export const handle = i18n.handle();
```

8. messages 폴더에 언어별 json 파일 만들고 project.inlang 세팅 변경

```
{
  "$schema": "https://inlang.com/schema/project-settings",
  "sourceLanguageTag": "en",
  "languageTags": [
    "en",
    "ko" <-- 추가
  ],
  "modules": [
    "https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-empty-pattern@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-identical-pattern@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-missing-translation@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-without-source@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-valid-js-identifier@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-message-format@latest/dist/index.js",
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-m-function-matcher@latest/dist/index.js"
  ],
  "plugin.inlang.messageFormat": {
    "pathPattern": "./messages/{languageTag}.json"
  }
}
```

```
// messages/en.json

{
	"$schema": "https://inlang.com/schema/inlang-message-format",
	"hello_world": "Hello World",
	"greeting": "Hello {name}"
}
```

```
// messages/ko.json

{
	"$schema": "https://inlang.com/schema/inlang-message-format",
	"hello_world": "Hello World",
	"greeting": "Hello {name}"
}

```

9. 이렇게 매뉴얼하게 만들기 싫다면 [익스텐션](https://inlang.com/m/dxnzrydw/library-inlang-paraglideJsAdapterSvelteKit#1-add-the-vite-plugin) 사용하기

10. 익스텐션 설치 후 `cmd + shift + p` - `Developer: Reload Window` 하면 셜록 얼굴 아이콘 나옴

11. 이렇게 사용 가능


https://github.com/etczrn/paraglide-tutorial/assets/102032437/74ef4723-4049-4977-bbc5-f6857c1d1bd9


