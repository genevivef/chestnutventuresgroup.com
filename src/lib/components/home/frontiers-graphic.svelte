<script lang="ts">
	import { inView } from '#lib/attachments/in-view.js';

	const layouts = [
		{
			class: 'sm:hidden',
			viewBox: '0 0 350 280',
			line: { x1: 8, y1: 264, x2: 342, y2: 50, dash: '1.5 6' },
			circles: [
				{ cx: 30, cy: 250, r: 10 },
				{ cx: 80, cy: 218, r: 20 },
				{ cx: 158, cy: 168, r: 35 },
				{ cx: 270, cy: 96, r: 55 }
			],
			rise: 20,
			float: 6
		},
		{
			class: 'max-sm:hidden',
			viewBox: '0 0 600 440',
			line: { x1: 24, y1: 404, x2: 584, y2: 66, dash: '1.5 7' },
			circles: [
				{ cx: 70, cy: 376, r: 17 },
				{ cx: 152, cy: 327, r: 34 },
				{ cx: 274, cy: 253, r: 60 },
				{ cx: 456, cy: 143, r: 94 }
			],
			rise: 28,
			float: 9
		}
	];

	const fills = ['fill-violet-1', 'fill-violet-2', 'fill-violet-3', 'fill-violet-deep'];
</script>

<div {@attach inView}>
	{#each layouts as layout (layout.viewBox)}
		<svg
			viewBox={layout.viewBox}
			class={['block h-auto w-full overflow-visible', layout.class]}
			style:--rise="{layout.rise}px"
			style:--float="-{layout.float}px"
			role="img"
			aria-label="Four circles of increasing size rising along a diagonal"
		>
			<line
				x1={layout.line.x1}
				y1={layout.line.y1}
				x2={layout.line.x2}
				y2={layout.line.y2}
				class="stroke-violet-deep"
				stroke-width="1.25"
				stroke-dasharray={layout.line.dash}
				stroke-linecap="round"
			/>
			{#each layout.circles as circle, i (circle.cx)}
				<circle
					cx={circle.cx}
					cy={circle.cy}
					r={circle.r}
					class={['circle', fills[i]]}
					style:animation-delay="{0.1 + i * 0.35}s, {1.8 + i * 0.6}s"
				/>
			{/each}
		</svg>
	{/each}
</div>

<style>
	.circle {
		transform-box: fill-box;
		transform-origin: center;
		animation:
			rise 1.6s cubic-bezier(0.16, 1, 0.3, 1) both,
			float 8s ease-in-out infinite;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(var(--rise));
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(var(--float));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.circle {
			animation: none;
		}
	}
</style>
