<script lang="ts">
	interface Palette {
		id: string;
		label: string;
		bg: string;
		border: string;
		text: string;
		pillText: string;
	}

	const PALETTES: Palette[] = [
		{ id: 'sand', label: 'Sand Yellow', bg: '#fef08a', border: '#ca8a04', text: '#713f12', pillText: '#854d0e' },
		{ id: 'mint', label: 'Mint Green', bg: '#a2f5ab', border: '#146c2e', text: '#052e16', pillText: '#166534' },
		{ id: 'storm', label: 'Storm Blue', bg: '#d3e3fd', border: '#0b57d0', text: '#1e3a8a', pillText: '#1e40af' },
		{ id: 'coral', label: 'Coral Pink', bg: '#f9dedc', border: '#b3261e', text: '#881337', pillText: '#991b1b' },
		{ id: 'dusk', label: 'Dusk Purple', bg: '#ede7f6', border: '#6750a4', text: '#3b0764', pillText: '#581c87' }
	];

	let selectedPalette = $state<Palette>(PALETTES[0]);
	let noteTitle = $state('Deep Learning & Transformer Models');
	let noteContent = $state('Key takeaway: Multi-head attention mechanisms route contextual embeddings dynamically across token sequences without recurrent bottlenecks.');
	let isPinned = $state(true);
	let isPlayingAudio = $state(false);
	let audioSeconds = $state(18);

	function togglePin() {
		isPinned = !isPinned;
	}

	function toggleAudio() {
		isPlayingAudio = !isPlayingAudio;
	}
</script>

