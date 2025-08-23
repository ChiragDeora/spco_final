
import { Product } from "@/components/products/ProductCard";
import { Industry } from "@/components/industries/IndustryCard";

// Mock Products
export const products: Product[] = [
  {
    id: "deep-groove-ball-bearing-6200",
    name: "Deep Groove Ball Bearing 6200",
    category: "Ball Bearings",
    subcategory: "Deep Groove Ball Bearings",
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "10 mm",
      "Outer Diameter": "30 mm",
      "Width": "9 mm",
      "Dynamic Load Rating": "5.1 kN",
      "Static Load Rating": "2.36 kN",
      "Maximum Speed": "32000 rpm",
      "Weight": "0.04 kg"
    },
    description: "Premium deep groove ball bearing suitable for high-speed applications with low noise and vibration levels."
  },
  {
    id: "angular-contact-ball-bearing-7208",
    name: "Angular Contact Ball Bearing 7208",
    category: "Ball Bearings",
    subcategory: "Angular Contact Ball Bearings",
    image: "https://images.unsplash.com/photo-1626252653585-5d490ddc04b6?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "40 mm",
      "Outer Diameter": "80 mm",
      "Width": "18 mm",
      "Dynamic Load Rating": "34.1 kN",
      "Static Load Rating": "22.4 kN",
      "Maximum Speed": "10000 rpm",
      "Contact Angle": "40°",
      "Weight": "0.43 kg"
    },
    description: "High-performance angular contact ball bearing ideal for applications requiring both radial and axial load support."
  },
  {
    id: "cylindrical-roller-bearing-nu310",
    name: "Cylindrical Roller Bearing NU310",
    category: "Roller Bearings",
    subcategory: "Cylindrical Roller Bearings",
    image: "https://images.unsplash.com/photo-1628574668002-83c074c7588c?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "50 mm",
      "Outer Diameter": "110 mm",
      "Width": "27 mm",
      "Dynamic Load Rating": "124 kN",
      "Static Load Rating": "140 kN",
      "Maximum Speed": "6300 rpm",
      "Weight": "1.22 kg"
    },
    description: "Heavy-duty cylindrical roller bearing designed for high radial loads and medium to high-speed applications."
  },
  {
    id: "tapered-roller-bearing-32208",
    name: "Tapered Roller Bearing 32208",
    category: "Roller Bearings",
    subcategory: "Tapered Roller Bearings",
    image: "https://images.unsplash.com/photo-1628574667142-bb27bbc56a6e?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "40 mm",
      "Outer Diameter": "80 mm",
      "Width": "24.75 mm",
      "Dynamic Load Rating": "67.5 kN",
      "Static Load Rating": "83 kN",
      "Maximum Speed": "5300 rpm",
      "Weight": "0.61 kg"
    },
    description: "Premium tapered roller bearing for applications requiring high combined radial and axial load capacity."
  },
  {
    id: "needle-roller-bearing-nk25-20",
    name: "Needle Roller Bearing NK25/20",
    category: "Roller Bearings",
    subcategory: "Needle Roller Bearings",
    image: "https://images.unsplash.com/photo-1611577144556-dfdebfbf4f5f?q=80&w=2069&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "25 mm",
      "Outer Diameter": "38 mm",
      "Width": "20 mm",
      "Dynamic Load Rating": "23.4 kN",
      "Static Load Rating": "39 kN",
      "Maximum Speed": "8000 rpm",
      "Weight": "0.11 kg"
    },
    description: "Compact needle roller bearing with high load capacity, ideal for applications with limited radial space."
  },
  {
    id: "self-aligning-ball-bearing-2208",
    name: "Self-Aligning Ball Bearing 2208",
    category: "Ball Bearings",
    subcategory: "Self-Aligning Ball Bearings",
    image: "https://images.unsplash.com/photo-1628574668127-4e8a89f8a1ff?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "40 mm",
      "Outer Diameter": "80 mm",
      "Width": "23 mm",
      "Dynamic Load Rating": "32.5 kN",
      "Static Load Rating": "10.2 kN",
      "Maximum Speed": "9500 rpm",
      "Weight": "0.57 kg"
    },
    description: "Self-aligning ball bearing designed to accommodate misalignment and shaft deflection in various applications."
  },
  {
    id: "multi-purpose-grease-ep2",
    name: "Multi-Purpose Grease EP2",
    category: "Lubricants",
    subcategory: "Greases",
    image: "https://images.unsplash.com/photo-1635372722656-389f87a941db?q=80&w=1974&auto=format&fit=crop",
    specifications: {
      "NLGI Grade": "2",
      "Base Oil Type": "Mineral",
      "Base Oil Viscosity": "220 cSt",
      "Temperature Range": "-20°C to 140°C",
      "Dropping Point": "190°C",
      "Package Size": "1 kg",
      "Color": "Amber"
    },
    description: "High-performance multi-purpose grease with extreme pressure additives for industrial bearings under heavy loads."
  },
  {
    id: "synthetic-bearing-oil-iso-220",
    name: "Synthetic Bearing Oil ISO 220",
    category: "Lubricants",
    subcategory: "Oils",
    image: "https://images.unsplash.com/photo-1516706432309-dd31372085e9?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "ISO Viscosity Grade": "220",
      "Base Oil Type": "Synthetic PAO",
      "Viscosity Index": "140",
      "Temperature Range": "-40°C to 180°C",
      "Flash Point": "265°C",
      "Package Size": "5 L",
      "Color": "Clear"
    },
    description: "Premium synthetic oil formulated for long-term lubrication of bearings operating under extreme temperatures."
  },
  {
    id: "bearing-mounting-kit-bmk-450",
    name: "Bearing Mounting Kit BMK-450",
    category: "Bushes",
    subcategory: "Installation Bushes",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bearing Size Range": "10-100 mm",
      "Kit Contents": "29 pieces",
      "Case Material": "Aluminum",
      "Sleeve Material": "Hardened Steel",
      "Weight": "4.7 kg"
    },
    description: "Comprehensive bearing installation kit with impact sleeves and mounting Bushes for proper bearing installation."
  },
  {
    id: "oil-seal-tc-35-55-10",
    name: "Oil Seal TC 35x55x10",
    category: "Auto Parts",
    subcategory: "Oil Auto Parts",
    image: "https://images.unsplash.com/photo-1521582738928-ba26c0ab41d6?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "35 mm",
      "Outer Diameter": "55 mm",
      "Width": "10 mm",
      "Seal Type": "TC (Double Lip)",
      "Material": "NBR",
      "Temperature Range": "-30°C to 120°C",
      "Maximum Pressure": "0.05 MPa"
    },
    description: "High-quality oil seal designed to prevent lubricant leakage and protect bearings from external contaminants."
  },
  {
    id: "spherical-roller-bearing-22308",
    name: "Spherical Roller Bearing 22308",
    category: "Roller Bearings",
    subcategory: "Spherical Roller Bearings",
    image: "https://images.unsplash.com/photo-1626252583902-90f26e3dd365?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "40 mm",
      "Outer Diameter": "90 mm",
      "Width": "33 mm",
      "Dynamic Load Rating": "228 kN",
      "Static Load Rating": "224 kN",
      "Maximum Speed": "4800 rpm",
      "Weight": "1.25 kg"
    },
    description: "Heavy-duty spherical roller bearing for applications requiring high load capacity and self-aligning properties."
  },
  {
    id: "thrust-ball-bearing-51208",
    name: "Thrust Ball Bearing 51208",
    category: "Ball Bearings",
    subcategory: "Thrust Ball Bearings",
    image: "https://images.unsplash.com/photo-1585909695337-d2c13091e50e?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Inner Diameter": "40 mm",
      "Outer Diameter": "68 mm",
      "Width": "19 mm",
      "Dynamic Load Rating": "48.8 kN",
      "Static Load Rating": "146 kN",
      "Maximum Speed": "3400 rpm",
      "Weight": "0.3 kg"
    },
    description: "Precision thrust ball bearing designed specifically for applications with high axial loads."
  },
  {
    id: "journal-bearing-jb-100",
    name: "Journal Bearing JB-100",
    category: "Journal & Tilting Pad Bearings",
    subcategory: "Journal Bearings",
    image: "https://images.unsplash.com/photo-1628574668002-83c074c7588c?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "100 mm",
      "Length": "80 mm",
      "Load Capacity": "50 kN",
      "Maximum Speed": "3000 rpm",
      "Operating Temperature": "-20°C to 120°C",
      "Material": "Babbitt-lined steel"
    },
    description: "High-performance journal bearing designed for heavy-duty industrial applications with excellent load-carrying capacity."
  },
  {
    id: "tilting-pad-bearing-tpb-150",
    name: "Tilting Pad Bearing TPB-150",
    category: "Journal & Tilting Pad Bearings",
    subcategory: "Tilting Pad Bearings",
    image: "https://images.unsplash.com/photo-1628574667142-bb27bbc56a6e?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "150 mm",
      "Number of Pads": "5",
      "Load Capacity": "120 kN",
      "Maximum Speed": "5000 rpm",
      "Operating Temperature": "-40°C to 150°C",
      "Material": "Steel with Babbitt overlay"
    },
    description: "Advanced tilting pad bearing with multiple pivoted pads for high-speed, high-load applications in critical machinery."
  },
  {
    id: "journal-bearing-jb-200",
    name: "Journal Bearing JB-200",
    category: "Journal & Tilting Pad Bearings",
    subcategory: "Journal Bearings",
    image: "https://images.unsplash.com/photo-1626252653585-5d490ddc04b6?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "200 mm",
      "Length": "160 mm",
      "Load Capacity": "200 kN",
      "Maximum Speed": "2000 rpm",
      "Operating Temperature": "-30°C to 140°C",
      "Material": "Bronze with Babbitt lining"
    },
    description: "Large journal bearing for heavy industrial applications requiring exceptional stability and load support."
  },
  {
    id: "tilting-pad-bearing-tpb-80",
    name: "Tilting Pad Bearing TPB-80",
    category: "Journal & Tilting Pad Bearings",
    subcategory: "Tilting Pad Bearings",
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "80 mm",
      "Number of Pads": "4",
      "Load Capacity": "60 kN",
      "Maximum Speed": "8000 rpm",
      "Operating Temperature": "-50°C to 180°C",
      "Material": "Steel with polymer coating"
    },
    description: "Compact tilting pad bearing optimized for high-speed applications with excellent thermal stability."
  },
  {
    id: "adaptor-sleeve-as-25",
    name: "Adaptor Sleeve AS-25",
    category: "Adaptor Sleeves",
    subcategory: "Standard Adaptor Sleeves",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "25 mm",
      "Outer Diameter": "35 mm",
      "Length": "30 mm",
      "Material": "Hardened Steel",
      "Surface Finish": "Ra 0.8 μm",
      "Tolerance": "H7"
    },
    description: "Precision adaptor sleeve for secure bearing mounting on cylindrical shafts with excellent dimensional accuracy."
  },
  {
    id: "adaptor-sleeve-as-40",
    name: "Adaptor Sleeve AS-40",
    category: "Adaptor Sleeves",
    subcategory: "Standard Adaptor Sleeves",
    image: "https://images.unsplash.com/photo-1628574668002-83c074c7588c?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "40 mm",
      "Outer Diameter": "52 mm",
      "Length": "45 mm",
      "Material": "Hardened Steel",
      "Surface Finish": "Ra 0.8 μm",
      "Tolerance": "H7"
    },
    description: "Heavy-duty adaptor sleeve designed for industrial applications requiring reliable bearing mounting."
  },
  {
    id: "adaptor-sleeve-as-60",
    name: "Adaptor Sleeve AS-60",
    category: "Adaptor Sleeves",
    subcategory: "Heavy Duty Adaptor Sleeves",
    image: "https://images.unsplash.com/photo-1626252653585-5d490ddc04b6?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "60 mm",
      "Outer Diameter": "75 mm",
      "Length": "60 mm",
      "Material": "Hardened Steel",
      "Surface Finish": "Ra 0.6 μm",
      "Tolerance": "H6"
    },
    description: "High-precision adaptor sleeve for critical applications requiring superior dimensional accuracy and surface finish."
  },
  {
    id: "adaptor-sleeve-as-80",
    name: "Adaptor Sleeve AS-80",
    category: "Adaptor Sleeves",
    subcategory: "Heavy Duty Adaptor Sleeves",
    image: "https://images.unsplash.com/photo-1585909695337-d2c13091e50e?q=80&w=2070&auto=format&fit=crop",
    specifications: {
      "Bore Diameter": "80 mm",
      "Outer Diameter": "100 mm",
      "Length": "80 mm",
      "Material": "Hardened Steel",
      "Surface Finish": "Ra 0.6 μm",
      "Tolerance": "H6"
    },
    description: "Large adaptor sleeve for heavy machinery applications with exceptional load-carrying capacity."
  }
];

