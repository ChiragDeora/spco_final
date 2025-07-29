import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cogelsa from '@/assets/cogelsa.png';
import ntn from '@/assets/ntn.png';
import svgArrows from '@/assets/SVG Arrows from Chirag.svg';
const Hero = () => {
  return <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1627123430738-0ca69522dcc1?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-500 opacity-[0.15] blur-3xl"></div>
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-spco-600 opacity-[0.07] blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-up lg:mr-auto">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700 mb-4 animate-fade-in">
                Premium Distributor
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-spco-800 leading-tight">
                <span className="block">Where Precision</span>
                <span className="block text-spco-600">Meets Performance</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-600 max-w-lg">Supply Chain Excellence for Highly Engineered and Long Lead Time Products.</p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Enquire Now
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              <Link to="/coming-soon" className="btn-outline text-base">
                Browse Products
              </Link>
            </div>
            
            {/* <div className="mt-10 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <img src={tataLogo} alt="Tata" className="h-6 object-contain" />
                <img src={mahindraLogo} alt="Mahindra" className="h-6 object-contain" />
                <img src={lntLogo} alt="L&T" className="h-7 object-contain" />
                <img src={bhelLogo} alt="BHEL" className="h-5 object-contain" />
              </div>
            </div> */}
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-3">Trusted Distributors</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <img src={ntn} alt="ntn" className="h-6 object-contain" />
                <img src={cogelsa} alt="cogelsa" className="h-6 object-contain" />
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[500px]">
            <div className="">
              <img 
                src={svgArrows} 
                alt="Product category arrows" 
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;