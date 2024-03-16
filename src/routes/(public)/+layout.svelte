<script lang="ts">
	import Footer from '$lib/components/public/footer.svelte';
	import NavigationBar from '$lib/components/public/navigation/navigation-bar.svelte';
	import '@fontsource-variable/inter';
</script>

<NavigationBar />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}

	:global(:root) {
		--font-regular: 400;
		--font-medium: 500;
		--font-semibold: 600;
		--font-bold: 700;

		--text-xxs: 0.625rem; /* 10px */
		--text-xs: 0.75rem; /* 12px */
		--text-sm: 0.8125rem; /* 13px */
		--text-md: 0.9375rem; /* 15px */
		--text-lg: 1rem; /* 16px */
		--text-xl: 1.0625rem; /* 17px */
		--text-xxl: 1.25rem; /* 20px */
		--text-2xl: 1.5rem; /* 24px */
		--text-3xl: 1.75rem; /* 28px */
		--text-4xl: 2rem; /* 32px */
		--text-5xl: 2.625rem; /* 42px */
		--text-6xl: 3.125rem; /* 50px */
		--text-7xl: 5rem; /* 80px */
		--text-8xl: 6.25rem; /* 100px */
		--text-9xl: 7.5rem; /* 120px */
		--color-primary: #3c41be;
		--color-secondary: #f1f1f1;
		--color-accent: #0a39c3;
		--color-text-primary: #3c3b38;
		--color-black: #000000;
		--color-white: #ffffff;
		--color-gray-light: #f4f3f0;
		--color-gray-dark: #b7b7b5;

		--leading-snug: 1.3;
		--leading-normal: 1.5;

		--tracking-tighter: -0.05rem;
		--tracking-tight: -0.03rem;
		--max-w-prose: 65ch;
		--max-w-ch-sm: 45ch;
		--max-w-screen-md: 48rem; /* 768px */
		--max-w-screen-2xl: 96rem; /* 1536px */
		--max-w-screen-3xl: 120rem /* 1920px */;
		--max-w-screen-4xl: 160rem /* 2560px */;
	}
</style>
