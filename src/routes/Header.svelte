<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
</script>

<header class="flex flex-row items-center justify-between p-6">
    <a class="md:basis-1/6" href="/" aria-label="Home">
        <enhanced:img class="max-h-12 w-auto rounded-lg" src="$lib/assets/cvg-logo.png" alt="Chestnut Ventures Group Logo" />
    </a>

    <NavigationMenu.Root class="max-md:hidden">
        <NavigationMenu.List>
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="#about" class={navigationMenuTriggerStyle()}>About</a>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="#contact" class={navigationMenuTriggerStyle()}>Contact</a>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>

    <div class="md:basis-1/6"></div>
</header>
