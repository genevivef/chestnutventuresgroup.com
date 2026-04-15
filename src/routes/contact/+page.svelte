<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { toast } from 'svelte-sonner';
  import MailIcon from '@lucide/svelte/icons/mail';
  import CopyIcon from '@lucide/svelte/icons/copy';

  const email = 'info@chestnutventuresgroup.com';
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      toast.error('Failed to copy, please allow clipboard access in your browser settings.');
      return;
    }
    toast.success('Email copied to clipboard!');
  }
</script>

<svelte:head>
  <title>Contact - Chestnut Ventures Group</title>
  <meta
    name="description"
    content="Get in touch with Chestnut Ventures Group. We're here to help you build enduring businesses."
  />
</svelte:head>

<div class="relative h-[50vh] w-full">
  <enhanced:img
    class="h-[50vh] w-full object-cover object-center"
    src="$lib/assets/contact/background.jpg"
    alt="Contact us"
    fetchpriority="high"
  />
  <h1
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl leading-tight font-bold text-white text-shadow-sm sm:text-6xl md:text-7xl"
  >
    Contact us
  </h1>
</div>

<div class="flex w-full max-w-336 flex-col gap-16 px-6 md:px-16">
  <div class="flex flex-col items-center gap-32 py-32 lg:flex-row">
    <div class="flex basis-1/2 flex-col gap-8">
      <h2 class="text-2xl leading-tight font-bold lg:text-3xl">Who we are</h2>
      <p class="text-base leading-relaxed text-muted-foreground lg:text-lg">
        We're a venture firm that leads Pre-Seed, Seed, and Series A rounds in standout software
        companies. With a long-term perspective and a hands-on approach, we partner early and stay
        committed—helping founders build enduring businesses that are built to last.
      </p>
      <p class="text-base leading-relaxed text-muted-foreground lg:text-lg">
        We don't just write checks—we roll up our sleeves. From product and go-to-market to
        team-building and fundraising, we work side by side with exceptional founders turning bold
        ideas into category-defining companies.
      </p>
    </div>

    <Card.Root
      class="basis-1/2 bg-linear-to-br from-teal-400/20 via-blue-400/20 to-purple-400/20"
    >
      <Card.Header>
        <Card.Title class="text-2xl leading-tight font-bold lg:text-3xl">Contact</Card.Title>
      </Card.Header>
      <Card.Content>
        <p class="text-lg leading-relaxed lg:text-xl">
          Interested in working together? We'd love to hear from you.
        </p>
      </Card.Content>
      <Card.Footer>
        <div class="flex flex-col gap-4">
          <div class="flex flex-row items-center gap-4 text-primary dark:text-teal-500">
            <MailIcon />
            <span class="text-lg">Email</span>
          </div>
          <div class="flex flex-row items-center gap-4">
            <a class="hover:text-primary dark:hover:text-teal-500 max-sm:text-sm" href={`mailto:${email}`}>{email}</a>
            <Button size="icon" variant="outline" onclick={copyEmail} aria-label="Copy email">
              <CopyIcon />
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
