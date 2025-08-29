
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
// import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/lib/data";
import { Cog, Shield, Award } from "lucide-react";
import ballbearings from '@/assets/ballbearings.jpg';
// import rollerbearings from '@/assets/rollerbearings.jpg';
import cogelsa_lubricants from '@/assets/cogelsa_lubricants.png';
import AutoParts from '@/assets/Autoparts.jpg';
import Bushes from '@/assets/Bushes.jpg';
// import tools from '@/assets/tools.jpg';
import permaglideLogo from '@/assets/permaglide_logo.png';
import journalLogo from '@/assets/journal_and_tilting_pad_logo.jpg';
import adapterSleevesLogo from '@/assets/adapter-sleeves_logo.jpg';
import ntnLogo from '@/assets/ntn.png';
import cogelsaLogo from '@/assets/cogelsa.png';
import rheinmetallLogo from '@/assets/Rheinmetall.png';
import mibaLogo from '@/assets/Miba.png';
import orionLogo from '@/assets/orion_logo.png';
import zollernLogo from '@/assets/zollern_logo.webp';
import johnCraneLogo from '@/assets/john_crane_logo.jpg';
// import spcoLogo from '@/assets/spco-logo-dark.png';
import spcoLogo from '@/assets/SPCO_Logo.png';

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  features: string[];
  applications: string[];
}