// Mock Industries
export const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    description: "We provide high-performance bearings and components for the automotive industry, supporting applications from engine components to wheel hubs, transmission systems, and more. Our products meet the highest quality standards required for modern vehicles.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    productsCount: 48
  },
  {
    id: "heavy-machinery",
    name: "Heavy Machinery",
    description: "Our robust bearings and components for heavy machinery are engineered to withstand extreme conditions, prolonged use, and heavy loads. Perfect for construction equipment, mining machinery, and other heavy-duty applications where reliability is critical.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    productsCount: 56
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Enhance your manufacturing operations with our precision components designed for industrial equipment. From conveyor systems to production machinery, we offer solutions that reduce downtime, improve efficiency, and maintain quality in your manufacturing processes.",
    image: "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?q=80&w=2070&auto=format&fit=crop",
    productsCount: 72
  },
  {
    id: "mining",
    name: "Mining",
    description: "For the challenging environments of the mining industry, we provide specialized bearings and components that can withstand dust, vibration, shock loads, and extreme operating conditions, ensuring your equipment stays productive in the toughest environments.",
    image: "https://images.unsplash.com/photo-1579781354183-7b857b39fae2?q=80&w=2070&auto=format&fit=crop",
    productsCount: 34
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Keep your agricultural machinery running smoothly with our dependable components designed for tractors, harvesters, irrigation systems, and other farm equipment. We understand the seasonal demands of agriculture and offer solutions that minimize downtime during critical periods.",
    image: "https://images.unsplash.com/photo-1591086637531-148dabd905f1?q=80&w=2073&auto=format&fit=crop",
    productsCount: 29
  },
  {
    id: "energy",
    name: "Energy",
    description: "From wind turbines to oil rigs, our specialized components support the energy sector with reliable, long-lasting solutions. We offer products that perform consistently in both renewable energy applications and traditional power generation equipment.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
    productsCount: 41
  }
];

