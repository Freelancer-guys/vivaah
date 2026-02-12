import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionReveal } from "@/components/SectionReveal";
import { WeddingCard } from "@/components/WeddingCard";
import { Button } from "@/components/Button";
import { useWeddings } from "@/hooks/use-weddings";
import { useServices } from "@/hooks/use-services";
import { ArrowRight, Star, Play } from "lucide-react";
import { useState } from "react";

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export default function Home() {
  const { data: weddings } = useWeddings();
  const { data: services } = useServices();
  const [videoHovered, setVideoHovered] = useState<number | null>(null);

  const featuredWeddings = weddings?.filter(w => w.featured) || [];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Visuals */}
      <section className="relative h-screen w-full overflow-hidden flex items-start justify-center pt-24 sm:pt-0 sm:items-center">
        <div className="absolute inset-0 z-0">
          {/* Background with parallax effect */}
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Wedding Setup"
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-black/30 mix-blend-multiply"
            animate={{ opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden sm:inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-sm uppercase tracking-[0.2em] font-light">
              ✨ Bespoke Wedding Design
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-light text-white/95"
          >
            ✨ Crafting Modern Legacies. Celebrating Timeless Traditions.
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight tracking-tight text-white"
          >
            Timeless <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Elegance
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
          >
            From royal palace spectacles in Rajasthan to intimate coastal vows in Goa, we curate weddings that are as soulful as they are grand.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-semibold">
                  Begin Your Celebration
                </Button>
              </motion.div>
            </Link>
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="text-white border-white/50 hover:bg-white/10 px-8 py-6 text-base font-semibold">
                  View Our Film
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Scroll indicator removed per user request */}
        </div>
      </section>

      {/* Video Section - Featured Videos & Gallery */}
      <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl -top-48 -left-48" />
          <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -bottom-32 -right-32" />
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <SectionReveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Witness the Magic
            </h2>
            <p className="text-white/70 font-light text-lg">
              Experience the emotions, the elegance, and the enchantment that make each celebration truly special
            </p>
          </SectionReveal>

          {/* Video Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Video */}
            <motion.div 
              className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 group cursor-pointer lg:col-span-2"
              onHoverStart={() => setVideoHovered(1)}
              onHoverEnd={() => setVideoHovered(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.iframe
                src="https://www.youtube.com/embed/7nJc8kT56bE?autoplay=1&mute=1"
                title="Wedding Highlights Reel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Overlay Play Button */}
              <motion.div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  animate={videoHovered === 1 ? { scale: 1.1 } : { scale: 1 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                >
                  <Play className="w-8 h-8 text-white fill-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Wedding Photography Gallery */}
          <SectionReveal className="text-center mb-12">
            <h3 className="text-3xl font-serif text-white mb-2">Curated Moments in Motion</h3>
            <p className="text-white/60 font-light">Handpicked imagery from our heritage collections</p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
                title: "Bridal Preparations",
              },
              {
                img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.ptaufiqphotography.com/wp-content/uploads/2021/04/ptaufiq-indian-wedding-jaipur-india-sangeet1.jpg",
                title: "Sangeet Performance",
              },
              {
                img: "https://i0.wp.com/iglowstudioz.com/wp-content/uploads/2025/09/Why-Wedding-Vows-Matter-in-Every-Marriage-Ceremony.webp?resize=780%2C439&ssl=1",
                title: "Vows & Emotions",
              },
              {
                img: "https://cdn0.weddingwire.in/article/6146/3_2/1280/jpg/76416-how-to-make-your-wedding-reception-memorable-shades-photography-lead-image2.jpeg",
                title: "Reception Cascade",
              },
      
            
            ].map((photo, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05}>
                <motion.div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={photo.img}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-light">{photo.title}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction with Enhanced Animation */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto relative z-10">
          <SectionReveal className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-px h-16 bg-primary mx-auto mb-8"
            />
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              "We don’t just plan events; we weave heirlooms."
            </h2>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              At Vivaah Luxe, we understand that an Indian wedding is more than a party—it's a union of two families and a tribute to our culture. We balance the joyous chaos of a 1000-guest Baraat with the precision of a luxury concierge.
            </p>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/portfolio">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b-2 border-foreground pb-2 hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer mt-8 font-semibold">
                  View Our Portfolio <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Weddings - Enhanced Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32 px-6 relative overflow-hidden">
        <motion.div 
          className="absolute -bottom-64 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto relative z-10">
          <SectionReveal className="mb-20 text-center">
            <motion.span 
              className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐ Featured Celebrations
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif">Featured Celebrations</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              High-value, heritage-led Indian celebrations curated with cultural finesse and luxury hospitality.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                id: 1,
                title: 'The Royal Rajvansh Wedding',
                couple: 'Anish & Shweta',
                date: '2024',
                location: 'Umaid Bhawan Palace, Jodhpur',
                description: 'Regality & Marigold Suns.',
                coverImage: 'https://images.unsplash.com/photo-1542317854-5a1f7b2a6d0a?auto=format&fit=crop&q=80',
                galleryImages: [],
                featured: true,
              },
              {
                id: 2,
                title: 'Midnight at the Backwaters',
                couple: 'Rohan & Meera',
                date: '2023',
                location: 'Kumarakom, Kerala',
                description: 'Tropical Minimalism & Traditional Elegance.',
                coverImage: 'https://images.unsplash.com/photo-1505765059725-9b7d3f7b6b2d?auto=format&fit=crop&q=80',
                galleryImages: [],
                featured: true,
              },
              {
                id: 3,
                title: 'The Great Gatsby Sangeet',
                couple: 'Kabir & Rhea',
                date: '2024',
                location: 'The Taj Mahal Palace, Mumbai',
                description: 'Art Deco Glamour & High-Octane Performance.',
                coverImage: 'https://images.unsplash.com/photo-1526318472351-c75fcf070157?auto=format&fit=crop&q=80',
                galleryImages: [],
                featured: true,
              },
            ].map((wedding, i) => (
              <SectionReveal key={wedding.id} delay={i * 0.15}>
                <WeddingCard wedding={wedding as any} />
              </SectionReveal>
            ))}
          </div>

          <motion.div 
            className="text-center mt-20"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/portfolio">
              <Button 
                variant="outline" 
                className="px-8 py-3 border-2 border-foreground hover:bg-foreground hover:text-background font-semibold"
              >
                View All Weddings →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Alternating Layout */}
      <section className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto relative z-10 max-w-7xl">
          <SectionReveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Signature Services</h2>
            <p className="text-background/80 font-light text-lg max-w-2xl mx-auto">
              Transform your vision into reality with our comprehensive planning solutions
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'svc-01',
                title: 'Full-Service Wedding Production',
                description: 'End-to-end planning, design and on-ground production for multi-day Indian weddings.',
                priceRange: 'By Proposal',
              },
              {
                id: 'svc-02',
                title: 'Heritage Venue Curation',
                description: 'Exclusive access to palaces, forts and boutique estates across India.',
                priceRange: 'Venue Sourcing',
              },
              {
                id: 'svc-03',
                title: 'Sangeet & Entertainment Programming',
                description: 'Creative direction, artist curation and stage production for unforgettable evenings.',
                priceRange: 'From ₹5L+',
              },
            ].map((service, index) => (
              <SectionReveal key={service.id} delay={index * 0.1}>
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative bg-background/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="mb-6 w-12 h-12 rounded-lg bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center"
                    >
                      <Star className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                    <p className="text-background/80 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <motion.div
                      className="flex items-baseline justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm uppercase tracking-widest font-semibold text-white/70">
                        {service.priceRange}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <SectionReveal className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.div 
            className="flex justify-center gap-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {[1,2,3,4,5].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
              >
                <Star className="w-6 h-6 text-primary fill-primary" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl font-serif italic leading-snug text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            "They transformed our vision into something beyond our wildest dreams. Every detail was pure perfection—from the florals to the final dance."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-2"
          >
            <p className="text-sm uppercase tracking-widest font-bold text-foreground">Sarah & James</p>
            <p className="text-sm text-muted-foreground">Tuscany, 2023 • Amalfi Coast, Italy</p>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-px h-8 bg-primary mx-auto mt-8"
          />
        </SectionReveal>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/20 via-pink-500/10 to-primary/20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <SectionReveal className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Ready to Create Magic?
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              Let's collaborate to craft a celebration that reflects your unique love story. We take on a select number of weddings each year to ensure uncompromising excellence.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-10 py-4 text-base font-bold">
                  Begin Your Journey
                </Button>
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto relative z-10 max-w-6xl">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { number: "200+", label: "Grand Weddings" },
              { number: "12+", label: "Heritage Destinations" },
              { number: "2500+", label: "Artisans & Vendors" },
              { number: "100%", label: "Family Satisfaction" },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-serif text-primary group-hover:text-pink-500 transition-colors mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
                    {stat.label}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          {/* Client Testimonials */}
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-foreground">
              Loved by Families Across India
            </h2>
            <p className="text-muted-foreground font-light">
              Heartfelt stories from the families we've had the honour to serve
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Neha & Arjun",
                location: "Udaipur, India",
                text: "Vivaah Luxe made our wedding feel regal and effortlessly joyful. The family still talks about the food and the late-night tabla performance!",
                rating: 5,
              },
              {
                name: "Priya & Sameer",
                location: "Kumarakom, Kerala",
                text: "They understood our traditions and elevated every ritual. Calm, organised and beautiful execution.",
                rating: 5,
              },
              {
                name: "Aditi & Rohit",
                location: "Mumbai, India",
                text: "From venue curation to artist management, Vivaah Luxe delivered beyond expectation. Our guests keep asking who planned it!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-primary/30 transition-all group"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <motion.div
                          key={j}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: j * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-primary fill-primary" />
                        </motion.div>
                      ))}
                  </div>
                  <p className="text-foreground font-light italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-serif text-sm text-foreground mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="bg-gradient-to-r from-primary/5 to-pink-500/5 border border-primary/10 rounded-lg p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl mb-8 text-foreground">
              Why Choose VIVAAH LUXE?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "✓", text: "Heritage Venues" },
                { icon: "✓", text: "Pan‑India Network" },
                { icon: "✓", text: "Crafted Decor & Catering" },
                { icon: "✓", text: "Family‑First Planning" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="text-3xl text-primary">{badge.icon}</div>
                  <p className="text-sm font-light text-foreground">
                    {badge.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
