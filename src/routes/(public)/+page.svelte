<script>
	import MainSection from '$lib/components/public/main-section.svelte';

	export let data;
	const { research, insights } = data;
</script>

<section class="hero"></section>

<MainSection
	title="Research"
	subtitle="New Research"
	link="/research"
	linkText="See all Research"
	articles={research}
/>
<MainSection
	title="Insights"
	subtitle="New Insights"
	link="/insights"
	linkText="See all insights"
	articles={insights}
/>

<section class="insights"></section>

<section class="who-we-are"></section>

<section class="what-we-do"></section>

<section class="our-people"></section>

<section class="newsletter"></section>
