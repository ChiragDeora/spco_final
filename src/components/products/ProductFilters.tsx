
import { useState } from "react";
import { X, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface ProductFiltersProps {
  filterGroups: FilterGroup[];
  activeFilters: Record<string, string[]>;
  setActiveFilters: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  className?: string;
}

const ProductFilters = ({
  filterGroups,
  activeFilters,
  setActiveFilters,
  className
}: ProductFiltersProps) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    filterGroups.reduce((acc, group) => ({ ...acc, [group.id]: true }), {})
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const toggleFilter = (groupId: string, optionId: string) => {
    setActiveFilters((prev) => {
      const groupFilters = prev[groupId] || [];
      const updatedFilters = groupFilters.includes(optionId)
        ? groupFilters.filter(id => id !== optionId)
        : [...groupFilters, optionId];
      
      return {
        ...prev,
        [groupId]: updatedFilters
      };
    });
  };

  const clearFilters = () => {
    setActiveFilters({});
  };

  // Calculate total active filters
  const totalActiveFilters = Object.values(activeFilters).reduce(
    (total, filters) => total + filters.length,
    0
  );

  const FiltersContent = () => (
    <div className="space-y-6">
      {totalActiveFilters > 0 && (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="text-sm text-neutral-600">
            <span className="font-medium text-spco-700">{totalActiveFilters}</span> active filters
          </div>
          <button
            className="text-sm text-accent-500 hover:text-accent-600 font-medium"
            onClick={clearFilters}
          >
            Clear all
          </button>
        </div>
      )}

      {filterGroups.map((group) => (
        <div key={group.id} className="border-b border-neutral-200 pb-6">
          <button
            className="flex w-full items-center justify-between text-sm font-medium text-neutral-900"
            onClick={() => toggleGroup(group.id)}
          >
            {group.name}
            {expandedGroups[group.id] ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {expandedGroups[group.id] && (
            <div className="mt-4 space-y-2">
              {group.options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={`filter-${group.id}-${option.id}`}
                    name={`${group.id}[]`}
                    type="checkbox"
                    checked={(activeFilters[group.id] || []).includes(option.id)}
                    onChange={() => toggleFilter(group.id, option.id)}
                    className="h-4 w-4 rounded border-neutral-300 text-spco-600 focus:ring-spco-500"
                  />
                  <label
                    htmlFor={`filter-${group.id}-${option.id}`}
                    className="ml-3 text-sm text-neutral-700"
                  >
                    {option.label}
                    {option.count !== undefined && (
                      <span className="text-neutral-500 ml-1">({option.count})</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile filter dialog */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex items-center text-sm font-medium text-neutral-700 hover:text-spco-600"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters {totalActiveFilters > 0 && `(${totalActiveFilters})`}
        </button>
        
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-end">
            <div 
              className="relative w-full max-w-xs bg-white p-4 shadow-xl overflow-y-auto animate-slide-in-right"
              style={{ height: '100vh' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-neutral-900">Filters</h2>
                <button
                  type="button"
                  className="p-2 -mr-2 text-neutral-600 hover:text-neutral-900"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <FiltersContent />
              
              <div className="sticky bottom-0 bg-white py-4 mt-4 border-t border-neutral-200">
                <button
                  type="button"
                  className="w-full btn-primary"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop filters */}
      <div className={cn("hidden lg:block", className)}>
        <h3 className="text-lg font-medium text-neutral-900 mb-4">Filters</h3>
        <FiltersContent />
      </div>
    </>
  );
};

export default ProductFilters;
