<script lang="ts">
	let { id, title, description }: { id: string; title: string; description: string } = $props();
</script>

<div class="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
	<h2 {id} class="text-heading font-normal text-balance lg:col-span-6">{title}</h2>
	<p class="mt-4.5 max-w-[38ch] text-body-lg text-muted-foreground lg:col-span-5 lg:col-start-8 lg:mt-0">
		{description}
	</p>
</div>
