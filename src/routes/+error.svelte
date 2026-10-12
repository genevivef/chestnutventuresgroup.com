<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '#lib/components/ui/button/index.js';

	const notFound = $derived(page.status === 404);
	const heading = $derived(notFound ? 'Page not found' : 'Something went wrong');

	// The "Investing across frontiers" circles, fallen from their diagonal onto a baseline.
	const circles = [
		{ r: 17, from: { x: 70, y: 376 }, to: 70, fill: 'fill-violet-1' },
		{ r: 34, from: { x: 152, y: 327 }, to: 150, fill: 'fill-violet-2' },
		{ r: 60, from: { x: 274, y: 253 }, to: 282, fill: 'fill-violet-3' },
		{ r: 94, from: { x: 456, y: 143 }, to: 474, fill: 'fill-violet-deep' }
	];
	const ground = 420;
</script>

<svelte:head>
	<title>{heading} - Chestnut Ventures Group</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section
	class="wrap pt-14 pb-24 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pt-30 lg:pb-40"
	aria-labelledby="error-heading"
>
	<div class="lg:col-span-6">
		<h1 id="error-heading" class="text-display font-normal text-balance">{heading}</h1>
		{#if !notFound}
			<p class="mt-8 max-w-[31ch] text-lead lg:mt-16">The problem is on our end. Try reloading the page.</p>
		{/if}
		<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7 lg:mt-12">
			<Button href={resolve('/')} size="xl" class="w-full sm:w-auto">
				Back to home
				<ArrowRightIcon data-icon="inline-end" strokeWidth={1.6} />
			</Button>
			<a
				href={resolve('/contact')}
				class="inline-flex min-h-12 items-center justify-center text-base font-medium underline decoration-[1.5px] underline-offset-6"
			>
				Contact us
			</a>
		</div>
	</div>

	<svg
		viewBox="0 50 600 371"
		class="mt-16 block h-auto w-full overflow-visible lg:col-span-6 lg:col-start-7 lg:mt-0"
		aria-hidden="true"
	>
		<line
			x1="24"
			y1="404"
			x2="584"
			y2="66"
			class="stroke-violet-deep opacity-40"
			stroke-width="1.25"
			stroke-dasharray="1.5 7"
			stroke-linecap="round"
		/>
		<line x1="0" y1={ground} x2="600" y2={ground} class="stroke-violet-deep" stroke-width="1" />
		{#each circles as circle, i (circle.r)}
			<circle
				cx={circle.to}
				cy={ground - circle.r}
				r={circle.r}
				class={['circle', circle.fill]}
				style:--dx="{circle.from.x - circle.to}px"
				style:--dy="{circle.from.y - (ground - circle.r)}px"
				style:animation-delay="{0.2 + i * 0.15}s"
			/>
		{/each}
	</svg>
</section>

<style>
	/* Each circle drops from its place on the diagonal and bounces to rest. */
	.circle {
		transform-box: fill-box;
		animation: fall 1.4s both;
	}

	@keyframes fall {
		0% {
			transform: translate(var(--dx), var(--dy));
			animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
		}
		55% {
			transform: translate(0, 0);
			animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
		}
		72% {
			transform: translate(0, -18px);
			animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
		}
		86% {
			transform: translate(0, 0);
			animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
		}
		93% {
			transform: translate(0, -5px);
			animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle {
			animation: none;
		}
	}
</style>
