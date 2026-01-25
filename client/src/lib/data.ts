import type { Product, Project, Client, StatItem } from "@shared/schema";

import sandImage1 from "@assets/stock_images/construction_sand_pi_ae82479c.jpg";
import sandImage2 from "@assets/stock_images/construction_sand_pi_ce217f4f.jpg";
import sandImage3 from "@assets/stock_images/construction_sand_pi_37b8420b.jpg";
import stoneImage1 from "@assets/stock_images/crushed_stone_gravel_3bb63bc8.jpg";
import stoneImage2 from "@assets/stock_images/crushed_stone_gravel_dc7a1dae.jpg";
import stoneImage3 from "@assets/stock_images/crushed_stone_gravel_26f872e3.jpg";
import saltImage1 from "@assets/stock_images/salt_production_indu_24ee6496.jpg";
import saltImage2 from "@assets/stock_images/salt_production_indu_4a7f7214.jpg";
import projectImage1 from "@assets/stock_images/construction_site_bu_e4690f68.jpg";
import projectImage2 from "@assets/stock_images/construction_site_bu_8e974f89.jpg";
import projectImage3 from "@assets/stock_images/construction_site_bu_60230a47.jpg";
import equipmentImage1 from "@assets/stock_images/heavy_construction_e_891eaa51.jpg";
import equipmentImage2 from "@assets/stock_images/heavy_construction_e_b7841f82.jpg";

export const heroImage = equipmentImage1;
export const aboutHeroImage = equipmentImage2;

