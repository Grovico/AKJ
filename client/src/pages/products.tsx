import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, productCategories, getProductsByCategory } from "@/lib/data";
import type { Product } from "@shared/schema";

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

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden h-full hover-elevate" data-testid={`card-product-${product.id}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.grade && (
          <Badge className="absolute top-3 right-3">{product.grade}</Badge>
        )}
      </div>
      <div className="p-5 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-2 text-xs capitalize">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Specifications Table */}
        <div className="border border-border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.specifications).slice(0, 3).map(([key, value], idx) => (
                <tr key={key} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="px-3 py-2 text-muted-foreground font-medium">{key}</td>
                  <td className="px-3 py-2 text-foreground text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {product.sizes && (
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}
          </div>
        )}

        <Link href="/contact">
          <Button className="w-full gap-2" data-testid={`button-quote-${product.id}`}>
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}

function CategoryHeader({ category }: { category: typeof productCategories[0] }) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden rounded-md mb-8">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/products">
              <Button variant="ghost" className="text-white/80 gap-2 mb-4" data-testid="button-back-products">
                <ArrowLeft className="h-4 w-4" />
                All Products
              </Button>
            </Link>
            <Badge className="mb-3">{category.count} Products</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {category.name}
            </h1>
            <p className="text-white/80 text-lg max-w-xl">{category.description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [match, params] = useRoute("/products/:category");
  const categorySlug = params?.category;

  // Single Category View
  if (match && categorySlug) {
    const category = productCategories.find((c) => c.id === categorySlug);
    if (!category) {
      return (
        <div className="min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
            <Link href="/products">
              <Button data-testid="button-back-to-products">Back to Products</Button>
            </Link>
          </div>
        </div>
      );
    }

    const categoryProducts = getProductsByCategory(categorySlug);

    return (
      <div className="min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <CategoryHeader category={category} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categoryProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // All Products View
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our comprehensive range of construction materials. Quality assured
            products for all your building needs.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {productCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={`/products/${category.id}`}>
                <Card
                  className="overflow-hidden cursor-pointer hover-elevate"
                  data-testid={`card-nav-${category.id}`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-semibold text-white">{category.name}</h3>
                      <p className="text-xs text-white/70">{category.count} products</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All Products with Tabs */}
        <Tabs defaultValue="all" className="space-y-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <TabsList data-testid="tabs-product-filter">
              <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
              {productCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="capitalize" data-testid={`tab-${cat.id}`}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {productCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getProductsByCategory(cat.id).map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-muted/30 rounded-md p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We can source and supply materials based on your specific project requirements.
            Contact us for custom orders and bulk pricing.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2" data-testid="button-custom-quote">
              Get Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
