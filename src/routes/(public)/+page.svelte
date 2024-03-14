<script lang="ts">
	import ourPeople from '$lib/assets/public/our-poeple.png?enhanced';
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

<section class="our-people">
	<MainSplit ch="38ch">
		<h1 slot="title">Our People</h1>
		<svelte:fragment slot="paragraph">
			<p>
				SFOC has a passionate team with expertise in energy, environment, law, finance, and media,
				and seeks innovative and effective approaches to reaching a net-zero emissions target.
			</p>
			<MainLink href="people">See More</MainLink>
		</svelte:fragment>
	</MainSplit>
	<div class="background-image">
		<enhanced:img src={ourPeople} alt="background image for our people section" />
		<!-- our people svg animation -->
		<div class="circle-svg">
			<svg
				id="Vector"
				width="731"
				height="731"
				viewBox="0 0 731 731"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="max-width: 100%; max-height: 100%;"
			>
				<path
					d="M604.274 91.0979C680.109 157.715 728 255.528 728 364.557C728 565.279 565.704 728 365.5 728C165.296 728 3 565.279 3 364.557C3 176.389 145.639 21.6118 328.432 3"
					stroke="#0A39C3"
					stroke-width="6"
					stroke-miterlimit="10"
					stroke-dasharray="0,0,0,1982.986328125"
				>
					<animate
						attributeType="XML"
						attributeName="stroke-dasharray"
						repeatCount="1"
						dur="3.3924234765915586s"
						values="0,0,0,1982.986328125; 0,913.5294128075552,1069.4569153174448,0; 1982.986328125,0,0,0"
						keyTimes="0; 0.46068366677612804; 1"
						begin="0.8448200175225875s"
						fill="freeze"
					></animate>
				</path>
			</svg>
		</div>
	</div>
</section>

<!-- 
<section class="newsletter"></section> -->

<style>
	.who-we-are {
		background-color: var(--color-gray-light);
		position: relative;
		padding-bottom: clamp(10rem, 20vw, 21.875rem);
	}

	.who-we-are .description p,
	.what-we-do .description p,
	.our-people .description p {
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
	}

	.what-we-do .background-image img {
		filter: brightness(0.7);
	}

	@media (width <= 48rem) {
		.what-we-do {
			padding-top: 6.625rem;
		}
	}

	.background-image img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		top: 0;
		left: 0;
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

	.our-people {
		min-height: 64rem;
		padding-top: 2.0625rem;
		position: relative;
	}

	.our-people .circle-svg {
		width: max-content;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media (width <= 48rem) {
		.our-people .circle-svg {
			width: 100%;
			position: unset;
			transform: unset;
			padding-inline: 1.5rem;
			aspect-ratio: 1;
		}
	}
</style>
