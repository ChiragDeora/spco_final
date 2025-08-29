import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ntn from '@/assets/ntn.png';
import miba from '@/assets/Miba.png';
import zen from '@/assets/zen.png';
import rheinmetall from '@/assets/Rheinmetall.png';
import cogelsa from '@/assets/cogelsa.png';

const PartnerBrands = () => {
  const brands = [
    { 
      name: "NTN", 
      logo: ntn,
      size: "h-24 w-auto" // Increased from h-16
    },
    { 
      name: "Miba", 
      logo: miba,
      size: "h-20 w-auto" // Custom size for Miba
    },
    { 
      name: "Zen", 
      logo: zen,
      size: "h-28 w-28" // Larger size for Zen
    },
    { 
      name: "Rheinmetall", 
      logo: rheinmetall,
      size: "h-28 w-auto" // Custom size for Rheinmetall
    },
    { 
      name: "Cogelsa", 
      logo: cogelsa,
      size: "h-26 w-auto" // Larger size for Cogelsa
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-spco-800 mb-4">
            Our Partner Brands
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We are proud to partner with leading manufacturers to deliver the highest quality products and solutions.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 h-48 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`${brand.size} max-w-full object-contain transition-all duration-300`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
