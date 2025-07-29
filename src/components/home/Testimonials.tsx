
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "SPCO has been our trusted supplier for over 5 years. Their high-quality bearings have significantly reduced our equipment downtime and maintenance costs.",
      author: "Rajesh Sharma",
      title: "Procurement Manager",
      company: "Tata Steel Limited",
      rating: 5
    },
    {
      id: 2,
      content: "The technical expertise and product knowledge of the SPCO team is exceptional. They helped us find the perfect solution for our specialized manufacturing equipment.",
      author: "Priya Patel",
      title: "Maintenance Engineer",
      company: "Mahindra Heavy Industries",
      rating: 5
    },
    {
      id: 3,
      content: "SPCO's quick response time and reliable delivery has made them our go-to supplier for all bearing needs. Their product quality is consistently excellent.",
      author: "Vikram Singh",
      title: "Operations Director",
      company: "Larsen & Toubro",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-spco-100 opacity-50 blur-3xl"></div>
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent-50 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Discover why leading companies across industries trust SPCO for their hardware needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="relative h-[320px] md:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute top-0 left-0 w-full p-8 bg-white rounded-2xl shadow-lg border border-neutral-100 transition-all duration-500 ease-in-out",
                    index === activeIndex 
                      ? "opacity-100 translate-x-0 z-20" 
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-full z-10" 
                        : "opacity-0 translate-x-full z-10"
                  )}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg text-neutral-700 italic mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gradient-to-br from-spco-600 to-spco-800 rounded-full flex items-center justify-center text-white font-medium text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-display font-semibold text-spco-800">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "w-8 bg-accent-500" 
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <button
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-neutral-700 hover:text-spco-600 hover:shadow-lg transition-custom hidden lg:block"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-neutral-700 hover:text-spco-600 hover:shadow-lg transition-custom hidden lg:block"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