<div class="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:p-8">
	<!-- Top Controls Toolbar -->
	<div class="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/70 pb-5 dark:border-zinc-800">
		<div class="flex items-center gap-2">
			<span class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Pastel Swatch:</span>
			<div class="flex items-center gap-2">
				{#each PALETTES as palette (palette.id)}
					<button
						type="button"
						class="h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 focus:outline-none {selectedPalette.id === palette.id ? 'ring-2 ring-offset-2 ring-zinc-900 scale-105 dark:ring-white dark:ring-offset-zinc-900' : 'opacity-85'}"
						style="background-color: {palette.bg}; border-color: {palette.border};"
						onclick={() => (selectedPalette = palette)}
						aria-label={palette.label}
						title={palette.label}
					></button>
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-3">
			<button
				type="button"
				class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition {isPinned ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'}"
				onclick={togglePin}
			>
				<svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
					<path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
				</svg>
				<span>{isPinned ? 'Pinned' : 'Pin Note'}</span>
			</button>

			<span class="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
				Live Interactive Preview
			</span>
		</div>
	</div>

	<!-- Dual Display: Web Page Simulation + Docked Sidepanel -->
	<div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
		<!-- Left: Web Page Simulation -->
		<div class="lg:col-span-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
			<div class="flex items-center justify-between border-b border-zinc-100 pb-3 text-xs text-zinc-400 dark:border-zinc-800/80">
				<div class="flex items-center gap-2">
					<div class="flex gap-1.5">
						<span class="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
					</div>
					<span class="ml-2 font-mono text-[11px] text-zinc-500">https://arxiv.org/abs/attention-all-you-need</span>
				</div>
				<span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
					<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
					Side Panel Connected
				</span>
			</div>

			<div class="mt-4 space-y-3.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
				<h3 class="text-base font-bold text-zinc-900 dark:text-white leading-tight">
					Attention Is All You Need
				</h3>
				<p class="text-xs text-zinc-500 dark:text-zinc-400">
					Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones...
				</p>
				<p class="text-xs leading-relaxed">
					The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder.
				</p>
				<div class="rounded-xl border border-dashed border-zinc-200 p-3 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40 text-xs">
					<span class="font-mono text-[11px] text-zinc-400 block mb-1">Architecture Summary:</span>
					We show that such architectures can connect encoders and decoders entirely through multi-head self-attention mechanisms, dispensing with recurrence and convolutions entirely.
				</div>
				<p class="text-xs text-zinc-500 dark:text-zinc-400">
					Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.
				</p>
			</div>
		</div>

		<!-- Right: Rendered SideNote Card inside Sidepanel -->
		<div class="lg:col-span-6 flex flex-col items-center">
			<div
				class="w-full max-w-md rounded-2xl border-2 p-5 shadow-md transition-all duration-300"
				style="background-color: {selectedPalette.bg}; border-color: {selectedPalette.border}; color: {selectedPalette.text};"
			>
				<!-- Card Header -->
				<div class="flex items-start justify-between gap-2">
					<input
						type="text"
						bind:value={noteTitle}
						class="w-full bg-transparent text-base font-bold tracking-tight outline-none border-b border-transparent focus:border-current/30 transition-colors"
						placeholder="Title..."
					/>
					<button
						type="button"
						class="flex-shrink-0 rounded-full p-1 opacity-70 hover:opacity-100 transition"
						onclick={togglePin}
						title="Toggle pin"
					>
						<svg class="h-4 w-4 fill-current {isPinned ? 'text-amber-800' : 'text-zinc-600'}" viewBox="0 0 24 24">
							<path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2z" />
						</svg>
					</button>
				</div>

				<!-- Hostname Chip -->
				<div class="mt-1 flex items-center gap-1.5 text-[11px] opacity-80">
					<svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
					</svg>
					<span>arxiv.org</span>
					<span>•</span>
					<span>Just now</span>
				</div>

				<!-- User Note Body -->
				<textarea
					bind:value={noteContent}
					rows="3"
					class="mt-3.5 w-full resize-none bg-transparent text-xs leading-relaxed outline-none border-b border-transparent focus:border-current/30 transition-colors"
					placeholder="Add note details..."
				></textarea>

				<!-- Code Snippet Block -->
				<div class="mt-2.5 rounded-lg bg-black/10 p-2 font-mono text-[11px] leading-tight overflow-x-auto">
					<code>Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V</code>
				</div>

				<!-- Attached Voice Memo Chip -->
				<div class="mt-4 flex items-center justify-between rounded-xl bg-white/60 p-2 text-xs backdrop-blur-sm">
					<div class="flex items-center gap-2">
						<button
							type="button"
							class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:scale-105 active:scale-95"
							onclick={toggleAudio}
							title={isPlayingAudio ? 'Pause' : 'Play voice memo'}
						>
							{#if isPlayingAudio}
								<svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
							{:else}
								<svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
							{/if}
						</button>
						<div>
							<div class="font-medium">Voice Memo (0:{audioSeconds})</div>
							<div class="text-[10px] opacity-70">Recorded via Web Audio</div>
						</div>
					</div>

					<!-- Visual Waveform -->
					<div class="flex items-center gap-0.5 px-2">
						<span class="w-1 bg-current rounded-full {isPlayingAudio ? 'animate-wave-1' : 'h-2'}"></span>
						<span class="w-1 bg-current rounded-full {isPlayingAudio ? 'animate-wave-2' : 'h-4'}"></span>
						<span class="w-1 bg-current rounded-full {isPlayingAudio ? 'animate-wave-3' : 'h-6'}"></span>
						<span class="w-1 bg-current rounded-full {isPlayingAudio ? 'animate-wave-4' : 'h-3'}"></span>
						<span class="w-1 bg-current rounded-full {isPlayingAudio ? 'animate-wave-5' : 'h-5'}"></span>
					</div>
				</div>

				<!-- Card Footer Actions -->
				<div class="mt-4 flex items-center justify-between border-t border-black/10 pt-2 text-[11px] opacity-75">
					<span>Saved to chrome.storage.local</span>
					<div class="flex items-center gap-2">
						<button type="button" class="hover:underline">Copy</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
