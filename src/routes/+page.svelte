<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import { Separator } from "$lib/components/ui/separator";
    import * as Carousel from "$lib/components/ui/carousel";

    import { smoothScroll } from "$lib/utils";
</script>

<div class="w-full flex flex-col items-center gap-8 bg-linear-to-b from-emerald-400 from-30% px-8 py-16 md:p-32">
    <h1 class="text-4xl md:text-6xl font-semibold text-center text-shadow-sm">Backing builders of what's next.</h1>
    <p class="text-lg md:text-2xl text-center">We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies.</p>
    <Button class="h-12 text-lg md:text-xl hover:cursor-pointer" size="lg" onclick={() => smoothScroll("learn-more")}>
        Learn more
    </Button>
</div>

<div class="max-w-320 flex flex-col gap-16 px-6 md:px-16">

    <div class="flex flex-col md:flex-row md:items-center gap-16 lg:gap-32 pt-16" id="learn-more">
        <div class="md:basis-1/2 flex flex-col gap-8">
            <h3 class="text-4xl font-semibold">Investing across frontiers</h3>
            <p class="text-lg mb-8">From AI and fintech to vertical SaaS and infrastructure, we partner with founders turning ambitious ideas into category-defining businesses.</p>

            <h3 class="text-4xl font-semibold">Speed without interference</h3>
            <p class="text-lg">We back founders early and help them move faster. Whether it's building the first team, landing early customers, or shaping product strategy, we're here to support the journey—without getting in the way.</p>
        </div>

        <div class="md:basis-1/2 flex flex-col gap-16 md:gap-32">
            <Card.Root>
                <Card.Header>
                    <Card.Title class="text-2xl">Sectors</Card.Title>
                </Card.Header>
                <Card.Content>
                    <div class="grid grid-cols-2 xl:flex gap-4">
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
                    <div class="grid grid-cols-2 xl:flex gap-4">
                        <Badge class="text-lg">Pre-seed</Badge>
                        <Badge class="text-lg">Seed</Badge>
                        <Badge class="text-lg">Series A</Badge>
                    </div>
                </Card.Content>
            </Card.Root>
        </div>
    </div>

    <Separator />

    <Carousel.Root class="max-md:max-w-80">
        <div class="flex justify-between pb-8">
            <h2 class="text-2xl font-semibold">Portfolio</h2>
            <div class="flex gap-4">
                <Carousel.Previous />
                <Carousel.Next />
            </div>
        </div>

        <Carousel.Content>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/deepen.png" alt="Deepen.AI" />
                <p class="pt-4">Deepen AI</p>
            </Carousel.Item>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/transastra.png" alt="TransAstra" />
                <p class="pt-4">TransAstra</p>
            </Carousel.Item>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/dor.png" alt="Dor" />
                <p class="pt-4">Dor</p>
            </Carousel.Item>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/leanplum.png" alt="Leanplum" />
                <p class="pt-4">Leanplum</p>
            </Carousel.Item>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/saga.png" alt="Saga" />
                <p class="pt-4">Saga</p>
            </Carousel.Item>
            <Carousel.Item class="basis-full md:basis-1/3">
                <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/pathcision.png" alt="PathCision Medicine" />
                <p class="pt-4">PathCision Medicine</p>
            </Carousel.Item>
        </Carousel.Content>
    </Carousel.Root>

    <Separator />

    <div class="flex flex-col gap-8">
        <h2 class="text-2xl font-semibold">Our team</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card.Root>
                <Card.Header>
                    <enhanced:img class="w-full aspect-auto rounded-lg mb-6" src="$lib/assets/team/tiffany-phan.jpeg" alt="Tiffany Phan" />
                    <Card.Title class="text-xl">Tiffany Phan</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p class="text-lg pb-6">Founder & Managing Partner</p>
                    <p class="text-sm text-muted-foreground">
                        Tiffany Phan brings two decades of experience bridging institutional capital and high-growth technology. She previously co-managed a $4.5B portfolio at Stamos Capital Partners, leading global investment underwriting across hedge funds, private equity, and venture-backed companies. Earlier, she oversaw $13B in client assets at Deutsche Bank's investment management group.
                        <br /><br />
                        On the operating side, Tiffany has built and scaled finance, fundraising, and international operations at SaaS companies including UserTesting (IPO), Bestow, Machinify, and Nuffsaid (acquired by ClickUp).
                    </p>
                </Card.Content>
            </Card.Root>

            <Card.Root>
                <Card.Header>
                    <enhanced:img class="w-full aspect-square rounded-lg mb-6" src="$lib/assets/team/ricky-fiel.jpeg" alt="Ricky Fiel" />
                    <Card.Title class="text-xl">Ricky Fiel</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p class="text-lg pb-6">Co-Founder & General Partner</p>
                    <p class="text-sm text-muted-foreground">With over 20 years of experience in executive leadership roles, Ricky has a diverse experience in various roles and different companies over the years. He has been instrumental in helping scale organizations in high growth tech companies in SaaS, gaming and crypto industry. In 2018 Ricky started as a Limited Partner at Maple VC and has made significant investments in companies such as Deepen.Ai, Leanplum, Saga, GetDor (acquired by Constellation Labs).</p>
                </Card.Content>
            </Card.Root>

            <Card.Root>
                <Card.Header>
                    <enhanced:img class="w-full aspect-square rounded-lg mb-6" src="$lib/assets/team/genevive-fiel.jpeg" alt="Genevive Fiel" />
                    <Card.Title class="text-xl">Genevive Fiel</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p class="text-lg pb-6">Founder & Managing Partner</p>
                    <p class="text-sm text-muted-foreground">Her expertise is helping companies recruit stellar talent and preparing the organization to scale.</p>
                </Card.Content>
            </Card.Root>
        </div>
    </div>

    <Separator />

</div>
