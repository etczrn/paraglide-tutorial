import { i18n } from '$lib/i18n';
/*
https://www.reddit.com/r/sveltejs/comments/193wvz8/sveltekit_230_is_out_with_a_new_hook/
SvelteKit 2.3.0 adds a new reroute hook that allows you to change which route get's rendered in response to a request.
Let's say you have a src/about/+page.svelte page, and you want /en/about, /de/ueber-uns, /fr/a-propos to all render that page. With reroute you can now easily do that.
*/
export const reroute = i18n.reroute();
