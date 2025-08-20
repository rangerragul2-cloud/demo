import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'Graphic Design',
      whyService: 'Visual communication that captures attention and drives engagement',
      whyBradman: 'Our creative team brings your brand vision to life with stunning designs',
      deliverables: ['Logo Design', 'Posters', 'Infographics', 'Social Media Creatives']
    },
    {
      title: 'Web Design & Development',
      whyService: 'Essential digital presence that converts visitors into customers',
      whyBradman: 'Full-stack expertise with modern frameworks and responsive design',
      deliverables: ['Corporate Websites', 'E-commerce Platforms', 'UI/UX Design', 'Mobile Apps']
    },
    {
      title: '2D & 3D Animation',
      whyService: 'Dynamic content that engages audiences and explains complex concepts',
      whyBradman: 'Professional animators with cutting-edge tools and techniques',
      deliverables: ['2D/3D Animation', 'Logo Reveals', '3D Modeling', 'Motion Graphics']
    },
    {
      title: 'E-Commerce Solutions',
      whyService: 'Online selling platforms that maximize revenue and user experience',
      whyBradman: 'Complete e-commerce ecosystem with payment integration and analytics',
      deliverables: ['Online Stores', 'Marketplace Integration', 'Secure Checkout', 'Mobile Commerce']
    },
    {
      title: 'Maintenance & Support',
      whyService: 'Continuous optimization to ensure peak performance and security',
      whyBradman: '24/7 monitoring and support with proactive maintenance approach',
      deliverables: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Technical Support']
    },
    {
      title: 'Digital Marketing',
      whyService: 'Strategic online presence that drives traffic and conversions',
      whyBradman: 'Data-driven campaigns with measurable ROI and growth strategies',
      deliverables: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Social Media Ads']
    },
    {
      title: 'Branding',
      whyService: 'Strong brand identity that differentiates and builds customer loyalty',
      whyBradman: 'Comprehensive brand strategy from concept to market implementation',
      deliverables: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      title: 'Signage & Printing',
      whyService: 'Physical marketing materials that create lasting impressions',
      whyBradman: 'High-quality printing with attention to detail and brand consistency',
      deliverables: ['Banners & Vinyl', 'Indoor/Outdoor Signage', 'Business Cards', 'Promotional Materials']
    },
    {
      title: 'Finance Services',
      whyService: 'Financial management and compliance for sustainable business growth',
      whyBradman: 'Certified professionals with expertise in modern financial practices',
      deliverables: ['Accounting Services', 'Payroll Management', 'Tax Planning', 'Financial Advisory']
    },
    {
      title: 'IT Infrastructure',
      whyService: 'Robust technology foundation for secure and scalable operations',
      whyBradman: 'Enterprise-grade solutions with 24/7 monitoring and support',
      deliverables: ['Cloud Solutions', 'Data Centers', 'Network Security', 'Surveillance Systems']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Our <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Services</span>
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
            >
              <div className="p-6">
                <motion.h3
                  animate={{ 
                    color: hoveredCard === index ? '#7C3AED' : '#1F2937' 
                  }}
                  className="text-xl font-bold mb-4"
                >
                  {service.title}
                </motion.h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Why this service?</h4>
                    <p className="text-gray-600 text-sm">{service.whyService}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Why Bradman Tech?</h4>
                    <p className="text-gray-600 text-sm">{service.whyBradman}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredCard === index ? '100%' : '0%' 
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;