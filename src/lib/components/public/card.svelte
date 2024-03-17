<script lang="ts">
	import type { Article } from '$lib/models/public/article';

	export let article: Article;
	const { id, thumbnail, title, tags, description, postedOn } = article;
</script>

<article class="card">
	<img src={thumbnail} alt={title} class="card-image" />
	<p class="category">Research</p>
	{#if tags.length > 0}
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

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}

	.card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-radius: 0.9375rem;
	}

	/* TODO: change category background color */
	.category {
		padding: 0.375rem 0.625rem;
		border-radius: 0.375rem;
		/* background-color: var(--color-secondary); */
		/* background: rgba(241, 241, 241, 0.2); */
		color: var(--color-white);
		opacity: 0.2;
		max-width: max-content;
		position: absolute;
		top: 1.25rem;
		left: 1.25rem;
		font-weight: var(--font-medium);
		backdrop-filter: blur(0.25rem);
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		padding: 0.1875rem 0.376rem 0.25rem 0.376rem;
		background-color: var(--color-accent);
		border-radius: 0.375rem;
		color: var(--color-white);
		font-size: var(--text-sm);
		height: fit-content;
		min-width: fit-content;
	}

	.title {
		font-size: var(--text-2xl);
		padding-right: 1rem;
		letter-spacing: var(--tracking-tighter);
	}

	.description {
		font-size: var(--text-md);
		letter-spacing: var(--tracking-tighter);
		opacity: 0.5;
		font-weight: var(--font-medium);
	}

	.posted-on {
		font-size: var(--text-md);
		font-weight: var(--font-medium);
		opacity: 0.3;
		margin-top: calc(2.1875rem - 1rem);
	}

	@media (max-width: 48rem) {
		.card {
			gap: 1rem;
		}

		.card-image {
			border-radius: 0.625rem;
		}

		.tags {
			gap: 0.375rem;
		}

		.tag {
			font-size: var(--text-sm);
			padding: 0.125rem 0.3125rem 0.1875rem 0.3125rem;
		}

		.title {
			font-size: var(--text-xl);
			padding-right: 0;
		}

		.description {
			font-size: var(--text-sm);
		}
	}
</style>
