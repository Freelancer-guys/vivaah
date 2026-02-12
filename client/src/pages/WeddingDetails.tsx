import { useRoute } from "wouter";
import { useWedding } from "@/hooks/use-weddings";
import { SectionReveal } from "@/components/SectionReveal";
import { Loader2, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function WeddingDetails() {
  const [match, params] = useRoute("/weddings/:id");
  const { data: wedding, isLoading } = useWedding(Number(params?.id));

  if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!wedding) return <div className="h-screen flex items-center justify-center">Wedding not found</div>;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="h-[70vh] relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={wedding.coverImage} 
          alt={wedding.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto">
            <Link href="/portfolio">
              <div className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 cursor-pointer text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Back to Portfolio
              </div>
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif mb-4">{wedding.title}</h1>
            <div className="flex gap-6 text-sm uppercase tracking-widest opacity-90">
              <span className="flex items-center gap-2"><Calendar size={14} /> {wedding.date}</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> {wedding.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8 sticky top-32 h-fit">
            <SectionReveal>
              <h3 className="font-serif text-2xl mb-4">The Couple</h3>
              <p className="text-muted-foreground font-light text-lg mb-8">{wedding.couple}</p>
              
              <div className="w-12 h-px bg-border mb-8" />
              
              <h3 className="font-serif text-2xl mb-4">The Story</h3>
              <p className="text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {wedding.description}
              </p>
            </SectionReveal>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {wedding.galleryImages.map((img, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="relative overflow-hidden group">
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
