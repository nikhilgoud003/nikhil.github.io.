/** Prefix local public/ asset paths for GitHub Pages base URL */
const BASE = import.meta.env.BASE_URL;

export function asset(path: string): string {
  return `${BASE}${path.replace(/^\//, "")}`;
}
