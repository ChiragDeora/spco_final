
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ballbearings from '@/assets/ballbearings.jpg';
import journalLogo from '@/assets/journal_and_tilting_pad_logo.jpg';
import ballbearings1 from '@/assets/ballbearings-1.jpg';
import adapterSleevesLogo from '@/assets/adapter-sleeves_logo.jpg';
import cogelsa_lubricants from '@/assets/cogelsa_lubricants.png';
import lubricant_homePage from '@/assets/lubricant_homePage.jpg';
import AutoParts from '@/assets/Autoparts.jpg';  
import Bushes from '@/assets/Bushes.jpg';
import seals from '@/assets/seals.webp';

interface Category {
  id: string;
  name: string;
  description: string;
  src: string;
  link: string;
}

const ProductCategories = () => {
  const categories: Category[] = [
    {
      id: "bearings",
      name: "Bearings",
      description: "Comprehensive range of precision bearings including ball, roller, and specialized bearings for industrial applications.",
      src: ballbearings,
      link: "/products/bearings"
    },
    {
      id: "speciality-lubricants",
      name: "Speciality Lubricants",
      description: "High-performance specialty lubricants formulated for specific applications and extreme operating conditions.",
      src: lubricant_homePage,
      link: "/products/speciality-lubricants"
    },
    {
      id: "automotive-parts",
      name: "Automotive Parts",
      description: "Quality automotive components and parts designed for reliability and performance in vehicle applications.",
      src: AutoParts,
      link: "/products/automotive-parts"
    },
    {
      id: "journal-tilting-pad-bearings",
      name: "Journal & Tilting Pad Bearings",
      description: "Advanced journal and tilting pad bearings for high-speed, high-load applications in critical machinery.",
      src: journalLogo,
      link: "/products/journal-tilting-pad-bearings"
    },
    {
      id: "self-lubricating-bushes",
      name: "Self Lubricating Bushes",
      description: "Self-lubricating bushings that provide continuous lubrication without external maintenance requirements.",
      src: Bushes,
      link: "/products/self-lubricating-bushes"
    },
    {
      id: "adaptor-sleeves",
      name: "Adaptor Sleeves",
      description: "Precision adaptor sleeves for secure bearing mounting and proper shaft-to-bore connections.",
      src: adapterSleevesLogo,
      link: "/products/adaptor-sleeves"
    }
  ];

  return (
    <section id="product-categories" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle mx-auto">
            Explore our comprehensive range of high-quality hardware components designed for various industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full">
                <div className="h-48 overflow-hidden bg-neutral-100">
                  <img 
                    src={category.src} 
                    alt={category.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 animate-fade-up"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-semibold text-spco-700 group-hover:text-spco-800 transition-colors">
                    {category.name}
                  </h3>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-neutral-600 text-sm line-clamp-3">
                    {category.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="text-spco-600 group-hover:text-spco-800 font-medium text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-all">
                    Explore Category
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
