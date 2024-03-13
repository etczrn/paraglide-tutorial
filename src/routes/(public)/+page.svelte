<script lang="ts">
	import whatWeDo from '$lib/assets/public/what-we-do.png?enhanced';
	import whoWeAre from '$lib/assets/public/who-we-are.png?enhanced';
	import MainLink from '$lib/components/public/main-link.svelte';
	import MainSection from '$lib/components/public/main-section.svelte';
	import MainSplit from '$lib/components/public/main-split.svelte';

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
	<MainSplit>
		<h1 slot="title">Who we are</h1>
		<svelte:fragment slot="paragraph">
			<p>
				We research the biggest sources of greenhouse gas emissions in Asia, and bring together
				people to make ideas and actions happen.
			</p>
			<p>Our goal is a just and equitable world where both people and planet thrive.</p>
		</svelte:fragment>
	</MainSplit>
	<div class="overlay-image">
		<enhanced:img src={whoWeAre} alt="image for who we are section" />
	</div>
</section>

<section class="what-we-do">
	<MainSplit color="white" ch="30ch">
		<h1 slot="title">What we do</h1>
		<svelte:fragment slot="paragraph">
			<p>
				Solutions for Our Climate works towarda society that protects people from the dangers of
				climate change.
			</p>
			<MainLink href="/what-we-do">See More</MainLink>
		</svelte:fragment>
	</MainSplit>
	<div class="background-image">
		<enhanced:img src={whatWeDo} alt="background image for what we do section" />
	</div>
	<div class="marquee-container">
		<div class="marquee">
			{#each Array(10) as _, i}
				<div class="card">{i + 1}</div>
			{/each}
		</div>
	</div>
</section>

<!-- <section class="our-people"></section>
<section class="newsletter"></section> -->

<style>
	.who-we-are {
		background-color: var(--color-gray-light);
		position: relative;
		padding-bottom: clamp(10rem, 20vw, 21.875rem);
	}

	.who-we-are p,
	.what-we-do p {
		margin-bottom: 1.16rem;
	}

	@media (width <= 48rem) {
		.who-we-are p {
			margin-bottom: 1.5rem;
		}
	}

	.who-we-are .overlay-image {
		padding-inline: 2.25rem;
		position: absolute;
	}

	@media (width <= 48rem) {
		.who-we-are .overlay-image {
			padding-inline: 1.5rem;
			aspect-ratio: 16 / 9;
		}
	}

	.who-we-are .overlay-image img {
		object-fit: contain;
		height: 100%;
		max-height: 27.5rem;
		border-radius: 1rem;
	}

	@media (width <= 48rem) {
		.who-we-are .overlay-image img {
			width: 100%;
			object-fit: cover;
			max-height: 15rem;
		}
	}

	.what-we-do {
		padding-top: min(10vw, 13.25rem);
		position: relative;
		min-height: min(100vh, 100vmax);
	}

	@media (width <= 48rem) {
		.what-we-do {
			padding-top: 5.125rem;
		}
	}

	.what-we-do .background-image img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		top: 0;
		left: 0;
		filter: brightness(0.7);
	}

	.marquee-container {
		margin-inline: 2.25rem;
		margin-top: 10rem;
		overflow: hidden;
	}

	.marquee {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 30rem;
		gap: 0.75rem;

		animation: marquee-left 25s linear infinite;
		animation-play-state: running;
	}

	.marquee:hover {
		animation-play-state: paused;
	}

	.card {
		width: 100%;
		aspect-ratio: 1.45;
		border-radius: 0.9375rem;
		background-color: antiquewhite;
	}

	@keyframes marquee-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
