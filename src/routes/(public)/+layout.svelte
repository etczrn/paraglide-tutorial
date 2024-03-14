<script lang="ts">
	import '@fontsource-variable/inter';
	import Icon from '@iconify/svelte';
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
<footer>
	<section class="grid">
		<h1 class="title">Solutions for Our Climate</h1>
		<div class="social">
			<Icon icon="fa6-brands:linkedin" class="icon" />
			<Icon icon="fa6-brands:square-x-twitter" class="icon" />
			<Icon icon="fa6-brands:square-youtube" class="icon" />
		</div>
		<div class="basic">
			<h2>Managing Director</h2>
			<p>Joojin Kim</p>
			<h2>Registration No.</h2>
			<p>561-82900137</p>
			<h2>Address</h2>
			<p>
				505 5th Fl., HEYGROUND, 5 Ttuksseom-ro 1na-gil, Sungdong-gu, Seoul, Republic of Korea
				(04779)
			</p>
		</div>
		<hr class="line" />
		<div class="contact">
			<h2>TEL</h2>
			<p>02-6013-0137</p>
			<h2>E-MAIL</h2>
			<p>solutions@forourclimate.org</p>
		</div>
		<hr class="line-2" />
		<div class="policy">
			<p>Privacy Policy</p>
			<p>Ministry of Evnironment</p>
			<p>National Tax Service</p>
		</div>
		<p class="copyright">Copyright © SFOC. All Rights Reserved.</p>
	</section>
</footer>
<main>
	<slot />
</main>

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
		--text-3xl: 1.75rem; /* 28px */
		--text-4xl: 2rem; /* 32px */
		--text-5xl: 2.625rem; /* 42px */
		--text-6xl: 3.125rem; /* 50px */
		--text-7xl: 5rem; /* 80px */
		--color-primary: #3c41be;
		--color-secondary: #f1f1f1;
		--color-accent: #0a39c3;
		--color-text-primary: #3c3b38;
		--color-black: #000000;
		--color-white: #ffffff;
		--color-gray-light: #f4f3f0;

		--leading-snug: 1.3;
		--leading-normal: 1.5;

		--tracking-tighter: -0.05rem;
		--tracking-tight: -0.03rem;
		--max-w-prose: 65ch;
		--max-w-ch-sm: 45ch;
		--max-w-screen-md: 48rem; /* 768px */
		--max-w-screen-2xl: 96rem; /* 1536px */
	}

	footer {
		background-color: var(--color-gray-light);

		font-size: var(--text-md);
		font-weight: var(--font-medium);
		color: var(--color-text-primary);
		letter-spacing: var(--tracking-tighter);
	}

	footer .grid {
		max-width: var(--max-w-screen-2xl);
		width: 100%;
		margin-inline: auto;
		padding: 1.875rem 2.25rem;

		display: grid;
		grid-template-areas:
			'title basic   basic   social'
			'..... basic   basic   .....'
			'..... line    line    line'
			'..... contact contact .....'
			'..... line-2  line-2  line-2'
			'..... policy  policy  copyright';
		column-gap: 1rem;
	}

	footer .title {
		grid-area: title;
		font-size: var(--text-2xl);
	}

	footer .social {
		grid-area: social;
		justify-self: end;
		display: flex;
		gap: 0.75rem;
	}

	footer .social :global(svg) {
		width: 2.25rem;
		height: 2.25rem;
	}

	footer .basic {
		grid-area: basic;
	}

	footer .line,
	footer .line-2 {
		color: var(--color-text-primary);
		opacity: 30%;
		border-bottom: 1px solid var(--color-text-primary);
	}

	footer .line {
		grid-area: line;
		margin-block: 1.5rem;
	}

	footer .contact {
		grid-area: contact;
	}

	footer .line-2 {
		grid-area: line-2;
		margin-top: 1.75rem;
		margin-bottom: 1.5rem;
	}

	footer .basic,
	footer .contact {
		display: grid;
		grid-template-columns: minmax(8.75rem, 1fr) 2fr;
		gap: 0.9375rem;
	}

	footer .basic p {
		max-width: 50ch;
	}

	footer .policy {
		grid-area: policy;

		display: flex;
		flex-wrap: wrap;
	}

	footer .policy p::after {
		content: '';
		height: 1.25rem;
		background-color: var(--color-text-primary);
		margin-inline: 1.5rem;
		border-right: 1px solid var(--color-text-primary);
	}

	footer .policy p:last-child::after {
		border-right: none;
	}

	footer .copyright {
		grid-area: copyright;
		justify-self: end;
	}
</style>
