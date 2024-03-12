<script>
	import MainLink from '$lib/components/public/main-link.svelte';
	import MainSection from '$lib/components/public/main-section.svelte';

	export let data;
	const { research, insights } = data;
</script>

<section class="hero"></section>

<MainSection
	title="Research"
	subtitle="New Research"
	link="/research"
	linkText="See all Research"
	articles={research}
/>
<MainSection
	title="Insights"
	subtitle="New Insights"
	link="/insights"
	linkText="See all insights"
	articles={insights}
/>

<section class="who-we-are">
	<div class="split-layout">
		<h1>Who we are</h1>
		<div class="description">
			<p>
				We research the biggest sources of greenhouse gas emissions in Asia, and bring together
				people to make ideas and actions happen.
			</p>
			<p>Our goal is a just and equitable world where both people and planet thrive.</p>
		</div>
	</div>
</section>

<section class="what-we-do">
	<div class="split-layout">
		<h1>What we do</h1>
		<div class="description">
			<p>
				Solutions for Our Climate works towarda society that protects people from the dangers of
				climate change.
			</p>
			<MainLink href="/what-we-do">See More</MainLink>
		</div>
	</div>
</section>

<section class="our-people"></section>

<section class="newsletter"></section>

<style>
	.split-layout {
		max-width: var(--max-w-screen-2xl);
		margin-inline: auto;
		display: grid;
		grid-template-columns: minmax(22.5rem, 1fr) 1fr;
		grid-template-areas: 'title description';
		padding: 2.3125em 2.25rem;
		min-height: 36.875rem;
	}

	@media (width <= 48rem) {
		.split-layout {
			grid-template-columns: 1fr;
			grid-template-areas: 'title' 'description';
			padding: 1.5rem;
			max-width: var(--max-w-prose);
			grid-template-rows: min-content 1fr;
		}
	}

	.split-layout > h1 {
		grid-area: title;
		font-size: var(--text-7xl);
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.split-layout > h1 {
			font-size: var(--text-6xl);
			margin-bottom: 2.5rem;
		}
	}

	.split-layout .description {
		margin-top: 1.25rem;
		letter-spacing: var(--tracking-tight);
		max-width: var(--max-w-ch-sm);
		font-size: var(--text-2xl);
		line-height: var(--leading-snug);
	}

	@media (width <= 48rem) {
		.split-layout .description {
			margin-top: 0;
		}
	}

	.split-layout .description p {
		margin-bottom: 1.16rem;
	}

	@media (width <= 48rem) {
		.split-layout .description p {
			margin-bottom: 1.5rem;
		}
	}

	.who-we-are {
		background-color: var(--color-gray-light);
	}
</style>
