import { motion } from 'framer-motion';
import { Video, Palette, Share2, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'YouTube, Reels, Wedding & Event, Business Promo',
      price: 'Starting ₹300/min',
      delivery: 'Delivery 1–5 days',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Professional Cuts'],
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Invitations, Visiting Cards, Logos, Social Posters',
      price: 'Starting ₹499/project',
      delivery: 'Delivery 1–3 days',
      features: ['Custom Designs', 'Brand Identity', 'Print Ready', 'Unlimited Revisions'],
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: Share2,
      title: 'Social Media Handling',
      description: 'Account Setup, Content, Scheduling',
      price: 'From ₹1500/month',
      delivery: 'Ongoing Support',
      features: ['Content Calendar', 'Post Scheduling', 'Analytics', 'Growth Strategy'],
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Animated text, ad motion graphics',
      price: 'From ₹1000/project',
      delivery: 'Delivery 2–4 days',
      features: ['2D Animation', 'Logo Animation', 'Text Effects', 'Transitions'],
      gradient: 'from-secondary/20 to-primary/10',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional creative solutions tailored for your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`h-full glass-panel rounded-2xl p-6 card-hover bg-gradient-to-br ${service.gradient}`}>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 border-t border-border/50">
                  <div className="text-lg font-bold text-primary mb-1">
                    {service.price}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {service.delivery}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#packages"
            className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
          >
            View Complete Packages
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
