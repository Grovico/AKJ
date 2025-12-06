import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { productCategories } from "@/lib/data";
import { normalizePath } from "@/lib/basePath";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const normalizedLocation = normalizePath(location);

  const isActive = (href: string) => {
    if (href === "/") return normalizedLocation === "/";
    return normalizedLocation.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="link-logo"
            >
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AK</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-foreground leading-tight">A. Kumarasamy</p>
                <p className="text-xs text-muted-foreground">Nayakar & Co.</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setProductsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setProductsDropdownOpen(false)}
              >
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`gap-1 ${isActive(item.href) ? "bg-accent text-accent-foreground" : ""}`}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
                    )}
                  </Button>
                </Link>

                {/* Products Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && productsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-popover border border-popover-border rounded-md shadow-lg p-2 mt-1"
                    >
                      {productCategories.map((category) => (
                        <Link key={category.id} href={`/products/${category.id}`}>
                          <div
                            className="px-3 py-2 rounded-md hover-elevate cursor-pointer"
                            data-testid={`link-dropdown-${category.id}`}
                          >
                            <p className="font-medium text-foreground">{category.name}</p>
                            <p className="text-xs text-muted-foreground">{category.count} products</p>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-border mt-2 pt-2">
                        <Link href="/products">
                          <div
                            className="px-3 py-2 rounded-md hover-elevate cursor-pointer"
                            data-testid="link-dropdown-all-products"
                          >
                            <p className="font-medium text-primary">View All Products</p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 9876543210</span>
            </div>
            <ThemeToggle />
            <Link href="/contact">
              <Button className="hidden sm:flex" data-testid="button-request-quote">
                Request Quote
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link href={item.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md hover-elevate cursor-pointer ${
                        isActive(item.href) ? "bg-accent text-accent-foreground" : ""
                      }`}
                      data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </div>
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {productCategories.map((category) => (
                        <Link key={category.id} href={`/products/${category.id}`}>
                          <div
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover-elevate rounded-md cursor-pointer"
                            data-testid={`link-mobile-${category.id}`}
                          >
                            {category.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Link href="/contact">
                  <Button
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-mobile-quote"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
