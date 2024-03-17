<script lang="ts">
	import { inview, type ObserverEventDetails, type Options } from 'svelte-inview';

	let isInView: boolean = false;
	const options: Options = {
		rootMargin: '-35%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div use:inview={options} on:inview_change={handleChange} class="inview">
	{#if isInView}
		<div class:active={isInView}>
			<slot />
		</div>
	{/if}
</div>

<style>
	div:not(.inview) {
		opacity: 0;
	}

	.active {
		animation: fadeInY 0.5s ease-out both;
		animation-delay: 0s;
		opacity: 1;
	}

	@keyframes fadeInY {
		0% {
			opacity: 0;
			transform: translateY(10vw);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
