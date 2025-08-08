<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import { Separator } from "$lib/components/ui/separator";
    import * as Carousel from "$lib/components/ui/carousel";
    import LinkedinIcon from "$lib/icons/linkedin.svelte";
    import { smoothScroll } from "$lib/utils";
</script>

<svelte:head>
    <title>Chestnut Ventures Group</title>
    <meta name="description" content="Backing builders of what's next. We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies." />
</svelte:head>

<div class="w-full flex flex-col items-center gap-8 bg-linear-to-b from-teal-400 dark:from-teal-800 from-50% px-8 pt-32 pb-48 md:px-32 md:py-48">
    <h1 class="text-4xl md:text-6xl font-semibold text-center text-shadow-sm">Backing builders of what's next.</h1>
    <p class="text-lg md:text-2xl text-center">We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies.</p>
    <Button class="h-12 text-lg md:text-xl hover:cursor-pointer" size="lg" onclick={() => smoothScroll("learn-more")}>
        Learn more
    </Button>
</div>

<div class="max-w-336 flex flex-col gap-32 px-6 md:px-16">

    <div class="flex flex-col gap-16 md:gap-32" id="learn-more">
        <div class="flex flex-col md:flex-row md:items-center gap-16 lg:gap-32">
            <div class="md:basis-1/2 flex flex-col gap-8">
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Investing across frontiers</h2>
                <p class="text-xl text-muted-foreground leading-relaxed">From AI and fintech to vertical SaaS and infrastructure, we partner with founders turning ambitious ideas into category-defining businesses.</p>
            </div>

            <div class="md:basis-1/2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-20 blur-3xl rounded-3xl"></div>
                <svg class="relative w-full" width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        .circle-animation {
                            transform-origin: center;
                            opacity: 0;
                            animation: riseFade 4s ease-in-out infinite;
                        }
                        @keyframes riseFade {
                            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                            20% { opacity: 1; transform: translateY(0px) scale(1.05); }
                            40% { transform: translateY(-5px) scale(1); }
                            60% { opacity: 1; }
                            80% { opacity: 0.5; transform: translateY(10px) scale(0.97); }
                            100% { opacity: 0; transform: translateY(20px) scale(0.95); }
                        }
                    </style>
                    <circle class="circle-animation fill-violet-300" cx="040" cy="320" r="10" style="animation-delay: 0.0s;" />
                    <circle class="circle-animation fill-violet-300" cx="110" cy="290" r="20" style="animation-delay: 0.5s;" />
                    <circle class="circle-animation fill-violet-300" cx="200" cy="220" r="35" style="animation-delay: 1.0s;" />
                    <circle class="circle-animation fill-violet-300" cx="310" cy="110" r="55" style="animation-delay: 1.5s;" />
                </svg>
            </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse md:items-center gap-16 lg:gap-32">
            <div class="md:basis-1/2 flex flex-col gap-8">
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Strategic partnerships at every stage</h2>
                <p class="text-xl text-muted-foreground leading-relaxed">We focus on investments at any stage where we can make the biggest impact, leading rounds and providing hands-on support.</p>
            </div>

            <div class="md:basis-1/2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-20 blur-3xl rounded-3xl"></div>
                <svg class="relative w-full" width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        .stage-animation {
                            transform-origin: center;
                            opacity: 0.3;
                            animation: stageGrow 5s ease-in-out infinite;
                        }
                        @keyframes stageGrow {
                            0%, 100% { transform: scale(1); opacity: 0.3; }
                            33% { transform: scale(1.1); opacity: 0.8; }
                            66% { transform: scale(1.05); opacity: 0.6; }
                        }
                    </style>
                    <circle class="stage-animation fill-blue-400" cx="200" cy="100" r="45" style="animation-delay: 0s;" />
                    <circle class="stage-animation fill-teal-400" cx="120" cy="200" r="50" style="animation-delay: 1.5s;" />
                    <circle class="stage-animation fill-violet-400" cx="280" cy="220" r="40" style="animation-delay: 3s;" />
                    <text x="120" y="205" text-anchor="middle" class="fill-white text-sm font-semibold">Pre-seed</text>
                    <text x="200" y="105" text-anchor="middle" class="fill-white text-sm font-semibold">Seed</text>
                    <text x="280" y="225" text-anchor="middle" class="fill-white text-sm font-semibold">Series A</text>
                </svg>
            </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-center gap-16 lg:gap-32 md:py-24">
            <div class="md:basis-1/2 flex flex-col gap-8">
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Speed without interference</h2>
                <p class="text-xl text-muted-foreground leading-relaxed">We back founders early and help them move faster. Whether it's building the first team, landing early customers, or shaping product strategy, we're here to support the journey—without getting in the way.</p>
            </div>

            <div class="md:basis-1/2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-20 blur-3xl rounded-3xl"></div>
                <svg class="relative w-full" width="600" height="150" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
                    <line class="stroke-teal-500/80" x1="100" y1="75" x2="500" y2="75" stroke-width="4" stroke-linecap="round"/>
                    <circle class="fill-teal-500/40" cx="100" cy="75" r="25"/>
                    <circle class="fill-teal-500/40" cx="300" cy="75" r="25"/>
                    <circle class="fill-teal-500/40" cx="500" cy="75" r="25"/>
                    <circle class="fill-teal-500/80" cy="75" r="12">
                        <animate attributeName="cx"
                            values="100;100;500;500"
                            keyTimes="0;0.5;0.9;1"
                            dur="5s"
                            repeatCount="indefinite"/>
                        <animate attributeName="opacity"
                            values="0;0;1;1;0"
                            keyTimes="0;0.4;0.5;0.9;1"
                            dur="5s"
                            repeatCount="indefinite"/>
                    </circle>
                </svg>
            </div>
        </div>
    </div>

    <Separator />

    <div class="flex flex-col items-center gap-12">
        <div class="max-w-192 flex flex-col gap-4">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-center">Companies we've backed</h2>
            <p class="text-xl leading-relaxed text-center text-muted-foreground">We're proud to partner with exceptional founders building the future across various industries and stages.</p>
        </div>

        <Carousel.Root class="max-md:max-w-80">
            <div class="flex justify-between items-center gap-4 pb-8">
                <p class="text-lg font-semibold text-muted-foreground">Portfolio</p>
                <div class="flex gap-4">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <Carousel.Content>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://www.deepen.ai/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/deepen.png" alt="Deepen AI Logo" />
                        <p class="group-hover:underline text-lg font-semibold">Deepen AI</p>
                    </a>
                </Carousel.Item>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://transastra.com/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/transastra.png" alt="TransAstra Logo" />
                        <p class="group-hover:underline text-lg font-semibold">TransAstra</p>
                    </a>
                </Carousel.Item>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://pathcisionmedicine.com/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/pathcision.png" alt="PathCision Medicine Logo" />
                        <p class="group-hover:underline text-lg font-semibold">PathCision Medicine</p>
                    </a>
                </Carousel.Item>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://www.leanplum.com/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/leanplum.png" alt="Leanplum Logo" />
                        <p class="group-hover:underline text-lg font-semibold">Leanplum</p>
                    </a>
                </Carousel.Item>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://www.saga.xyz/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/saga.png" alt="Saga Logo" />
                        <p class="group-hover:underline text-lg font-semibold">Saga</p>
                    </a>
                </Carousel.Item>
                <Carousel.Item class="basis-full md:basis-1/3">
                    <a class="group flex flex-col gap-4" href="https://www.getdor.com/" target="_blank" rel="noopener noreferrer">
                        <enhanced:img class="rounded-lg" src="$lib/assets/portfolio/dor.png" alt="Dor Logo" />
                        <p class="group-hover:underline text-lg font-semibold">Dor</p>
                    </a>
                </Carousel.Item>
            </Carousel.Content>
        </Carousel.Root>
    </div>

    <Separator />

    <div class="flex flex-col items-center gap-12">
        <div class="max-w-192 flex flex-col gap-4">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-center">Meet the team</h2>
            <p class="text-xl leading-relaxed text-center text-muted-foreground">Experienced investors and operators committed to helping founders build exceptional companies.</p>
        </div>

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
                    <div class="flex flex-row items-center justify-between gap-4">
                        <Card.Title class="text-xl">Ricky Fiel</Card.Title>
                        <Button class="p-2" size="icon" variant="outline" href="https://www.linkedin.com/in/rickyfiel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <LinkedinIcon />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Content>
                    <p class="text-lg pb-6">Co-Founder & General Partner</p>
                    <p class="text-sm text-muted-foreground">With more than 20 years of experience in executive leadership roles, Ricky brings a broad and diverse background across multiple roles and companies. He has played a key role in scaling high-growth tech organizations spanning SaaS, gaming, and crypto. Since becoming a Limited Partner at Maple VC in 2018, Ricky has made significant investments in companies such as Deepen.AI, Leanplum, Saga, and GetDor (acquired by Constellation Labs).</p>
                </Card.Content>
            </Card.Root>

            <Card.Root>
                <Card.Header>
                    <enhanced:img class="w-full aspect-square rounded-lg mb-6" src="$lib/assets/team/genevive-fiel.jpeg" alt="Genevive Fiel" />
                    <div class="flex flex-row items-center justify-between gap-4">
                        <Card.Title class="text-xl">Genevive Fiel</Card.Title>
                        <Button class="p-2" size="icon" variant="outline" href="https://www.linkedin.com/in/genevive-fiel-4822866a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <LinkedinIcon />
                        </Button>
                    </div>
                </Card.Header>
                <Card.Content>
                    <p class="text-lg pb-6">Founder & Managing Partner</p>
                    <p class="text-sm text-muted-foreground">Genevive brings more than 10 years of expertise in People Operations. Having led Recruiting and HR functions across companies at various stages of startup growth on a global scale. Her investment philosophy is deeply rooted in cultivating long term partnerships with Founders. As a strategic partner, supporting entrepreneurs not only in realizing their vision, but also in building foundational processes, scaling operations and helping recruit top-tier talent—positioning teams for sustainable growth and long-term impact.</p>
                </Card.Content>
            </Card.Root>
        </div>
    </div>

    <Separator />

</div>
