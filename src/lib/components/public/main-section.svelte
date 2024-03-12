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

	const handleInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
	};

	const handlePrev = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	};

	const handleNext = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	};
</script>

<section class="research">
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
	<MainLink href={link}>
		{linkText}
	</MainLink>
	<div class="carousel-buttons">
		<button on:click={handlePrev}>
			<Icon
				icon="material-symbols-light:arrow-circle-left-outline"
				width={'100%'}
				height={'100%'}
			/>
		</button>
		<button on:click={handleNext}>
			<Icon
				icon="material-symbols-light:arrow-circle-right-outline"
				width={'100%'}
				height={'100%'}
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
		grid-template-columns: 3.5fr 6.5fr;
		grid-template-areas:
			'title sub-title carousel-buttons'
			'..... link .....'
			'..... carousel carousel';
	}

	.research > h1 {
		grid-area: title;
		font-size: var(--text-5xl);
		margin-right: 2.25rem;
		letter-spacing: var(--tracking-tighter);
	}

	.research > h2 {
		grid-area: sub-title;
		font-size: var(--text-4xl);
		align-self: center;
	}

	.research .carousel-buttons {
		grid-area: carousel-buttons;
		display: flex;
		justify-self: end;
		height: 2.5rem;
		align-self: center;
	}

	.research .carousel-buttons button {
		width: 2.5rem;
		aspect-ratio: 1;
	}

	.research .carousel {
		--size: 22.5rem;
		grid-area: carousel;
	}

	.embla {
		overflow: hidden;
	}

	.embla-container {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: var(--size);
		gap: 0.75em;
	}

	.embla-slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
