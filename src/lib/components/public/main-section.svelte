<script lang="ts">
	import type { Article } from '$lib/models/public/article';
	import Icon from '@iconify/svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Card from './card.svelte';
	import Link from './link.svelte';
	import MainLink from './main-link.svelte';

	export let title: string;
	export let subtitle: string;
	export let link: string;
	export let linkText: string;
	export let articles: Article[];

	let emblaApi: EmblaCarouselType;
	let prveButtonDisabled: boolean = true;
	let nextButtonDisabled: boolean = false;

	const handleInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
	};

	const handlePrev = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		handleDisabled();
	};

	const handleNext = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		handleDisabled();
	};

	const handleDisabled = () => {
		if (!emblaApi) return;
		prveButtonDisabled = !emblaApi.canScrollPrev();
		nextButtonDisabled = !emblaApi.canScrollNext();
	};
</script>

<section class="research">
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
	<MainLink href={link}>
		{linkText}
	</MainLink>
	<div class="carousel-buttons">
		<button on:click={handlePrev} disabled={prveButtonDisabled}>
			<Icon
				icon="material-symbols-light:arrow-circle-left-outline"
				width={'100%'}
				height={'100%'}
				{...prveButtonDisabled && { color: 'var(--color-text-primary)', style: 'opacity: 0.5' }}
			/>
		</button>
		<button on:click={handleNext} disabled={nextButtonDisabled}>
			<Icon
				icon="material-symbols-light:arrow-circle-right-outline"
				width={'100%'}
				height={'100%'}
				{...nextButtonDisabled && { color: 'var(--color-text-primary)', style: 'opacity: 0.5' }}
			/>
		</button>
	</div>
	<div class="carousel embla" use:emblaCarouselSvelte on:emblaInit={handleInit}>
		<div class="embla-container">
			{#each articles as article}
				<div class="embla-slide">
					<Link href={`/${link}/${article.id}`}>
						<Card {article} />
					</Link>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.research {
		max-width: var(--max-w-screen-2xl);
		display: grid;
		margin: 0 auto;
		padding: 1.75em 2.25em;
		grid-template-columns: minmax(22.5rem, 3.5fr) 6.5fr;
		grid-template-areas:
			'title sub-title carousel-buttons'
			'..... link .....'
			'..... carousel carousel';
	}

	@media (width <= 48rem) {
		.research {
			grid-template-columns: 1fr;
			grid-template-areas:
				'title title'
				'sub-title carousel-buttons'
				'link ...'
				'carousel carousel';
			padding: 1.25em 1.5em;
			max-width: var(--max-w-prose);
		}
	}

	.research > h1 {
		grid-area: title;
		font-size: var(--text-7xl);
		margin-right: 2.25rem;
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.research > h1 {
			font-size: var(--text-6xl);
			margin: 0;
			margin-bottom: 3.125rem;
		}
	}

	.research > h2 {
		grid-area: sub-title;
		font-size: var(--text-5xl);
		align-self: center;
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.research > h2 {
			font-size: var(--text-3xl);
			margin-bottom: 1rem;
		}
	}

	.research .carousel-buttons {
		grid-area: carousel-buttons;
		display: flex;
		justify-self: end;
		height: 2.5rem;
		align-self: center;
	}

	@media (width <= 48rem) {
		.research .carousel-buttons {
			height: 1.875rem;
			margin-bottom: 1.1875rem;
		}
	}

	.research .carousel-buttons button {
		width: 2.5rem;
		aspect-ratio: 1;
	}

	@media (width <= 48rem) {
		.research .carousel-buttons button {
			width: 1.875rem;
		}
	}

	.research .carousel {
		--max-size: 22.5rem; /* 360px */
		--min-size: 21.24rem /* 340px */;
		grid-area: carousel;
		margin-top: 3.125rem;
	}

	@media (width <= 48rem) {
		.research .carousel {
			margin-top: 3.75rem;
		}
	}

	.embla {
		overflow: hidden;
	}

	.embla-container {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: clamp(var(--min-size), 100%, var(--max-size));
		gap: 0.75em;
	}

	@media (width <= 48rem) {
		.embla-container {
			grid-auto-columns: 100%;
		}
	}

	.embla-slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
