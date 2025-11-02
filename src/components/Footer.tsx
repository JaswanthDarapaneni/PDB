import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Video Editing',
    'Graphic Design',
    'Motion Graphics',
    'Social Media',
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl">
                M
              </div>
              <div>
                <div className="font-bold text-lg gradient-text">Mana Product2Brand</div>
                <div className="text-xs text-muted-foreground">Creative Studio</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional creative services for Telugu-speaking creators and businesses. 
              Transforming ideas into compelling visual stories.
            </p>
            <p className="text-xs text-muted-foreground telugu-text">
              తెలుగు వ్యాపారాలకు సృజనాత్మక సేవలు
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                <a href="tel:8639347722" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  8639347722
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:contact@manaproduct2brand.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@manaproduct2brand.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground"
        >
          <p className="mb-4 md:mb-0">
            © {currentYear} Mana Product2Brand. All rights reserved.
          </p>
          
          <p className="flex items-center">
            Made with <Heart className="w-4 h-4 text-primary mx-1 fill-current" /> for Telugu Creators
          </p>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center space-x-6 mt-6 text-xs text-muted-foreground"
        >
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
