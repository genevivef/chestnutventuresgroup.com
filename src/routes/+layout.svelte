<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import { Toaster } from "$lib/components/ui/sonner";

	let { children } = $props();
</script>

<Toaster richColors />

<Header />

<div class="flex flex-col items-center">
	{@render children()}
</div>
