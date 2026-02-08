import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SEO } from "@/components/SEO";
import { normalizePath } from "@/lib/basePath";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  
  // Normalize location by removing base path for routing
  const normalizedLocation = normalizePath(location);

  return (
    <Switch location={normalizedLocation}>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:category" component={Products} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <SEO />
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
