import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for individuals and small creators',
      icon: Star,
      features: [
        '4 short videos (up to 2 min each)',
        '8 social media graphics',
        'Basic color grading',
        'Background music',
        '2 revisions per project',
        'Email support',
      ],
      isPopular: false,
      color: 'from-muted/50 to-muted/20',
    },
    {
      name: 'Standard',
      price: '₹6,999',
      period: '/month',
      description: 'Most popular for growing businesses',
      icon: Zap,
      features: [
        '8 videos (up to 5 min each)',
        '16 social media graphics',
        'Advanced editing & effects',
        'Motion graphics included',
        'Sound design & mixing',
        'Unlimited revisions',
        'Priority support',
        'Content calendar',
      ],
      isPopular: true,
      color: 'from-primary/30 to-secondary/20',
    },
    {
      name: 'Premium',
      price: '₹12,999',
      period: '/month',
      description: 'Complete solution for established brands',
      icon: Crown,
      features: [
        'Unlimited videos',
        'Unlimited graphics',
        'Cinematic editing',
        'Custom animations',
        'Full social media management',
        'Dedicated account manager',
        '24/7 support',
        'Analytics & reporting',
        'Brand strategy consultation',
      ],
      isPopular: false,
      color: 'from-secondary/30 to-primary/20',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Seasonal Offer Badge */}
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">Seasonal 10% OFF - Limited Time!</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans designed to grow with your business
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative ${pkg.isPopular ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full glass-panel rounded-2xl p-8 ${
                  pkg.isPopular ? 'border-2 border-primary shadow-hover' : ''
                } bg-gradient-to-br ${pkg.color}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Package Info */}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold gradient-text">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    pkg.isPopular
                      ? 'btn-primary'
                      : 'glass-panel hover:bg-muted'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom package?
          </p>
          <button
            onClick={scrollToContact}
            className="glass-panel px-8 py-3 rounded-xl hover:bg-muted transition-all font-medium"
          >
            Contact Us for Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
