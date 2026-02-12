import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionReveal } from "@/components/SectionReveal";
import { WeddingCard } from "@/components/WeddingCard";
import { Button } from "@/components/Button";
import { useWeddings } from "@/hooks/use-weddings";
import { useServices } from "@/hooks/use-services";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const { data: weddings } = useWeddings();
  const { data: services } = useServices();

  const featuredWeddings = weddings?.filter(w => w.featured) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Unsplash luxury event setup */}
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Wedding Setup"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-light"
          >
            Curated Events & Bespoke Weddings
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
          >
            Timeless Elegance
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black mt-8">
                Start Planning
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 container mx-auto">
        <SectionReveal className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-px h-16 bg-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            We craft unforgettable moments where luxury meets intimacy.
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At Lumière, we believe that true luxury lies in the details. 
            From intimate ceremonies on the Amalfi Coast to grand ballroom receptions in Paris, 
            our dedicated team ensures that your love story is told with grace, style, and perfection.
          </p>
          <Link href="/portfolio">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors cursor-pointer mt-8">
              View Our Portfolio <ArrowRight size={14} />
            </span>
          </Link>
        </SectionReveal>
      </section>

      {/* Featured Weddings - Masonry Preview */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto">
          <SectionReveal className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Selected Works</span>
            <h2 className="text-4xl font-serif">Featured Celebrations</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWeddings.slice(0, 3).map((wedding, i) => (
              <SectionReveal key={wedding.id} delay={i * 0.1}>
                <WeddingCard wedding={wedding} />
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/portfolio">
              <Button variant="outline">View All Weddings</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Unsplash details shot: table setting */}
                <img 
                  src="https://images.unsplash.com/photo-1563823251941-b998f65753f2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Service Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} className="space-y-12">
              <div>
                <h2 className="text-4xl font-serif mb-6">Our Services</h2>
                <p className="text-muted-foreground font-light mb-8">
                  We offer bespoke planning services tailored to your specific needs. 
                  Whether you require full-service production or partial coordination, 
                  we are here to bring your vision to life.
                </p>
                <div className="space-y-6">
                  {services?.slice(0, 3).map(service => (
                    <div key={service.id} className="border-b border-border pb-6">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="font-serif text-xl">{service.title}</h3>
                        <span className="text-xs text-muted-foreground">{service.priceRange}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-light">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonial / Mood */}
      <section className="py-32 px-6 text-center bg-foreground text-background">
        <SectionReveal className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center gap-2 text-primary mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-snug">
            "They transformed our vision into something beyond our wildest dreams. 
            Every detail was perfection."
          </h2>
          <p className="text-sm uppercase tracking-widest opacity-70">— Sarah & James, Tuscany 2023</p>
        </SectionReveal>
      </section>
    </div>
  );
}
