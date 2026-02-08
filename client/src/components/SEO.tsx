import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { normalizePath } from "@/lib/basePath";
import { getSEOForPath, applySEO, getOrganizationJsonLd } from "@/lib/seo";

export function SEO() {
  const [location] = useLocation();
  const jsonLdInjected = useRef(false);

  const normalizedPath = normalizePath(location);

  useEffect(() => {
    const config = getSEOForPath(normalizedPath);
    applySEO(config);
  }, [normalizedPath]);

  useEffect(() => {
    if (jsonLdInjected.current) return;
    jsonLdInjected.current = true;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(getOrganizationJsonLd());
    script.id = "organization-json-ld";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("organization-json-ld");
      if (el) el.remove();
      jsonLdInjected.current = false;
    };
  }, []);

  return null;
}
