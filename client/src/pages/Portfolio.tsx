import { motion } from "framer-motion";
import { useWeddings } from "@/hooks/use-weddings";
import { WeddingCard } from "@/components/WeddingCard";
import { SectionReveal } from "@/components/SectionReveal";
import { Loader2 } from "lucide-react";

export default function Portfolio() {
  const { data: weddings, isLoading } = useWeddings();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <SectionReveal className="text-center mb-24 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Portfolio</h1>
          <p className="text-muted-foreground font-light">
            A collection of our most cherished celebrations. Each event is a unique reflection of the couple's style and story.
          </p>
        </SectionReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {weddings?.map((wedding, i) => (
            <SectionReveal key={wedding.id} delay={i * 0.05} className="break-inside-avoid">
              <WeddingCard wedding={wedding} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
