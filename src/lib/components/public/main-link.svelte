<script lang="ts">
	import Icon from '@iconify/svelte';
	import Link from './link.svelte';

	export let href: string;
</script>

<div class="link">
	<Link {href}>
		<slot />
		<Icon
			icon="system-uicons:arrow-top-right"
			style="display:inline-block"
			width={22}
			height={22}
		/>
	</Link>
</div>

<style>
	.link {
		grid-area: link;
		font-size: var(--text-xl);
		letter-spacing: var(--tracking-tighter);
		padding: 0.375rem 0.5rem 0.375rem 0.75rem;
		background-color: var(--color-gray-light);
		max-width: fit-content;
		border-radius: 0.625em;
		cursor: pointer;
		margin-bottom: 3.125rem;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>
