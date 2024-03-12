<script lang="ts">
	import type { Article } from '$lib/models/public/article';

	export let article: Article;
	const { id, thumbnail, title, tags, description, postedOn } = article;
</script>

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

<style>
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
