<script lang="ts">
	import type { Snippet } from 'svelte';

	type Tone = 'violet' | 'blue' | 'teal';

	let {
		id,
		tone,
		title,
		body,
		class: className,
		graphic
	}: {
		id: string;
		tone: Tone;
		title: string;
		body: string;
		class?: string;
		graphic: Snippet;
	} = $props();

	const tones = {
		violet: { field: 'bg-violet', title: 'text-violet-deep', body: 'text-violet-foreground' },
		blue: { field: 'bg-blue', title: 'text-blue-deep', body: 'text-blue-foreground' },
		teal: { field: 'bg-teal', title: 'text-teal-deep', body: 'text-teal-foreground' }
	} satisfies Record<Tone, Record<string, string>>;
</script>

<section {id} class={['py-24 lg:py-40', tones[tone].field, className]} aria-labelledby="{id}-heading">
	<div class="wrap lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
		<div class="lg:col-span-5">
			<h2 id="{id}-heading" class={['mb-5 text-heading font-normal text-balance lg:mb-7', tones[tone].title]}>
				{title}
			</h2>
			<p class={['max-w-[38ch] text-body-lg', tones[tone].body]}>{body}</p>
		</div>
		<div class="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
			{@render graphic()}
		</div>
	</div>
</section>
