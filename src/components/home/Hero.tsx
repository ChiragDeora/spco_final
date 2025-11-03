import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgHero from "@/assets/bg_hero.png";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      {/* Top left gradient blob - partially off screen */}
      <div 
        className="absolute top-0 left-0 w-[288px] h-[288px] flex-shrink-0 rounded-full pointer-events-none"
        style={{
          opacity: 0.07,
          background: '#0D47A1',
          filter: 'blur(32px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center right gradient blob - partially off screen */}
      <div 
        className="absolute top-1/2 right-0 w-[384px] h-[384px] flex-shrink-0 rounded-full pointer-events-none"
        style={{
          opacity: 0.15,
          background: '#1A73E8',
          filter: 'blur(32px)',
          transform: 'translate(30%, -50%)',
        }}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[76vh] relative">
          {/* LEFT: Text content */}
          <div className="w-full lg:w-1/2 flex justify-start lg:pl-8 xl:pl-16 animate-fade-up py-8 lg:py-0 relative z-20">
            <div className="max-w-2xl">
            
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-spco-800 leading-tight">
                <span className="block">Precision Hardware</span>
                <span className="block text-spco-600">for Every Industry</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 max-w-lg">
                SPCO provides premium quality bearings, lubricants, and hardware components that keep your machinery running at peak performance.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-base">
                  Enquire Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
                <a href="#product-categories" className="btn-outline text-base">
                  Browse Products
                </a>
              </div>
            </div>
          </div>

          {/* Image - below on mobile, center right on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src={bgHero} 
              alt="Industrial hardware and bearings" 
              className="w-full max-w-[706px] h-auto lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:w-[706px] lg:h-[287px] flex-shrink-0 object-contain z-10"
              style={{ aspectRatio: '706/287' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;