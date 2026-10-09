<script lang="ts">
	import { base } from '#lib';
</script>

<footer class="mt-auto border-t border-zinc-200/80 bg-zinc-50/70 text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:text-zinc-400">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Col 1: Brand & Summary -->
			<div class="md:col-span-1">
				<div class="flex items-center gap-2.5">
					<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 ring-1 ring-amber-500/30">
						<img src="{base}/icon.png" alt="SideNote Logo" class="h-6 w-6 object-contain" />
					</div>
					<span class="text-base font-bold text-zinc-900 dark:text-white">SideNote</span>
				</div>
				<p class="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
					Clean notes and voice memos right in your Chrome side panel. 100% free, private, and local-first.
				</p>
				<div class="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
					<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
					Chrome MV3 Compliant
				</div>
			</div>

			<!-- Col 2: Navigation -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">Product</h3>
				<ul class="mt-3 space-y-2 text-xs">
					<li><a href="{base}/#features" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Key Features</a></li>
					<li><a href="{base}/#how-it-works" class="hover:text-zinc-900 dark:hover:text-white transition-colors">How It Works</a></li>
					<li><a href="{base}/#demo" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Interactive Demo</a></li>
					<li><a href="{base}/#permissions" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Permissions Breakdown</a></li>
					<li><a href="{base}/#faq" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Frequently Asked Questions</a></li>
				</ul>
			</div>

			<!-- Col 3: Legal & Store Compliance -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">Legal & Privacy</h3>
				<ul class="mt-3 space-y-2 text-xs">
					<li><a href="{base}/privacy" class="hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">Privacy Policy (Exhaustive)</a></li>
					<li><a href="{base}/terms" class="hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">Terms of Service</a></li>
					<li><a href="{base}/privacy#chrome-webstore" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Chrome Web Store Compliance</a></li>
					<li><a href="{base}/privacy#data-collection" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Data Collection & Storage</a></li>
					<li><a href="{base}/privacy#user-rights" class="hover:text-zinc-900 dark:hover:text-white transition-colors">User Rights & Data Erasure</a></li>
				</ul>
			</div>

			<!-- Col 4: Open Source & Contact -->
			<div>
				<h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">Community & Support</h3>
				<ul class="mt-3 space-y-2 text-xs">
					<li>
						<a href="https://github.com" target="_blank" rel="noreferrer" class="hover:text-zinc-900 dark:hover:text-white transition-colors">
							GitHub Repository
						</a>
					</li>
					<li>
						<a href="mailto:support@sidenote.app" class="hover:text-zinc-900 dark:hover:text-white transition-colors">
							support@sidenote.app
						</a>
					</li>
					<li>
						<span class="text-zinc-400 dark:text-zinc-500">Google Chrome Extension v0.0.1</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Disclaimer & Bottom Bar -->
		<div class="mt-10 border-t border-zinc-200/80 pt-6 text-center text-xs text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-400">
			<p class="max-w-3xl mx-auto leading-relaxed">
				<strong>Chrome Web Store Disclaimer:</strong> Google Chrome is a trademark of Google LLC. SideNote is an independent software extension and is not affiliated with, sponsored by, or endorsed by Google LLC.
			</p>
			<p class="mt-3">
				&copy; {new Date().getFullYear()} SideNote Extension. All rights reserved. Built with Material 3 Expressive guidelines.
			</p>
		</div>
	</div>
</footer>