export const products: Product[] = [
  // Sand Products
  {
    id: "sand-1",
    name: "River Sand",
    category: "sand",
    description: "Premium quality river sand ideal for plastering, concrete work, and masonry. Naturally graded with excellent binding properties.",
    specifications: {
      "Grain Size": "0.15mm - 4.75mm",
      "Silt Content": "< 3%",
      "Organic Impurities": "Nil",
      "Fineness Modulus": "2.6 - 2.9",
      "Bulk Density": "1450 kg/m³"
    },
    image: sandImage1,
    grade: "Grade A",
    sizes: ["Fine", "Medium", "Coarse"]
  },
  {
    id: "sand-2",
    name: "M-Sand (Manufactured Sand)",
    category: "sand",
    description: "High-quality manufactured sand produced from crushed granite. Perfect for concrete and RCC work with consistent grading.",
    specifications: {
      "Grain Size": "0.15mm - 4.75mm",
      "Silt Content": "< 2%",
      "Crushing Value": "< 30%",
      "Fineness Modulus": "2.5 - 3.5",
      "Specific Gravity": "2.65"
    },
    image: sandImage2,
    grade: "IS Standard",
    sizes: ["Zone II", "Zone III"]
  },
  {
    id: "sand-3",
    name: "Plastering Sand",
    category: "sand",
    description: "Specially graded fine sand for smooth plastering finish. Low clay content ensures excellent adhesion.",
    specifications: {
      "Grain Size": "0.15mm - 2.36mm",
      "Clay Content": "< 1%",
      "Moisture Content": "< 5%",
      "Fineness Modulus": "1.8 - 2.2",
      "Color": "Light Brown"
    },
    image: sandImage3,
    grade: "Premium",
    sizes: ["Fine", "Extra Fine"]
  },
  // Stone Products
  {
    id: "stone-1",
    name: "20mm Aggregate",
    category: "stone",
    description: "Crushed granite aggregate for structural concrete, foundations, and heavy-duty construction applications.",
    specifications: {
      "Size": "20mm",
      "Shape": "Angular",
      "Crushing Value": "< 25%",
      "Impact Value": "< 20%",
      "Water Absorption": "< 2%"
    },
    image: stoneImage1,
    grade: "Grade I",
    sizes: ["20mm"]
  },
  {
    id: "stone-2",
    name: "40mm Aggregate",
    category: "stone",
    description: "Large size crushed stone ideal for mass concrete work, road base, and heavy foundation construction.",
    specifications: {
      "Size": "40mm",
      "Shape": "Angular/Cubical",
      "Crushing Value": "< 28%",
      "Flakiness Index": "< 25%",
      "Specific Gravity": "2.7"
    },
    image: stoneImage2,
    grade: "Grade I",
    sizes: ["40mm"]
  },
  {
    id: "stone-3",
    name: "12mm Aggregate",
    category: "stone",
    description: "Fine crushed stone chips perfect for concrete pavements, precast products, and finishing work.",
    specifications: {
      "Size": "12mm",
      "Shape": "Cubical",
      "Crushing Value": "< 22%",
      "Los Angeles Abrasion": "< 30%",
      "Water Absorption": "< 1.5%"
    },
    image: stoneImage3,
    grade: "Premium",
    sizes: ["12mm", "10mm"]
  },
  // Aggregates
  {
    id: "agg-1",
    name: "Coarse Aggregate Mix",
    category: "aggregates",
    description: "Optimally graded coarse aggregate blend for ready-mix concrete and high-strength applications.",
    specifications: {
      "Size Range": "4.75mm - 40mm",
      "Grading": "As per IS:383",
      "Crushing Value": "< 27%",
      "Impact Value": "< 22%",
      "Bulk Density": "1600 kg/m³"
    },
    image: stoneImage1,
    grade: "Premium Mix"
  },
  {
    id: "agg-2",
    name: "Fine Aggregate",
    category: "aggregates",
    description: "Blended fine aggregate for specialized concrete mixes and precast manufacturing.",
    specifications: {
      "Size Range": "0.15mm - 4.75mm",
      "Zone": "Zone II/III",
      "Silt Content": "< 2%",
      "Organic Content": "Nil",
      "Fineness Modulus": "2.4 - 2.8"
    },
    image: sandImage2,
    grade: "Standard"
  },
  // Salt Products
  {
    id: "salt-1",
    name: "Industrial Raw Salt",
    category: "salt",
    description: "High-purity raw salt for industrial applications, chemical manufacturing, and water treatment.",
    specifications: {
      "NaCl Content": "> 95%",
      "Moisture": "< 3%",
      "Insoluble Matter": "< 0.5%",
      "Calcium": "< 0.3%",
      "Magnesium": "< 0.2%"
    },
    image: saltImage1,
    grade: "Industrial Grade"
  },
  {
    id: "salt-2",
    name: "Bulk Salt",
    category: "salt",
    description: "Large quantity bulk salt supply for industrial processing, de-icing, and commercial applications.",
    specifications: {
      "NaCl Content": "> 92%",
      "Crystal Size": "3mm - 10mm",
      "Moisture": "< 5%",
      "Color": "White/Off-White",
      "Packing": "Bulk/50kg bags"
    },
    image: saltImage2,
    grade: "Commercial Grade"
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Building Construction Project",
    client: "Mohammed Jamaludeen",
    location: "Ramanathapuram & Thoothukudi Districts, Tamil Nadu",
    description: "Complete supply of construction materials including sand and stone aggregates for building construction.",
    materialsSupplied: ["River Sand", "20mm Aggregate", "M-Sand", "Plastering Sand"],
    image: projectImage1,
    year: "2022"
  },
  {
    id: "proj-2",
    name: "Commercial Construction Project",
    client: "RPP Construction",
    location: "Tamil Nadu",
    description: "Large-scale supply of premium quality aggregates and sand for commercial building construction.",
    materialsSupplied: ["M-Sand", "20mm Aggregate", "12mm Aggregate", "Plastering Sand"],
    image: projectImage2,
    year: "2023"
  },
  {
    id: "proj-3",
    name: "Residential & Commercial Project",
    client: "Sree Pathi Construction",
    location: "Tamil Nadu",
    description: "Comprehensive material supply for residential and commercial development projects.",
    materialsSupplied: ["River Sand", "Coarse Aggregate Mix", "Fine Aggregate", "M-Sand"],
    image: projectImage3,
    year: "2023"
  },
  {
    id: "proj-4",
    name: "Infrastructure Development Project",
    client: "L&T Corporation",
    location: "Tamil Nadu",
    description: "Strategic supply of construction materials for major infrastructure development.",
    materialsSupplied: ["40mm Aggregate", "20mm Aggregate", "River Sand", "Coarse Aggregate Mix"],
    image: equipmentImage1,
    year: "2024"
  },
  {
    id: "proj-5",
    name: "Construction Materials Supply",
    client: "Sai Ram Construction",
    location: "Ramanathapuram & Thoothukudi Districts, Tamil Nadu",
    description: "Regular bulk supply of sand, aggregates and construction materials for building projects.",
    materialsSupplied: ["M-Sand", "20mm Aggregate", "12mm Aggregate", "River Sand"],
    image: equipmentImage2,
    year: "2022"
  },
  {
    id: "proj-6",
    name: "Building Project",
    client: "Camean India Construction",
    location: "Tamil Nadu",
    description: "Supply of quality construction materials including sand and stone aggregates for building works.",
    materialsSupplied: ["River Sand", "20mm Aggregate", "Plastering Sand", "Fine Aggregate"],
    image: sandImage1,
    year: "2024"
  },
  {
    id: "proj-7",
    name: "Civil Construction Project",
    client: "CCC Construction",
    location: "Tamil Nadu",
    description: "Comprehensive material supply for civil construction and structural works.",
    materialsSupplied: ["M-Sand", "40mm Aggregate", "20mm Aggregate", "Coarse Aggregate Mix"],
    image: stoneImage1,
    year: "2023"
  },
  {
    id: "proj-8",
    name: "Construction Project",
    client: "V S Construction",
    location: "Ramanathapuram & Thoothukudi Districts, Tamil Nadu",
    description: "Reliable supply of construction materials for ongoing building and civil works.",
    materialsSupplied: ["River Sand", "M-Sand", "20mm Aggregate", "12mm Aggregate"],
    image: stoneImage2,
    year: "Ongoing"
  }
];

