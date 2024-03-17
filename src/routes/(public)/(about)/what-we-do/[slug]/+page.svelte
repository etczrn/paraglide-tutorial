<script lang="ts">
	import Newsletter from '$lib/components/public/newsletter.svelte';
	import OtherLinks from '$lib/components/public/what-we-do/other-links.svelte';
	import { fly } from 'svelte/transition';

	export let data;
	const { id, title, thumbnail } = data;
</script>

<section class="background">
	<img src={thumbnail} alt={title} class="image" />
</section>
<h1 transition:fly>Related Content</h1>
<Newsletter />
<OtherLinks />

<style>
	.background {
		width: 100%;
		height: 54.625rem;
	}

	.background .image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		font-size: 100px;
	}
</style>
