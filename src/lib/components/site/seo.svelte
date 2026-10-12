<script lang="ts">
  import { page } from '$app/state';
  import { origin, siteName } from '#lib/site.js';

  let { title, description }: { title?: string; description: string } = $props();

  const fullTitle = $derived(title ? `${title} - ${siteName}` : siteName);
  const url = $derived(new URL(page.url.pathname, origin).href);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="{origin}/og-image.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Chestnut Ventures Group: Backing builders of what’s next."
  />

  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
