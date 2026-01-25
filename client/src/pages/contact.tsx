import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { heroImage } from "@/lib/data";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";

const inquiryFormSchema = insertInquirySchema.extend({
  companyName: insertInquirySchema.shape.companyName.min(2, "Company name is required"),
  contactPerson: insertInquirySchema.shape.contactPerson.min(2, "Contact person name is required"),
  phone: insertInquirySchema.shape.phone.min(10, "Valid phone number is required"),
  email: insertInquirySchema.shape.email.email("Valid email is required"),
  materialType: insertInquirySchema.shape.materialType.min(1, "Please select a material type"),
});

type InquiryFormValues = InsertInquiry;

const materialTypes = [
  { value: "sand", label: "Sand (River Sand / M-Sand)" },
  { value: "stone", label: "Stone Aggregates" },
  { value: "aggregates", label: "Mixed Aggregates" },
  { value: "salt", label: "Raw Salt" },
  { value: "multiple", label: "Multiple Materials" },
  { value: "other", label: "Other / Custom Requirement" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      materialType: "",
      quantity: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InquiryFormValues) => {
      return apiRequest("POST", "/.netlify/functions/send-inquiry", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Inquiry Submitted",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={heroImage}
          alt="Contact us"
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
              <Badge className="mb-3">Get In Touch</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Contact Us
              </h1>
              <p className="text-white/80 text-lg max-w-xl">
                Request a quote, inquire about bulk orders, or discuss your
                project requirements with our team
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your inquiry has been submitted successfully. Our team will
                      contact you within 24 hours.
                    </p>
                    <Button onClick={() => { setSubmitted(false); form.reset(); }} data-testid="button-new-inquiry">
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Request a Quote
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you with
                        pricing and availability.
                      </p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your company name"
                                    {...field}
                                    data-testid="input-company-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact Person *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    {...field}
                                    data-testid="input-contact-person"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+91 98765 43210"
                                    {...field}
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="materialType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Material Type *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-material-type">
                                      <SelectValue placeholder="Select material" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {materialTypes.map((type) => (
                                      <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Estimated Quantity</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., 100 tons, 50 trucks"
                                    {...field}
                                    data-testid="input-quantity"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Details</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Project details, specific requirements, delivery location..."
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={submitMutation.isPending}
                          data-testid="button-submit-inquiry"
                        >
                          {submitMutation.isPending ? (
                            "Submitting..."
                          ) : (
                            <>
                              Submit Inquiry
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office Address</p>
                      <p className="text-muted-foreground text-sm">
                        Jeyam Traders<br />
                        Ramanathapuram District,<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">+91 7867086626</p>
                      <p className="text-muted-foreground text-sm">+91 9442233290</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">akjeyamtraders6@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm">Monday - Saturday</p>
                      <p className="text-muted-foreground text-sm">8:00 AM - 6:00 PM</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6" />
                  <h3 className="font-semibold text-lg">Why Contact Us?</h3>
                </div>
                <ul className="space-y-3 text-sm text-primary-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Competitive bulk pricing for B2B orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager for large projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Free material consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Delivery across Tamil Nadu</span>
                  </li>
                </ul>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      Ramanathapuram District, Tamil Nadu
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Serving all major cities across Tamil Nadu
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-8 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-medium text-foreground">Need immediate assistance?</p>
              <p className="text-sm text-muted-foreground">
                Call us directly for urgent inquiries and orders
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xl font-semibold text-foreground">+91 7867086626</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
