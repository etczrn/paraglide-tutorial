<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Link from '$lib/components/public/link.svelte';
	import Item from '$lib/components/public/navigation/item.svelte';
	import Logo from '$lib/components/public/navigation/logo.svelte';
	import Menu from '$lib/components/public/navigation/menu.svelte';
	import { i18n } from '$lib/i18n';
	import type { NavLink } from '$lib/models/public/navigation';
	import {
		availableLanguageTags,
		languageTag,
		setLanguageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import '@fontsource-variable/inter';
	import Icon from '@iconify/svelte';
	import { createMenubar, melt } from '@melt-ui/svelte';
	import { get } from 'svelte/store';

	const links: NavLink[] = [
		{
			name: 'ABOUT',
			children: [
				{ name: 'What we do', href: 'what-we-do' },
				{ name: 'Who we are', href: 'who-we-are' },
				{ name: 'People', href: 'people' },
				{ name: 'Annual Financial Reports', href: 'annual-financial-reports' }
			]
		},
		{
			name: 'INSIGHTS',
			children: [
				{ name: 'Research', href: 'research' },
				{ name: 'Insights', href: 'insights' }
			]
		},
		{
			name: 'LATEST',
			children: [
				{ name: 'Newsroom', href: 'newsroom' },
				{ name: 'Events', href: 'events' }
			]
		},
		{ name: 'JOIN US', href: 'join-us' },
		{ name: 'SFOC FEED', href: 'feed' }
	];

	const {
		elements: { menubar },
		builders: { createMenu }
	} = createMenubar();
	const {
		elements: { menu, item: menuItem, trigger }
	} = createMenu();

	const labels: Record<AvailableLanguageTag, string> = {
		en: 'ENG',
		ko: 'KOR'
	};
	const currentLang = languageTag();

	const handleLanguageChange = (value: AvailableLanguageTag) => {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, value);
		goto(localisedPath);
		setLanguageTag(value);
	};
</script>

<nav>
	<Link href="/" class="logo">
		<Logo />
	</Link>
	<!-- pc nav -->
	<ul class="links pc-menu" use:melt={$menubar}>
		{#each links as item}
			<li>
				<Menu {item} {createMenu} {...item.href === 'feed' && { variant: 'secondary' }} />
			</li>
		{/each}
		<button class="magnify">
			<Icon icon="mdi-light:magnify" />
		</button>
		<div class="divider pc-menu" />
		<button use:melt={$trigger}>{labels[currentLang]}</button>
		<div use:melt={$menu}>
			{#each availableLanguageTags as lang}
				<Item name={labels[lang]} element={menuItem} onClick={() => handleLanguageChange(lang)} />
			{/each}
		</div>
		<Menu item={{ name: 'Donate', href: 'donation' }} {createMenu} variant="accent" size="medium" />
	</ul>
	<!-- mobile nav -->
	<ul class="mobile-menu">
		<button class="magnify">
			<Icon icon="mdi-light:magnify" />
		</button>
		<button class="hamburger-menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				{...$$props}
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.1"
					d="M5 8h22M5 16h22M5 24h22"
				/>
			</svg>
		</button>
	</ul>
</nav>

<style>
	nav {
		padding: 1.3125rem 2.25rem;
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		/* TODO: 맨 상단에 닿으면 background-color white - 스크롤 다운 시 background-color: transparent, color: white (로고 포함) */
		background-color: var(--color-white);
		/* background-color: transparent; */
		z-index: 999;
	}

	nav .mobile-menu {
		display: none;
	}

	nav .pc-menu {
		display: flex;
		gap: clamp(0.75rem, 0.625rem + 1vw, 1.5rem);
		font-size: var(--text-xl);
		font-weight: var(--font-medium);
		align-items: center;
	}

	nav .pc-menu li {
		min-width: max-content;
	}

	nav .magnify,
	nav .hamburger-menu {
		width: 1.5rem;
		height: 1.5rem;
		aspect-ratio: 1;
	}

	nav .magnify :global(svg),
	nav .hamburger-menu :global(svg) {
		width: 100%;
		height: 100%;
	}

	nav .pc-menu .divider {
		border-right: 0.0625rem solid var(--color-black);
		height: 1.5rem;
	}

	@media (width <= 64rem) {
		nav {
			padding: 0.8125rem 1.5rem;
		}

		nav :global(.logo) {
			width: clamp(3.75rem, 15vw, 6.25rem);
		}

		nav .pc-menu {
			display: none;
		}

		nav .mobile-menu {
			display: flex;
			gap: 0.75rem;
			align-items: center;
		}
	}
</style>
