import { Link } from "wouter";
import { type Wedding } from "@shared/schema";
import { motion } from "framer-motion";

export function WeddingCard({ wedding }: { wedding: Wedding }) {
  return (
    <Link href={`/weddings/${wedding.id}`}>
      <motion.div 
        whileHover={{ y: -8 }}
        className="group cursor-pointer mb-8 break-inside-avoid"
      >
        <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-muted">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
          <img 
            src={wedding.coverImage} 
            alt={wedding.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="text-center">
          <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary/80 transition-colors">
            {wedding.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {wedding.location}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
