import { useState, useEffect } from 'react';
import { Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import spcoLogoBlack from '@/assets/SPCO-Logo-Black.png';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (you can adjust this)
  const launchDate = new Date('2024-12-31T00:00:00').getTime();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const features = [
    "Premium Hardware Components",
    "Expert Technical Support",
    "Fast Delivery Network",
    "Quality Assurance",
    "Industry Solutions",
    "24/7 Customer Service"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-spco-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-spco-600 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent-500 opacity-10 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={spcoLogoBlack} alt="SPCO" className="h-16 w-auto animate-fade-up" />
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-accent-50 px-4 py-2 text-sm font-medium text-accent-700 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                Coming Soon
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-spco-800 mb-6">
                Something Big is
                <span className="block text-spco-600">Coming Soon</span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
                We're working hard to bring you an enhanced experience. Our new platform will revolutionize how you source premium hardware components.
              </p>

              {/* Countdown Timer */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-100">
                  <div className="text-3xl md:text-4xl font-bold text-spco-800">{timeLeft.days}</div>
                  <div className="text-sm text-neutral-500">Days</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-100">
                  <div className="text-3xl md:text-4xl font-bold text-spco-800">{timeLeft.hours}</div>
                  <div className="text-sm text-neutral-500">Hours</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-100">
                  <div className="text-3xl md:text-4xl font-bold text-spco-800">{timeLeft.minutes}</div>
                  <div className="text-sm text-neutral-500">Minutes</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-neutral-100">
                  <div className="text-3xl md:text-4xl font-bold text-spco-800">{timeLeft.seconds}</div>
                  <div className="text-sm text-neutral-500">Seconds</div>
                </div>
              </div> */}

              {/* Newsletter Signup */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-spco-800 mb-4">Get Notified First</h3>
                <p className="text-neutral-600 mb-6">Be the first to know when we launch and get exclusive early access.</p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-spco-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Notify Me
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-4">
                What's Coming
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our new platform will deliver an enhanced experience with cutting-edge features designed for modern industrial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
                  <div className="flex items-center">
                    <div className="bg-spco-100 rounded-full p-2 mr-4">
                      <CheckCircle className="h-5 w-5 text-spco-600" />
                    </div>
                    <h3 className="font-semibold text-spco-800">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="py-20 bg-spco-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-spco-800 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                While we're building something amazing, our current services are still available. Contact us for immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary inline-flex items-center">
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
                {/* <a href="tel:+912212345678" className="btn-outline inline-flex items-center">
                  Call: +91 22 1234 5678
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon; 