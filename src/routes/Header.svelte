<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import { smoothScroll } from "$lib/utils";
</script>

<header class="flex flex-row items-center justify-between p-4 md:p-6">
    <a class="flex flex-row items-center gap-4" href="/" aria-label="Home">
        <enhanced:img class="max-h-10 md:max-h-12 w-auto rounded-lg" src="$lib/assets/cvg-logo.png" alt="Chestnut Ventures Group Logo" />
        <span class="text-lg md:text-2xl font-semibold">Chestnut Ventures Group</span>
    </a>

    <NavigationMenu.Root class="max-md:hidden">
        <NavigationMenu.List>
            <NavigationMenu.Item onclick={() => smoothScroll("learn-more")}>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <span class={["hover:cursor-pointer", navigationMenuTriggerStyle()]}>About</span>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="/contact" class={navigationMenuTriggerStyle()}>Contact</a>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>

    <div class="md:hidden"></div>
</header>
