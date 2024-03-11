<script lang="ts">
	import '@fontsource-variable/inter';
</script>

<!-- 
  * TODO: 물어보기
  * TODO - 1. what-we-do 상세 내용은 다이나믹?
  [navigation bar]
  - about
    - what-we-do
      - [slug]
    - who-we-are
    - people
      - [slug]
    - annual-financial-reports
  - insights
    - research
      - [slug]
    - insights
      - [slug]
  - latest
    - newsroom
      - [slug]
    - events
      - [slug]
  - join-us
  - feed
    - [slug]
  - donate

-->
<main>
	<slot />
</main>

<!-- footer -->

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}

	:global(:root) {
		--font-regular: 400;
		--font-medium: 500;
		--font-bold: 700;

		--color-primary: #3c41be;
		--color-secondary: #f1f1f1;
		--color-accent: #0a39c3;
		--color-text-primary: #3c3b38;
		--color-black: #000000;
		--color-white: #ffffff;
		--color-gray-light: #f4f3f0;

		--leading-snug: 1.3;
		--leading-normal: 1.5;

		--tracking-tighter: -0.05em;

		--max-w-screen-2xl: 96rem;
	}
</style>
