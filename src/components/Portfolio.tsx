import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';
import VideoCard from './VideoCard';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const portfolioItems: Array<{
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    videoUrl?: string;
    type: 'video' | 'image';
  }> = [
    {
      id: 1,
      title: 'Wedding Highlight Reel',
      category: 'Wedding Video',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      videoUrl: '#',
      type: 'video' as const,
    },
    {
      id: 2,
      title: 'Brand Logo Animation',
      category: 'Motion Graphics',
      thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=600&fit=crop',
      videoUrl: '#',
      type: 'video' as const,
    },
    {
      id: 3,
      title: 'Restaurant Menu Design',
      category: 'Graphic Design',
      thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      type: 'image' as const,
    },
    {
      id: 4,
      title: 'Product Launch Video',
      category: 'Business Promo',
      thumbnail: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
      videoUrl: '#',
      type: 'video' as const,
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Social Graphics',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      type: 'image' as const,
    },
    {
      id: 6,
      title: 'YouTube Channel Intro',
      category: 'Video Editing',
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      videoUrl: '#',
      type: 'video' as const,
    },
  ];

  const categories = ['All', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Wedding Video'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of our finest creative work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'glass-panel hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full glass-panel rounded-2xl p-6"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-muted transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {portfolioItems.find(item => item.id === selectedItem)?.type === 'video' ? (
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Video Preview</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {portfolioItems.find(item => item.id === selectedItem)?.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={portfolioItems.find(item => item.id === selectedItem)?.thumbnail}
                    alt={portfolioItems.find(item => item.id === selectedItem)?.title}
                    className="w-full rounded-xl"
                  />
                )}

                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioItems.find(item => item.id === selectedItem)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {portfolioItems.find(item => item.id === selectedItem)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of our work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center btn-primary"
          >
            <span>Request Full Portfolio</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
