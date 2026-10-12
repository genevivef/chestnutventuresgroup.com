<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import { Button } from '#lib/components/ui/button/index.js';
	import Seo from '#lib/components/site/seo.svelte';

	const email = 'info@chestnutventuresgroup.com';

	let status = $state<'idle' | 'copied' | 'failed'>('idle');
	let resetTimer: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(email);
			status = 'copied';
		} catch {
			status = 'failed';
		}
		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => (status = 'idle'), 2400);
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<Seo
	title="Contact"
	description="Get in touch with Chestnut Ventures Group. We’re here to help you build enduring businesses."
/>

<section class="wrap pt-14 pb-24 lg:pt-30 lg:pb-40" aria-labelledby="contact-us-heading">
	<h1 id="contact-us-heading" class="text-display font-normal">Contact us</h1>
	<p class="mt-8 max-w-[31ch] text-lead lg:mt-16">
		Get in touch with Chestnut Ventures Group. We’re here to help you build enduring businesses.
	</p>
</section>

<section class="bg-teal py-24 lg:py-40" aria-labelledby="contact-heading">
	<div class="wrap">
		<div class="lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-6">
			<h2 id="contact-heading" class="text-heading font-normal text-teal-deep lg:col-span-5">Contact</h2>
			<p class="mt-5 max-w-[38ch] text-body-lg text-teal-foreground lg:col-span-6 lg:col-start-7 lg:mt-0">
				Interested in working together? We’d love to hear from you.
			</p>
		</div>

		<div class="@container mt-12 lg:mt-24">
			<span class="mb-1.5 block text-[15px] font-medium text-teal-deep lg:mb-3 lg:text-base">Email</span>
			<a
				href="mailto:{email}"
				class="inline-flex min-h-11 items-center text-[clamp(1.3125rem,6cqi,4.75rem)] leading-[1.3] font-medium tracking-[-0.012em] wrap-anywhere text-teal-deep underline decoration-teal-vivid decoration-2 underline-offset-7 hover:text-teal-deep hover:decoration-teal-deep lg:leading-[1.1] lg:font-normal lg:tracking-[-0.035em] lg:decoration-3 lg:underline-offset-14"
			>
				{email}
			</a>
			<div class="mt-7 lg:mt-12 lg:flex lg:items-center lg:gap-7">
				<Button size="xl" class="w-full lg:w-auto lg:min-w-37" onclick={copyEmail}>
					{#if status === 'copied'}
						<CheckIcon data-icon="inline-start" strokeWidth={1.8} />
						Copied
					{:else}
						<CopyIcon data-icon="inline-start" strokeWidth={1.6} />
						Copy email
					{/if}
				</Button>
				<p role="status" class="mt-3 min-h-6 text-[15px] text-teal-foreground lg:mt-0 lg:text-base">
					{#if status === 'copied'}
						Email address copied to your clipboard.
					{:else if status === 'failed'}
						Couldn’t copy the address. Please copy it from above.
					{/if}
				</p>
			</div>
		</div>
	</div>
</section>

<section class="wrap py-24 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-6 lg:py-40" aria-labelledby="who-heading">
	<h2 id="who-heading" class="mb-5 text-heading font-normal lg:col-span-5 lg:mb-0">Who we are</h2>
	<div class="flex max-w-[38ch] flex-col gap-5 text-body-lg lg:col-span-6 lg:col-start-7 lg:gap-6">
		<p>
			We’re a venture firm that leads Pre-Seed, Seed, and Series A rounds in standout software
			companies. With a long-term perspective and a hands-on approach, we partner early and stay
			committed—helping founders build enduring businesses that are built to last.
		</p>
		<p>
			We don’t just write checks—we roll up our sleeves. From product and go-to-market to
			team-building and fundraising, we work side by side with exceptional founders turning bold
			ideas into category-defining companies.
		</p>
	</div>
</section>
