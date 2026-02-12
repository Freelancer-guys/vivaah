import { Link } from "wouter";
import { type Wedding } from "@shared/schema";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

export function WeddingCard({ wedding }: { wedding: Wedding }) {
  return (
    <Link href={`/weddings/${wedding.id}`}>
      <motion.div 
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group cursor-pointer mb-8 break-inside-avoid"
      >
        <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-muted rounded-lg shadow-lg">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />

          {/* Image with Parallax */}
          <motion.img 
            src={wedding.coverImage} 
            alt={wedding.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Play Button Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50"
            >
              <Play className="w-6 h-6 text-white fill-white" />
            </motion.div>
          </motion.div>

          {/* Featured Badge */}
          {wedding.featured && (
            <motion.div
              className="absolute top-4 right-4 z-30 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs font-semibold text-white flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" /> Featured
              </span>
            </motion.div>
          )}

          {/* Event Date Badge */}
          <motion.div
            className="absolute bottom-4 left-4 z-30 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-xs font-semibold text-white">{wedding.date}</span>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="font-serif text-2xl text-foreground group-hover:text-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {wedding.title}
          </motion.h3>

          <motion.p 
            className="text-sm uppercase tracking-widest text-muted-foreground font-light group-hover:text-foreground transition-colors duration-300"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {wedding.location}
          </motion.p>

          <motion.p 
            className="text-xs text-muted-foreground/70 font-light italic pt-2 line-clamp-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {wedding.couple}
          </motion.p>
        </motion.div>

        {/* Hover Underline */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </Link>
  );
}
