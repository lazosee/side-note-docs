<script lang="ts">
	import {base} from "#lib";
	import KeepDemo from '#lib/components/KeepDemo.svelte';

	let activeFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		activeFaqIndex = activeFaqIndex === index ? null : index;
	}

	const faqs = [
		{
			q: 'Does SideNote send my notes, quotes, or voice recordings to any remote server?',
			a: 'No. SideNote is built on an uncompromising local-first architecture. All your notes, captured text, images, and voice recordings are stored exclusively inside your browser using Chrome’s native `chrome.storage.local`. We do not operate tracking databases, telemetry servers, or advertising networks.'
		},
		{
			q: 'Is SideNote free to use, and what are the Pro plans?',
			a: 'SideNote has a generous Free tier that is 100% functional for local note-taking, rich text editing, audio memos, and domain-based browsing. For power users who need Universal Note Exports (Markdown, HTML, CSV, JSON) and full data backup downloads, we offer Pro Monthly ($3.99/mo), Pro Annual ($29.99/yr — Best Value), and a Lifetime License ($49.99 one-time). All payments are securely processed by Polar (polar.sh).'
		},
		{
			q: 'Is Google Sign-In required to take notes?',
			a: 'No, sign-in is completely optional! You can use SideNote 100% anonymously and offline without ever signing in. Signing in with Google simply allows you to display your profile avatar and automatically link your Polar Pro or Lifetime subscription across devices without dealing with license keys.'
		},
		{
			q: 'How does SideNote associate notes with the websites I visit?',
			a: 'SideNote uses Chrome’s native tabs permission to inspect the URL and title of your active tab. Notes are partitioned by domain in your browser’s local storage (`chrome.storage.local`), so whenever you return to a page, your notes are waiting right where you left them.'
		},
		{
			q: 'How does voice memo recording work, and does it listen in the background?',
			a: 'SideNote only activates your microphone when you explicitly click the "Record Memo" button in the sidepanel or test it in Settings. Audio is processed via your browser’s standard Web Audio API (`navigator.mediaDevices.getUserMedia`) and stored as an audio data URL directly on your device. It never listens in the background, and audio is never uploaded to any external server.'
		},
		{
			q: 'How do I manage or cancel my Pro subscription?',
			a: 'You can manage your subscription at any time directly through the Polar Customer Portal. Click on your profile avatar in the extension header or open Settings and select "Manage Subscription" to view invoices, update payment methods, or cancel recurring billing with a single click.'
		},
		{
			q: 'What browser versions are required for SideNote?',
			a: 'SideNote requires Google Chrome version 114 or newer (or compatible Chromium browsers like Brave, Edge, or Opera) that support the native Chrome Side Panel API (`chrome.sidePanel`).'
		}
	];
</script>

