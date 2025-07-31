
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import { getIndustryById, getProductsByIndustry } from "@/lib/data";
import { Industry } from "@/components/industries/IndustryCard";
import { Product } from "@/components/products/ProductCard";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const IndustryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts or industry ID changes
    window.scrollTo(0, 0);
    setLoading(true);
    
    if (id) {
      const foundIndustry = getIndustryById(id);
      if (foundIndustry) {
        setIndustry(foundIndustry);
        setProducts(getProductsByIndustry(id));
      } else {
        // If industry not found, redirect to industries page
        navigate("/industries", { replace: true });
      }
    }
    
    setLoading(false);
  }, [id, navigate]);

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

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Industry Not Found</h1>
            <p className="text-neutral-600 mb-6">The industry you are looking for does not exist or has been removed.</p>
            <a href="/industries" className="btn-primary">View All Industries</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: industry.name }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src={industry.image} 
              alt={industry.name} 
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
                {industry.name} Solutions
              </h1>
              <p className="text-lg text-white/90 mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#products" className="btn-primary">
                  Explore Products
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
                <a href="/contact" className="bg-white text-spco-800 hover:bg-neutral-100 font-medium py-2.5 px-5 rounded-md inline-flex items-center gap-2 transition-custom">
                  Contact Industry Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Choose SPCO for {industry.name}</h2>
              <p className="section-subtitle mx-auto">
                We understand the unique challenges of the {industry.name.toLowerCase()} sector and provide specialized solutions to address them.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-custom">
                <div className="text-accent-500 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-2">
                  Industry-Specific Expertise
                </h3>
                <p className="text-neutral-600">
                  Our technical team has extensive experience in the {industry.name.toLowerCase()} sector, providing tailored advice for your specific applications.
                </p>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-custom">
                <div className="text-accent-500 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-2">
                  Specialized Product Range
                </h3>
                <p className="text-neutral-600">
                  We offer products specifically designed to meet the demanding requirements of {industry.name.toLowerCase()} applications.
                </p>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-custom">
                <div className="text-accent-500 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-2">
                  Reliable Supply Chain
                </h3>
                <p className="text-neutral-600">
                  Our established supplier relationships ensure consistent availability of critical components for your operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study (Placeholder) */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <span className="inline-flex items-center rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700 mb-4">
                    Case Study
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-4">
                    Solving {industry.name} Challenges
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    Learn how SPCO helped a leading {industry.name.toLowerCase()} company reduce maintenance costs by 35% and increase equipment reliability through our specialized hardware solutions.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-accent-500 mr-3">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-spco-700">Challenge</h4>
                        <p className="text-neutral-600">Frequent equipment failures in harsh operating conditions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-accent-500 mr-3">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-spco-700">Solution</h4>
                        <p className="text-neutral-600">Custom-engineered bearings and sealing solutions specific to their application</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-accent-500 mr-3">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-spco-700">Results</h4>
                        <p className="text-neutral-600">35% reduction in maintenance costs and 45% extended equipment life</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary">
                    Read Full Case Study
                  </button>
                </div>
                
                <div className="relative">
                  <img 
                    src={industry.image}
                    alt={`${industry.name} Case Study`}
                    className="w-full h-full object-cover object-center animate-fade-up"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products for this Industry */}
        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Products for {industry.name}</h2>
              <p className="section-subtitle mx-auto">
                Explore our range of hardware components specifically selected for {industry.name.toLowerCase()} applications.
              </p>
            </div>
            
            <ProductGrid products={products} />
            
            <div className="mt-12 text-center">
              <a href="/products" className="btn-primary">
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* Industry Specialist Contact */}
        <section className="py-16 bg-spco-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-4">
                Speak with Our {industry.name} Specialist
              </h2>
              <p className="text-neutral-600 mb-8">
                Have questions about your specific application? Our industry experts are ready to help you find the perfect solution.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a 
                  href={`tel:+912212345678`} 
                  className="btn-primary"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: +91 22 1234 5678
                </a>
                <a 
                  href="/contact" 
                  className="btn-outline"
                >
                  Send a Message
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

export default IndustryDetail;
