<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.png';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from '$lib/components/ui/sonner';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta property="og:image" content="https://chestnutventuresgroup.com/logo.png" />
</svelte:head>

<ModeWatcher defaultMode="light" />

<Toaster richColors />

<div class="min-h-screen flex flex-col items-center">
  <Header />

  <main class="grow w-full h-full flex flex-col items-center">
    {@render children()}
  </main>

  <Footer />
</div>
