<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";

	let { children } = $props();
</script>

<Header />

<div class="flex flex-col gap-16">
	{@render children()}
</div>
