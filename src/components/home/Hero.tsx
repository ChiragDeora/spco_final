import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ntn from "@/assets/ntn.png";
import miba from "@/assets/Miba.png";
import cogelsa from "@/assets/cogelsa.png";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[76vh]">
          {/* LEFT: positioned to the left with negative space */}
          <div className="w-full lg:w-1/2 flex justify-start lg:pl-8 xl:pl-16 animate-fade-up">
            <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-spco-800 leading-tight">
              <span className="block">Where Precision</span>
              <span className="block text-spco-600">Meets Performance</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-lg">
              Supply Chain Excellence for Highly Engineered and Long Lead Time Products.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Enquire Now
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              <Link to="/products" className="btn-outline text-base">
                Browse Products
              </Link>
            </div>
            </div>
          </div>

          {/* RIGHT: glassmorphism cards positioned to the right */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-16">
            <div className="w-full max-w-lg space-y-6">
               {/* NTN */}
               <div className="group relative flex items-center justify-center overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-50/80 border border-white/50 px-6 py-6 shadow-[0_10px_40px_rgba(21,41,62,0.08)] hover:shadow-[0_14px_60px_rgba(21,41,62,0.16)] hover:border-blue-200/60 transition-all duration-300 ease-in-out hover:scale-105">
                 <img
                   src={ntn}
                   alt="NTN logo"
                   className="object-contain h-[11rem] w-auto relative z-10"
                 />
                 {/* shimmer sweep */}
                 <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-120%)] transition-transform ease-out group-hover:[transform:skew(-13deg)_translateX(120%)] group-hover:duration-700">
                   <div className="relative h-full w-12 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-[2px]"></div>
                 </div>
               </div>

              {/* MIBA */}
              <div className="group relative flex items-center justify-center overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-50/80 border border-white/50 px-6 py-6 shadow-[0_10px_40px_rgba(21,41,62,0.08)] hover:shadow-[0_14px_60px_rgba(21,41,62,0.16)] hover:border-blue-200/60 transition-all duration-300 ease-in-out hover:scale-105">
                <img
                  src={miba}
                  alt="MIBA logo"
                  className="object-contain h-[11rem] w-auto relative z-10"
                />
                {/* shimmer sweep */}
                <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-120%)] transition-transform ease-out group-hover:[transform:skew(-13deg)_translateX(120%)] group-hover:duration-700">
                  <div className="relative h-full w-12 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-[2px]"></div>
                </div>
              </div>

              {/* COGELSA */}
              <div className="group relative flex items-center justify-center overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-50/80 border border-white/50 px-6 py-6 shadow-[0_10px_40px_rgba(21,41,62,0.08)] hover:shadow-[0_14px_60px_rgba(21,41,62,0.16)] hover:border-blue-200/60 transition-all duration-300 ease-in-out hover:scale-105">
                <img
                  src={cogelsa}
                  alt="COGELSA logo"
                  className="object-contain h-[13rem] w-auto relative z-10"
                />
                {/* shimmer sweep */}
                <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-120%)] transition-transform ease-out group-hover:[transform:skew(-13deg)_translateX(120%)] group-hover:duration-700">
                  <div className="relative h-full w-12 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;