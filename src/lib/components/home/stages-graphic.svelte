<script lang="ts">
  import { inView } from '#lib/attachments/in-view.js';

  const layouts = [
    {
      class: 'sm:hidden',
      viewBox: '0 52 350 188',
      baseline: { y: 186, width: 350 },
      labelY: 218,
      labelSize: 14,
      circles: [
        { cx: 45, cy: 156, r: 30 },
        { cx: 152, cy: 142, r: 44 },
        { cx: 282, cy: 126, r: 60 }
      ]
    },
    {
      class: 'max-sm:hidden',
      viewBox: '0 88 600 300',
      baseline: { y: 320, width: 600 },
      labelY: 364,
      labelSize: 18,
      circles: [
        { cx: 96, cy: 266, r: 54 },
        { cx: 268, cy: 244, r: 76 },
        { cx: 480, cy: 216, r: 104 }
      ]
    }
  ];

  const stages = [
    { label: 'Pre-seed', fill: 'fill-blue-1' },
    { label: 'Seed', fill: 'fill-blue-2' },
    { label: 'Series A', fill: 'fill-blue-deep' }
  ];
</script>

<div {@attach inView}>
  {#each layouts as layout (layout.viewBox)}
    <svg
      viewBox={layout.viewBox}
      class={['block h-auto w-full overflow-visible', layout.class]}
      role="img"
      aria-label="Three circles growing in size, labelled Pre-seed, Seed and Series A"
    >
      <line
        x1="0"
        y1={layout.baseline.y}
        x2={layout.baseline.width}
        y2={layout.baseline.y}
        class="stroke-blue-deep"
        stroke-width="1"
      />
      {#each layout.circles as circle, i (circle.cx)}
        <circle
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          class={['circle', stages[i].fill]}
          style:animation-delay="{i * 1.2}s"
        />
        <text
          x={circle.cx}
          y={layout.labelY}
          text-anchor="middle"
          class="fill-blue-deep font-medium tracking-[0.005em]"
          style:font-size="{layout.labelSize}px"
        >
          {stages[i].label}
        </text>
      {/each}
    </svg>
  {/each}
</div>

<style>
  .circle {
    transform-box: fill-box;
    transform-origin: 50% 100%;
    animation: breathe 7.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }

  @keyframes breathe {
    0%,
    46%,
    100% {
      transform: scale(1);
    }
    22% {
      transform: scale(1.07);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .circle {
      animation: none;
    }
  }
</style>
