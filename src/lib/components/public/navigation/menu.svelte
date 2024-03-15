<script lang="ts">
	import type { NavLink } from '$lib/models/public/navigation';
	import { melt, type MenubarBuilders } from '@melt-ui/svelte';
	import Link from '../link.svelte';
	import Item from './item.svelte';

	export let item: NavLink;
	const { name, href, children } = item;
	export let createMenu: MenubarBuilders['createMenu'];
	const {
		elements: { menu, item: menuItem, trigger }
	} = createMenu();

	export let variant: 'primary' | 'secondary' | 'accent' = 'primary';
	export let size: 'small' | 'medium' = 'small';

	const colors = {
		'--color-white': '#ffffff',
		'--color-accent': '#0a39c3',
		'--color-gray-light': '#f4f3f0',
		'--color-text-primary': '#3c3b38'
	};

	const paddings = {
		small: `--padding-inline: 0.5rem;`,
		medium: `--padding-inline: 1rem;`
	};

	const cssStyles = {
		primary: `--background-color:${colors['--color-white']}; --color:${colors['--color-text-primary']};`,
		secondary: `--background-color:${colors['--color-gray-light']}; --color:${colors['--color-text-primary']}`,
		accent: `--background-color:${colors['--color-accent']}; --color:${colors['--color-white']}`
	};
</script>

<div class="container" style={`${cssStyles[variant]}; ${paddings[size]}`}>
	{#if href}
		<Link {href}>{name}</Link>
	{:else}
		<button use:melt={$trigger}>{name}</button>
		{#if children}
			<div use:melt={$menu}>
				{#each children as { name, href }}
					<Link {href}>
						<Item {name} element={menuItem} />
					</Link>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.container {
		background-color: var(--background-color);
		/* 1.12500 */
		padding: 0.3125rem 0.5rem 0.375rem 0.5rem;
		padding-inline: var(--padding-inline);
		border-radius: 0.625rem;
		color: var(--color);
	}
</style>
