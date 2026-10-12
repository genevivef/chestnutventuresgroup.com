<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import Logo from './logo.svelte';

  const links = [
    { href: resolve('/'), label: 'Home', class: 'max-sm:hidden' },
    { href: resolve('/contact'), label: 'Contact', class: '' }
  ];
</script>

<header class="wrap flex h-18 items-center justify-between gap-1 lg:h-26">
  <a
    href={resolve('/')}
    class="inline-flex min-h-11 min-w-0 items-center gap-2.5 max-[379px]:gap-2 lg:gap-4"
    aria-label="Chestnut Ventures Group, home"
  >
    <Logo class="h-5.5 max-[379px]:h-5 lg:h-7.5" />
    <span
      class="text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap text-foreground max-[379px]:text-[13px] max-[379px]:leading-tight max-[379px]:text-balance max-[379px]:whitespace-normal lg:text-lg"
    >
      Chestnut Ventures Group
    </span>
  </a>

  <nav aria-label="Main" class="shrink-0">
    <ul class="-mr-3 flex max-[379px]:-mr-2 lg:mr-0 lg:gap-1">
      {#each links as link (link.href)}
        <li class={link.class}>
          <a
            href={link.href}
            aria-current={page.url.pathname === link.href ? 'page' : undefined}
            class="inline-flex min-h-11 items-center px-3 text-base max-[379px]:px-2 font-[450] decoration-[1.5px] underline-offset-6 aria-[current=page]:underline lg:px-3.5 lg:underline-offset-7"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
