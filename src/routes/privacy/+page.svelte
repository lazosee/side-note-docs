<svelte:head>
	<title>Privacy Policy — SideNote Chrome Extension</title>
	<meta name="description" content="Exhaustive Privacy Policy for SideNote Chrome Extension. Compliant with Google Chrome Web Store Developer Program Policies and Limited Use Requirements." />
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="border-b border-zinc-200 pb-8 dark:border-zinc-800">
		<div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
			Chrome Web Store Compliant Policy
		</div>
		<h1 class="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
			Privacy Policy for SideNote
		</h1>
		<div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
			<span><strong>Effective Date:</strong> October 8, 2026</span>
			<span>•</span>
			<span><strong>Document Version:</strong> 1.0.0</span>
			<span>•</span>
			<span><strong>Applies to:</strong> SideNote Chrome Extension (MV3) & Related Services</span>
		</div>
	</div>

	<!-- Content Body -->
	<div class="mt-10 space-y-12 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">

		<!-- 1. Executive Summary -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">1. Executive Summary & Core Principle</h2>
			<p class="mt-3">
				At <strong>SideNote</strong> ("we", "our", or "us"), we believe that your notes, thoughts, reading habits, and voice memos belong exclusively to you. SideNote is engineered as a <strong>Local-First Chrome Extension</strong>.
			</p>
			<div class="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/60 p-4 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-200">
				<strong>The Core Privacy Guarantee:</strong>
				<ul class="mt-2 list-disc list-inside space-y-1 text-xs">
					<li>We do NOT collect, harvest, sell, or monetize your personal data.</li>
					<li>Your notes and voice recordings are stored strictly on your local device.</li>
					<li>We do NOT use external analytics trackers, ad networks, or telemetry SDKs.</li>
					<li>We strictly adhere to the <strong>Google Chrome Web Store Developer Program Policies</strong> and the <strong>Limited Use Requirements</strong>.</li>
				</ul>
			</div>
		</section>

		<!-- 2. Single Purpose Statement -->
		<section id="single-purpose">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">2. Single Purpose Statement (Chrome Web Store Requirement)</h2>
			<p class="mt-3">
				In compliance with the Chrome Web Store Quality Guidelines, SideNote has a clear, singular purpose:
			</p>
			<blockquote class="mt-3 rounded-xl border-l-4 border-amber-500 bg-zinc-50 p-4 italic dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
				"SideNote provides contextual note-taking and voice memo recording directly within Google Chrome's
				native side panel."
			</blockquote>
			<p class="mt-3">
				All requested browser permissions, APIs, content scripts, and background operations exist solely to fulfill this single stated purpose.
			</p>
		</section>

		<!-- 3. Explicit Permissions Disclosures -->
		<section id="permissions">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">3. Itemized Permissions & Technical Justifications</h2>
			<p class="mt-3">
				Below is the exhaustive declaration of every permission requested in the SideNote extension manifest (<code class="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">manifest.json</code>) along with the narrow technical justification for each:
			</p>

			<div class="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
				<table class="w-full text-left text-xs">
					<thead class="bg-zinc-100 text-zinc-900 dark:bg-zinc-800/80 dark:text-white">
						<tr>
							<th class="p-3.5 font-semibold">Permission</th>
							<th class="p-3.5 font-semibold">API Role</th>
							<th class="p-3.5 font-semibold">Specific Justification</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-zinc-200 dark:divide-zinc-800">
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">sidePanel</td>
							<td class="p-3.5 font-medium">UI Container</td>
							<td class="p-3.5">
								Allows SideNote to display the notes list, rich text editor, and audio player in Google Chrome's native side panel. This prevents intrusive floating popups and keeps your active webpage undisturbed.
							</td>
						</tr>
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">storage</td>
							<td class="p-3.5 font-medium">Local Database</td>
							<td class="p-3.5">
                                Used to store note text, page URLs, page titles, color choices, and voice recordings on
                                your computer via <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome.storage.local</code>.
							</td>
						</tr>
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">unlimitedStorage</td>
							<td class="p-3.5 font-medium">Quota Exemption</td>
							<td class="p-3.5">
								The default <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome.storage.local</code> quota is capped at 10 MB. Because voice memos and image attachments are stored locally as audio/image data URLs, this permission prevents data write failures when your personal notes collection expands.
							</td>
						</tr>
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">tabs</td>
							<td class="p-3.5 font-medium">Tab Metadata</td>
							<td class="p-3.5">
								Used strictly to inspect the active tab's URL and title in order to associate notes with the current website (e.g. <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">github.com</code>), and to detect restricted browser protocols (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome://</code>, <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">edge://</code>) where the side panel is safely disabled. We do NOT log, monitor, or track your browsing history.
							</td>
						</tr>
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">alarms</td>
							<td class="p-3.5 font-medium">Task Scheduler</td>
							<td class="p-3.5">
								Used to run scheduled lightweight cleanup routines without keeping the background service worker persistently active in memory.
							</td>
						</tr>
						<tr>
							<td class="p-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">Microphone (Web Audio)</td>
							<td class="p-3.5 font-medium">Device Sensor</td>
							<td class="p-3.5">
								Requested via browser prompt (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">navigator.mediaDevices.getUserMedia</code>) strictly when you click the microphone record button in the sidepanel or test it in Settings. It is NEVER recorded in the background, NEVER recorded without manual interaction, and audio is NEVER sent to remote servers.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- 4. Data Collection, Handling, and Storage -->
		<section id="data-collection">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">4. Data Collection, Handling, and Storage</h2>
			<div class="mt-4 space-y-4">
				<p>
					SideNote categorizes data processed during normal operation as follows:
				</p>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
						<h3 class="font-bold text-zinc-900 dark:text-white">Data You Author Directly</h3>
						<ul class="mt-2 list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
							<li>Note text and rich formatting (TipTap HTML)</li>
							<li>Audio voice memos recorded via your microphone</li>
							<li>Cover images or card image attachments</li>
							<li>Pinned status and Google Keep color selections</li>
						</ul>
					</div>
					<div class="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
						<h3 class="font-bold text-zinc-900 dark:text-white">Contextual Association Data</h3>
						<ul class="mt-2 list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
							<li>Canonical webpage URL where note was created</li>
							<li>Website hostname (used as storage partition key)</li>
							<li>Page title (used as default note title)</li>
							<li>Creation and modification timestamps (epoch ms)</li>
							<li>User preference configurations (audio quality, defaults)</li>
						</ul>
					</div>
				</div>

				<p class="font-semibold text-zinc-900 dark:text-white mt-4">
					Where is this data stored?
				</p>
				<p>
					100% of the above data is stored exclusively in your browser profile directory using <code class="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">chrome.storage.local</code>. It is partitioned by hostname (for example: <code class="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">&#123; "github.com": [Note, Note] &#125;</code>). It is never sent to our servers, never synchronized without your knowledge, and never shared with third parties.
				</p>
			</div>
		</section>

		<!-- 5. Chrome Web Store Limited Use Compliance -->
		<section id="chrome-webstore">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">5. Chrome Web Store Limited Use Disclosure</h2>
			<p class="mt-3">
				SideNote complies fully with the <strong>Google Chrome Web Store Limited Use Policy</strong> regarding the collection and use of data obtained through Chrome APIs:
			</p>
			<div class="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 space-y-3 text-xs leading-relaxed">
				<p>
					<strong>1. No Sale of User Data:</strong> SideNote will not transfer or sell user data to third parties, including advertising platforms, data brokers, or information resellers under any circumstances.
				</p>
				<p>
					<strong>2. No Advertising or Retargeting:</strong> User data will not be used or transferred for serving personalized, retargeted, or interest-based advertisements.
				</p>
				<p>
					<strong>3. No Creditworthiness Determination:</strong> User data will not be used or transferred for assessing creditworthiness, lending, or financial scoring.
				</p>
				<p>
					<strong>4. Human Access Prohibition:</strong> No human (including SideNote developers or contractors) can read your notes or recordings, as they reside purely within your personal local browser storage.
				</p>
			</div>
		</section>

		<!-- 6. Zero Remote Code & Security -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">6. Manifest V3 Security & Zero Remote Code Execution</h2>
			<p class="mt-3">
				In accordance with Google Chrome Manifest V3 security requirements:
			</p>
			<ul class="mt-3 list-disc list-inside space-y-2 text-xs">
				<li><strong>Zero Remote Code:</strong> SideNote contains no dynamically loaded scripts, external CDN bundles, or remote code evaluation (<code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">eval()</code>, <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">new Function()</code>). All JavaScript, stylesheets, fonts, and icons are bundled locally in the extension package.</li>
				<li><strong>Isolated Extension Context:</strong> SideNote runs entirely within Chrome's native extension
					security sandbox. Host websites cannot inspect, alter, or access your notes or audio memos.
				</li>
				<li><strong>Content Security Policy (CSP):</strong> All extension pages enforce strict CSP headers, preventing unauthorized outbound connections or script injections.</li>
			</ul>
		</section>

		<!-- 7. No Monetization, No Payments & No Account Registration -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">7. No Monetization, No Payments & No Account Registration</h2>
			<p class="mt-3">
				SideNote is completely free software. It does not incorporate any paid tiers, subscriptions, paywalls, or payment processors:
			</p>
			<ul class="mt-3 list-disc list-inside space-y-2 text-xs">
				<li><strong>Zero Payment Collection:</strong> We do NOT collect or store credit card numbers, bank accounts, billing addresses, or financial records. SideNote has no commercial transactions.</li>
				<li><strong>No Account or Sign-In:</strong> You do not need to register an account, log in, or provide an email address or password to use any feature of SideNote.</li>
				<li><strong>No Commercial Monetization:</strong> We do not sell user data, license browsing activity, or partner with advertisers.</li>
			</ul>
		</section>

		<!-- 8. User Rights & Complete Data Erasure -->
		<section id="user-rights">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">8. User Rights & Complete Data Erasure</h2>
			<p class="mt-3">
				You maintain complete sovereignty over your data at all times:
			</p>
			<div class="mt-4 space-y-3 text-xs">
				<p>
					<strong>• Individual Note Deletion:</strong> You can delete any note or voice memo with one click
					directly in the sidepanel or All-Notes dashboard.
				</p>
				<p>
					<strong>• Complete Data Erasure:</strong> Click <em>Clear All Notes & Data</em> in Settings to instantly wipe all extension data from <code class="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">chrome.storage.local</code>.
				</p>
				<p>
					<strong>• Uninstallation:</strong> Removing the SideNote extension from Chrome immediately and irreversibly deletes all locally cached extension data from your browser profile.
				</p>
			</div>
		</section>

		<!-- 9. Children's Privacy -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">9. Children's Privacy (COPPA Compliance)</h2>
			<p class="mt-3">
				SideNote is not designed for, targeted toward, or intended for use by children under the age of 13. We do not knowingly collect or solicit any personal information from children under 13. Because SideNote does not collect personal data, no child's personal data is ever stored on external servers.
			</p>
		</section>

		<!-- 10. GDPR & CCPA Compliance -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">10. International Privacy Rights (GDPR & CCPA/CPRA)</h2>
			<p class="mt-3">
				Under the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA):
			</p>
			<ul class="mt-3 list-disc list-inside space-y-1.5 text-xs">
				<li><strong>Right to Know / Access:</strong> You can inspect all data stored by SideNote at any time via the Settings analytics panel or directly within Chrome's local storage inspector.</li>
				<li><strong>Right to Rectification & Erasure:</strong> You can edit or purge your data immediately without submitting a support request.</li>
				<li><strong>"Do Not Sell My Personal Information":</strong> We do not sell or share personal data. Therefore, an opt-out mechanism is unnecessary as no selling occurs.</li>
			</ul>
		</section>

		<!-- 11. Policy Revisions -->
		<section>
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">11. Changes and Updates to this Privacy Policy</h2>
			<p class="mt-3">
				We may update this Privacy Policy from time to time to reflect product enhancements, architectural updates, or regulatory adjustments. If we make material changes affecting how data is handled, we will post the revised policy on this website with an updated Effective Date and provide an in-extension notification where appropriate. Continued use of SideNote following any update constitutes acceptance of the revised policy.
			</p>
		</section>

		<!-- 12. Contact Information -->
		<section class="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
			<h2 class="text-xl font-bold text-zinc-950 dark:text-white">12. Contact & Data Protection Inquiries</h2>
			<p class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
				If you have any questions, concerns, or inquiries regarding this Privacy Policy, our data handling practices, or our Chrome Web Store compliance, please contact us:
			</p>
			<div class="mt-4 space-y-1 text-xs">
				<p><strong>Entity:</strong> SideNote Extension Core Team</p>
				<p><strong>Email:</strong> <a href="mailto:privacy@sidenote.app" class="text-blue-600 hover:underline dark:text-blue-400">privacy@sidenote.app</a> / <a href="mailto:support@sidenote.app" class="text-blue-600 hover:underline dark:text-blue-400">support@sidenote.app</a></p>
				<p><strong>Source Repository:</strong> <a href="https://github.com" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-400">GitHub - SideNote Chrome Extension</a></p>
			</div>
		</section>

	</div>
</div>
