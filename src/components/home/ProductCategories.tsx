
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ballbearings from '@/assets/ballbearings.jpg';
import rollerbearings from '@/assets/rollerbearings.jpg';
import cogelsa_lubricants from '@/assets/cogelsa_lubricants.png';
import AutoParts from '@/assets/Autoparts.jpg';  
import Bushes from '@/assets/Bushes.jpg';

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
      id: "ball-bearings",
      name: "Ball Bearings",
      description: "Precision engineered ball bearings for reduced friction and smooth operation.",
      src: ballbearings,
      // link: "/products/ball-bearings"
      link: "/coming-soon"
    },
    {
      id: "roller-bearings",
      name: "Roller Bearings",
      description: "Heavy-duty roller bearings designed for superior load capacity and durability.",
      src: rollerbearings,
      // link: "/products/roller-bearings"
      link: "/coming-soon"
    },
    {
      id: "lubricants",
      name: "Lubricants",
      description: "High-performance lubricants that extend component life and reduce maintenance.",
      src: cogelsa_lubricants,
      // link: "/products/lubricants"
      link: "/coming-soon"
    },
    {
      id: "Auto Parts",
      name: "Auto Parts",
      description: "Industrial Auto Parts that prevent contamination and retain lubricant in critical systems.",
      src: AutoParts,
      // link: "/products/Auto Parts"
      link: "/coming-soon"
    },
    {
      id: "Bushes",
      name: "Bushes",
      description: "Specialized Bushes for proper installation and maintenance of bearings and related components.",
      src: Bushes,
      // link: "/products/Bushes"
      link: "/coming-soon"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full">
                <div className="h-48 overflow-hidden bg-neutral-100">
                  <img 
                    src={category.src} 
                    alt={category.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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

        {/* <div className="text-center">
          <Button asChild size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductCategories;
