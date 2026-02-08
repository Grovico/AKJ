import { withBasePath } from "./basePath";
import { productCategories } from "./data";

const SITE_NAME = "JEGANATHAN Jeyam Traders";
const DEFAULT_DESCRIPTION =
  "35 years of excellence in construction materials. Premium supplier of sand, stone, aggregates, and raw salts across Tamil Nadu.";

export type SEOConfig = {
  title: string;
  description: string;
  /** Optional path (no base path). Defaults to current path. */
  path?: string;
};

const defaultImage = "/akj-logo.png";

function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin + (import.meta.env.BASE_URL || "");
  }
  return "";
}

function getCanonicalPath(path: string): string {
  const normalized = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return withBasePath(normalized || "/");
}

export function getSEOForPath(path: string): SEOConfig {
  const normalized = path.replace(/\/$/, "") || "/";

  if (normalized === "/") {
    return {
      title: `${SITE_NAME} | Premium Construction Materials Supplier - 35 Years of Excellence`,
      description:
        "JEGANATHAN Jeyam Traders - 35 years of excellence in construction materials. Premium supplier of sand, stone, aggregates, and raw salts across Tamil Nadu. Trusted by major construction firms including CMK Construction, URC Construction, and Sunex Concrete.",
    };
  }
  if (normalized === "/about") {
    return {
      title: `About Us | ${SITE_NAME}`,
      description:
        "Learn about Jeyam Traders' 35+ years in construction materials. Our story, milestones, and commitment to quality sand, stone, and aggregate supply across Tamil Nadu.",
    };
  }
  if (normalized === "/contact") {
    return {
      title: `Contact Us | ${SITE_NAME}`,
      description:
        "Get in touch with Jeyam Traders for bulk orders, quotes, and delivery of sand, stone, aggregates, and raw salt. Ramanathapuram & Thoothukudi, Tamil Nadu. +91 9442233290.",
    };
  }
  if (normalized === "/projects") {
    return {
      title: `Major Projects | ${SITE_NAME}`,
      description:
        "Showcasing our successful partnerships with leading construction companies across Tamil Nadu. Building, commercial, and residential projects.",
    };
  }
  if (normalized === "/products") {
    return {
      title: `Products | ${SITE_NAME}`,
      description:
        "Browse our range of construction materials: river sand, M-sand, plastering sand, crushed stone, aggregates, and industrial raw salt. Quality assured, B2B supply across Tamil Nadu.",
    };
  }
  const productsMatch = normalized.match(/^\/products\/(.+)$/);
  if (productsMatch) {
    const categoryId = productsMatch[1];
    const category = productCategories.find((c) => c.id === categoryId);
    const name = category?.name ?? categoryId;
    return {
      title: `${name} | Products | ${SITE_NAME}`,
      description:
        category?.description ??
        `Quality ${name.toLowerCase()} and construction materials from Jeyam Traders. Bulk supply across Tamil Nadu.`,
    };
  }

  return {
    title: `${SITE_NAME} | Construction Materials`,
    description: DEFAULT_DESCRIPTION,
  };
}

export function applySEO(config: SEOConfig): void {
  const baseUrl = getBaseUrl();
  const path = config.path ?? (typeof window !== "undefined" ? window.location.pathname : "");
  const canonicalPath = getBaseUrl() ? getBaseUrl() + getCanonicalPath(path) : "";

  document.title = config.title;

  setMeta("name", "description", config.description);
  setMeta("property", "og:title", config.title);
  setMeta("property", "og:description", config.description);
  setMeta("property", "og:type", "website");
  if (baseUrl && canonicalPath) {
    setMeta("property", "og:url", canonicalPath);
  }
  setMeta("property", "og:image", baseUrl ? baseUrl + defaultImage : defaultImage);
  setMeta("property", "og:site_name", SITE_NAME);

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", config.title);
  setMeta("name", "twitter:description", config.description);

  updateCanonical(canonicalPath);
}

function setMeta(
  attr: "name" | "property",
  key: string,
  value: string
): void {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function updateCanonical(href: string): void {
  if (!href) return;
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function getOrganizationJsonLd(): object {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: baseUrl || undefined,
    telephone: "+91-9442233290",
    email: "akjeyamtraders6@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressLocality: "Ramanathapuram & Thoothukudi Districts",
      addressCountry: "IN",
    },
    areaServed: "Tamil Nadu",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    image: baseUrl ? baseUrl + defaultImage : defaultImage,
  };
}
