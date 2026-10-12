<script lang="ts">
  import { resolve } from '$app/paths';
  import Logo from './logo.svelte';
  import ThemeToggle from './theme-toggle.svelte';
</script>

<footer class="border-t">
  <!-- Mobile: a 2×2 grid (logo and toggle on top, copyright and Contact below). Desktop: one row. -->
  <div
    class="wrap grid grid-cols-[1fr_auto] items-center gap-x-4 py-5 lg:flex lg:min-h-28 lg:justify-between lg:gap-6 lg:py-0"
  >
    <div
      class="contents text-sm text-muted-foreground lg:flex lg:items-center lg:gap-3.5 lg:text-[15px]"
    >
      <Logo class="col-start-1 row-start-1 h-4.5 lg:h-5.5" />
      <span class="col-start-1 row-start-2"
        >© {new Date().getFullYear()} Chestnut Ventures Group</span
      >
    </div>
    <div class="contents lg:flex lg:items-center lg:gap-5">
      <ThemeToggle class="col-start-2 row-start-1 -mr-3 justify-self-end lg:mr-0" />
      <a
        href={resolve('/contact')}
        class="col-start-2 row-start-2 inline-flex min-h-11 items-center justify-self-end text-sm font-medium lg:text-[15px]"
      >
        Contact
      </a>
    </div>
  </div>
</footer>
