
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import IndustryCard from "@/components/industries/IndustryCard";
import { industries } from "@/lib/data";

const Industries = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={[{ label: "Industries" }]} className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-2">Industries We Serve</h1>
            <p className="text-neutral-600 max-w-3xl">
              SPCO provides specialized hardware solutions for diverse industry sectors, with products engineered to meet the unique demands of each application.
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">Custom Industry Solutions</h2>
              <p className="section-subtitle mx-auto">
                Don't see your industry listed? We work with many specialized sectors and can provide custom hardware solutions for your specific application needs.
              </p>
              <div className="mt-8">
                <a href="/contact" className="btn-primary">
                  Discuss Your Requirements
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

export default Industries;
