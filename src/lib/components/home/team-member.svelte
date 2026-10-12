<script lang="ts" module>
	import type { Picture } from '@sveltejs/enhanced-img';

	export type Member = {
		name: string;
		role: string;
		photo: Picture;
		/** Shown collapsed. */
		bio: string;
		/** Appended to the first paragraph when expanded. */
		more: string;
		/** Further paragraphs shown when expanded. */
		extra?: string[];
		linkedin?: string;
	};
</script>

<script lang="ts">
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';

	let { member }: { member: Member } = $props();

	const bioId = $props.id();
	let expanded = $state(false);
</script>

<enhanced:img
	src={member.photo}
	alt="Portrait of {member.name}"
	sizes="(min-width: 1024px) 30vw, (min-width: 640px) 520px, 100vw"
	class="block aspect-square h-auto w-full bg-border object-cover"
/>
<h3 class="mt-4 mb-0.5 text-2xl leading-[1.2] font-medium tracking-[-0.018em] lg:mt-6 lg:mb-1 lg:text-[26px]">
	{member.name}
</h3>
<p class="mb-3.5 text-[15px] text-muted-foreground lg:mb-5 lg:text-base">{member.role}</p>

<div id={bioId} class="flex max-w-[42ch] flex-col gap-3 text-base leading-[1.65] text-soft-foreground lg:gap-3.5 lg:text-[17px]">
	<p>{member.bio}{#if expanded}{` ${member.more}`}{/if}</p>
	{#if expanded}
		{#each member.extra ?? [] as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	{/if}
</div>

<div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 lg:mt-5 lg:gap-x-6.5">
	<button
		type="button"
		aria-expanded={expanded}
		aria-controls={bioId}
		onclick={() => (expanded = !expanded)}
		class="inline-flex min-h-11 cursor-pointer items-center text-base font-medium underline decoration-[1.5px] underline-offset-6 hover:text-primary-hover"
	>
		{expanded ? 'Show less' : 'Read more'}
	</button>
	{#if member.linkedin}
		<a
			href={member.linkedin}
			target="_blank"
			rel="noopener"
			class="inline-flex min-h-11 items-center gap-1.5 text-base font-medium lg:gap-2"
		>
			LinkedIn<span class="sr-only"> (opens in a new tab)</span>
			<ArrowUpRightIcon class="size-3.75 lg:size-4" strokeWidth={1.6} aria-hidden="true" />
		</a>
	{/if}
</div>
