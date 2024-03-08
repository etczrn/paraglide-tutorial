<script>
	import { i18n } from '$lib/i18n';
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
