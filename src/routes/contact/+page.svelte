<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { toast } from "svelte-sonner";
    import MailIcon from "@lucide/svelte/icons/mail";
    import CopyIcon from "@lucide/svelte/icons/copy";

    const email = "info@chestnutventuresgroup.com";
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            toast.error("Failed to copy, please allow clipboard access in your browser settings.");
            return;
        }
        toast.success("Email copied to clipboard!");
    }
</script>

<svelte:head>
    <title>Contact - Chestnut Ventures Group</title>
    <meta name="description" content="Get in touch with Chestnut Ventures Group. We're here to help you build enduring businesses." />
</svelte:head>

<div class="relative w-full h-[50vh]">
    <enhanced:img class="w-full h-[50vh] object-cover object-center" src="$lib/assets/contact/background.jpg" alt="Contact us" />
    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl md:text-6xl text-white text-shadow-sm font-semibold">Contact us</h1>
</div>

<div class="max-w-320 w-full flex flex-col gap-16 px-6 md:px-16">
    <div class="flex flex-col md:flex-row gap-32 py-32">
        <div class="basis-1/2 flex flex-col gap-8">
            <h2 class="text-4xl font-semibold">Who we are</h2>
            <p>We're a venture firm that leads Pre-Seed, Seed, and Series A rounds in standout software companies. With a long-term perspective and a hands-on approach, we partner early and stay committed—helping founders build enduring businesses that are built to last.</p>
            <p>We don't just write checks—we roll up our sleeves. From product and go-to-market to team-building and fundraising, we work side by side with exceptional founders turning bold ideas into category-defining companies.</p>
        </div>

        <Card.Root class="basis-1/2 bg-gradient-to-b from-teal-100 dark:from-teal-950">
            <Card.Header>
                <Card.Title class="text-2xl">Contact</Card.Title>
            </Card.Header>
            <Card.Content>
                <p class="text-lg">Interested in working together? We'd love to hear from you.</p>
            </Card.Content>
            <Card.Footer>
                <div class="flex flex-col gap-4">
                    <div class="text-teal-500 flex flex-row items-center gap-4">
                        <MailIcon />
                        <span class="text-lg">Email</span>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <a class="max-md:text-sm hover:text-teal-500" href={`mailto:${email}`}>{email}</a>
                        <Button size="icon" variant="outline" onclick={copyEmail}>
                            <CopyIcon />
                        </Button>
                    </div>
                </div>
            </Card.Footer>
        </Card.Root>
    </div>
</div>
