import { origin } from '#lib/site.js';

export const prerender = true;

const paths = ['/', '/contact'];

export function GET() {
	const urls = paths.map((path) => `\t<url><loc>${new URL(path, origin).href}</loc></url>`).join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
