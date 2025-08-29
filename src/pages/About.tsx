import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import spcoAboutus from '@/assets/aboutus.png';
import { CheckCircle, MapPin, Award, Users, TrendingUp, BarChart3 } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const timeline = [{
    year: "1995",
    title: "Company Founded",
    description: "SPCO was established in Mumbai as a small hardware distributor focused on the local market."
  }, {
    year: "2002",
    title: "Expansion of Product Range",
    description: "Expanded product portfolio to include a comprehensive range of bearings and related components."
  }, {
    year: "2008",
    title: "Technical Support Team",
    description: "Established a dedicated technical support team to provide specialized assistance to customers."
  }, {
    year: "2015",
    title: "New Headquarters",
    description: "Moved to a larger headquarters with expanded warehousing and logistics capabilities."
  }, {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented advanced digital systems for inventory management and customer service."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-spco-800 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507646871303-331b8f659227?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-spco-900 to-spco-800/70"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <Breadcrumb items={[{
            label: "About"
          }]} className="mb-6 text-white/80" />
            
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
                About SPCO
              </h1>
              <p className="text-lg text-white/90 mb-6">
                In the dynamic and competitive landscape of India, we have built a legacy of trust and quality over the last five decades. SPCO stands for more than just products; it represents a commitment to enduring relationships. We believe that our success is built on the strong bonds we forge with our clients, suppliers, employees, and partners.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700 mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl font-display font-semibold text-spco-800 mb-4">
                  A Legacy of Quality and Reliability
                </h2>
                <p className="text-neutral-600 mb-6">
                  At SPCO, we're not just looking back at our five decades of success; we're focused on building an even stronger future. Our journey began in 1989 when Mr. Sudhir Deora founded the company to supply needle roller bearings. Through his vision and deep industry knowledge, we steadily built a reputation for precision and reliability, growing into one of India's largest stockists and distributors.
                </p>
                <p className="text-neutral-600 mb-6">
                  Today, with our master warehouse in Mumbai, we are poised for the next phase of our growth. Our vision is to become the single largest point of distribution for highly engineered, long lead time products in India. We are committed to this future by continuously expanding our portfolio to offer comprehensive solutions that power industrial growth.
                </p>
                <p className="text-neutral-600">
                  Our product lines — including Bearings, Speciality Lubricants, Automotive Parts, Journal & Tilting Pad Bearings, Self-Lubricating Bushes, and Adaptor Sleeves — are not just components; they are critical solutions that enable our customers to innovate and succeed. We remain rooted in our founding values of precision, partnership, and performance, ensuring SPCO is synonymous with reliability and expertise for years to come.
                </p>
              </div>
              
              <div className="relative lg:h-[500px]">
                <div className="">
                  <OptimizedImage 
                    src={spcoAboutus} 
                    alt="SPCO Headquarters" 
                    className="w-full h-full object-contain animate-fade-up"
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-spco-50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-spco-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-spco-800">Headquarters</h4>
                      <p className="text-sm text-neutral-600">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Mission & Values</h2>
              <p className="section-subtitle mx-auto">
                At SPCO, our business is guided by clear principles that define who we are and how we operate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <Award className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-neutral-600">
                To deliver precision-engineered components with unmatched reliability, service, and speed  empowering Indian industries through a robust supply network, deep product expertise, and lasting partnerships built on trust.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Vision
                </h3>
                <p className="text-neutral-600">
                To be India’s most trusted and comprehensive industrial distribution partner, recognized for our integrity, technical excellence, and relentless commitment to customer satisfaction in every bearing, bush, and lubricant we deliver.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                <div className="bg-spco-50 p-3 inline-flex rounded-full mb-4">
                  <Users className="h-6 w-6 text-spco-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-spco-700 mb-3">
                  Our Values
                </h3>
                <ul className="text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Quality without compromise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Technical excellence and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Integrity in all relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Customer success drives our success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline - Commented out */}
        {/*
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle mx-auto">
                A timeline of SPCO's growth and key milestones over the years.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative"> 
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-white"></div>
                    
                    <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2"></div>
                      <div className="md:w-1/2 flex items-center">
                        <div className="bg-neutral-50 p-6 rounded-lg shadow-sm border border-neutral-100 w-full">
                          <span className="inline-flex items-center rounded-full bg-spco-50 px-2.5 py-0.5 text-xs font-medium text-spco-700 mb-2">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-display font-semibold text-spco-700 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Facilities and Capabilities */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Facilities & Capabilities</h2>
              <p className="section-subtitle mx-auto">
                Our comprehensive infrastructure and expertise enable us to deliver exceptional value to our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Team & Expertise */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Users className="h-5 w-5 text-spco-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spco-700 mb-1">Team & Expertise</h3>
                  <p className="text-neutral-600">
                    With a dedicated team of over 50 professionals, our strength lies in our deep industry knowledge and technical expertise. We don't simply supply products; we provide comprehensive solutions by understanding and addressing our customers' unique challenges.
                  </p>
                </div>
              </div>
              
              {/* Advanced Infrastructure */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-spco-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spco-700 mb-1">Advanced Infrastructure</h3>
                  <p className="text-neutral-600">
                    Our fully equipped, state-of-the-art warehouse spans over 25,000 sq ft, ensuring efficient inventory management and swift dispatch of products. This robust infrastructure allows us to maintain a vast stock of critical components and meet the demands of a diverse industrial clientele.
                  </p>
                </div>
              </div>
              
              {/* Solution-Oriented Services */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-spco-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spco-700 mb-1">Solution-Oriented Services</h3>
                  <p className="text-neutral-600">
                    We go beyond standard product distribution by offering specialized services. Our team provides tailored lubrication solutions designed for specific applications and offers detailed failure analysis services to identify root causes and prevent future issues, enhancing operational reliability.
                  </p>
                </div>
              </div>
              
              {/* Technical Training & Support */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-spco-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Award className="h-5 w-5 text-spco-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-spco-700 mb-1">Technical Training & Support</h3>
                  <p className="text-neutral-600">
                    We empower our clients with knowledge through dedicated technical training programs. These sessions are designed to give your team a better understanding of products and their applications, equipping them to handle real-life situations more effectively and make informed decisions on the plant floor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team (Placeholder) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Leadership Team</h2>
              <p className="section-subtitle mx-auto">
                Meet the experienced professionals who guide SPCO's vision and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sudhir Deora */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-neutral-100 card-hover">
                {/* <div className="aspect-[3/2] bg-gradient-to-br from-spco-50 to-spco-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" alt="Sudhir Deora" className="w-full h-full object-cover" />
                  <div className="w-24 h-24 bg-spco-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">SD</span>
                  </div>
                </div> */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-spco-700 mb-2">
                    Sudhir Deora
                  </h3>
                  <p className="text-accent-500 font-medium text-base mb-4">
                    Managing Director
                  </p>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Four decades earlier, we started Spares & Components Co. (SPCO) to be a reliable partner for India's industrial sector. We're proud to have grown into a leading distribution company, and our mission is to become the single largest source for highly engineered, long lead time products. Thank you for your continued trust in us.
                  </p>
                </div>
              </div>

              {/* Rajesh Deora */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-neutral-100 card-hover">
                {/* <div className="aspect-[3/2] bg-gradient-to-br from-spco-50 to-spco-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Rajesh Deora" className="w-full h-full object-cover" />
                  <div className="w-24 h-24 bg-spco-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">RD</span>
                  </div>
                </div> */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-spco-700 mb-2">
                    Rajesh Deora
                  </h3>
                  <p className="text-accent-500 font-medium text-base mb-4">
                    Managing Director
                  </p>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Building SPCO has been a remarkable journey, driven by our commitment to our customers and our belief that their success is our success. We are dedicated to providing expert solutions and high-quality components. We look forward to continuing to serve you and the industry for many years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-spco-800 to-spco-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4 text-stone-50">Ready to Work with SPCO?</h2>
              <p className="text-lg text-white/90 mb-8">
                Experience the SPCO difference with our premium products and expert technical support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/products" className="btn-primary">
                  Browse Products
                </a>
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;