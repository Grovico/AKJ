import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Award, 
  Users, 
  Truck, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutHeroImage, clients } from "@/lib/data";

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

const timelineEvents = [
  {
    year: "1989",
    title: "Foundation",
    description: "Jeyam Traders established the firm in Ramanathapuram district with a vision to supply quality construction materials."
  },
  {
    year: "1995",
    title: "Expansion",
    description: "Expanded operations to cover major districts in Tamil Nadu, establishing a reliable supply chain network."
  },
  {
    year: "2005",
    title: "Salt Trading",
    description: "Ventured into raw salt trading, becoming a major supplier for industrial salt across Tamil Nadu."
  },
  {
    year: "2015",
    title: "Major Partnerships",
    description: "Partnered with leading construction firms including CMK Construction and URC Construction for large-scale projects."
  },
  {
    year: "2022",
    title: "Landmark Project",
    description: "Successfully supplied materials for Ramanathapuram Medical College, marking a significant milestone."
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Serving 50+ clients with 100% coverage across Tamil Nadu, maintaining our legacy of quality and trust."
  }
];

const capabilities = [
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All materials tested and certified as per Indian Standards (IS) specifications"
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    description: "Own fleet of transport vehicles ensuring timely delivery across Tamil Nadu"
  },
  {
    icon: Users,
    title: "B2B Focus",
    description: "Dedicated account management for large-scale construction projects"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "35 years of consistent supply and service excellence"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={aboutHeroImage}
          alt="Construction equipment and materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <Badge className="mb-3">About Us</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                35 Years of Excellence in Construction Materials
              </h1>
              <p className="text-white/80 text-lg">
                Founded on trust, built on quality, driven by commitment to serve
                the construction industry of Tamil Nadu
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge variant="secondary">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Legacy of Trust and Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The firm was founded by <strong className="text-foreground">JEGANATHAN (Jeyam Traders)</strong> with 
                a simple vision: to provide the highest quality construction materials to builders 
                and contractors across Tamil Nadu. What started as a small trading operation in 
                Ramanathapuram district has grown into one of the region's most trusted suppliers 
                of sand, stone aggregates, and raw salts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 35 successful years, we have built lasting partnerships with major construction 
                companies including CMK Construction Chennai, URC Construction, Sunex Concrete, and 
                Esteem Engineering. Our commitment to quality, timely delivery, and competitive 
                pricing has made us the preferred choice for large-scale infrastructure projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In addition to construction aggregates, we are proud to be a major supplier of 
                raw salts across Tamil Nadu, serving prominent clients like RTC Salt and Alagar Salt. 
                Our diversified product range and extensive distribution network enable us to meet 
                the varied needs of our valued customers.
              </p>
            </div>
            <div className="relative">
              <Card className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">JEGANATHAN (Jeyam Traders)</h3>
                      <p className="text-muted-foreground">Founder & Proprietor</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-md">
                      <p className="text-3xl font-bold text-primary">35+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-md">
                      <p className="text-3xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground">Trusted Clients</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Ramanathapuram District, Tamil Nadu</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Milestones of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 z-10 mt-1.5" />
                  
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="p-5" data-testid={`card-timeline-${event.year}`}>
                      <Badge className="mb-2">{event.year}</Badge>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from other suppliers in the industry
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full text-center" data-testid={`card-capability-${index}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge variant="secondary">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive Material Supply
              </h2>
              <ul className="space-y-4">
                {[
                  "River sand and manufactured sand (M-Sand) for construction",
                  "Crushed stone aggregates in various grades (12mm, 20mm, 40mm)",
                  "Specialized aggregate mixes for ready-mix concrete plants",
                  "Industrial grade raw salt for commercial applications",
                  "Bulk delivery across Tamil Nadu with own fleet",
                  "Quality testing and certification as per IS standards"
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-md p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Coverage Area
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Our extensive distribution network covers all major districts of Tamil Nadu,
                ensuring timely delivery to your construction site.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Ramanathapuram", "Chennai", "Madurai", "Trichy", "Coimbatore", "Salem"].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-primary-foreground/90">
                    <MapPin className="h-4 w-4" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-3">Our Partners</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Long-standing partnerships with premier construction and industrial companies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {clients.map((client) => (
              <motion.div key={client.id} variants={itemVariants}>
                <Card className="p-4 h-full flex items-center justify-center" data-testid={`card-partner-${client.id}`}>
                  <p className="text-sm font-medium text-muted-foreground text-center" data-testid={`text-partner-${client.id}`}>
                    {client.name}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Ready to Partner With Us?
            </h2>
            <p className="text-primary-foreground/80">
              Experience 35 years of expertise in construction materials. Contact us
              for competitive pricing and reliable supply for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-about-contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground"
                  data-testid="button-about-projects"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
