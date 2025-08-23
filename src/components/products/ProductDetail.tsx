
import { useState } from "react";
import { Product } from "./ProductCard";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Download, Share, Mail, Phone, FileText, ShoppingCart } from "lucide-react";
import ContactForm from "../common/ContactForm";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import journalLogo from "@/assets/journal_and_tilting_pad_logo.jpg";
import adapterSleevesLogo from "@/assets/adapter-sleeves_logo.jpg";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetail = ({ product, relatedProducts }: ProductDetailProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "specifications" | "applications">("overview");
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tabStyles = {
    base: "px-4 py-2 text-sm font-medium border-b-2 transition-custom",
    active: "border-spco-500 text-spco-600",
    inactive: "border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Product Main Info */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="p-8 bg-neutral-50 flex items-center justify-center relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[400px] object-contain animate-fade-up"
            />
            {/* Journal Logo for Journal & Tilting Pad Bearings */}
            {product.category === "Journal & Tilting Pad Bearings" && (
              <div className="absolute top-4 right-4">
                <img
                  src={journalLogo}
                  alt="Journal & Tilting Pad Logo"
                  className="h-12 w-12 object-contain rounded-full bg-white p-2 shadow-md"
                />
              </div>
            )}
            {/* Adapter Sleeves Logo for Adaptor Sleeves */}
            {product.category === "Adaptor Sleeves" && (
              <div className="absolute top-4 right-4">
                <img
                  src={adapterSleevesLogo}
                  alt="Adapter Sleeves Logo"
                  className="h-12 w-12 object-contain rounded-full bg-white p-2 shadow-md"
                />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-8">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-spco-50 px-2.5 py-0.5 text-xs font-medium text-spco-700">
                  {product.category}
                </span>
                {product.subcategory && (
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                    {product.subcategory}
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-display font-semibold text-spco-800 mb-3">
                {product.name}
              </h1>

              <p className="text-neutral-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Key Features/Specs Quick View */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-spco-700 mb-3">Key Specifications</h3>
              <div className="grid grid-cols-1 gap-y-2">
                {Object.entries(product.specifications).slice(0, 5).map(([key, value]) => (
                  <div key={key} className="flex border-b border-neutral-100 pb-2">
                    <span className="text-neutral-600 font-medium w-[140px]">{key}</span>
                    <span className="text-neutral-800 flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-spco-500 hover:bg-spco-600"
                onClick={() => setShowInquiryForm(true)}
              >
                <Mail className="h-4 w-4 mr-2" />
                Inquire Now
              </Button>
              
              <Button 
                variant="outline" 
                className="border-spco-600 text-spco-700 hover:bg-spco-50"
                asChild
              >
                <a href={`tel:+912212345678`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Order
                </a>
              </Button>

              <div className="flex gap-2 ml-auto">
                <button className="p-2 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-custom">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-custom">
                  <Share className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Tabs */}
      <div className="mt-10 bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
        <div className="border-b border-neutral-200">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={cn(
                tabStyles.base,
                activeTab === "overview" ? tabStyles.active : tabStyles.inactive
              )}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={cn(
                tabStyles.base,
                activeTab === "specifications" ? tabStyles.active : tabStyles.inactive
              )}
              onClick={() => setActiveTab("specifications")}
            >
              Detailed Specifications
            </button>
            <button
              className={cn(
                tabStyles.base,
                activeTab === "applications" ? tabStyles.active : tabStyles.inactive
              )}
              onClick={() => setActiveTab("applications")}
            >
              Applications
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="prose max-w-none">
              <p>
                The {product.name} is engineered for superior performance in challenging industrial environments. 
                It offers exceptional durability, precision, and reliability for your critical applications.
              </p>
              
              <h3>Features</h3>
              <ul>
                <li>Premium quality materials for extended service life</li>
                <li>Precision engineered to exacting standards</li>
                <li>Optimal performance under high loads and speeds</li>
                <li>Excellent resistance to contamination and wear</li>
                <li>Reduced maintenance requirements</li>
              </ul>
              
              <h3>Benefits</h3>
              <ul>
                <li>Increased equipment uptime and productivity</li>
                <li>Lower maintenance costs through extended service intervals</li>
                <li>Enhanced operational reliability in demanding applications</li>
                <li>Improved energy efficiency through reduced friction</li>
                <li>Comprehensive technical support from SPCO experts</li>
              </ul>
              
              <div className="flex items-center gap-4 mt-6 not-prose">
                <FileText className="h-10 w-10 text-spco-600" />
                <div>
                  <h4 className="font-medium text-spco-700">Technical Documentation</h4>
                  <p className="text-sm text-neutral-600">Download detailed specification sheets and installation guides</p>
                </div>
                <button className="ml-auto bg-spco-50 hover:bg-spco-100 text-spco-700 px-4 py-2 rounded-md text-sm font-medium transition-custom">
                  Download PDF
                </button>
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <p className="text-neutral-600 mb-6">
                Complete technical specifications for the {product.name}. Our products meet or exceed industry standards for quality and performance.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Specification</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Value</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Unit</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{key}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                          {typeof value === 'number' ? value.toString() : value.split(' ')[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                          {typeof value === 'string' && value.includes(' ') ? value.split(' ')[1] : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 text-spco-600 mr-3" />
                  <div className="flex-1">
                    <h4 className="font-medium text-spco-700">Looking for a specific configuration?</h4>
                    <p className="text-sm text-neutral-600">We offer custom solutions to meet your exact requirements.</p>
                  </div>
                  <button className="btn-primary text-sm" onClick={() => setShowInquiryForm(true)}>
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-6">
              <p className="text-neutral-600">
                The {product.name} is suitable for a wide range of industrial applications across various sectors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium text-spco-700 mb-3">Manufacturing</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Production machinery with high operational demands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Assembly lines requiring precise component positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Packaging equipment operating at high speeds</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium text-spco-700 mb-3">Automotive</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Vehicle transmission systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Wheel hub assemblies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Engine components subject to high temperatures</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium text-spco-700 mb-3">Heavy Machinery</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Construction equipment operating in harsh environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Mining machinery exposed to extreme conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Agricultural equipment requiring reliable operation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium text-spco-700 mb-3">Energy</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Wind turbine pitch and yaw mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Pumping systems in oil and gas production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      <span>Power generation equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-5 bg-spco-50 rounded-lg">
                <h3 className="text-lg font-medium text-spco-800 mb-2">Application Support</h3>
                <p className="text-neutral-700 mb-4">
                  Our industry experts can help you select the right product for your specific application requirements.
                  Contact us for customized recommendations and technical support.
                </p>
                <button 
                  className="btn-primary text-sm"
                  onClick={() => setShowInquiryForm(true)}
                >
                  Request Application Support
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="section-title">Related Products</h2>
          <p className="section-subtitle">
            Explore other products that may complement your application needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {relatedProducts.slice(0, 3).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}

      {/* Quick Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-zoom-in">
            <div className="flex justify-between items-center p-6 border-b border-neutral-200">
              <h3 className="text-xl font-display font-semibold text-spco-800">
                Quick Inquiry
              </h3>
              <button 
                onClick={() => setShowInquiryForm(false)}
                className="text-neutral-500 hover:text-neutral-700 transition-custom"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ContactForm 
                compact={true} 
                prefilledProduct={product.name} 
                showTitle={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
