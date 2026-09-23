/**
 * Prefix a root-relative site path with Astro's configured `base`.
 * Accepts paths like `/survey` or `/images/foo.png`.
 * Leaves absolute http(s) and mailto: URLs unchanged.
 */
export function withBase(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+/, "");
  return `${base}${normalized}`;
}

/**
 * Strip the configured base prefix from a pathname for local route matching.
 */
export function withoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  let path = pathname;
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }
  return path.replace(/\/+$/, "") || "/";
}
