<script lang="ts">
	import type { NavLink } from '$lib/models/public/navigation';
	import { melt, type MenubarBuilders } from '@melt-ui/svelte';
	import Link from '../link.svelte';

	export let item: NavLink;
	const { name, href, children } = item;
	export let createMenu: MenubarBuilders['createMenu'];
	const {
		elements: { menu, item: menuItem, trigger }
	} = createMenu();
</script>

{#if href}
	<Link {href}>{name}</Link>
{:else}
	<button use:melt={$trigger}>{name}</button>
	{#if children}
		<div use:melt={$menu}>
			{#each children as { name, href }}
				<Link {href}>
					<div use:melt={$menuItem} class="item">
						<span>{name}</span>
					</div>
				</Link>
			{/each}
		</div>
	{/if}
{/if}

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
