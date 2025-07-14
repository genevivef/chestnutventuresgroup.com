<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
</script>

<div class="w-full flex flex-col items-center gap-8 bg-linear-to-b from-emerald-300 from-50% p-32">
    <h1 class="text-6xl font-semibold text-center">Backing builders of what's next.</h1>
    <p class="text-2xl text-center">We're an early-stage venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies.</p>
    <Button class="h-12 text-xl" size="lg" href="#about">
        Learn more
    </Button>
</div>

<div class="flex flex-col md:flex-row items-center gap-32 px-16">
    <div class="md:basis-1/2 flex flex-col gap-8">
        <h3 class="text-4xl font-semibold">Investing across frontiers</h3>
        <p class="text-lg mb-8">From AI and fintech to vertical SaaS and infrastructure, we partner with founders turning ambitious ideas into category-defining businesses.</p>

        <h3 class="text-4xl font-semibold">Speed without interference</h3>
        <p class="text-lg">We back founders early and help them move faster. Whether it's building the first team, landing early customers, or shaping product strategy, we're here to support the journey—without getting in the way.</p>
    </div>

    <div class="md:basis-1/2 flex flex-col gap-32">
        <Card.Root>
            <Card.Header>
                <Card.Title class="text-2xl">Sectors</Card.Title>
            </Card.Header>
            <Card.Content>
                <div class="flex gap-4">
                    <Badge variant="secondary" class="text-lg">AI</Badge>
                    <Badge variant="secondary" class="text-lg">Fintech</Badge>
                    <Badge variant="secondary" class="text-lg">Vertical SaaS</Badge>
                    <Badge variant="secondary" class="text-lg">Infrastructure</Badge>
                </div>
            </Card.Content>
        </Card.Root>

        <Card.Root>
            <Card.Header>
                <Card.Title class="text-2xl">Investment focus</Card.Title>
            </Card.Header>
            <Card.Content>
                <div class="flex gap-4">
                    <Badge class="text-lg">Pre-seed</Badge>
                    <Badge class="text-lg">Seed</Badge>
                    <Badge class="text-lg">Series A</Badge>
                </div>
            </Card.Content>
        </Card.Root>
    </div>
</div>
