import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/data";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ],
  products: productCategories.map((cat) => ({
    label: cat.name,
    href: `/products/${cat.id}`,
  })),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AK</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">A. Kumarasamy</p>
                <p className="text-xs text-muted-foreground">Nayakar & Co.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Founded on trust and excellence, we have been serving the construction
              industry for over 35 years with premium quality sand, stone, and
              aggregate materials.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}
                    >
                      <ArrowRight className="h-3 w-3" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 cursor-pointer"
                      data-testid={`link-footer-product-${link.label.toLowerCase()}`}
                    >
                      <ArrowRight className="h-3 w-3" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products">
                  <span
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1 cursor-pointer"
                    data-testid="link-footer-all-products"
                  >
                    <ArrowRight className="h-3 w-3" />
                    View All Products
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Ramanathapuram District,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@aknayakar.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} A. Kumarasamy Nayakar & Co. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            35 Years of Excellence in Construction Materials
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
