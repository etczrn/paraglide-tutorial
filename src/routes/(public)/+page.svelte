<script lang="ts">
	export let data;
	const { insights, research } = data;
</script>

<section class="hero"></section>

<section class="research">
	<h1>Research</h1>
	<h2>New Research</h2>
	<a>See all Research</a>
	<div class="carousel-buttons">
		<button>Previous</button>
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
		grid-template-columns: 3.5fr 6.5fr;
		grid-template-areas:
			'title sub-title carousel-buttons'
			'..... link .....'
			'..... carousel carousel';
	}

	.research h1 {
		grid-area: title;
	}

	.research h2 {
		grid-area: sub-title;
	}

	.research a {
		grid-area: link;
	}

	.research .carousel {
		grid-area: carousel;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}

	.research .carousel-buttons {
		grid-area: carousel-buttons;
	}
</style>
