<script lang="ts">
	import newsletter from '$lib/assets/public/newsletter.png?enhanced';
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
<div class="space">
	<hr />
</div>
<MainSection
	title="Insights"
	subtitle="New Insights"
	link="/insights"
	linkText="See all insights"
	articles={insights}
/>
<div class="space"></div>
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

<section class="newsletter-background">
	<div class="newsletter">
		<h1 class="title">SFOC Newsletter</h1>
		<form class="form">
			<input class="email" type="email" placeholder="Email" />
			<button class="button">Subscribe</button>
		</form>
		<p class="description">
			Get updates on the SFOC latest insight, analysis, data and events delivered twice monthly.
		</p>
		<enhanced:img src={newsletter} alt="newsletter" />
	</div>
</section>

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

	.newsletter-background {
		background-color: var(--color-accent);
		height: 25.625rem;
	}

	@media (width <= 48rem) {
		.newsletter-background {
			position: relative;
		}
	}

	.newsletter {
		max-width: var(--max-w-screen-2xl);
		height: 100%;
		margin-inline: auto;
		padding: 1.875rem 2.25rem;
		padding-bottom: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'title form'
			'title description'
			'image ....';
		color: var(--color-white);
		line-height: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.newsletter {
			grid-template-columns: 1fr;
			grid-template-areas:
				'title'
				'form'
				'description'
				'image';
			padding: 1.5rem;
			padding-bottom: 0;
			height: auto;
		}
	}

	.newsletter .title {
		grid-area: title;
		font-size: 2.25rem; /* 36px */
		margin-right: 1rem;
	}

	@media (width <= 48rem) {
		.newsletter .title {
			font-size: var(--text-2xl);
			margin-bottom: 1.25rem;
		}
	}

	.newsletter .form {
		grid-area: form;

		display: grid;
		grid-template-areas: 'email button';
		grid-template-columns: 6.5fr 3.5fr;
		gap: 0.75rem;
		height: 3.75rem;
	}

	@media (width <= 48rem) {
		.newsletter .form {
			margin-top: 0;
			height: 2.5rem;
			grid-template-columns: 1.5fr 1fr;
		}
	}

	.newsletter .form .email {
		grid-area: email;

		font-size: var(--text-2xl);
		max-width: 30rem;
		padding-inline: 1.25rem;
		border: var(--color-white) 1px solid;
		background: transparent;
		border-radius: 0.9375rem;
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.newsletter .form .email {
			font-size: var(--text-md);
			padding-inline: 1rem;
			border-radius: 0.625rem;
		}
	}

	.newsletter .form .button {
		grid-area: button;

		background-color: #151515;
		letter-spacing: var(--tracking-tighter);
		border-radius: 0.9375rem;
		font-size: var(--text-xxl);
		font-weight: var(--font-medium);
		padding-inline: 1.25rem;
	}

	@media (width <= 48rem) {
		.newsletter .form .button {
			font-size: var(--text-md);
			padding-inline: 1rem;
			border-radius: 0.625rem;
		}
	}

	.newsletter .description {
		grid-area: description;

		font-size: var(--text-2xl);
		letter-spacing: var(--tracking-tighter);
		line-height: 1.3;
		max-width: var(--max-w-ch-sm);
	}

	@media (width <= 48rem) {
		.newsletter .description {
			font-size: var(--text-md);
			margin-top: 1.75rem;
		}
	}

	.newsletter picture {
		grid-area: image;
	}

	.newsletter img {
		max-width: 34.875rem;
		width: 100%;
		aspect-ratio: 558 / 212;
		object-fit: cover;
		object-position: top;
		margin-left: auto;
		margin-right: 1.25rem;
	}

	@media (width <= 48rem) {
		.newsletter img {
			position: absolute;
			bottom: 0;
			width: 75%;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.space {
		margin-top: 13.375rem;
		padding-inline: 2.25rem;
	}
</style>
