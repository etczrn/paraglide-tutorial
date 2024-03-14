<script lang="ts">
	export let color: 'white' | 'black' = 'black';
	export let ch: '30ch' | '38ch' | '45ch' = '45ch';
</script>

<div class="split-layout" style="--color:{color}; --max-width:{ch};">
	<h1>
		<slot name="title" />
	</h1>
	<div class="description">
		<slot name="paragraph" class="paragraph" />
	</div>
</div>

<style>
	.split-layout {
		max-width: var(--max-w-screen-2xl);
		margin-inline: auto;
		display: grid;
		grid-template-columns: minmax(22.5rem, 1fr) 1fr;
		grid-template-areas: 'title description';
		padding: 2.3125em 2.25rem;
		/* min-height: 36.875rem; */
		color: var(--color);
	}

	@media (width <= 48rem) {
		.split-layout {
			grid-template-columns: 1fr;
			grid-template-areas: 'title' 'description';
			padding: 1.5rem;
			max-width: var(--max-w-prose);
			grid-template-rows: min-content 1fr;
		}
	}

	.split-layout > h1 {
		grid-area: title;
		font-size: var(--text-7xl);
		letter-spacing: var(--tracking-tighter);
		margin-right: 2.25rem;
	}

	@media (width <= 48rem) {
		.split-layout > h1 {
			font-size: var(--text-6xl);
			margin-bottom: 2.5rem;
			margin-right: 0;
		}
	}

	.split-layout .description {
		margin-top: 1.25rem;
		letter-spacing: var(--tracking-tight);
		max-width: var(--max-width);
		font-size: var(--text-2xl);
		line-height: var(--leading-snug);
	}

	@media (width <= 48rem) {
		.split-layout .description {
			margin-top: 0;
			font-size: var(--text-xxl);
		}
	}
</style>
