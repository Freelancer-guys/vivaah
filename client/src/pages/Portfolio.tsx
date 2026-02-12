import { motion } from "framer-motion";
import { useWeddings } from "@/hooks/use-weddings";
import { WeddingCard } from "@/components/WeddingCard";
import { SectionReveal } from "@/components/SectionReveal";
import { Loader2, Heart } from "lucide-react";

export default function Portfolio() {
  const { data: weddings, isLoading } = useWeddings();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
              Gallery of Love Stories
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-foreground">
            Our Portfolio
          </h1>

          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            A collection of our most cherished celebrations. Each event tells a unique story of love, passion, and meticulous attention to detail. Explore the moments we've brought to life.
          </p>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center gap-1 mt-8"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["All", "Luxury", "Intimate", "Grand"].map((filter, i) => (
            <motion.button
              key={filter}
              className="px-6 py-2 rounded-full border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-semibold uppercase tracking-widest"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Wedding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {weddings?.map((wedding, i) => (
            <SectionReveal 
              key={wedding.id} 
              delay={i * 0.05} 
              className="break-inside-avoid"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <WeddingCard wedding={wedding} />
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
            Your love story could be next
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-8 max-w-2xl mx-auto">
            Every celebration is a masterpiece waiting to unfold. Let's create something unforgettable together.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-foreground text-background rounded-lg font-semibold uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 text-sm"
              whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
