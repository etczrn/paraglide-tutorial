<script lang="ts">
	import background from '$lib/assets/public/what-we-do.png?enhanced';
	import MainLink from '$lib/components/public/main-link.svelte';
	import Newsletter from '$lib/components/public/newsletter.svelte';
	import LeftBottomArrow from '$lib/components/public/what-we-do/left-arrow-cirlce.svelte';
	import OtherLinks from '$lib/components/public/what-we-do/other-links.svelte';

	export let data;
	const { jobs } = data;
</script>

<!-- TODO: add hash link -->
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
<!-- TODO: add intersection observer -->
<section class="intro-section">
	<aside>
		<ul>
			{#each jobs as { title }, i}
				<li>
					<h2><sup>{i + 1}</sup> {title}</h2>
				</li>
			{/each}
		</ul>
	</aside>
	<div class="main">
		{#each jobs as { id, title, body, thumbnail }}
			<article class="card">
				<h1 class="title">{title}</h1>
				<div class="body">
					<p class="introduction">Introduction</p>
					<p>{body}</p>
				</div>
				<div class="link">
					<MainLink href={`${id}`} size="small" arrowSize={24}><span>View More</span></MainLink>
				</div>
				<div class="image">
					<img src={thumbnail} alt={title} />
				</div>
			</article>
		{/each}
	</div>
</section>
<Newsletter />
<OtherLinks />

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
		max-width: var(--max-w-screen-4xl);
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

	.intro-section {
		padding: 2.25rem;
		margin-inline: auto;
		max-width: var(--max-w-screen-3xl);
		display: grid;
		grid-template-columns: minmax(max-content, 2.5fr) 7.5fr;
		grid-template-areas: 'table-of-contents main';
		gap: 1rem;
	}

	.intro-section aside {
		grid-area: table-of-contents;
		font-size: var(--text-xxl);
		font-size: clamp(var(--text-lg), calc(1.4vw + 0.1rem), var(--text-xxl));
		letter-spacing: var(--tracking-tighter);
		/* not selected */
		color: var(--color-gray-dark);
		font-weight: var(--font-regular);
		/* selected */
		color: var(--color-black);
		font-weight: var(--font-semibold);
	}

	.intro-section aside ul {
		display: flex;
		flex-direction: column;
		gap: 0.9375rem;
		position: sticky;
		top: 5.625rem;
	}

	.intro-section .main {
		grid-area: main;
		container-name: main-container;
		container-type: inline-size;
	}

	.card {
		display: grid;
		grid-template-areas:
			'title image'
			'body image'
			'link image';
		gap: 1.5rem;
		/* grid-template-columns: 1fr 1fr; */
		grid-template-columns: 1fr minmax(16rem, 1fr);
		padding-block: 8.75rem;
		border-bottom: 0.0625rem var(--color-gray-light) solid;
	}

	.card:first-child {
		padding-top: 0;
	}

	.card .title {
		grid-area: title;
		font-size: var(--text-6xl);
		letter-spacing: var(--tracking-tighter);
	}

	.card .body {
		grid-area: body;
		/* max-width: 47ch; */
		max-width: var(--max-w-ch-sm);
		font-size: 1.125rem;
		line-height: 1.5;
		letter-spacing: var(--tracking-tighter);
		color: var(--color-text-primary);
	}

	.card .introduction {
		font-size: var(--text-2xl);
		letter-spacing: var(--tracking-tighter);
		font-weight: var(--font-medium);
		margin-bottom: 0.875rem;
		color: var(--color-black);
	}

	.card .link {
		grid-area: link;
		align-self: self-end;

		letter-spacing: var(--tracking-tighter);
		font-weight: var(--font-medium);
		color: var(--color-black);
	}

	.card .link span {
		font-size: var(--text-xxl);
	}

	.card .image {
		grid-area: image;
		width: 100%;
		aspect-ratio: 1;
	}

	.card .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.9375rem;
	}

	@container main-container (max-width: 37.5rem) {
		.card {
			grid-template-columns: 1fr;
			grid-template-areas:
				'title'
				'image'
				'body'
				'link';
			padding-block: clamp(5rem, 10vw, 8.75rem);
		}

		.card .title {
			font-size: clamp(var(--text-3xl), calc(6vw + 0.1rem), var(--text-6xl));
		}

		.card .body {
			max-width: 100%;
			font-size: var(--text-xl);
		}

		.card .introduction {
			font-size: clamp(var(--text-xxl), 2.5vw, var(--text-2xl));
		}
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

		.intro-section {
			padding: 1.5rem;
			display: block;
		}

		.intro-section aside {
			display: none;
		}

		.intro-section .main {
			max-width: var(--max-w-prose);
			margin-inline: auto;
		}
	}
</style>
