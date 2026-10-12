<script lang="ts">
  import './layout.css';
  import { page } from '$app/state';
  import { ModeWatcher } from 'mode-watcher';
  import favicon from '#lib/assets/favicon.svg';
  import SiteHeader from '#lib/components/site/site-header.svelte';
  import SiteFooter from '#lib/components/site/site-footer.svelte';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="light" />

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
>
  Skip to content
</a>

<!-- Text selection takes the page's accent: violet on Home, teal on Contact. -->
<div class={['flex min-h-svh flex-col', page.route.id === '/contact' && 'selection:bg-teal-1']}>
  <SiteHeader />
  <main id="main" class="flex-1">
    {@render children()}
  </main>
  <SiteFooter />
</div>
