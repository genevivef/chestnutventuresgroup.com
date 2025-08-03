<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import { Toaster } from "$lib/components/ui/sonner";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher defaultMode="light" />

<Toaster richColors />

<div class="min-h-screen flex flex-col items-center">
	<Header />

	<main class="grow w-full h-full flex flex-col items-center">
		{@render children()}
	</main>

	<Footer />
</div>
