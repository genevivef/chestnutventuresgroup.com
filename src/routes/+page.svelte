<script lang="ts">
  import { resolve } from '$app/paths';
  import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import { Button } from '#lib/components/ui/button/index.js';
  import FieldSection from '#lib/components/home/field-section.svelte';
  import FrontiersGraphic from '#lib/components/home/frontiers-graphic.svelte';
  import StagesGraphic from '#lib/components/home/stages-graphic.svelte';
  import TimelineGraphic from '#lib/components/home/timeline-graphic.svelte';
  import SectionHeader from '#lib/components/home/section-header.svelte';
  import Seo from '#lib/components/site/seo.svelte';
  import { origin, siteName } from '#lib/site.js';
  import TeamMember, { type Member } from '#lib/components/home/team-member.svelte';
  import deepen from '#lib/assets/portfolio/deepen.png?w=1320;960;640;400&enhanced';
  import transastra from '#lib/assets/portfolio/transastra.png?w=1320;960;640;400&enhanced';
  import pathcision from '#lib/assets/portfolio/pathcision.png?w=1320;960;640;400&enhanced';
  import leanplum from '#lib/assets/portfolio/leanplum.png?w=1320;960;640;400&enhanced';
  import saga from '#lib/assets/portfolio/saga.png?w=1320;960;640;400&enhanced';
  import dor from '#lib/assets/portfolio/dor.png?w=1320;960;640;400&enhanced';
  import tiffany from '#lib/assets/team/tiffany-phan.jpeg?w=1040;800;560;400&enhanced';
  import ricky from '#lib/assets/team/ricky-fiel.jpeg?w=542;400&enhanced';
  import genevive from '#lib/assets/team/genevive-fiel.jpeg?w=1040;800;560;400&enhanced';

  const fields = [
    { href: '#frontiers', label: 'Investing across frontiers', key: 'bg-violet-vivid' },
    { href: '#stages', label: 'Strategic partnerships at every stage', key: 'bg-blue-vivid' },
    { href: '#speed', label: 'Speed without interference', key: 'bg-teal-vivid' }
  ];

  const companies = [
    { name: 'Deepen AI', domain: 'deepen.ai', href: 'https://www.deepen.ai/', logo: deepen },
    {
      name: 'TransAstra',
      domain: 'transastra.com',
      href: 'https://transastra.com/',
      logo: transastra
    },
    {
      name: 'PathCision Medicine',
      domain: 'pathcisionmedicine.com',
      href: 'https://pathcisionmedicine.com/',
      logo: pathcision
    },
    { name: 'Leanplum', domain: 'leanplum.com', href: 'https://www.leanplum.com/', logo: leanplum },
    { name: 'Saga', domain: 'saga.xyz', href: 'https://www.saga.xyz/', logo: saga },
    { name: 'Dor', domain: 'getdor.com', href: 'https://www.getdor.com/', logo: dor }
  ];

  const team: Member[] = [
    {
      name: 'Tiffany Phan',
      role: 'Founder & Managing Partner',
      photo: tiffany,
      bio: 'Tiffany Phan brings two decades of experience bridging institutional capital and high-growth technology. She previously co-managed a $4.5B portfolio at Stamos Capital Partners, leading global investment underwriting across hedge funds, private equity, and venture-backed companies.',
      more: 'Earlier, she oversaw $13B in client assets at Deutsche Bank’s investment management group.',
      extra: [
        'On the operating side, Tiffany has built and scaled finance, fundraising, and international operations at SaaS companies including UserTesting (IPO), Bestow, Machinify, and Nuffsaid (acquired by ClickUp).'
      ]
    },
    {
      name: 'Ricky Fiel',
      role: 'Co-Founder & General Partner',
      photo: ricky,
      bio: 'With more than 20 years of experience in executive leadership roles, Ricky brings a broad and diverse background across multiple roles and companies. He has played a key role in scaling high-growth tech organizations spanning SaaS, gaming, and crypto.',
      more: 'Since becoming a Limited Partner at Maple VC in 2018, Ricky has made significant investments in companies such as Deepen.AI, Leanplum, Saga, and GetDor (acquired by Constellation Labs).',
      linkedin: 'https://www.linkedin.com/in/rickyfiel'
    },
    {
      name: 'Genevive Fiel',
      role: 'Founder & Managing Partner',
      photo: genevive,
      bio: 'Genevive brings more than 10 years of expertise in People Operations. Having led Recruiting and HR functions across companies at various stages of startup growth on a global scale.',
      more: 'Her investment philosophy is deeply rooted in cultivating long term partnerships with Founders. As a strategic partner, supporting entrepreneurs not only in realizing their vision, but also in building foundational processes, scaling operations and helping recruit top-tier talent—positioning teams for sustainable growth and long-term impact.',
      linkedin: 'https://www.linkedin.com/in/genevive-fiel-4822866a'
    }
  ];

  // schema.org data for search engines: who the firm is and who founded it.
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: siteName,
        url: `${origin}/`,
        logo: `${origin}/logo.png`,
        email: 'info@chestnutventuresgroup.com',
        description:
          'We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies.',
        founder: team.map((member) => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role,
          sameAs: member.linkedin
        }))
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: siteName,
        url: `${origin}/`,
        publisher: { '@id': `${origin}/#organization` }
      }
    ]
  };

  // Escaping `<` keeps the JSON from closing the script tag early.
  const jsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<Seo
  description="Backing builders of what’s next. We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software companies."
