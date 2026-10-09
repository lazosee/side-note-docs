<script lang="ts">
	import './layout.css';
	import {base} from "#lib";
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{base}/icon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>SideNote — Clean Notes & Voice Memos in Chrome Side Panel</title>
	<meta
		name="description"
		content="Clean notes and voice memos right in your Chrome side panel. 100% private and local-first."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-amber-200 selection:text-amber-900 dark:bg-zinc-950 dark:text-zinc-100">
	<Navbar currentPath={page.url.pathname} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
