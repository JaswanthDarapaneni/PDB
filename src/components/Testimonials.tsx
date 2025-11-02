import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      nameTe: 'రాజేష్ కుమార్',
      role: 'Restaurant Owner',
      roleTe: 'రెస్టారెంట్ యజమాని',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Chandu transformed our menu design and promotional videos. Our customer engagement increased by 40%!',
      textTe: 'చందు మా మెను డిజైన్ మరియు ప్రచార వీడియోలను అద్భుతంగా రూపొందించారు. మా కస్టమర్ ఎంగేజ్‌మెంట్ 40% పెరిగింది!',
    },
    {
      name: 'Priya Reddy',
      nameTe: 'ప్రియ రెడ్డి',
      role: 'YouTube Creator',
      roleTe: 'యూట్యూబ్ క్రియేటర్',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional work and quick turnaround. My channel growth doubled after using their video editing services.',
      textTe: 'వృత్తిపరమైన పని మరియు త్వరిత పూర్తి. వారి వీడియో ఎడిటింగ్ సేవలను ఉపయోగించిన తర్వాత నా ఛానల్ గ్రోత్ రెట్టింపు అయింది.',
    },
    {
      name: 'Venkat Rao',
      nameTe: 'వెంకట్ రావు',
      role: 'Startup Founder',
      roleTe: 'స్టార్టప్ ఫౌండర్',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Excellent communication and understanding of local market needs. Highly recommend for Telugu businesses!',
      textTe: 'అద్భుతమైన కమ్యూనికేషన్ మరియు స్థానిక మార్కెట్ అవసరాలను అర్థం చేసుకోవడం. తెలుగు వ్యాపారాలకు బాగా సిఫార్సు చేస్తున్నాను!',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our clients say about our work
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full glass-panel rounded-2xl p-6 card-hover relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Profile */}
                <div className="flex items-center mb-4 relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground telugu-text">
                      {testimonial.nameTe}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground telugu-text">
                    {testimonial.roleTe}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="space-y-3">
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed telugu-text">
                    "{testimonial.textTe}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 glass-panel px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full ring-2 ring-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Join <span className="font-bold text-primary">100+</span> happy clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
