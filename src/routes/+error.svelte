<script lang="ts">
  import { page } from '$app/state';
  import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col items-center justify-center gap-8 py-16">
  <h1 class="text-center text-6xl font-semibold text-primary dark:text-teal-500">{page.status}</h1>
  <h2 class="text-center text-4xl">{page.error?.message}</h2>
  <Button class="text-lg" size="lg" href="/">Go Home</Button>
</div>
