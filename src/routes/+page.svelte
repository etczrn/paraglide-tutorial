<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import { get } from 'svelte/store';

	const labels: Record<AvailableLanguageTag, string> = {
		en: '🇬🇧 English',
		ko: '🇰🇷 한국어'
	};

	const handleLanguageChange = (e: Event) => {
		const { value } = e.target as HTMLSelectElement;
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, value as AvailableLanguageTag);
		console.log({ canonicalPath, localisedPath });
		goto(localisedPath);
	};
</script>

<h1>{m.greetings({ name: 'Alex' })}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<nav>
	<select on:change={handleLanguageChange}>
		{#each availableLanguageTags as langTag}
			<option value={langTag} selected={languageTag() === langTag}>
				{labels[langTag]}
			</option>
		{/each}
	</select>
</nav>
