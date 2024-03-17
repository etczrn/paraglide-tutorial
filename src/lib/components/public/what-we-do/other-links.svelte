<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/components/public/link.svelte';
	import RightArrowCircle from '$lib/components/public/what-we-do/right-arrow-circle.svelte';

	const links = [
		{ title: 'What we do', href: '/what-we-do' },
		{ title: 'Who we are', href: '/who-we-are' },
		{ title: 'People', href: '/people' }
	];
	$: otherLinks = links.filter(({ href }) => !$page.url.pathname.includes(href));
</script>

<section class="other-links">
	<h2 class="description">If you want to learn more about Solutions for Our Climate</h2>
	<ul class="links">
		{#each otherLinks as { title, href }, i}
			<Link {href}>
				<li {...i === 0 && { class: 'first' }}>
					{title}
					<RightArrowCircle />
				</li>
			</Link>
		{/each}
	</ul>
</section>

<style>
	.other-links {
		padding: 1.5rem 2.25rem;
		max-width: var(--max-w-screen-4xl);
		margin-inline: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'description links';
		min-height: 34.375rem;
	}

	.description {
		grid-area: description;
		/* font-size: 2.25rem; */
		font-size: clamp(1.5rem, 3vw + 0.1rem, 2.25rem);
		letter-spacing: var(--tracking-tighter);
		line-height: 1.45;
		max-width: var(--max-w-ch-xs);
		margin-right: 1rem;
	}

	.links {
		grid-area: links;
		font-size: clamp(2rem, 5vw + 0.1rem, 3.75rem);
		letter-spacing: var(--tracking-tighter);
	}

	li {
		padding-block: 1rem;
		border-bottom: 0.0625rem var(--color-gray-light) solid;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li.first {
		padding-top: 0;
	}

	li :global(svg) {
		width: clamp(2.1875rem, 5vw, 4.0625rem);
		height: clamp(2.1875rem, 5vw, 4.0625rem);
	}

	@media (width<=48rem) {
		.other-links {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 2fr;
			grid-template-areas:
				'description'
				'links';
			min-height: 31.875rem;
			padding: 1.5rem;
			padding-top: 1.5625rem;
		}

		li {
			padding-block: 1.25rem;
		}
	}
</style>
