<script lang="ts">
  import { inView } from '#lib/attachments/in-view.js';

  const layouts = [
    {
      class: 'sm:hidden',
      viewBox: '0 18 350 96',
      start: 24,
      length: 302,
      y: 50,
      track: 3,
      node: 11,
      dot: 6,
      pulse: 3,
      labelY: 98,
      labelSize: 14,
      // Edge labels hug the frame so they fit the narrow drawing.
      labels: [
        { text: 'Ideation', x: 13, anchor: 'start' },
        { text: 'Growth', x: 175, anchor: 'middle' },
        { text: 'Scale', x: 337, anchor: 'end' }
      ]
    },
    {
      class: 'max-sm:hidden',
      viewBox: '0 70 600 130',
      start: 40,
      length: 520,
      y: 110,
      track: 4,
      node: 14,
      dot: 8,
      pulse: 3.2,
      labelY: 176,
      labelSize: 18,
      labels: [
        { text: 'Ideation', x: 40, anchor: 'middle' },
        { text: 'Growth', x: 300, anchor: 'middle' },
        { text: 'Scale', x: 560, anchor: 'middle' }
      ]
    }
  ];

  // Each milestone pulses as the travelling dot arrives at it.
  const milestones = [
    { at: 0, delay: 0 },
    { at: 0.5, delay: 3.78 },
    { at: 1, delay: 7.38 }
  ];
</script>

<div {@attach inView}>
  {#each layouts as layout (layout.viewBox)}
    <svg
      viewBox={layout.viewBox}
      class={['block h-auto w-full overflow-visible', layout.class]}
      style:--half="{layout.length / 2}px"
      style:--full="{layout.length}px"
      style:--pulse={layout.pulse}
      role="img"
      aria-label="A timeline from Ideation through Growth to Scale, with a dot travelling along it"
    >
      <line
        x1={layout.start}
        y1={layout.y}
        x2={layout.start + layout.length}
        y2={layout.y}
        class="stroke-teal-1"
        stroke-width={layout.track}
        stroke-linecap="round"
      />
      <rect
        x={layout.start}
        y={layout.y - layout.track / 2}
        width={layout.length}
        height={layout.track}
        class="progress fill-teal-deep"
      />
      {#each milestones as milestone (milestone.at)}
        <circle
          cx={layout.start + layout.length * milestone.at}
          cy={layout.y}
          r={layout.node}
          fill="none"
          class="halo stroke-primary"
          stroke-width="1.5"
          style:animation-delay="{milestone.delay}s"
        />
      {/each}
      {#each milestones as milestone (milestone.at)}
        <circle
          cx={layout.start + layout.length * milestone.at}
          cy={layout.y}
          r={layout.node}
          class="node fill-teal stroke-teal-deep"
          stroke-width={layout.track}
          style:animation-delay="{milestone.delay}s"
        />
      {/each}
      <circle cx={layout.start} cy={layout.y} r={layout.dot} class="dot fill-teal-deep" />
      {#each layout.labels as label (label.text)}
        <text
          x={label.x}
          y={layout.labelY}
          text-anchor={label.anchor}
          class="fill-teal-deep font-medium tracking-[0.005em]"
          style:font-size="{layout.labelSize}px"
        >
          {label.text}
        </text>
      {/each}
    </svg>
  {/each}
</div>

<style>
  /* One 9s loop: rest at Ideation, travel to Growth, rest, travel to Scale, fade out. */
  .dot {
    animation: travel 9s infinite;
  }

  @keyframes travel {
    0% {
      transform: translateX(0);
      opacity: 0;
      animation-timing-function: ease-out;
    }
    4% {
      transform: translateX(0);
      opacity: 1;
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    12% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    42% {
      transform: translateX(var(--half));
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    52% {
      transform: translateX(var(--half));
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    82% {
      transform: translateX(var(--full));
    }
    94% {
      transform: translateX(var(--full));
      opacity: 1;
    }
    100% {
      transform: translateX(var(--full));
      opacity: 0;
    }
  }

  .progress {
    transform-box: fill-box;
    transform-origin: 0 50%;
    animation: fill 9s infinite;
  }

  @keyframes fill {
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    12% {
      transform: scaleX(0);
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    42% {
      transform: scaleX(0.5);
    }
    52% {
      transform: scaleX(0.5);
      animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    }
    82% {
      transform: scaleX(1);
    }
    94% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 0;
    }
  }

  .halo {
    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
    animation: pulse 9s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.85;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    14%,
    100% {
      opacity: 0;
      transform: scale(var(--pulse));
    }
  }

  .node {
    transform-box: fill-box;
    transform-origin: center;
    animation: arrive 9s infinite;
  }

  @keyframes arrive {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.35);
    }
    14%,
    100% {
      transform: scale(1);
    }
  }

  /* Without motion, show the journey complete: the dot rests at Scale on a full track. */
  @media (prefers-reduced-motion: reduce) {
    .dot,
    .progress,
    .halo,
    .node {
      animation: none;
    }
    .dot {
      transform: translateX(var(--full));
    }
  }
</style>