export const clients: Client[] = [
  { id: "client-1", name: "Mohammed Jamaludeen" },
  { id: "client-2", name: "RPP Construction" },
  { id: "client-3", name: "Sree Pathi Construction" },
  { id: "client-4", name: "L&T Corporation" },
  { id: "client-5", name: "Sai Ram Construction" },
  { id: "client-6", name: "Camean India Construction" },
  { id: "client-7", name: "CCC Construction" },
  { id: "client-8", name: "V S Construction" }
];

export const stats: StatItem[] = [
  { value: "35", label: "Years of Excellence", suffix: "+" },
  { value: "500", label: "Projects Completed", suffix: "+" },
  { value: "50", label: "Trusted Clients", suffix: "+" },
  { value: "100", label: "Tamil Nadu Coverage", suffix: "%" }
];

export const productCategories = [
  {
    id: "sand",
    name: "Sand",
    description: "Premium quality river sand and manufactured sand for all construction needs",
    image: sandImage1,
    count: products.filter(p => p.category === "sand").length
  },
  {
    id: "stone",
    name: "Stone",
    description: "Crushed granite and stone aggregates in various grades and sizes",
    image: stoneImage1,
    count: products.filter(p => p.category === "stone").length
  },
  {
    id: "aggregates",
    name: "Aggregates",
    description: "Specialized aggregate mixes for concrete and construction applications",
    image: stoneImage2,
    count: products.filter(p => p.category === "aggregates").length
  },
  {
    id: "salt",
    name: "Raw Salts",
    description: "Industrial grade raw salt for commercial and manufacturing use",
    image: saltImage1,
    count: products.filter(p => p.category === "salt").length
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};
