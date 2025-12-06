// Get base path from Vite's import.meta.env.BASE_URL
export const basePath = import.meta.env.BASE_URL || "/";

// Normalize path by removing base path
export function normalizePath(path: string): string {
  if (path.startsWith(basePath)) {
    return path.slice(basePath.length - 1) || "/";
  }
  return path;
}

// Add base path to a route
export function withBasePath(path: string): string {
  if (path === "/") {
    return basePath === "/" ? "/" : basePath.slice(0, -1);
  }
  return basePath === "/" ? path : `${basePath.slice(0, -1)}${path}`;
}