/>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

<section class="wrap pt-14 pb-16 lg:pt-30 lg:pb-0" aria-labelledby="hero-heading">
  <h1 id="hero-heading" class="max-w-[10.5em] text-display font-normal text-balance">
    Backing builders of what’s next.
  </h1>
  <div class="mt-8 lg:mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
    <p class="max-w-[31ch] text-lead lg:col-span-6">
      We are a venture firm that leads Pre-Seed, Seed and Series A rounds in standout software
      companies.
    </p>
    <a
      href="#frontiers"
      class="mt-5 inline-flex min-h-12 items-center gap-2.5 text-base font-medium lg:col-span-4 lg:col-start-9 lg:mt-0 lg:gap-3 lg:justify-self-end"
    >
      <span class="underline decoration-[1.5px] underline-offset-6">Learn more</span>
      <ArrowDownIcon class="size-[17px] lg:size-[18px]" strokeWidth={1.6} aria-hidden="true" />
    </a>
  </div>

  <nav aria-label="On this page" class="mt-14 lg:mt-34">
    <ul class="border-b lg:grid lg:grid-cols-3 lg:gap-x-6 lg:border-b-0">
      {#each fields as field (field.href)}
        <li>
          <a
            href={field.href}
            class="flex min-h-15 items-center gap-3.5 border-t text-base font-medium lg:flex-col lg:items-stretch lg:gap-[18px] lg:border-t-0 lg:pb-7 lg:tracking-[-0.005em]"
          >
            <span class={['block size-3.5 shrink-0 lg:h-2 lg:w-full', field.key]}></span>
            <span class="flex flex-1 items-center justify-between gap-4">
              {field.label}
              <ArrowDownIcon
                class="size-[17px] shrink-0 lg:size-[18px]"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</section>

<FieldSection
  id="frontiers"
  tone="violet"
  title="Investing across frontiers"
  body="From AI and fintech to vertical SaaS and infrastructure, we partner with founders turning ambitious ideas into category-defining businesses."
>
  {#snippet graphic()}
    <FrontiersGraphic />
  {/snippet}
</FieldSection>

<FieldSection
  id="stages"
  tone="blue"
  title="Strategic partnerships at every stage"
  body="We focus on investments at any stage where we can make the biggest impact, leading rounds and providing hands-on support."
>
  {#snippet graphic()}
    <StagesGraphic />
  {/snippet}
</FieldSection>

<FieldSection
  id="speed"
  tone="teal"
  title="Speed without interference"
  body="We back founders early and help them move faster. Whether it’s building the first team, landing early customers, or shaping product strategy, we’re here to support the journey—without getting in the way."
>
  {#snippet graphic()}
    <TimelineGraphic />
  {/snippet}
</FieldSection>

<section class="wrap pt-24 lg:pt-40" aria-labelledby="companies-heading">
  <SectionHeader
    id="companies-heading"
    title="Companies we’ve backed"
    description="We’re proud to partner with exceptional founders building the future across various industries and stages."
  />
  <ul class="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 lg:mt-24 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-18">
    {#each companies as company (company.href)}
      <li>
        <a href={company.href} target="_blank" rel="noopener" class="group block">
          <enhanced:img
            src={company.logo}
            alt=""
            sizes="(min-width: 1024px) min(30vw, 411px), (min-width: 560px) 252px, calc(50vw - 28px)"
            loading="lazy"
            class="block aspect-video h-auto w-full object-cover"
          />
          <span class="flex items-start justify-between gap-2 pt-4 lg:gap-4 lg:pt-6">
            <span>
              <span
                class="block text-[17px] leading-tight font-medium tracking-[-0.01em] lg:text-[26px] lg:leading-[1.2] lg:tracking-[-0.018em]"
              >
                {company.name}
              </span>
              <span class="mt-1 hidden text-base text-muted-foreground lg:block"
                >{company.domain}</span
              >
              <span class="sr-only">(opens in a new tab)</span>
            </span>
            <ArrowUpRightIcon
              class="mt-0.5 size-4 shrink-0 text-muted-foreground group-hover:text-primary-hover lg:mt-2 lg:size-[18px]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<section class="wrap pt-24 lg:pt-40" aria-labelledby="team-heading">
  <SectionHeader
    id="team-heading"
    title="Meet the team"
    description="Experienced investors and operators committed to helping founders build exceptional companies."
  />
  <ul class="mt-12 flex flex-col gap-14 lg:mt-24 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-6">
    {#each team as member (member.name)}
      <li><TeamMember {member} /></li>
    {/each}
  </ul>
</section>

<section class="wrap py-24 lg:py-40" aria-labelledby="closing-heading">
  <h2 id="closing-heading" class="max-w-[9em] text-closing font-normal text-balance">
    Ready to build the future?
  </h2>
  <div class="mt-6 lg:mt-14 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
    <p class="max-w-[38ch] text-body-lg lg:col-span-6">
      We’re always looking for exceptional founders with bold ideas. Contact us to start working
      together and build something extraordinary.
    </p>
    <Button
      href={resolve('/contact')}
      size="xl"
      class="mt-9 w-full lg:col-span-4 lg:col-start-9 lg:mt-0 lg:h-15 lg:w-auto lg:gap-3.5 lg:justify-self-end lg:px-7.5"
    >
      Get in touch
      <ArrowRightIcon data-icon="inline-end" strokeWidth={1.6} />
    </Button>
  </div>
</section>
