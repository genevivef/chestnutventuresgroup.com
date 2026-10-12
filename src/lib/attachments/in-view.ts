import type { Attachment } from 'svelte/attachments';

/**
 * Tracks whether an element is on screen through `data-inview` and whether it
 * has been on screen yet through `data-seen`. `layout.css` uses these to hold a
 * graphic's animations until it is first seen and to pause them while it is off
 * screen. Without JavaScript neither attribute is set, so animations just run.
 */
export const inView: Attachment<HTMLElement> = (node) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			node.dataset.inview = String(entry.isIntersecting);
			if (entry.isIntersecting) node.dataset.seen = 'true';
			else if (node.dataset.seen !== 'true') node.dataset.seen = 'false';
		},
		{ threshold: 0.2 }
	);
	observer.observe(node);

	return () => observer.disconnect();
};
