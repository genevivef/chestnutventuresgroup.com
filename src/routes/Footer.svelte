<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import { resetMode, setMode } from "mode-watcher";

    const currentYear = new Date().getFullYear();
</script>

<footer class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 p-8">
    <div class="flex flex-row items-center gap-2 text-sm">
        <enhanced:img src="$lib/assets/cvg-logo.png" alt="Chestnut Ventures Group Logo" class="max-h-8 w-auto rounded-lg" />
        &copy; {currentYear} Chestnut Ventures Group
    </div>
    <div class="max-md:w-full flex flex-row max-md:justify-between items-center gap-16">
        <Button variant="link" href="/contact">Contact</Button>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger class={buttonVariants({ variant: "outline", size: "icon" })}>
                <SunIcon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
                <DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item>
                <DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
                <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</footer>
