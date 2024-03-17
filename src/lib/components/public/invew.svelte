<script lang="ts">
	import { inview, type ObserverEventDetails, type Options } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	let isInView: boolean = false;
	const options: Options = {
		rootMargin: '-35%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div class:animate={isInView} in:fly={{ y: '10vw' }}>
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
