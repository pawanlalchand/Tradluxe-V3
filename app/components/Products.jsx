'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wine, ChefHat, Utensils, Coffee, Sparkles, Package, Gift, ShoppingBag, Crown } from 'lucide-react';
import Image from 'next/image';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Wine,
      title: 'Fine Wines',
      description: 'Curated selection of premium wines from renowned vineyards worldwide.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: ChefHat,
      title: 'Gourmet Ingredients',
      description: 'Exclusive artisanal ingredients for discerning culinary professionals.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Utensils,
      title: 'Luxury Tableware',
      description: 'Elegant dining essentials crafted by master artisans.',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Coffee,
      title: 'Exclusive Beverages',
      description: 'Rare spirits, champagnes, and specialty coffee collections.',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Sparkles,
      title: 'Premium Glassware',
      description: 'Crystal and hand-blown glass pieces for refined entertaining.',
      image: 'https://images.unsplash.com/photo-1585552243131-ce0c17be1ade?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Package,
      title: 'Specialty Foods',
      description: 'Exotic delicacies and premium ingredients from around the globe.',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Gift,
      title: 'Luxury Gift Sets',
      description: 'Bespoke hampers and curated collections for special occasions.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: ShoppingBag,
      title: 'Premium Packaging',
      description: 'Elegant presentation solutions for luxury retail brands.',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Crown,
      title: 'Bespoke Services',
      description: 'Custom sourcing and white-label solutions for exclusive partners.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Premium Collection</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our carefully curated selection of luxury products, each chosen for its exceptional quality and exclusivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-luxury-dark rounded-sm overflow-hidden border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-500 cursor-pointer glow-gold-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-luxury-gold/90 p-3 rounded-sm">
                    <Icon className="w-6 h-6 text-luxury-black" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-luxury-gold group-hover:text-luxury-gold-light transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
