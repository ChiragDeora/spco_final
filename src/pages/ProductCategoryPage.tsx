
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/lib/data";
import { ArrowRight, CheckCircle, Phone, Cog, Shield, Award } from "lucide-react";
import ballbearings from '@/assets/ballbearings.jpg';
import rollerbearings from '@/assets/rollerbearings.jpg';
import cogelsa_lubricants from '@/assets/cogelsa_lubricants.png';
import AutoParts from '@/assets/Autoparts.jpg';
import Bushes from '@/assets/Bushes.jpg';

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  applications: string[];
}

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Category data with detailed information
  const categoriesData: { [key: string]: CategoryInfo } = {
    "ball-bearings": {
      id: "ball-bearings",
      name: "Ball Bearings",
      description: "Precision engineered ball bearings for reduced friction and smooth operation in diverse industrial applications.",
      detailedDescription: "Our ball bearings are manufactured to the highest precision standards, featuring superior steel quality and advanced heat treatment processes. Designed for applications requiring low friction, high-speed capability, and reliable performance across various operating conditions.",
      image: ballbearings,
      features: [
        "Low friction and noise levels",
        "High-speed capability up to 32,000 RPM",
        "Excellent load capacity and durability",
        "Wide temperature operating range",
        "Multiple seal configurations available"
      ],
      applications: [
        "Electric motors and generators",
        "Machine Bushes and spindles",
        "Automotive applications",
        "HVAC systems",
        "Industrial machinery"
      ]
    },
    "roller-bearings": {
      id: "roller-bearings",
      name: "Roller Bearings",
      description: "Heavy-duty roller bearings designed for superior load capacity and durability in demanding industrial environments.",
      detailedDescription: "Our roller bearing range includes cylindrical, tapered, spherical, and needle roller bearings, each engineered for specific load requirements and operating conditions. These bearings excel in high-load applications where maximum load capacity and extended service life are critical.",
      image: rollerbearings,
      features: [
        "Exceptional load carrying capacity",
        "Self-aligning capabilities",
        "Extended service life",
        "Suitable for heavy industrial loads",
        "Various configurations available"
      ],
      applications: [
        "Heavy machinery and equipment",
        "Rolling mills and steel industry",
        "Mining and construction equipment",
        "Wind turbines",
        "Railway applications"
      ]
    },
    "lubricants": {
      id: "lubricants",
      name: "Lubricants",
      description: "High-performance lubricants that extend component life and reduce maintenance costs.",
      detailedDescription: "Our comprehensive lubricant portfolio includes greases, oils, and specialty lubricants formulated for specific applications and operating conditions. Each product is designed to provide optimal protection, reduce wear, and extend equipment life while minimizing maintenance requirements.",
      image: cogelsa_lubricants,
      features: [
        "Extended relubrication intervals",
        "Wide temperature operating range",
        "Excellent oxidation stability",
        "Superior water resistance",
        "Multi-purpose formulations"
      ],
      applications: [
        "Bearing lubrication",
        "Gear boxes and transmissions",
        "Industrial machinery",
        "Automotive applications",
        "Food-grade applications"
      ]
    },
    "Auto Parts": {
      id: "Auto Parts",
      name: "Auto Parts",
      description: "Industrial Auto Parts that prevent contamination and retain lubricant in critical systems.",
      detailedDescription: "Our seal solutions provide reliable protection for bearings and mechanical systems against contamination while retaining lubricants. Available in various materials and configurations to meet specific application requirements and operating environments.",
      image: AutoParts,
      features: [
        "Superior sealing performance",
        "Chemical and temperature resistance",
        "Low friction design",
        "Extended service life",
        "Custom configurations available"
      ],
      applications: [
        "Automotive industry",
        "Industrial machinery",
        "Hydraulic systems",
        "Food processing equipment",
        "Marine applications"
      ]
    },
    "Bushes": {
      id: "Bushes",
      name: "Bushes",
      description: "Specialized Bushes for proper installation and maintenance of bearings and related components.",
      detailedDescription: "Our professional tool range ensures proper installation, removal, and maintenance of bearings and mechanical components. These precision-engineered Bushes help prevent damage during service operations and ensure optimal performance of installed components.",
      image: Bushes,
      features: [
        "Precision-engineered construction",
        "Prevents component damage",
        "Professional-grade materials",
        "Comprehensive tool sets",
        "Ergonomic design"
      ],
      applications: [
        "Bearing installation and removal",
        "Maintenance workshops",
        "Field service operations",
        "Manufacturing assembly",
        "Repair facilities"
      ]
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts or category changes
    window.scrollTo(0, 0);
    setLoading(true);
    
    if (category) {
      const categoryData = categoriesData[category];
      
      if (categoryData) {
        // Use the actual category name from categoryData to get products
        const categoryProducts = getProductsByCategory(categoryData.name);
        setProducts(categoryProducts);
        setCategoryInfo(categoryData);
      } else {
        // If no category data found, redirect to main products page
        navigate("/products", { replace: true });
      }
    }
    
    setLoading(false);
  }, [category, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 w-48 bg-neutral-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Category Not Found</h1>
            <p className="text-neutral-600 mb-6">The category you are looking for does not exist or has been removed.</p>
            <a href="/products" className="btn-primary">View All Products</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: categoryInfo.name }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src={categoryInfo.image} 
              alt={categoryInfo.name} 
              className="w-full h-full object-cover animate-fade-up"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-spco-900/90 to-spco-800/60"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <Breadcrumb 
              items={breadcrumbItems} 
              className="mb-6 text-white/80" 
            />
            
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
                {categoryInfo.name}
              </h1>
              <p className="text-lg text-white/90 mb-8">
                {categoryInfo.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {/* <a href="#products" className="btn-primary">
                  Browse Products
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a> */}
                <a href="/contact" className="btn-primary">
                  Get Technical Support
                </a> 
              </div>
            </div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-6">
                  About Our {categoryInfo.name}
                </h2>
                <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                  {categoryInfo.detailedDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Premium Quality</h3>
                    <p className="text-sm text-neutral-600">Manufactured to highest standards</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Reliable Performance</h3>
                    <p className="text-sm text-neutral-600">Proven in demanding applications</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-accent-500 mb-2 flex justify-center">
                      <Cog className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-spco-700 mb-1">Technical Support</h3>
                    <p className="text-sm text-neutral-600">Expert guidance available</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={categoryInfo.image}
                  alt={categoryInfo.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg animate-fade-up"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features and Applications */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-spco-800 mb-6">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {categoryInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-accent-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-neutral-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-display font-semibold text-spco-800 mb-6">
                  Common Applications
                </h2>
                <div className="space-y-4">
                  {categoryInfo.applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-accent-500 mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-neutral-700">{application}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section
        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Browse Our {categoryInfo.name}</h2>
              <p className="section-subtitle mx-auto">
                Explore our complete range of {categoryInfo.name.toLowerCase()} designed for optimal performance in various applications.
              </p>
            </div>
            
            <ProductGrid products={products} />
            
            <div className="mt-12 text-center">
              <a href="/products" className="btn-primary">
                View All Products
              </a>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="py-16 bg-spco-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-4">
                Need Help Selecting the Right {categoryInfo.name}?
              </h2>
              <p className="text-neutral-600 mb-8">
                Our technical experts are ready to help you find the perfect solution for your specific application requirements.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {/* <a 
                  href={`tel:+912212345678`} 
                  className="btn-primary"
                >
                  <Phone className="h-4 w-4" />
                  Call Technical Support: +91 22 1234 5678
                </a> */}
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Request Technical Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
