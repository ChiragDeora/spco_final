
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  image: string;
  specifications: {
    [key: string]: string | number;
  };
  description: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, name, category, image, specifications } = product;

  // Extract key specifications for preview
  const keySpecs = Object.entries(specifications).slice(0, 3);

  return (
    <div className={cn(
      "bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-custom group",
      className
    )}>
      <div className="relative h-48 overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500 animate-fade-up"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-spco-50 px-2.5 py-0.5 text-xs font-medium text-spco-700">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-spco-800 mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="space-y-1 mb-4">
          {keySpecs.map(([key, value]) => (
            <div key={key} className="flex text-sm">
              <span className="text-neutral-600 font-medium min-w-[120px]">{key}:</span>
              <span className="text-neutral-800">{value}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-neutral-100">
          <Link
            to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}/${id}`}
            className="inline-flex items-center text-spco-500 hover:text-spco-600 font-medium text-sm transition-custom group-hover:translate-x-1"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          
          <Link
            to={`/contact?product=${encodeURIComponent(name)}`}
            className="text-sm font-medium text-spco-600 hover:text-spco-700 transition-custom"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
