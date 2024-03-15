<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

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

<style>
	footer {
		background-color: var(--color-gray-light);

		font-size: var(--text-md);
		font-weight: var(--font-medium);
		color: var(--color-text-primary);
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		footer {
			font-size: var(--text-xxs);
		}
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

	@media (width <= 48rem) {
		footer .grid {
			grid-template-areas:
				'title     social'
				'basic     basic'
				'line      line'
				'contact   contact'
				'line-2    line-2'
				'policy    policy'
				'copyright copyright';
			column-gap: unset;
			padding: 1.625rem 1.5rem 1.875rem 1.5rem;
		}
	}

	footer .title {
		grid-area: title;
		font-size: var(--text-2xl);
	}

	@media (width <= 48rem) {
		footer .title {
			font-size: var(--text-md);
		}
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

	@media (width <= 48rem) {
		footer .social :global(svg) {
			width: 1.875rem;
			height: 1.875rem;
		}
	}

	footer .basic {
		grid-area: basic;
	}

	@media (width <= 48rem) {
		footer .basic {
			margin-top: 4.625rem;
		}
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

	@media (width <= 48rem) {
		footer .line,
		footer .line-2 {
			margin-block: 1.25rem;
		}
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

	@media (width <= 48rem) {
		footer .basic,
		footer .contact {
			grid-template-columns: minmax(4rem, 1fr) 2fr;
			gap: 0.625rem;
		}
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

	@media (width <= 48rem) {
		footer .policy p::after {
			margin-inline: 0.75rem;
		}
	}

	footer .policy p:last-child::after {
		border-right: none;
	}

	footer .copyright {
		grid-area: copyright;
		justify-self: end;
	}

	@media (width <= 48rem) {
		footer .copyright {
			justify-self: start;
			margin-top: 0.625rem;
		}
	}
</style>
