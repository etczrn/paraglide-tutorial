<script lang="ts">
	import whatWeDo from '$lib/assets/public/what-we-do.png?enhanced';
	import whoWeAre from '$lib/assets/public/who-we-are.png?enhanced';
	import Link from '$lib/components/public/link.svelte';
	import MainLink from '$lib/components/public/main-link.svelte';
	import MainSection from '$lib/components/public/main-section.svelte';
	import MainSplit from '$lib/components/public/main-split.svelte';
	import Icon from '@iconify/svelte';

	export let data;
	const { research, insights, jobs } = data;
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
			<!-- TODO: 화면 꽉 차게 돌리기 -->
			{#each jobs as { title, thumbnail }, i}
				<Link href="">
					<div class="card">
						<img src={thumbnail} alt={title} />
						<div class="title">
							<p><sup>{i + 1}</sup> {title}</p>
							<Icon icon="iconamoon:arrow-top-right-5-circle-thin" class="arrow-icon" />
						</div>
					</div>
				</Link>
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

	.who-we-are .description p,
	.what-we-do .description p {
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
			padding-top: 6.625rem;
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
		padding-top: 10rem;
		padding-bottom: 11.75rem;
		overflow: hidden;
	}

	@media (width <= 48rem) {
		.marquee-container {
			margin-inline: 1.5rem;
			padding-top: 3.75rem;
			padding-bottom: 4.1875rem;
		}
	}

	.marquee {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 30rem;
		gap: 0.75rem;

		animation: marquee-left 25s linear infinite;
		animation-play-state: running;
	}

	@media (width <= 48rem) {
		.marquee {
			grid-auto-columns: min(100%, 30rem);
			animation-duration: 10s;
			gap: 1.5rem;
		}
	}

	.marquee:hover {
		animation-play-state: paused;
	}

	.card {
		width: 100%;
		aspect-ratio: 1.45;
		border-radius: 0.9375rem;
		position: relative;
	}

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.9375rem;
	}

	@keyframes marquee-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	.card .title {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 1.5rem;
		width: 100%;
		height: 5.625rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-end-start-radius: 0.9375rem;
		border-end-end-radius: 0.9375rem;
		/* added */
		backdrop-filter: blur(0.625rem);
		background: rgba(183, 183, 181, 0.5);
		color: white;
	}

	@media (width <= 48rem) {
		.card .title {
			height: 4.375rem;
			padding: 1.25rem;
		}
	}

	.card .title > p {
		font-size: 1.75rem;
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.card .title p {
			font-size: var(--text-xxl);
		}
	}

	div :global(.arrow-icon) {
		font-size: 2.5rem;
	}

	@media (width <= 48rem) {
		div :global(.arrow-icon) {
			font-size: 1.875rem;
		}
	}
</style>
