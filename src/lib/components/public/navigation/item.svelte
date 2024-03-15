<script lang="ts">
	import type { AnyMeltElement } from '@melt-ui/svelte';
	import { emptyMeltElement, melt } from '@melt-ui/svelte';

	export let element: AnyMeltElement | undefined = undefined;
	$: meltElement = element ?? emptyMeltElement;

	export let name: string;
	export let onClick: (e: Event) => void = () => {};
</script>

<div use:melt={$meltElement} class="item" on:click={onClick} role="menuitem" tabindex="0">
	<span>{name}</span>
</div>

<style>
	.item {
		background-color: var(--color-white);
		margin-bottom: 0.5rem;
		padding: 0.6875rem 0.8125rem;
		border-radius: 0.625rem;
		min-width: 8.75rem;
		font-size: var(--text-md);
		text-align: center;
		max-width: 10.8125rem;
		position: relative;
		z-index: 999;
		font-weight: var(--font-medium);
		cursor: pointer;
		/* tailwind css shadow-lg */
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.item:hover,
	.item:active,
	.item:focus {
		background-color: var(--color-primary);
		color: var(--color-white);
		opacity: 1;
	}

	.item span {
		opacity: 50%;
	}

	.item:hover span,
	.item:active span,
	.item:focus span {
		opacity: 100%;
	}
</style>
