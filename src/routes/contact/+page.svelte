<script lang="ts">
    import { onMount } from "svelte";
    import MailIcon from "@lucide/svelte/icons/mail";
    import LeafIcon from "@lucide/svelte/icons/leaf";

    let leaves: {
        id: number;
        x: number;
        y: number;
        rotation: number;
        scale: number;
        speed: number;
        rotationSpeed: number;
        verticalDrift: number;
        opacity: number;
    }[] = [];
    let container;
    let containerHeight = 256;
    function createLeaf() {
      return {
        id: Math.random(),
        x: -50,
        y: Math.random() * (containerHeight - 24),
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 2 + 1,
        rotationSpeed: Math.random() * 4 - 2,
        verticalDrift: Math.random() * 0.5 - 0.25,
        opacity: 1
      };
    }
    function updateLeaves() {
        leaves = leaves.map(leaf => ({
            ...leaf,
            x: leaf.x + leaf.speed,
            y: leaf.y + leaf.verticalDrift,
            rotation: leaf.rotation + leaf.rotationSpeed,
            opacity: Math.max(0, 1 - (leaf.x / 800))
        })).filter(leaf => leaf.x < 900 && leaf.opacity > 0.05);
        if (Math.random() < 0.1 && leaves.length < 15) {
            leaves = [...leaves, createLeaf()];
        }
    }
    let animationFrame: number;
    onMount(() => {
        for (let i = 0; i < 5; i++) {
            leaves = [...leaves, createLeaf()];
        }
        function animate() {
            updateLeaves();
            animationFrame = requestAnimationFrame(animate);
        }
        animate();
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    });
</script>

<div class="max-w-320 w-full flex flex-col gap-16 px-6 md:px-16">
    <div class="flex flex-row gap-16 py-32">
        <div class="basis-1/2">
            <div bind:this={container} class="relative w-full h-64 overflow-hidden rounded-lg">
                {#each leaves as leaf (leaf.id)}
                  <LeafIcon
                        class="text-emerald-500 absolute transition-all duration-100 ease-linear"
                        style="
                            left: {leaf.x}px;
                            top: {leaf.y}px;
                            transform: rotate({leaf.rotation}deg) scale({leaf.scale});
                            opacity: {leaf.opacity};
                        "
                   />
                {/each}
            </div>
        </div>

        <div class="basis-1/2 flex flex-col gap-8">
            <h1 class="text-4xl font-semibold">Contact us</h1>
            <p class="text-lg">Interested in working together? We'd love to hear from you.</p>
            <div class="flex flex-col gap-4">
                <div class="text-emerald-500 flex flex-row items-center gap-4">
                    <MailIcon />
                    <span class="text-lg">Email</span>
                </div>
                <a class="hover:text-emerald-500" href="/contact">email</a>
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
</style>
