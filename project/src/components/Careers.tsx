import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, TrendingUp, Bug, Calculator, Server } from 'lucide-react';

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const jobCategories = [
    { title: 'Software Development', icon: Code, description: 'Full-stack developers, mobile app developers, and software architects' },
    { title: 'UI/UX Design', icon: Palette, description: 'Creative designers focused on user experience and interface design' },
    { title: 'Digital Marketing', icon: TrendingUp, description: 'SEO specialists, content marketers, and social media managers' },
    { title: 'Quality Assurance', icon: Bug, description: 'QA engineers ensuring software quality and testing automation' },
    { title: 'Finance', icon: Calculator, description: 'Financial analysts, accountants, and business development specialists' },
    { title: 'IT Infrastructure', icon: Server, description: 'System administrators, cloud engineers, and network specialists' },
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At Bradman Tech, we nurture innovation, creativity, and growth. Join our passionate team and be part of 
            transformative projects that shape the digital future.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Team?</h3>
          <p className="text-gray-600 mb-6">
            Send your resume and portfolio to <span className="font-semibold text-blue-600">careers@bradmantech.com</span> or apply online.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;