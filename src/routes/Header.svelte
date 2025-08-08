<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import MenuIcon from "@lucide/svelte/icons/menu";
</script>

<header class="max-w-336 w-full flex flex-row items-center justify-between p-4 md:p-6">
    <a class="flex flex-row items-center gap-2 md:gap-4" href="/" aria-label="Home">
        <enhanced:img class="max-h-8 md:max-h-12 w-auto rounded-lg" src="$lib/assets/cvg-logo.png" alt="Chestnut Ventures Group Logo" />
        <span class="text-lg md:text-2xl font-semibold">Chestnut Ventures Group</span>
    </a>

    <NavigationMenu.Root class="max-md:hidden">
        <NavigationMenu.List>
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="/" class={navigationMenuTriggerStyle()}>Home</a>
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

    <div class="md:hidden">
        <Sheet.Root>
            <Sheet.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })} aria-label="Menu">
                <MenuIcon />
            </Sheet.Trigger>
            <Sheet.Content side="right">
                <div class="size-full flex flex-col items-center justify-center gap-8">
                    <!--TODO: change to nav element-->
                    <Sheet.Close class="w-full">
                        <Button class="w-full" variant="ghost" size="lg" href="/">
                            Home
                        </Button>
                    </Sheet.Close>
                    <Sheet.Close class="w-full">
                        <Button class="w-full" variant="ghost" size="lg" href="/contact">
                            Contact
                        </Button>
                    </Sheet.Close>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    </div>
</header>
