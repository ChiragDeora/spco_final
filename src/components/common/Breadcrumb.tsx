import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
interface BreadcrumbItem {
  label: string;
  href?: string;
}
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}
const Breadcrumb = ({
  items,
  className
}: BreadcrumbProps) => {
  return <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm text-neutral-500 hover:text-spco-600 transition-custom">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        
        {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-neutral-400" />
              {!isLast && item.href ? <Link to={item.href} className="ml-1 md:ml-2 text-sm text-neutral-500 hover:text-spco-600 transition-custom">
                  {item.label}
                </Link> : <span className="ml-1 md:ml-2 text-sm font-medium text-slate-50">
                  {item.label}
                </span>}
            </li>;
      })}
      </ol>
    </nav>;
};
export default Breadcrumb;