
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

interface ContactFormProps {
  className?: string;
  compact?: boolean;
  prefilledProduct?: string;
  showTitle?: boolean;
}

const ContactForm = ({ 
  className, 
  compact = false, 
  prefilledProduct, 
  showTitle = true 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: prefilledProduct || "",
    subject: prefilledProduct ? `Inquiry about ${prefilledProduct}` : "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setIsSubmitting(false);
      
      // Only reset if not a quick inquiry form with prefilled product
      if (!prefilledProduct) {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          subject: "",
          message: ""
        });
      }
    }, 1000);
  };

  const productOptions = [
    "Ball Bearings",
    "Roller Bearings",
    "Lubricants",
    "Auto Parts",
    "Bushes",
    "Other"
  ];

  return (
    <div className={cn("w-full", className)}>
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-display font-semibold text-spco-800">
            {prefilledProduct ? "Quick Inquiry" : "Get in Touch"}
          </h3>
          <p className="text-neutral-600 mt-1">
            {prefilledProduct 
              ? "Have a question about this product? We'll get back to you quickly."
              : "Fill out the form below and we'll get back to you as soon as possible."}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={cn(
          "grid gap-4",
          compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        )}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Name <span className="text-accent-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
              Company <span className="text-accent-500">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
            />
          </div>
        </div>

        <div className={cn(
          "grid gap-4",
          compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        )}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email <span className="text-accent-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
            />
          </div>
        </div>

        {!compact && (
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1">
              Product Interest
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
            >
              <option value="">Select a product category</option>
              {productOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
            Subject <span className="text-accent-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Message <span className="text-accent-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border-neutral-300 shadow-sm focus:border-spco-500 focus:ring-spco-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "btn-primary w-full justify-center",
              isSubmitting && "opacity-75 cursor-not-allowed"
            )}
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {prefilledProduct ? "Send Inquiry" : "Submit Message"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
