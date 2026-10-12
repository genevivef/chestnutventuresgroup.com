<script lang="ts">
  import { mode, toggleMode } from 'mode-watcher';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import SunIcon from '@lucide/svelte/icons/sun';
  import { cn } from '#lib/utils.js';

  let { class: className }: { class?: string } = $props();
</script>

<!-- The icons switch with the `.dark` class, so the prerendered page shows the right one before hydration. -->
<button
  type="button"
  onclick={toggleMode}
  aria-label={mode.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  class={cn(
    'inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground hover:text-primary-hover',
    className
  )}
>
  <MoonIcon class="size-5 dark:hidden" strokeWidth={1.6} aria-hidden="true" />
  <SunIcon class="hidden size-5 dark:block" strokeWidth={1.6} aria-hidden="true" />
</button>
