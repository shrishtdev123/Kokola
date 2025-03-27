import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Laptop, Mail, Gift, Coins, Award, Presentation
} from 'lucide-react';

const benefits = [
  {
    icon: Laptop,
    title: "Ashna AI Pro Toolkit",
    description: "Get full access to our premium AI tools and features"
  },
  {
    icon: Mail,
    title: "Company Email ID",
    description: "Professional email address with @ashna.ai domain"
  },
  {
    icon: Gift,
    title: "Exclusive Goodies",
    description: "Receive branded merchandise and special perks"
  },
  {
    icon: Coins,
    title: "10% Commission",
    description: "Earn commission on every Pro Plan sale you generate"
  },
  {
    icon: Award,
    title: "Certifications & LoRs",
    description: "Get certified and earn internship opportunities"
  },
  {
    icon: Presentation,
    title: "Workshop Leader",
    description: "Organize and lead AI workshops at your college"
  }
];

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Join Our Program?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;