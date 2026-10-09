<script lang="ts">
	import { base } from '#lib';
</script>

<svelte:head>
	<title>Terms of Service — SideNote Chrome Extension</title>
	<meta name="description" content="Exhaustive Terms of Service for SideNote Chrome Extension. Details licensing, user content ownership, local storage responsibilities, and billing terms." />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="border-b border-zinc-200 pb-8 dark:border-zinc-800">
		<div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
			Legal Agreement
		</div>
		<h1 class="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
			Terms of Service for SideNote
		</h1>
		<div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
			<span><strong>Effective Date:</strong> October 8, 2026</span>
			<span>•</span>
			<span><strong>Document Version:</strong> 1.0.0</span>
			<span>•</span>
			<span><strong>Applies to:</strong> SideNote Chrome Extension & Documentation Website</span>
		</div>
	</div>

	<!-- Content Body -->
	<div class="mt-10 space-y-12 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">

		<!-- 1. Introduction & Acceptance -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">1. Acceptance of Terms</h2>
			<p class="mt-3">
				These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and the operators and contributors of <strong>SideNote</strong> ("SideNote", "we", "us", or "our"). By downloading, installing, accessing, or using the SideNote Chrome Extension or visiting this website, you confirm that you have read, understood, and agreed to be bound by these Terms and our accompanying <a href="{base}/privacy" class="text-blue-600 underline dark:text-blue-400">Privacy Policy</a>.
			</p>
			<p class="mt-3">
				If you do not agree with any part of these Terms, you must immediately cease using SideNote and remove the extension from your browser.
			</p>
		</section>

		<!-- 2. Description of the Service -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">2. Description of Service & Features</h2>
			<p class="mt-3">
                SideNote is a productivity browser extension engineered for Chromium-based browsers that provides
                local-first note-taking and voice memo recording directly within Google Chrome's native side panel. The
                Service includes, without limitation:
			</p>
			<ul class="mt-3 list-disc list-inside space-y-2 text-xs">
				<li><strong>Side Panel Workspace (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">sidepanel.html</code>):</strong> A dockable, non-intrusive container displaying notes, audio controls, and rich text editors alongside active web tabs.</li>
				<li><strong>TipTap Rich Text Editor:</strong> In-browser formatted text editing, supporting lists, headings, code blocks, and quote styling.</li>
                <li><strong>Google Keep Color Palettes:</strong> Authentic pastel palettes (Sand, Mint, Storm, Coral,
                    Dusk) for organizing and prioritizing your notes.
                </li>
				<li><strong>Voice Memo Recording & Playback:</strong> In-browser audio recording utilizing the Web Audio API (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">getUserMedia</code>) with integrated waveform visualization and local playback.</li>
				<li><strong>All-Notes Masonry Dashboard (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">all-notes.html</code>):</strong> A multi-column visual manager for searching, filtering, and organizing notes across all visited domains.</li>
				<li><strong>Settings & Diagnostics (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">settings.html</code>):</strong> Microphone diagnostics, storage quota metrics, and personalization preferences.</li>
			</ul>
		</section>

		<!-- 3. License Grant & Restrictions -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">3. License Grant & Restrictions</h2>
			<p class="mt-3">
				Subject to your compliance with these Terms, SideNote grants you a personal, worldwide, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and use the SideNote Chrome Extension on supported devices.
			</p>
			<p class="mt-3 font-semibold text-zinc-900 dark:text-white">
				Restrictions:
			</p>
			<p class="mt-2 text-xs">
				You agree that you will not:
			</p>
			<ul class="mt-2 list-disc list-inside space-y-1 text-xs">
				<li>Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the software, except to the extent permitted by applicable open-source licenses or mandatory law.</li>
				<li>Circumvent or disable any security features, licensing mechanisms, or protocol restrictions built into the extension.</li>
				<li>Re-distribute, sublicense, or sell the software as a standalone commercial product without explicit written consent.</li>
				<li>Use SideNote in any manner that could interfere with, disrupt, negatively affect, or inhibit other users or compromise browser integrity.</li>
			</ul>
		</section>

		<!-- 4. User Content & Intellectual Property Ownership -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">4. User Content & Intellectual Property Ownership</h2>
			<div class="mt-4 rounded-2xl border border-blue-500/30 bg-blue-50/50 p-5 dark:border-blue-900/50 dark:bg-blue-950/20 space-y-3">
				<p class="font-bold text-blue-950 dark:text-blue-200">
					100% User Ownership of Notes & Recordings:
				</p>
				<p class="text-xs text-blue-900 dark:text-blue-300">
                    You retain sole and exclusive ownership of all text, rich notes, audio voice recordings, images,
                    tags, and annotations created, recorded, or saved by you within SideNote ("User Content"). SideNote
                    claims NO copyright, proprietary interest, or license over your User Content. Because your content
                    resides in your local browser storage, we do not view, analyze, access, or utilize your User
                    Content.
				</p>
			</div>
			<p class="mt-4">
				<strong>SideNote Intellectual Property:</strong> All software code, visual designs, trademarks, service marks, graphics, and documentation associated with SideNote are the exclusive property of SideNote and its licensors, protected by copyright, trademark, and other applicable intellectual property laws.
			</p>
		</section>

		<!-- 5. User Responsibilities & Acceptable Use -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">5. Acceptable Use & Recording Consent Compliance</h2>
			<p class="mt-3">
				You are solely responsible for your conduct while using SideNote:
			</p>
			<ul class="mt-3 list-disc list-inside space-y-2 text-xs">
				<li><strong>Lawful Use:</strong> You agree to use SideNote only for lawful purposes and in accordance with all applicable local, national, and international laws, regulations, and third-party terms of service.</li>
				<li><strong>Audio Recording Compliance:</strong> When utilizing the voice memo recording feature to record conversations, lectures, or meetings, you are solely responsible for complying with all applicable wiretapping and audio recording consent laws (including one-party or all-party consent statutory requirements in your jurisdiction). SideNote disclaims all liability for unauthorized audio recording by users.</li>
                <li><strong>Third-Party Copyrights:</strong> When taking notes on third-party web content, you are
                    responsible for respecting third-party copyrights and intellectual property rights under applicable
                    fair use or fair dealing doctrines.
                </li>
			</ul>
		</section>

		<!-- 6. Local-First Architecture & Data Disclaimer -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">6. Local-First Architecture & Data Disclaimer</h2>
			<div class="mt-4 rounded-2xl border border-amber-500/30 bg-amber-50/50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20 space-y-3">
				<p class="font-bold text-amber-950 dark:text-amber-200">
					DATA STORAGE NOTICE:
				</p>
				<p class="text-xs leading-relaxed text-amber-900 dark:text-amber-300">
                    SideNote is a local-first application that stores notes and voice memos within your browser's local
                    sandbox (<code
                        class="rounded bg-amber-100 px-1 py-0.5 dark:bg-amber-900">chrome.storage.local</code>).
                    <strong>We do not maintain remote cloud copies of your data on external servers.</strong>
				</p>
				<p class="text-xs leading-relaxed text-amber-900 dark:text-amber-300">
					Because storage is local, clearing your browser profile, uninstalling the extension, or hardware damage will remove locally cached data. SideNote shall have no liability for data loss arising from local browser cache purges or system failures.
				</p>
			</div>
		</section>

		<!-- 7. Free Software — No Subscriptions or Monetization -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">7. Free Software — No Subscriptions or Monetization</h2>
			<p class="mt-3">
				SideNote is provided to you 100% free of charge:
			</p>
			<ul class="mt-3 list-disc list-inside space-y-2 text-xs">
				<li><strong>No Fees or Subscriptions:</strong> There are no subscription fees, paid tiers, in-app purchases, recurring billing schedules, or payment processing mechanisms.</li>
				<li><strong>No Account Required:</strong> You do not need to register an account, provide an email address, or submit financial credentials to use any feature of SideNote.</li>
				<li><strong>No Commercial Monetization:</strong> We do not sell user data, license browsing activity, or partner with advertisers.</li>
			</ul>
		</section>

		<!-- 8. Disclaimers of Warranties -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">8. Disclaimer of Warranties ("AS IS")</h2>
			<div class="mt-3 space-y-3 text-xs leading-relaxed">
				<p>
					TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, SIDENOTE AND ALL RELATED SERVICES, FEATURES, AND DOCUMENTATION ARE PROVIDED STRICTLY ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
				</p>
				<p>
					SIDENOTE SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT:
				</p>
				<ul class="list-disc list-inside space-y-1 pl-2">
					<li>THE EXTENSION WILL FUNCTION WITHOUT INTERRUPTION, DELAY, OR ERRORS;</li>
					<li>THE EXTENSION WILL BE FULLY COMPATIBLE WITH EVERY WEBPAGE, BROWSER REVISION, OR THIRD-PARTY SCRIPT;</li>
					<li>ANY STORED DATA WILL BE COMPLETELY SECURE FROM HARDWARE CRASHES OR USER BROWSER DELETION.</li>
				</ul>
			</div>
		</section>

		<!-- 9. Limitation of Liability -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">9. Limitation of Liability</h2>
			<div class="mt-3 space-y-3 text-xs leading-relaxed">
				<p>
					TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SIDENOTE, ITS CREATORS, CONTRIBUTORS, AFFILIATES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA LOSS, REPUTATIONAL DAMAGE, WORK STOPPAGE, COMPUTER FAILURE, OR LOSS OF BUSINESS OPPORTUNITY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE SIDENOTE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
				</p>
				<p>
					IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF FIFTY UNITED STATES DOLLARS ($50.00 USD) OR THE AMOUNT ACTUALLY PAID BY YOU TO SIDENOTE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
				</p>
			</div>
		</section>

		<!-- 10. Third-Party Websites & Content -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">10. Third-Party Websites & Content</h2>
			<p class="mt-3 text-xs">
				SideNote allows you to interact with, annotate, and take notes on third-party websites across the internet. SideNote does not endorse, control, monitor, or assume any responsibility for any third-party websites, their content, security, or privacy policies. Accessing and annotating third-party websites is conducted at your own risk.
			</p>
		</section>

		<!-- 11. Termination -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">11. Termination</h2>
			<p class="mt-3 text-xs">
				You may terminate these Terms at any time by uninstalling the SideNote extension and discontinuing all use of our services. We reserve the right to suspend or terminate your license to use SideNote at our discretion, without prior notice, if you breach any provision of these Terms. Upon termination, all provisions of these Terms that by their nature should survive will survive, including ownership provisions, warranty disclaimers, and limitations of liability.
			</p>
		</section>

		<!-- 12. Modifications to Terms -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">12. Modifications to Terms</h2>
			<p class="mt-3 text-xs">
				We reserve the right to amend or replace these Terms at any time. When modifications are made, we will update the "Effective Date" at the top of this document. Continued use of SideNote following any amendments constitutes your binding acceptance of the revised Terms.
			</p>
		</section>

		<!-- 13. Severability & Governing Law -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">13. Severability & Governing Law</h2>
			<p class="mt-3 text-xs">
				If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect. These Terms shall be governed by and construed in accordance with standard international commercial law principles and the laws of the applicable jurisdiction, without regard to conflict of law principles.
			</p>
		</section>

		<!-- 14. Contact Information -->
		<section class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">14. Contact & Legal Inquiries</h2>
			<p class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
				For questions, notices, or inquiries concerning these Terms of Service, please reach out to us:
			</p>
			<div class="mt-4 space-y-1 text-xs">
				<p><strong>Entity:</strong> SideNote Core Development Team</p>
				<p><strong>Legal & Support Email:</strong> <a href="mailto:support@sidenote.app" class="text-blue-600 hover:underline dark:text-blue-400">support@sidenote.app</a> / <a href="mailto:legal@sidenote.app" class="text-blue-600 hover:underline dark:text-blue-400">legal@sidenote.app</a></p>
				<p><strong>GitHub Issues:</strong> <a href="https://github.com" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-400">SideNote GitHub Repository</a></p>
			</div>
		</section>

	</div>
</div>