// Filter products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase() || 
    (product.subcategory && product.subcategory.toLowerCase() === category.toLowerCase())
  );
};

// Filter products by industry (simulated)
export const getProductsByIndustry = (industryId: string): Product[] => {
  // In a real application, you would have a proper relationship between products and industries
  // For this mock, we'll return a subset of products based on the industry id
  switch (industryId) {
    case "automotive":
      return products.filter((_, index) => index % 4 === 0 || index % 3 === 0);
    case "heavy-machinery":
      return products.filter((_, index) => index % 3 === 1 || index % 5 === 0);
    case "manufacturing":
      return products.filter((_, index) => index % 2 === 0);
    case "mining":
      return products.filter((_, index) => index % 3 === 2);
    case "agriculture":
      return products.filter((_, index) => index % 4 === 1);
    case "energy":
      return products.filter((_, index) => index % 4 === 3 || index % 5 === 2);
    default:
      return [];
  }
};

// Get related products (simulated)
export const getRelatedProducts = (productId: string, limit: number = 3): Product[] => {
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  // Find products in the same category but not the current product
  const sameCategory = products.filter(p => 
    p.id !== productId && 
    (p.category === currentProduct.category || p.subcategory === currentProduct.subcategory)
  );
  
  // If we don't have enough products in the same category, add some random ones
  if (sameCategory.length < limit) {
    const otherProducts = products.filter(p => 
      p.id !== productId && 
      p.category !== currentProduct.category && 
      p.subcategory !== currentProduct.subcategory
    );
    
    const randomOthers = otherProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, limit - sameCategory.length);
    
    return [...sameCategory, ...randomOthers];
  }
  
  // Return a random subset if we have more than needed
  return sameCategory.sort(() => 0.5 - Math.random()).slice(0, limit);
};

// Search products by query (simulated)
export const searchProducts = (query: string): Product[] => {
  if (!query) return [];
  
  const searchTerm = query.toLowerCase();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.category.toLowerCase().includes(searchTerm) || 
    (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm)) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};

// Get industry by ID
export const getIndustryById = (id: string): Industry | undefined => {
  return industries.find(industry => industry.id === id);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
