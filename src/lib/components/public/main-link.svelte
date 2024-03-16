<script lang="ts">
	import Icon from '@iconify/svelte';
	import Link from './link.svelte';

	export let href: string;
	export let arrowSize: 22 | 24 = 22;
	export let size: 'small' | 'medium' = 'medium';

	const paddings = {
		small: `--padding: 0.3125rem 0.3125rem 0.25rem 0.625rem`,
		medium: `--padding: 0.375rem 0.5rem 0.375rem 0.75rem`
	};
</script>

<div class="link" style="{paddings[size]};">
	<Link {href}>
		<slot />
	</Link>
	<Icon icon="system-uicons:arrow-top-right" width={arrowSize} height={arrowSize} />
</div>

<style>
	.link {
		grid-area: link;
		font-size: var(--text-xl);
		letter-spacing: var(--tracking-tighter);
		padding: var(--padding);
		background-color: var(--color-gray-light);
		max-width: fit-content;
		border-radius: 0.625rem;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--color-text-primary);
	}

	@media (max-width: 48rem) {
		.link {
			font-size: var(--text-md);
		}
	}
</style>
