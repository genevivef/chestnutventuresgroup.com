// `@sveltejs/enhanced-img` only types imports ending in `?enhanced`. This covers
// ones with directives in front, like `image.png?w=1320;640&enhanced`.
declare module '*&enhanced' {
  import type { Picture } from 'vite-imagetools';

  const value: Picture;
  export default value;
}
