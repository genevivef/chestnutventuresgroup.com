import type { Attachment } from 'svelte/attachments';

/**
 * Tracks whether an element is on screen through `data-inview`. `layout.css`
 * pauses a graphic's animations while it is off screen, so they play once it
 * scrolls into view. Without JavaScript the attribute is never set, so
 * animations just run.
 */
export const inView: Attachment<HTMLElement> = (node) => {
  let seen = false;

  const observer = new IntersectionObserver(
    (entries) => {
      // Entries arrive oldest first; the last one is the current state.
      const entry = entries.at(-1);
      if (!entry) return;

      node.dataset.inview = String(entry.isIntersecting);
      if (entry.isIntersecting) {
        seen = true;
      } else if (!seen) {
        // Animations start on first paint, before this runs. Rewind them so the
        // entrance plays from its first frame when the graphic is first seen.
        for (const animation of node.getAnimations({ subtree: true })) animation.currentTime = 0;
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(node);

  return () => observer.disconnect();
};