<div class="relative overflow-hidden">
	<!-- Background subtle ambient glow -->
	<div class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 opacity-25 blur-3xl dark:opacity-20"
		style="background: radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 80%);">
	</div>

	<!-- ========================================================================= -->
	<!-- 1. HERO SECTION -->
	<!-- ========================================================================= -->
	<section class="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:px-8">
		<div class="text-center">
			<!-- Trust Badge -->
			<div class="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur-sm dark:border-amber-700/60 dark:bg-amber-950/60 dark:text-amber-300">
				<span class="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
				<span>Local-First Architecture • Google Identity • Zero Cloud Tracking</span>
			</div>

			<!-- Main Title -->
			<h1 class="mt-8 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
				Your thoughts and voice memos <br class="hidden sm:inline" />
				<span class="bg-gradient-to-r from-amber-500 via-amber-600 to-blue-600 bg-clip-text text-transparent">docked right in Chrome</span>.
			</h1>

			<!-- Subtitle -->
			<p class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300">
				Stop tab-switching to external note apps. SideNote docks seamlessly into Google Chrome's native side panel, formats notes with Google Keep-inspired pastel palettes, records voice memos with zero privacy compromises, and exports your research universally.
			</p>

			<!-- Action Buttons -->
			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<a
					href="#install"
					class="inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-zinc-800 hover:shadow-xl active:scale-95 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
					</svg>
					<span>Add to Chrome — It's Free</span>
				</a>

				<a
					href="#pricing"
					class="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/60 px-6 py-3.5 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100/80 hover:border-amber-400 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-950/70"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>View Pricing & Plans</span>
				</a>

				<a
					href="#demo"
					class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
				>
					<svg class="h-4 w-4 fill-current text-amber-500" viewBox="0 0 24 24">
						<path d="M12 2L9.5 7.5 4 10l5.5 2.5L12 18l2.5-5.5L20 10l-5.5-2.5L12 2z"/>
					</svg>
					<span>Try Interactive Demo</span>
				</a>

				<a
					href="{base}/privacy"
					class="inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
					<span>Exhaustive Privacy Policy</span>
				</a>
			</div>

			<!-- Core Value Chips -->
			<div class="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
				<div class="flex items-center gap-2">
					<svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					<span>100% Local-first storage</span>
				</div>
				<div class="flex items-center gap-2">
					<svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					<span>Optional Google Identity</span>
				</div>
				<div class="flex items-center gap-2">
					<svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					<span>Zero external trackers</span>
				</div>
				<div class="flex items-center gap-2">
					<svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
					<span>Universal Pro Exports</span>
				</div>
			</div>
		</div>

		<!-- Interactive Demo Showcase -->
		<div id="demo" class="mt-16 scroll-mt-24">
			<KeepDemo />
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 2. FEATURES GRID -->
	<!-- ========================================================================= -->
	<section id="features" class="border-t border-zinc-200/80 bg-zinc-50/50 py-24 scroll-mt-16 dark:border-zinc-800 dark:bg-zinc-900/30">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-3xl mx-auto">
				<h2 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Built For Power Users</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
					Engineered with Google's Material 3 Expressive System
				</p>
				<p class="mt-4 text-base text-zinc-600 dark:text-zinc-300">
					Every interaction in SideNote is thoughtfully crafted to preserve your reading focus while giving you the full power of a desktop knowledge manager.
				</p>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Feature 1: Chrome Side Panel -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h8m-8 4h8m6-4h.01M18 10h.01M18 6h.01" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Native Side Panel Integration</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Opens side-by-side with your browsing tabs. Automatically associates each note card with the webpage URL and hostname, so you can revisit research seamlessly.
					</p>
				</div>

				<!-- Feature 2: TipTap Rich Text & Code -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">TipTap Rich Text & Code</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Format your thoughts with headings, bold text, bullet lists, blockquotes, and clean monospace code blocks that preserve whitespace and scroll cleanly.
					</p>
				</div>

				<!-- Feature 3: Voice Memos -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Voice Memos with Waveforms</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Dictate thoughts in real time using the browser's Web Audio API. Audio clips are saved directly in your note cards with an interactive player chip and live visual meter.
					</p>
				</div>

				<!-- Feature 4: Google Keep Palettes -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Google Keep Tonal Palettes</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Color-code your cards using authentic Keep tones: Sand Yellow, Mint Green, Storm Blue, Coral Pink, and Dusk Purple. Pin important cards to stay on top.
					</p>
				</div>

				<!-- Feature 5: All-Notes Dashboard -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Masonry Dashboard & Search</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Access a panoramic multi-column Masonry board of every note across the web. Instant client-side search across titles, note bodies, and domains.
					</p>
				</div>

				<!-- Feature 6: Pro Universal Exports & Backups -->
				<div class="rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 dark:bg-teal-950/70 dark:text-teal-300">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Universal Exports & Backups</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						Seamlessly export research to Markdown (.md), clean HTML, CSV, or structured JSON. Download complete data backups anytime for 100% data portability.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 3. HOW IT WORKS -->
	<!-- ========================================================================= -->
	<section id="how-it-works" class="py-24 scroll-mt-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-2xl mx-auto">
				<h2 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Simple Workflow</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
					How SideNote Elevates Your Reading
				</p>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
				<!-- Step 1 -->
				<div class="relative rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-bold text-white">1</div>
					<h3 class="mt-4 text-base font-bold text-zinc-900 dark:text-white">Pin & Open Sidepanel</h3>
					<p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
						Click the SideNote icon in your browser toolbar or press your custom shortcut to open the persistent side panel beside any website.
					</p>
				</div>

				<!-- Step 2 -->
				<div class="relative rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 font-bold text-white">2</div>
					<h3 class="mt-4 text-base font-bold text-zinc-900 dark:text-white">Write & Format Notes</h3>
					<p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
						Capture ideas in rich text, apply Google Keep pastel tones, add code snippets, and attach screenshots or images directly in your side panel.
					</p>
				</div>

				<!-- Step 3 -->
				<div class="relative rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">3</div>
					<h3 class="mt-4 text-base font-bold text-zinc-900 dark:text-white">Record Audio Memos</h3>
					<p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
						Don't feel like typing? Click record to capture spoken voice notes attached directly to the active web page.
					</p>
				</div>

				<!-- Step 4 -->
				<div class="relative rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 font-bold text-white">4</div>
					<h3 class="mt-4 text-base font-bold text-zinc-900 dark:text-white">Search, Pin & Organize</h3>
					<p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
						View all notes in your multi-column dashboard, search across all hostnames, and keep your reading notes organized.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 4. PRICING & PLANS SECTION -->
	<!-- ========================================================================= -->
	<section id="pricing" class="border-t border-zinc-200/80 bg-zinc-50/50 py-24 scroll-mt-16 dark:border-zinc-800 dark:bg-zinc-900/30">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-3xl mx-auto">
				<span class="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
					Transparent, Predictable Pricing
				</span>
				<h2 class="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
					Simple Plans for Every Web Researcher
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
					SideNote is completely functional for free with private local-first storage. Upgrade to Pro or Lifetime when you need universal exports, full database backups, and priority power tools.
				</p>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
				<!-- Tier 1: Free Forever -->
				<div class="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-bold text-zinc-900 dark:text-white">Free</h3>
							<span class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">Starter</span>
						</div>
						<p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
							Essential local note-taking for daily reading and research.
						</p>
						<div class="mt-6 flex items-baseline gap-1">
							<span class="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">$0</span>
							<span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">forever</span>
						</div>
						<ul class="mt-8 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Native Chrome side panel dock</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Unlimited local notes & cards</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>TipTap rich text & code blocks</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Google Keep tonal color palettes</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Voice memos (10 clips, 60s max)</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Masonry dashboard & search</span>
							</li>
						</ul>
					</div>
					<div class="mt-8">
						<a
							href="#install"
							class="block w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3 text-center text-xs font-bold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
						>
							Use Free Forever
						</a>
					</div>
				</div>

				<!-- Tier 2: Pro Monthly -->
				<div class="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-bold text-zinc-900 dark:text-white">Pro Monthly</h3>
							<span class="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">Flexible</span>
						</div>
						<p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
							Month-to-month access to power export tools and backups.
						</p>
						<div class="mt-6 flex items-baseline gap-1">
							<span class="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">$3.99</span>
							<span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">/ month</span>
						</div>
						<ul class="mt-8 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
							<li class="flex items-center gap-2.5 font-medium text-zinc-900 dark:text-white">
								<svg class="h-4 w-4 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span>Everything in Free</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Universal Exports (MD, HTML, CSV, JSON)</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Full Data Backup & Restore downloads</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Extended voice memo recording</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Polar Customer Portal self-service</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Cancel anytime in 1-click</span>
							</li>
						</ul>
					</div>
					<div class="mt-8">
						<a
							href="#install"
							class="block w-full rounded-2xl bg-zinc-900 py-3 text-center text-xs font-bold text-white transition hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
						>
							Subscribe Monthly
						</a>
					</div>
				</div>

				<!-- Tier 3: Pro Annual (Best Value) -->
				<div class="relative flex flex-col justify-between rounded-3xl border-2 border-amber-500 bg-white p-7 shadow-lg dark:border-amber-400 dark:bg-zinc-900">
					<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
						Best Value • Save 37%
					</div>
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-bold text-zinc-900 dark:text-white">Pro Annual</h3>
							<span class="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">Annual</span>
						</div>
						<p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
							The smart choice for avid learners. ~$2.50/month equivalent.
						</p>
						<div class="mt-6 flex items-baseline gap-1">
							<span class="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">$29.99</span>
							<span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">/ year</span>
						</div>
						<ul class="mt-8 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
							<li class="flex items-center gap-2.5 font-medium text-zinc-900 dark:text-white">
								<svg class="h-4 w-4 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span>All Pro Monthly features</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Save 37% over monthly billing</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Instant Google Identity sync</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Continuous feature updates</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Priority GitHub issue consideration</span>
							</li>
						</ul>
					</div>
					<div class="mt-8">
						<a
							href="#install"
							class="block w-full rounded-2xl bg-amber-500 py-3 text-center text-xs font-bold text-white shadow-md transition hover:bg-amber-600 active:scale-95 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
						>
							Upgrade Annually
						</a>
					</div>
				</div>

				<!-- Tier 4: Lifetime License -->
				<div class="relative flex flex-col justify-between rounded-3xl border border-purple-200/90 bg-gradient-to-b from-purple-50/40 to-white p-7 shadow-sm transition hover:shadow-md dark:border-purple-800/80 dark:from-purple-950/20 dark:to-zinc-900">
					<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
						Pay Once • Keep Forever
					</div>
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-bold text-zinc-900 dark:text-white">Lifetime</h3>
							<span class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-900 dark:bg-purple-950 dark:text-purple-300">One-Time</span>
						</div>
						<p class="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
							Single payment. No subscriptions. Permanent Pro access.
						</p>
						<div class="mt-6 flex items-baseline gap-1">
							<span class="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">$49.99</span>
							<span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">one-time</span>
						</div>
						<ul class="mt-8 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
							<li class="flex items-center gap-2.5 font-medium text-zinc-900 dark:text-white">
								<svg class="h-4 w-4 shrink-0 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span>Lifetime Pro access</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>All future updates included</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Unlimited Universal Exports</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Full database backup downloads</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Direct founder & developer support</span>
							</li>
							<li class="flex items-center gap-2.5">
								<svg class="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								<span>Zero recurring fees forever</span>
							</li>
						</ul>
					</div>
					<div class="mt-8">
						<a
							href="#install"
							class="block w-full rounded-2xl bg-purple-700 py-3 text-center text-xs font-bold text-white transition hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500"
						>
							Get Lifetime License
						</a>
					</div>
				</div>
			</div>

			<!-- Trust & Billing Guarantee -->
			<div class="mt-14 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-400">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div class="flex items-start gap-3">
						<svg class="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
						<div>
							<strong class="text-zinc-900 dark:text-white block font-semibold">Secure Checkout via Polar</strong>
							<span>Encrypted payments processed by Polar (polar.sh). We never receive, process, or store credit card details.</span>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<svg class="h-5 w-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
						<div>
							<strong class="text-zinc-900 dark:text-white block font-semibold">Self-Service Customer Portal</strong>
							<span>Manage payment methods, download official invoices, or cancel subscriptions at any time with zero friction.</span>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<svg class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
						<div>
							<strong class="text-zinc-900 dark:text-white block font-semibold">Local-First Guarantee</strong>
							<span>Your notes and recordings will never be held hostage. Free features and offline notes remain yours forever.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 5. PERMISSIONS & STORE POLICY SECTION -->
	<!-- ========================================================================= -->
	<section id="permissions" class="border-t border-zinc-200/80 bg-zinc-50/70 py-24 scroll-mt-16 dark:border-zinc-800 dark:bg-zinc-900/40">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center max-w-3xl mx-auto">
				<span class="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
					Chrome Web Store Compliance
				</span>
				<h2 class="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
					Strict Minimal Permissions & Transparency
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
					SideNote strictly adheres to Google's <strong>Chrome Web Store Developer Program Policies</strong> and the <strong>Limited Use Policy</strong>. We request only the permissions mathematically required to deliver its single purpose: taking notes and recording voice memos.
				</p>
			</div>

			<div class="mt-12 overflow-hidden rounded-3xl border border-zinc-200/90 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
				<div class="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs">
					<!-- Perm 1: sidePanel -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">sidePanel</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Enables the extension to render note cards and audio tools in Chrome's native side panel docked beside the webpage, avoiding intrusive popup overlays or window switching.
						</div>
					</div>

					<!-- Perm 2: storage & unlimitedStorage -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">storage & unlimitedStorage</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Saves your notes, audio memos, and user settings strictly on your local computer via <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome.storage.local</code> without restrictive 10MB quotas.
						</div>
					</div>

					<!-- Perm 3: tabs -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">tabs</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Reads the active tab's URL and title to organize notes by domain and page, and detects restricted browser protocols (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome://</code>, <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">edge://</code>) where side panels are disabled.
						</div>
					</div>

					<!-- Perm 4: identity -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">identity</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Enables optional Google OAuth2 Sign-In in a focused window to link your Google profile and activate Polar Pro subscriptions seamlessly. Never accesses Gmail, Drive, or contacts.
						</div>
					</div>

					<!-- Perm 5: alarms -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">alarms</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Schedules lightweight background wake-up routines for periodic entitlement sync, avoiding persistent background memory consumption.
						</div>
					</div>

					<!-- Perm 6: microphone -->
					<div class="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12 sm:items-center">
						<div class="sm:col-span-4 font-mono font-bold text-zinc-900 dark:text-white flex items-center gap-2">
							<span class="rounded bg-zinc-100 px-2 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">Microphone (Web Audio)</span>
						</div>
						<div class="sm:col-span-8 text-zinc-600 dark:text-zinc-300 leading-relaxed">
							Explicitly requested only when you choose to record an audio note or test your mic in Settings. Audio is never recorded in the background and is stored only on your local drive.
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 text-center">
				<a href="{base}/privacy" class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
					<span>Read our complete, legally binding Privacy Policy</span>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
				</a>
			</div>
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 5. INSTALLATION INSTRUCTIONS -->
	<!-- ========================================================================= -->
	<section id="install" class="py-24 scroll-mt-16">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
			<div class="rounded-3xl border border-zinc-200/80 bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-blue-500/10 p-8 sm:p-14 dark:border-zinc-800 dark:from-amber-950/30 dark:to-zinc-900">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 shadow-md">
					<img src="{base}/icon.png" alt="SideNote Logo" class="h-10 w-10 object-contain" />
				</div>

				<h2 class="mt-6 text-3xl font-extrabold text-zinc-950 sm:text-4xl dark:text-white">
					Ready to Upgrade Your Web Reading?
				</h2>

				<p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
					Add SideNote to Google Chrome in seconds. 100% functional free tier, optional Google login, zero remote tracking.
				</p>

				<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
					<button
						type="button"
						class="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-zinc-800 hover:shadow-xl active:scale-95 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
						onclick={() => alert("SideNote can be installed directly from the Chrome Web Store or loaded unpacked from the repository.")}
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.741A12.002 12.002 0 0 0 12 0zm-8.868 6.002A11.96 11.96 0 0 0 0 12c0 5.761 4.07 10.57 9.479 11.734l3.952-6.845a5.454 5.454 0 0 1-5.748-2.617L3.132 6.002zm10.741 7.27a5.455 5.455 0 0 1-3.665 4.183l3.953 6.846C19.78 22.84 24 17.917 24 12c0-.528-.035-1.048-.1-1.56H12.923l.95 2.832zM12 8.727a3.273 3.273 0 1 0 0 6.546 3.273 3.273 0 0 0 0-6.546z"/>
						</svg>
						<span>Install from Chrome Web Store</span>
					</button>

					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-4 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
					>
						<span>Load Unpacked (Developer Mode)</span>
					</a>
				</div>

				<div class="mt-8 text-xs text-zinc-500 dark:text-zinc-400">
					Compatible with Google Chrome 114+, Brave, Edge, and all Chromium browsers supporting Side Panel API.
				</div>
			</div>
		</div>
	</section>

	<!-- ========================================================================= -->
	<!-- 6. FAQS -->
	<!-- ========================================================================= -->
	<section id="faq" class="border-t border-zinc-200/80 bg-zinc-50/50 py-24 scroll-mt-16 dark:border-zinc-800 dark:bg-zinc-900/30">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h2 class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Got Questions?</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
					Frequently Asked Questions
				</p>
			</div>

			<div class="mt-12 space-y-4">
				{#each faqs as faq, idx}
					<div class="rounded-2xl border border-zinc-200/80 bg-white transition shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
						<button
							type="button"
							class="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-zinc-900 dark:text-white"
							onclick={() => toggleFaq(idx)}
						>
							<span>{faq.q}</span>
							<svg class="h-4 w-4 transform transition-transform duration-200 {activeFaqIndex === idx ? 'rotate-180 text-amber-500' : 'text-zinc-400'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if activeFaqIndex === idx}
							<div class="border-t border-zinc-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800/80 dark:text-zinc-400">
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
