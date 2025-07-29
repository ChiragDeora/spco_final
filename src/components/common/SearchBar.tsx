
import { useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Mock suggestions - in a real app, these would be fetched from an API
  const suggestions = [
    "Ball Bearings",
    "Deep Groove Ball Bearings",
    "Angular Contact Bearings",
    "Roller Bearings",
    "Lubricants",
    "Auto Parts",
    "Bushes"
  ];

  const filteredSuggestions = suggestions.filter(
    (suggestion) => suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-neutral-50 border border-neutral-200 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-spco-500 focus:border-transparent transition-custom"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(e.target.value.length > 0);
          }}
          onFocus={() => {
            if (searchQuery.length > 0) setShowSuggestions(true);
          }}
          onBlur={() => {
            // Delayed to allow clicking on suggestions
            setTimeout(() => setShowSuggestions(false), 200);
          }}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
          <Search className="h-4 w-4" />
        </div>
        {searchQuery && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
            onClick={() => {
              setSearchQuery("");
              setShowSuggestions(false);
            }}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Autocomplete Suggestions */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-md shadow-lg py-1 max-h-60 overflow-auto animate-fade-in-fast">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-custom"
              onClick={() => {
                setSearchQuery(suggestion);
                setShowSuggestions(false);
                navigate(`/search?q=${encodeURIComponent(suggestion)}`);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
