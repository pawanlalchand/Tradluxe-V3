'use client';

import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-luxury-dark border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-script text-4xl text-luxury-gold mb-4">Tradluxe</div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Singapore&apos;s premier wholesale trading company, connecting global suppliers and premium buyers with elegance and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-luxury-gold font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-luxury-gold font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <span>Marina Bay Financial Centre, Singapore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span>info@tradluxe.sg</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span>+65 6123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-luxury-gold/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tradluxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
