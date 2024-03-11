<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let emblaApi: EmblaCarouselType;

	export let data;
	const { insights, research } = data;

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

<section class="hero"></section>

<section class="research">
	<h1>Research</h1>
	<h2>New Research</h2>
	<!-- TODO: add link to it (+autocomplete?) -->
	<a class="link">
		See all Research
		<Icon
			icon="system-uicons:arrow-top-right"
			style="display:inline-block"
			width={22}
			height={22}
		/>
	</a>
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
			{#each research as { id, title, tags, thumbnail, postedOn, description }}
				<div class="embla-slide">
					<a>
						<article class="card">
							<img src={thumbnail} alt={title} class="card-image" />
							<p class="category">Research</p>
							{#if tags}
								<div class="tags">
									{#each tags as tag}
										<span class="tag">{tag}</span>
									{/each}
								</div>
							{/if}
							<h1 class="title">{title}</h1>
							{#if description}
								<p class="description">
									{description}
								</p>
							{/if}
							<span class="posted-on">
								{postedOn}
							</span>
						</article>
					</a>
				</div>
			{/each}
		</div>
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

	.research h2 {
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

	.research .link {
		grid-area: link;
		font-size: var(--text-xl);
		letter-spacing: var(--tracking-tighter);
		padding: 0.375rem 0.5rem 0.375rem 0.75rem;
		background-color: var(--color-gray-light);
		max-width: fit-content;
		border-radius: 0.625em;
		cursor: pointer;
		margin-bottom: 3.125rem;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
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

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}

	.card .card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-radius: 0.9375rem;
	}

	.card .category {
		padding: 0.375rem 0.625rem;
		border-radius: 0.375rem;
		/* background-color: var(--color-secondary); */
		background: rgba(241, 241, 241, 0.2);
		color: var(--color-white);
		opacity: 0.2;
		max-width: max-content;
		position: absolute;
		top: 1.25rem;
		left: 1.25rem;
		font-weight: var(--font-medium);
		backdrop-filter: blur(0.25rem);
	}

	.card .tags {
		display: flex;
		gap: 0.5rem;
	}

	.card .tags .tag {
		padding: 0.1875rem 0.376rem 0.25rem 0.376rem;
		background-color: var(--color-accent);
		border-radius: 0.375rem;
		color: var(--color-white);
		font-size: var(--text-sm);
	}

	.card .title {
		font-size: var(--text-2xl);
		padding-right: 1rem;
		letter-spacing: var(--tracking-tighter);
	}

	.card .description {
		font-size: var(--text-md);
		letter-spacing: var(--tracking-tighter);
		opacity: 0.5;
		font-weight: var(--font-medium);
	}

	.card .posted-on {
		font-size: var(--text-md);
		font-weight: var(--font-medium);
		opacity: 0.3;
		margin-top: calc(2.1875rem - 1rem);
	}
</style>
