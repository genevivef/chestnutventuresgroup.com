<script lang="ts">
    import type { Snippet } from "svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import LinkedinIcon from "$lib/icons/linkedin.svelte";

    interface Props {
        name: string;
        linkedinUrl?: string;
        image: Snippet;
        role: string;
        bio: string;
    }
    let { name, linkedinUrl, image, role, bio }: Props = $props();

    function getFirst2Sentences(text: string) {
        if (typeof Intl !== "undefined" && Intl.Segmenter) {
            const seg = new Intl.Segmenter("en", { granularity: "sentence" });
            const iter = seg.segment(text)[Symbol.iterator]();
            let res = "", count = 0;
            for (let cur = iter.next(); !cur.done && count < 2; cur = iter.next()) {
                res += cur.value.segment;
                count++;
            }
            return res.trim();
        }
    }
    const shortenedBio = getFirst2Sentences(bio);

    let readMore = $state(false);
    function toggleReadMore() {
        readMore = !readMore;
    }
</script>

<Card.Root>
    <Card.Header class="flex flex-col items-center gap-6">
        <div class="size-full">
            {@render image()}
        </div>
        <div class="flex flex-row items-center gap-6">
            <Card.Title class="text-2xl font-bold">{name}</Card.Title>
            {#if linkedinUrl}
                <Button class="p-2" size="icon" variant="outline" href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <LinkedinIcon />
                </Button>
            {/if}
        </div>
    </Card.Header>
    <Card.Content>
        <p class="text-lg font-semibold text-primary text-center pb-6">{role}</p>
        <p class="text-muted-foreground leading-relaxed">{readMore ? bio : shortenedBio}</p>
        <Button class="px-0" onclick={toggleReadMore} variant="link">
            {readMore ? "Show Less" : "Read More"}
        </Button>
    </Card.Content>
</Card.Root>
