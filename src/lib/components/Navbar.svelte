<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		currentPath?: string;
	}

	let { currentPath = '/side-notes-docs/' }: Props = $props();
	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-950/80">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Brand Logo -->
		<a href="{base}/side-notes-docs/" class="flex items-center gap-3 group transition-transform hover:scale-[1.02]" onclick={closeMenu}>
			<div class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 shadow-sm ring-1 ring-amber-500/20">
				<img src="{base}/icon.png" alt="SideNote Logo" class="h-8 w-8 object-contain" />
			</div>
			<div>
				<span class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">SideNote</span>
				<span class="ml-1.5 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">v0.0.1</span>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-300">
			<a href="{base}/#features" class="transition-colors hover:text-zinc-950 dark:hover:text-white">Features</a>
			<a href="{base}/#how-it-works" class="transition-colors hover:text-zinc-950 dark:hover:text-white">How It Works</a>
			<a href="{base}/#permissions" class="transition-colors hover:text-zinc-950 dark:hover:text-white">Security & Permissions</a>
			<a href="{base}/privacy" class="transition-colors hover:text-zinc-950 dark:hover:text-white {currentPath.endsWith('/privacy') ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}">Privacy Policy</a>
			<a href="{base}/terms" class="transition-colors hover:text-zinc-950 dark:hover:text-white {currentPath.endsWith('/terms') ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}">Terms of Service</a>
		</nav>

		<!-- Right Action Buttons -->
		<div class="hidden md:flex items-center gap-3">
			<a
				href="https://github.com"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
			>
				<svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
				</svg>
				<span>GitHub</span>
			</a>

			<a
				href="{base}/#install"
				class="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800 hover:shadow active:scale-95 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
				</svg>
				<span>Add to Chrome</span>
			</a>
		</div>

		<!-- Mobile menu toggle button -->
		<button
			type="button"
			class="md:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
			onclick={toggleMenu}
			aria-label="Toggle Navigation Menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				{#if isMobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile dropdown menu -->
	{#if isMobileMenuOpen}
		<div class="border-b border-zinc-200 bg-white/95 px-4 pt-2 pb-6 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
			<div class="flex flex-col space-y-3 text-sm font-medium">
				<a href="{base}/#features" class="px-2 py-1.5 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onclick={closeMenu}>Features</a>
				<a href="{base}/#how-it-works" class="px-2 py-1.5 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onclick={closeMenu}>How It Works</a>
				<a href="{base}/#permissions" class="px-2 py-1.5 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onclick={closeMenu}>Security & Permissions</a>
				<a href="{base}/privacy" class="px-2 py-1.5 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onclick={closeMenu}>Privacy Policy</a>
				<a href="{base}/terms" class="px-2 py-1.5 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" onclick={closeMenu}>Terms of Service</a>
				<div class="pt-2">
					<a
						href="{base}/#install"
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white shadow-sm dark:bg-amber-400 dark:text-zinc-950"
						onclick={closeMenu}
					>
						Add to Chrome
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
