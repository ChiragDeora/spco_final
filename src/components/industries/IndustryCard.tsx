
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  productsCount: number;
}

interface IndustryCardProps {
  industry: Industry;
  className?: string;
}

const IndustryCard = ({ industry, className }: IndustryCardProps) => {
  const { id, name, description, image, productsCount } = industry;

  return (
    <div className={cn(
      "group overflow-hidden rounded-lg shadow-sm border border-neutral-200 bg-white card-hover",
      className
    )}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-xl font-display font-semibold text-white">
              {name}
            </h3>
            <div className="mt-1 text-white/80 text-sm">
              {productsCount} products available
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link
          to={`/industries/${id}`}
          className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium transition-custom group-hover:translate-x-1"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
