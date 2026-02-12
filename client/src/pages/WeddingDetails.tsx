import { useRoute } from "wouter";
import { useWedding } from "@/hooks/use-weddings";
import { SectionReveal } from "@/components/SectionReveal";
import { Loader2, Calendar, MapPin, ArrowLeft, Heart, Share2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WeddingDetails() {
  const [match, params] = useRoute("/weddings/:id");
  const { data: wedding, isLoading } = useWedding(Number(params?.id));

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    );
  }

  if (!wedding) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-2xl font-serif text-muted-foreground">Wedding not found</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="h-[70vh] relative overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={wedding.coverImage} 
            alt={wedding.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Video Icon Indicator */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white"
          >
            <svg className="w-10 h-10 text-white fill-white ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Back Button */}
        <Link href="/portfolio">
          <motion.div
            className="absolute top-24 left-4 md:top-8 md:left-8 z-[60] cursor-pointer"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="inline-flex items-center gap-2 text-white hover:text-white/80 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/40 transition-all duration-300 text-sm uppercase tracking-widest font-semibold">
              <ArrowLeft size={18} />Back
            </div>
          </motion.div>
        </Link>

        {/* Share Button */}
        <motion.div
          className="absolute top-8 right-8 z-10 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Share2 size={20} className="text-white" />
          </div>
        </motion.div>

        {/* Content - Removed title from hero */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-8 text-base uppercase tracking-widest opacity-95 font-light">
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Calendar size={20} className="text-white/70" /> {wedding.date}
                </motion.span>
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <MapPin size={20} className="text-white/70" /> {wedding.location}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-24 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar Info */}
          <motion.div 
            className="lg:col-span-4 space-y-12 sticky top-32 h-fit"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionReveal>
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-serif text-3xl text-foreground">The Couple</h3>
                <p className="text-lg text-muted-foreground font-light mb-8">
                  {wedding.couple}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="w-12 h-px bg-gradient-to-r from-primary to-pink-500 mb-8" />

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-serif text-3xl text-foreground">The Story</h3>
                <p className="text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                  {wedding.description}
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex gap-4 pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 bg-foreground text-background rounded-lg font-semibold uppercase text-sm tracking-widest hover:bg-foreground/90 transition-colors"
                >
                  <Heart className="w-5 h-5 mx-auto" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold uppercase text-sm tracking-widest hover:bg-foreground/5 transition-colors"
                >
                  <Share2 className="w-5 h-5 mx-auto" />
                </motion.button>
              </motion.div>
            </SectionReveal>
          </motion.div>

          {/* Gallery */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {wedding.galleryImages.map((img, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="relative overflow-hidden group rounded-lg shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative aspect-video md:aspect-[16/10] overflow-hidden">
                    <motion.img 
                      src={img} 
                      alt={`${wedding.title} Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    />

                    {/* Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Image Number Badge */}
                    <motion.div
                      className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-semibold"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {index + 1}/{wedding.galleryImages.length}
                    </motion.div>
                  </div>

                  {/* Photo Caption */}
                  <motion.div
                    className="p-6 bg-white border-b border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-light">
                      Moment {index + 1} • {wedding.title}
                    </p>
                  </motion.div>
                </motion.div>
              </SectionReveal>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        className="py-24 px-6 bg-gradient-to-r from-foreground to-foreground/95 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <SectionReveal className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">
              Ready to create your own story?
            </h2>
            <p className="text-white/80 font-light text-lg">
              Let's collaborate to bring your vision to life with the same elegance and precision we brought to this celebration.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-foreground rounded-lg font-bold uppercase tracking-widest hover:bg-white/90 transition-all duration-300 text-sm">
                  Schedule Consultation
                </button>
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </motion.section>
    </div>
  );
}
