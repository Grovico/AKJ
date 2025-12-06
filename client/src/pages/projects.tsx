import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Calendar, ArrowRight, Building, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, heroImage } from "@/lib/data";

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

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Construction projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-3">Our Portfolio</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Major Projects
              </h1>
              <p className="text-white/80 text-lg max-w-xl">
                Showcasing our successful partnerships with leading construction companies
                across Tamil Nadu
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card
                  className="overflow-hidden h-full hover-elevate"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-4 right-4">{project.year}</Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-2">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Building className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Package className="h-4 w-4" />
                        <span className="font-medium">Materials Supplied:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.materialsSupplied.map((material) => (
                          <Badge key={material} variant="secondary" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div data-testid="stat-projects-completed">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="stat-value-projects">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div data-testid="stat-major-clients">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="stat-value-clients">50+</p>
              <p className="text-muted-foreground">Major Clients</p>
            </div>
            <div data-testid="stat-years-service">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="stat-value-years">35+</p>
              <p className="text-muted-foreground">Years of Service</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted partnerships built on quality, reliability, and excellent service
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                quote: "Reliable supplier with consistent quality. Their timely delivery has been crucial for our project schedules. Highly recommended for large-scale construction projects.",
                client: "CMK Construction",
                role: "Project Manager"
              },
              {
                quote: "35 years of experience shows in their product quality and service. The materials meet all IS standards, and their team is always responsive to our requirements.",
                client: "URC Construction",
                role: "Procurement Head"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full" data-testid={`card-testimonial-${index}`}>
                  <blockquote className="text-muted-foreground leading-relaxed mb-4" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground" data-testid={`text-testimonial-client-${index}`}>{testimonial.client}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Partner With Us for Your Next Project
            </h2>
            <p className="text-primary-foreground/80">
              Join the ranks of satisfied clients who trust us for their construction
              material needs. Get competitive pricing for bulk orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-project-quote">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground"
                  data-testid="button-project-catalog"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
