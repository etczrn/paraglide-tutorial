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

		--text-xxs: 0.625rem; /* 10px */
		--text-xs: 0.75rem; /* 12px */
		--text-sm: 0.8125rem; /* 13px */
		--text-md: 0.9375rem; /* 15px */
		--text-lg: 1rem; /* 16px */
		--text-xl: 1.0625rem; /* 17px */
		--text-xxl: 1.25rem; /* 20px */
		--text-2xl: 1.5rem; /* 24px */
		--text-3xl: 2rem; /* 32px */
		--text-4xl: 2.625rem; /* 42px */
		--text-5xl: 5rem; /* 80px */

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

		--max-w-screen-2xl: 96rem; /* 1536px */
	}
</style>
