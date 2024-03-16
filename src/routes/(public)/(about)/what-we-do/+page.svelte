<script lang="ts">
	import background from '$lib/assets/public/what-we-do.png?enhanced';
	import LeftBottomArrow from '$lib/components/public/what-we-do/left-arrow-cirlce.svelte';
	export let data;
	const { jobs } = data;
</script>

<section class="nav-section">
	<enhanced:img src={background} alt="what we do background image" class="background" />
	<nav>
		<h1>What we do</h1>
		<ul>
			{#each jobs as { title }, i}
				<li>
					<h2><sup>{i + 1}</sup> {title}</h2>
					<!-- TODO: hover arrow animation -->
					<LeftBottomArrow />
				</li>
			{/each}
		</ul>
	</nav>
</section>

<style>
	.nav-section {
		position: relative;
		min-height: 64.1875rem;
	}

	.nav-section .background {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.8);
		z-index: -1;
	}

	.nav-section nav {
		max-width: var(--max-w-screen-2xl);
		margin-inline: auto;
		padding: 5.875rem 2.25rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.nav-section h1 {
		font-size: clamp(var(--text-6xl), 8vw, var(--text-9xl));
		color: var(--color-white);
		letter-spacing: var(--tracking-tighter);
	}

	.nav-section ul {
		margin-top: 3.125rem;
		font-size: clamp(var(--text-2xl), 2.5vw, 2.125rem);
		color: var(--color-white);
	}

	.nav-section li:first-child {
		border-top: 0.0625rem #ffffff50 solid;
	}

	.nav-section li {
		border-bottom: 0.0625rem #ffffff50 solid;
		padding-block: 0.75rem;
		display: flex;
		gap: 0.75rem;
		align-items: baseline;
	}

	.nav-section li h2 {
		display: inline-block;
	}

	@media (width <= 48rem) {
		.nav-section {
			min-height: 51.875rem;
		}

		.nav-section nav {
			grid-template-columns: 1fr;
			padding: 4.625rem 1.5rem;
			max-width: var(--max-w-prose);
		}

		.nav-section ul {
			margin-top: 4.375rem;
		}

		.nav-section li {
			align-items: normal;
		}

		.nav-section li:first-child {
			border-top: none;
		}
	}
</style>
