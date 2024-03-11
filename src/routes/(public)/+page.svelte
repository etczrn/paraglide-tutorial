<script lang="ts">
	// import Icon from '@iconify/svelte';
	import 'iconify-icon';

	export let data;
	const { insights, research } = data;
</script>

<section class="hero"></section>

<section class="research">
	<h1>Research</h1>
	<h2>New Research</h2>
	<a>See all Research</a>
	<div class="carousel-buttons">
		<button> Prev </button>
		<button>Next</button>
	</div>
	<div class="carousel">
		{#each research as item}
			<div>{item.title}</div>
		{/each}
	</div>
</section>

<section class="insights"></section>

<section class="who-we-are"></section>

<section class="what-we-do"></section>

<section class="our-people"></section>

<section class="newsletter"></section>

<style>
	.research {
		max-width: var(--max-w-screen-2xl);
		display: grid;
		margin: 0 auto;
		padding: 1.75em 2.25em;
		grid-template-columns: 3.5fr auto;
		grid-template-areas:
			'title sub-title carousel-buttons'
			'..... link .....'
			'..... carousel carousel';
	}

	.research h1 {
		grid-area: title;
		font-size: var(--text-5xl);
		margin-right: 2.25rem;
		letter-spacing: var(--tracking-tighter);
	}

	.research h2 {
		grid-area: sub-title;
		font-size: var(--text-4xl);
		align-self: center;
	}

	.research .carousel-buttons {
		grid-area: carousel-buttons;
		display: flex;
		justify-self: end;
	}

	.research .carousel-buttons button {
		width: 2.5rem;
		aspect-ratio: 1;
	}

	.research a {
		grid-area: link;
		font-size: var(--text-xl);
		letter-spacing: var(--tracking-tighter);
		padding: 0.375em 0.5em 0.375em 0.75em;
		background-color: var(--color-gray-light);
		max-width: max-content;
		border-radius: 0.625em;
		cursor: pointer;
		margin-bottom: 3.125rem;
	}

	.research .carousel {
		grid-area: carousel;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
