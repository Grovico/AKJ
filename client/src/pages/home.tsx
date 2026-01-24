import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Building2, Truck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { heroImage, productCategories, projects, clients, stats } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value);

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage}
            alt="Construction materials stockyard"
            className="w-full h-full object-cover"
          />
          {/* Dark Wash Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Trusted Since 1989
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              35 Years of Excellence in{" "}
              <span className="text-primary">Construction Materials</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Premium supplier of sand, stone, aggregates, and raw salts across Tamil Nadu.
              Trusted by major construction firms including CMK Construction, URC Construction,
              and Sunex Concrete.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="gap-2" data-testid="button-hero-products">
                  View Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white backdrop-blur-sm"
                  data-testid="button-hero-quote"
                >
                  Request Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner - Client Logos */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by Leading Construction Companies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={itemVariants}
                className="flex items-center justify-center p-4 bg-background rounded-md border border-border"
                data-testid={`card-client-${client.id}`}
              >
                <p className="text-sm font-medium text-muted-foreground text-center" data-testid={`text-client-${client.id}`}>
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of construction materials tailored for B2B clients.
              Quality assured products for all your construction needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {productCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/products/${category.id}`}>
                  <Card
                    className="overflow-hidden group cursor-pointer hover-elevate"
                    data-testid={`card-category-${category.id}`}
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Badge variant="secondary" className="mb-2">
                          {category.count} Products
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                        <p className="text-white/80 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/products">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2" data-testid={`stat-value-${index}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/80" data-testid={`stat-label-${index}`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Major Projects
              </h2>
              <p className="text-muted-foreground">
                Successfully delivered materials for prestigious construction projects
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="gap-2" data-testid="button-view-projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.slice(0, 3).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover-elevate" data-testid={`card-featured-project-${project.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4">{project.year}</Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.materialsSupplied.slice(0, 3).map((material) => (
                        <Badge key={material} variant="secondary" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Jeyam Traders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decades of experience, quality assurance, and reliable supply chain
              make us the preferred choice for construction material needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Building2,
                title: "35+ Years Experience",
                description: "Decades of expertise in construction material supply and trading",
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Timely bulk delivery across Tamil Nadu with own fleet",
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Materials tested and graded as per IS standards",
              },
              {
                icon: Users,
                title: "B2B Partnership",
                description: "Dedicated support for large-scale construction projects",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full text-center" data-testid={`card-feature-${index}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Get in touch with us for bulk orders, competitive pricing, and
              reliable delivery of quality construction materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-quote">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground"
                  data-testid="button-cta-catalog"
                >
                  Browse Catalog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
