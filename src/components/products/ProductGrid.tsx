
import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { ArrowDownAZ, ArrowDownZA, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

type SortOption = "name_asc" | "name_desc" | "recent";

const ProductGrid = ({ products, className }: ProductGridProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("recent");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "recent":
      default:
        // Assuming that the most recent items have a higher id (if id is numeric)
        return b.id.localeCompare(a.id);
    }
  });

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-neutral-600">
          {products.length} products
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-sm text-neutral-600 mr-2">Sort by:</span>
          <button
            className={cn(
              "inline-flex items-center rounded-md px-3 py-1.5 text-sm transition-custom",
              sortOption === "recent"
                ? "bg-spco-50 text-spco-800"
                : "text-neutral-600 hover:bg-neutral-50"
            )}
            onClick={() => setSortOption("recent")}
          >
            <ArrowUpDown className="mr-1 h-3.5 w-3.5" />
            Recent
          </button>
          <button
            className={cn(
              "inline-flex items-center rounded-md px-3 py-1.5 text-sm transition-custom",
              sortOption === "name_asc"
                ? "bg-spco-50 text-spco-800"
                : "text-neutral-600 hover:bg-neutral-50"
            )}
            onClick={() => setSortOption("name_asc")}
          >
            <ArrowDownAZ className="mr-1 h-3.5 w-3.5" />
            A-Z
          </button>
          <button
            className={cn(
              "inline-flex items-center rounded-md px-3 py-1.5 text-sm transition-custom",
              sortOption === "name_desc"
                ? "bg-spco-50 text-spco-800"
                : "text-neutral-600 hover:bg-neutral-50"
            )}
            onClick={() => setSortOption("name_desc")}
          >
            <ArrowDownZA className="mr-1 h-3.5 w-3.5" />
            Z-A
          </button>
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-neutral-50 rounded-lg">
          <h3 className="text-lg font-medium text-neutral-800 mb-2">
            No products found
          </h3>
          <p className="text-neutral-600">
            Try adjusting your filters or search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
