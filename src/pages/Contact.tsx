
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/common/ContactForm";
import { MapPin, Phone, Mail, Clock, LinkedinIcon } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="relative bg-spco-800 text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507646871303-331b8f659227?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-spco-900 to-spco-800/70"></div>

          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <Breadcrumb items={[{ label: "Contact" }]} className="mb-6 text-white/80" />

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Have questions about our products or services? Our team is here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-neutral-50 rounded-lg p-6 shadow-sm border border-neutral-100 h-full">
                  <h2 className="text-xl font-display font-semibold text-spco-800 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-spco-50 p-2 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-spco-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-spco-700 mb-1">Address</h3>
                        <p className="text-neutral-600">
                          SPCO Headquarters<br />
                          109,110 Prestige Industrial Estate<br />
                          Orlem, Malad West, Mumbai - 400064<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-spco-50 p-2 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-spco-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-spco-700 mb-1">Phone</h3>
                        <p className="text-neutral-600">
                          Main: +91 22 1234 5678<br />
                          Sales: +91 22 8765 4321<br />
                          Technical Support: +91 22 2468 1357
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-spco-50 p-2 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-spco-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-spco-700 mb-1">Email</h3>
                        <p className="text-neutral-600">
                          General Inquiries: info@spco-hardware.com<br />
                          Sales: sales@spco-hardware.com<br />
                          Technical Support: support@spco-hardware.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-spco-50 p-2 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-spco-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-spco-700 mb-1">Business Hours</h3>
                        <p className="text-neutral-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h3 className="font-medium text-spco-700 mb-3">
                      Connect with Us
                    </h3>
                    <div className="flex space-x-3">
                      <a href="https://www.linkedin.com/company/spares-&-components-co---india/" target="_blank" rel="noopener noreferrer" className="bg-spco-100 hover:bg-spco-200 px-3 py-2 rounded-full transition-custom inline-flex items-center gap-2">
                        <LinkedinIcon size={12} style={{ color: '#0d47a1' }} />
                        <span className="text-sm" style={{ color: '#0d47a1' }}>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="section-title">Our Location</h2>
              <p className="section-subtitle mx-auto">
                Visit our headquarters in Mumbai, India.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.898788098693!2d72.81578506131247!3d19.1853858126673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ac2a8148a1%3A0xd14389effea66614!2sPrestige%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1753731268677!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Industry Specialists */}
        {/* <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="section-title">Industry Specialists</h2>
              <p className="section-subtitle mx-auto">
                Connect directly with our experts specialized in your industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Automotive', 'Manufacturing', 'Heavy Machinery'].map((industry, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-6 shadow-sm border border-neutral-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-spco-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-spco-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-spco-700">{industry} Specialist</h3>
                      <p className="text-sm text-neutral-600">Technical Expert</p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    Specialized in providing solutions for {industry.toLowerCase()} applications with over 10 years of industry experience.
                  </p>
                  
                  <div className="flex flex-col space-y-2">
                    <a href={`tel:+91221234${5678 + index}`} className="inline-flex items-center text-spco-600 hover:text-spco-700 transition-custom">
                      <Phone className="h-4 w-4 mr-2" />
                      +91 22 1234 {5678 + index}
                    </a>
                    <a href={`mailto:${industry.toLowerCase()}@spco-hardware.com`} className="inline-flex items-center text-spco-600 hover:text-spco-700 transition-custom">
                      <Mail className="h-4 w-4 mr-2" />
                      {industry.toLowerCase()}@spco-hardware.com
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ */}
        {/* <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle mx-auto">
                  Find quick answers to common questions about our products and services.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What is the standard delivery time for orders?",
                    answer: "Standard delivery time for in-stock items is 3-5 business days across major cities in India. For remote locations, delivery may take 5-7 business days. Express delivery options are also available upon request."
                  },
                  {
                    question: "Do you provide technical support for product selection?",
                    answer: "Yes, our team of technical experts is available to help you select the right products for your specific applications. They can provide detailed specifications, compatibility information, and application advice."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods including bank transfers, credit/debit cards, and digital payment platforms. For regular business customers, we also offer credit terms upon approval."
                  },
                  {
                    question: "Can I request product samples before placing a bulk order?",
                    answer: "Yes, we can provide product samples for evaluation before large orders. Please contact our sales team with your specific requirements to arrange for samples."
                  },
                  {
                    question: "Do you offer customized solutions for specific applications?",
                    answer: "Absolutely. We work closely with customers to understand their unique requirements and can recommend or source specialized products to meet specific application needs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-6">
                        <h3 className="text-lg font-medium text-spco-700">{faq.question}</h3>
                        <span className="transition-transform duration-300 group-open:rotate-180">
                          <svg className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-neutral-600">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-neutral-600 mb-4">
                  Don't see your question here? Reach out to us directly.
                </p>
                <a href="mailto:info@spco-hardware.com" className="btn-primary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