interface Brand {
  name: string;
  description: string;
  logo?: string;
  size?: string;
}

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [, setProducts] = useState<Product[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<CategoryInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Brands data for each category
  const brandsData: { [key: string]: Brand[] } = {
    "bearings": [
      {
        name: "NTN",
        description: "NTN is a global leader in the manufacturing of bearings and precision equipment, with a history spanning over 100 years. Known for its rigorous quality standards and innovative products, NTN serves a wide array of markets, including industrial, automotive, and aerospace. They are a trusted partner for high-performing bearing solutions that enhance productivity and efficiency.",
        logo: ntnLogo
      }
      // {
      //   name: "ZEN",
      //   description: "Established in Germany, ZEN specializes in manufacturing high-quality bearings for a variety of industries. With a strong commitment to precision and durability, ZEN's products are manufactured to stringent German industry standards. They offer a diverse range of bearings, from miniature to custom-engineered solutions, supported by a global distribution network.",
      //   logo: "/src/assets/zen.png"
      // }
    ],
    "speciality-lubricants": [
      {
        name: "Cogelsa",
        description: "Cogelsa is a Spanish company with over a century of experience in developing, manufacturing, and marketing high-tech lubricants and greases. They are a global expert in industrial lubrication, offering specialized solutions for a wide range of sectors. Cogelsa is dedicated to providing high-performance, cost-efficient, and sustainable lubrication products.",
        logo: cogelsaLogo
      }
    ],
    "automotive-parts": [
      {
        name: "Rheinmetall",
        description: "Rheinmetall is a leading international technology group with a broad portfolio of products, including a significant presence in the automotive sector. The company provides a wide range of advanced solutions for engines and other automotive components. Known for its innovation and high-quality standards, Rheinmetall's portfolio is trusted by leading automotive manufacturers worldwide.",
        logo: rheinmetallLogo
      }
    ],
    "journal-tilting-pad-bearings": [
      {
        name: "MIBA",
        description: "MIBA is a global developer and manufacturer of functional components for engines and powertrains. They specialize in high-precision parts, including engine and industrial bearings. MIBA is a key partner for many leading companies in the automotive, commercial vehicle, and power generation markets, known for its focus on efficiency and sustainability.",
        logo: mibaLogo
      },
      {
        name: "Orion",
        description: "With a history that dates back to the mid-20th century, Orion built a reputation as a trusted designer and manufacturer of hydrodynamic bearings. Based in the United States, their legacy is rooted in providing high-quality pivoting shoe and tilting pad journal bearings. The acquisition by Miba has seamlessly integrated Orion's long-standing expertise and product quality into a global network.",
        logo: orionLogo
      },
      {
        name: "Zollern",
        description: "Zollern has a history spanning more than 300 years and is one of Germany's oldest family-owned companies. Renowned for its metal processing and engineering, Zollern was a key player in the plain and tilting pad bearing market. Their hydrodynamic bearings were integral to power generation and various industrial applications. Miba's joint venture with Zollern in 2019 brought together their combined know-how, creating a powerhouse in the industrial bearing sector.",
        logo: zollernLogo
      },
      {
        name: "John Crane",
        description: "John Crane was a well-known name in the world of mechanical seals and hydrodynamic bearings. With roots in Germany and the USA, their industrial bearings segment was celebrated for its high-performance, technically sophisticated designs. The acquisition of this division by Miba in 2018 significantly bolstered Miba's capabilities, adding a robust portfolio of tilting pad bearings for turbines, compressors, and pumps, along with a strong global service network.",
        logo: johnCraneLogo
      }
    ],
    "self-lubricating-bushes": [
      {
        name: "Permaglide",
        description: "Permaglide is a registered trademark of KS Gleitlager, a leading German specialist in high-precision plain bearings. The brand name itself signifies 'permanently low-wear gliding,' highlighting the durability and low-maintenance nature of its products. Permaglide bearings are a preferred choice for their high rigidity, long service life, and excellent emergency running properties in both dry and lubricated applications.",
        logo: permaglideLogo,
        size: "h-20 w-auto"
      }
    ],
    "adaptor-sleeves": [
      {
        name: "SPCO",
        description: "Our own range of high-quality adaptor sleeves designed and manufactured to meet the highest industry standards. These components ensure secure bearing mounting and reliable performance in various mechanical assemblies.",
        // logo: spcoLogo,
        logo: spcoLogo,
        size: "h-20 w-auto"
      }
    ]
  };

  // Function to get brands for a specific category
  const getBrandsForCategory = (categoryId: string): Brand[] => {
    return brandsData[categoryId] || [];
  };

  // Category data with detailed information
  const categoriesData: { [key: string]: CategoryInfo } = {
    "bearings": {
      id: "bearings",
      name: "Bearings",
      description: "Bearings are crucial machine elements that reduce friction between moving parts and support loads, enabling smooth, efficient motion.",
      detailedDescription: "Bearings are crucial machine elements that reduce friction between moving parts and support loads, enabling smooth, efficient motion. They are used across a vast range of industries, from heavy machinery and power generation to automotive and aerospace applications. Our selection of bearings ensures superior performance, durability, and reliability for all your operational needs.",
      image: ballbearings,
      features: [
        "Reduced friction and smooth operation",
        "Superior load-carrying capacity",
        "High-speed performance capability",
        "Extended service life",
        "Wide temperature range operation"
      ],
      applications: [
        "Heavy machinery and power generation",
        "Automotive and aerospace applications",
        "Industrial equipment and machinery",
        "Electric motors and generators",
        "HVAC systems and compressors"
      ]
    },
    "speciality-lubricants": {
      id: "speciality-lubricants",
      name: "Speciality Lubricants",
      description: "High-performance oils and greases designed for demanding industrial environments with exceptional performance under extreme conditions.",
      detailedDescription: "Speciality lubricants are high-performance oils and greases designed for demanding industrial environments. Unlike conventional lubricants, they are engineered to provide exceptional performance under extreme conditions like high temperatures, heavy loads, and exposure to contaminants. These lubricants are essential for reducing friction, protecting against wear, and extending the service life of critical machinery.",
      image: cogelsa_lubricants,
      features: [
        "Exceptional performance under extreme conditions",
        "High temperature and heavy load resistance",
        "Contaminant protection",
        "Extended equipment service life",
        "Reduced maintenance requirements"
      ],
      applications: [
        "High-temperature industrial applications",
        "Heavy machinery and equipment",
        "Critical rotating equipment",
        "Contaminated environments",
        "Extended service intervals"
      ]
    },
    "automotive-parts": {
      id: "automotive-parts",
      name: "Automotive Parts",
      description: "Comprehensive range of automotive parts essential for heavy earth moving machinery used in the mining sector.",
      detailedDescription: "We supply a comprehensive range of automotive parts essential for the heavy earth moving machinery used in the mining sector. Our portfolio includes components for engines ensuring top-tier performance and safety. We offer solutions of the automotive industry from the leading original equipment manufacturers (OEMs).",
      image: AutoParts,
      features: [
        "Top-tier performance and safety",
        "OEM quality standards",
        "Heavy-duty construction",
        "Reliable operation in harsh conditions",
        "Comprehensive component coverage"
      ],
      applications: [
        "Heavy earth moving machinery",
        "Mining sector equipment",
        "Construction vehicles",
        "Industrial engines",
        "Commercial vehicles"
      ]
    },
    "journal-tilting-pad-bearings": {
      id: "journal-tilting-pad-bearings",
      name: "Journal & Tilting Pad Bearings",
      description: "Specialized fluid-film bearings designed for high-speed, high-load applications such as turbines and compressors.",
      detailedDescription: "Journal and tilting pad bearings are a specialized type of fluid-film bearing, designed for high-speed, high-load applications, such as turbines and compressors. They consist of multiple pivoted pads that tilt to form a hydrodynamic wedge of lubricant, providing exceptional stability and load-carrying capacity. These bearings are critical for protecting expensive and vital rotating equipment from damage.",
      image: journalLogo,
      features: [
        "High-speed and high-load capability",
        "Exceptional stability and load-carrying capacity",
        "Hydrodynamic lubrication system",
        "Protection for critical rotating equipment",
        "Multiple pivoted pad design"
      ],
      applications: [
        "Turbines and compressors",
        "Power generation equipment",
        "High-speed rotating machinery",
        "Critical industrial applications",
        "Precision engineering systems"
      ]
    },
    "self-lubricating-bushes": {
      id: "self-lubricating-bushes",
      name: "Self Lubricating Bushes",
      description: "Oilless bearings designed for applications where conventional lubrication is difficult or impossible.",
      detailedDescription: "Self-lubricating bushes, also known as oilless bearings, are designed for applications where conventional lubrication is difficult or impossible. These bushes contain solid lubricants within their structure, which are released during operation to create a protective film. This eliminates the need for external greasing, reducing maintenance costs and ensuring long-lasting performance in harsh conditions.",
      image: Bushes,
      features: [
        "No external lubrication required",
        "Solid lubricant embedded structure",
        "Reduced maintenance costs",
        "Long-lasting performance",
        "Harsh condition resistance"
      ],
      applications: [
        "Difficult-to-lubricate locations",
        "Harsh environmental conditions",
        "Maintenance-free applications",
        "Remote or inaccessible areas",
        "High-temperature environments"
      ]
    },
    "adaptor-sleeves": {
      id: "adaptor-sleeves",
      name: "Adaptor Sleeves",
      description: "Machine components used to mount bearings with a tapered bore onto cylindrical shafts.",
      detailedDescription: "Adaptor sleeves are machine components used to mount bearings with a tapered bore onto cylindrical shafts. They are a simple yet effective solution that doesn't require any additional retention means on the shaft. Supplied complete with a locknut and tab washer, adaptor sleeves ensure a secure fit and are a fundamental component in many mechanical assemblies.",
      image: adapterSleevesLogo,
      features: [
        "Simple and effective mounting solution",
        "No additional retention means required",
        "Secure fit with locknut and tab washer",
        "Tapered bore compatibility",
        "Fundamental mechanical assembly component"
      ],
      applications: [
        "Bearing mounting on cylindrical shafts",
        "Mechanical assemblies",
        "Industrial machinery",
        "Equipment maintenance",
        "Precision engineering applications"
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
        {/* <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
        </section> */}

        {/* Brands Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Trusted Brands</h2>
              <p className="section-subtitle mx-auto">
                We partner with world-leading manufacturers to provide you with the highest quality products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {getBrandsForCategory(categoryInfo.id).map((brand, index) => (
                <div key={index} className="group bg-white rounded-xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center">
                    {brand.logo ? (
                      <div className={`${brand.size || 'w-20 h-20'} mr-6 flex items-center justify-center flex-shrink-0`}>
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} logo`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-spco-600 to-spco-800 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-spco-700 group-hover:text-spco-800 transition-colors mr-4">{brand.name}</h3>
                        {/* <span className="text-sm text-accent-600 font-medium bg-accent-50 px-3 py-1 rounded-full">Premium Partner</span> */}
                      </div>
                      <div className="relative">
                        <div className="absolute -top-2 left-0 w-16 h-1 bg-gradient-to-r from-accent-500 to-spco-600 rounded-full"></div>
                        <p className="text-neutral-600 text-base leading-relaxed pt-4">
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
