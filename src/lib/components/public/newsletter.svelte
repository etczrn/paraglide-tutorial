<script lang="ts">
	import newsletter from '$lib/assets/public/newsletter.png?enhanced';
</script>

<section class="background">
	<div class="newsletter">
		<h1 class="title">SFOC Newsletter</h1>
		<form class="form">
			<input class="email" type="email" placeholder="Email" />
			<button class="button">Subscribe</button>
		</form>
		<p class="description">
			Get updates on the SFOC latest insight, analysis, data and events delivered twice monthly.
		</p>
		<div class="image-container">
			<enhanced:img src={newsletter} alt="newsletter" class="image" />
		</div>
	</div>
</section>

<style>
	.background {
		background-color: var(--color-accent);
		height: 25.625rem;
		container-name: newsletter;
		container-type: inline-size;
	}

	@media (width <= 48rem) {
		.background {
			position: relative;
		}
	}

	.newsletter {
		max-width: var(--max-w-screen-3xl);
		height: 100%;
		margin-inline: auto;
		padding: 1.875rem 2.25rem;
		padding-bottom: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'title form'
			'title description'
			'image ....';
		color: var(--color-white);
		line-height: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.newsletter {
			grid-template-columns: 1fr;
			grid-template-areas:
				'title'
				'form'
				'description'
				'image';
			padding: 1.5rem;
			padding-bottom: 0;
			height: auto;
		}
	}

	.newsletter .title {
		grid-area: title;
		font-size: 2.25rem; /* 36px */
		margin-right: 1rem;
	}

	@media (width <= 48rem) {
		.newsletter .title {
			font-size: var(--text-2xl);
			margin-bottom: 1.25rem;
		}
	}

	.newsletter .form {
		grid-area: form;

		display: grid;
		grid-template-areas: 'email button';
		grid-template-columns: 6.5fr 3.5fr;
		gap: 0.75rem;
		height: 3.75rem;
	}

	@media (width <= 48rem) {
		.newsletter .form {
			margin-top: 0;
			height: 2.5rem;
			grid-template-columns: 1.5fr 1fr;
		}
	}

	.newsletter .form .email {
		grid-area: email;

		font-size: var(--text-2xl);
		max-width: 30rem;
		padding-inline: 1.25rem;
		border: var(--color-white) 1px solid;
		background: transparent;
		border-radius: 0.9375rem;
		letter-spacing: var(--tracking-tighter);
	}

	@media (width <= 48rem) {
		.newsletter .form .email {
			font-size: var(--text-md);
			padding-inline: 1rem;
			border-radius: 0.625rem;
		}
	}

	.newsletter .form .button {
		grid-area: button;

		background-color: #151515;
		letter-spacing: var(--tracking-tighter);
		border-radius: 0.9375rem;
		font-size: var(--text-xxl);
		font-weight: var(--font-medium);
		padding-inline: 1.25rem;
	}

	@media (width <= 48rem) {
		.newsletter .form .button {
			font-size: var(--text-md);
			padding-inline: 1rem;
			border-radius: 0.625rem;
		}
	}

	.newsletter .description {
		grid-area: description;

		font-size: var(--text-2xl);
		letter-spacing: var(--tracking-tighter);
		line-height: 1.3;
		max-width: var(--max-w-ch-sm);
	}

	@media (width <= 48rem) {
		.newsletter .description {
			font-size: var(--text-md);
			margin-top: 1.75rem;
		}
	}

	.newsletter .image-container {
		grid-area: image;
	}

	.newsletter .image {
		max-width: 34.875rem;
		width: 100%;
		aspect-ratio: 558 / 212;
		object-fit: cover;
		object-position: top;
		margin-left: auto;
		margin-right: 1.25rem;
	}

	@media (width <= 48rem) {
		.newsletter .image {
			position: absolute;
			bottom: 0;
			width: 80%;
			left: 50%;
			transform: translateX(-50%);
			margin: 0;
		}
	}

	@container newsletter (width <= 22.5rem) {
		.newsletter .form {
			grid-template-columns: 1fr;
			grid-template-areas: 'email' 'button';
			height: auto;
		}

		.newsletter .form .email,
		.newsletter .form .button {
			height: 2.5rem;
		}
	}
</style>
