# Design Guidelines: A. Kumarasamy Nayakar Construction Materials Website

## Design Approach
**System-Based Approach**: Material Design principles adapted for B2B construction industry
- Emphasizes trust, professionalism, and clarity over flashy aesthetics
- Clean, structured layouts that communicate reliability and 35 years of industry expertise
- Drawing subtle inspiration from B2B platforms like Caterpillar, Volvo Construction Equipment for industrial credibility

## Typography System
- **Primary Font**: Inter or Roboto (Google Fonts) - clean, professional, highly legible
- **Hierarchy**:
  - Hero Headlines: 4xl-6xl, font-bold
  - Section Headers: 3xl-4xl, font-semibold
  - Subsections: xl-2xl, font-medium
  - Body Text: base-lg, font-normal, leading-relaxed for readability
  - Technical Specs: sm-base, font-mono for product specifications

## Layout & Spacing System
**Tailwind Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24, 32 for spacing
- Section Padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 md:px-6
- Card Spacing: gap-6 md:gap-8
- Vertical Rhythm: space-y-12 between major sections

## Core Components

### Navigation
- Sticky header with logo left, navigation center (Home, Products, Projects, About, Contact)
- Product dropdown mega-menu showing categories: Sand, Stone, Aggregates, Raw Salts
- CTA button "Request Quote" prominently placed top-right
- Mobile: Hamburger menu with slide-in drawer

### Homepage Structure
1. **Hero Section** (h-screen/80vh):
   - Large background image: Construction site or material stockyard
   - Overlaid headline: "35 Years of Excellence in Construction Materials"
   - Subheading highlighting major clients
   - Dual CTA: "View Products" + "Request Quote" with backdrop-blur-md bg-white/20
   
2. **Trust Banner**: Logo grid of major clients (RTC Salt, Alagar Salt, CMK Construction, etc.) - 6 columns on desktop, 3 on tablet, 2 on mobile

3. **Product Categories Grid**: 2x2 grid (4 main categories) with large product images, category name, "View Products" link - hover effect with subtle scale and shadow

4. **Major Projects Showcase**: 3-column grid of project cards with project name, client, image, and brief description

5. **Company Stats**: 4-column metrics (35+ Years, X Projects Completed, X Clients Served, Coverage Area)

6. **Testimonials**: 2-column layout with client quotes and company logos

### Product Pages
- **Category Headers**: Full-width with category-specific imagery
- **Product Grid**: 3-column card layout with:
  - Product image
  - Product name and code
  - Key specifications table
  - "Request Quote" button per product
- **Sidebar Filters**: Categories, grade/quality, size options (desktop only, drawer on mobile)
- **Technical Specifications**: Expandable accordion sections

### Projects Page
- Masonry grid layout showcasing completed projects
- Each card: Project image, client name, location, materials supplied
- Filter by: Client, Material Type, Year

### About Page
- Timeline component showing 35-year journey
- Founder section with professional photo
- Capabilities and certifications
- Service area map (Tamil Nadu coverage)

### Contact Page
- 2-column layout: Form (left) + Contact Info with map (right)
- Form fields: Company Name, Contact Person, Phone, Email, Material Type, Quantity, Message
- Office location, hours, phone numbers clearly displayed

## Animation Strategy (Subtle B2B-Appropriate)
- Page Transitions: Smooth fade-in on route changes (300ms)
- Scroll Reveals: Fade-up on scroll for section entry (stagger children by 100ms)
- Product Cards: Subtle scale (1.02) + shadow increase on hover
- Stats Counter: Animate numbers counting up when in viewport
- Hero: Gentle parallax on background image (0.5 scroll speed)
- NO: Excessive animations, spinners, bouncing elements

## Images Required
1. **Hero**: Wide-angle construction site or material stockyard (professional, bright, active)
2. **Product Categories**: High-quality images of sand piles, stone aggregates, raw salts
3. **Individual Products**: Clean product shots on neutral backgrounds
4. **Projects**: Before/after or completion photos of major projects
5. **About**: Professional photo of founder/facility
6. **Icons**: Material Icons for features, specifications, contact info

## Multi-Column Usage
- Product grids: 3 columns desktop, 2 tablet, 1 mobile
- Client logos: 6-4-2 columns
- Project showcase: 3-2-1 columns
- Stats section: 4-2-1 columns
- Contact page: 2-1 columns (form/info split)

## Accessibility
- All images with descriptive alt text
- Form labels properly associated
- Minimum 4.5:1 contrast ratios
- Keyboard navigation for all interactive elements
- Focus states clearly visible