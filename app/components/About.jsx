'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Globe, label: 'Global Reach', value: '50+ Countries' },
    { icon: Users, label: 'Premium Partners', value: '200+' },
    { icon: Award, label: 'Years of Excellence', value: '15+' },
    { icon: TrendingUp, label: 'Annual Growth', value: '30%' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(229, 201, 123, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-gradient">Tradluxe</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Based in the heart of Singapore, Tradluxe stands as a beacon of excellence in the wholesale trading industry. We specialize in connecting discerning buyers with the world&apos;s finest suppliers of luxury goods.
              </p>
              <p>
                Our curated portfolio spans premium wines, gourmet ingredients, exclusive beverages, and luxury tableware. Each partnership is carefully selected to ensure the highest standards of quality and authenticity.
              </p>
              <p>
                With a commitment to precision, elegance, and unparalleled service, we&apos;ve redefined what it means to trade in luxury. Our global network and local expertise create seamless experiences for partners worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden glow-gold">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Singapore Skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-luxury-black/50 rounded-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-luxury-gold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
