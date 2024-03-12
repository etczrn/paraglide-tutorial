<script lang="ts">
	import { languageTag } from '$paraglide/runtime';

	export let href: string;
	export { className as class };

	let className: HTMLAnchorElement['className'] = '';
	const hreflang = languageTag();
</script>

<a {href} {hreflang} class={className}>
	<slot />
</a>
