import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { Star, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center pt-32">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=2000"
            alt="Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-7xl font-serif mb-6 text-foreground leading-tight"
          >
            Our Heritage
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl"
          >
            Weaving stories of love and legacy across India's most treasured destinations
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal className="space-y-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-px h-16 bg-primary mx-auto mb-8"
            />
            
            <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground">
              The Vivaah Luxe Story
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                <strong className="text-foreground">Vivaah Luxe</strong> was born from a profound belief: that Indian weddings are not merely celebrations, but sacred rites that unite families, honor traditions, and create legacies. What began as a vision to elevate the art of wedding design has blossomed into a pan-India movement that respects heritage while embracing modernity.
              </p>

              <p>
                Founded over a decade ago, our collective has orchestrated 200+ grand celebrations across 12+ heritage destinations—from the royal palaces of Rajasthan to the tranquil backwaters of Kerala, from bustling havelis in Delhi to coastal mansions in Goa. Every wedding is a canvas where we paint stories of love, culture, and timeless elegance.
              </p>

              <p>
                We don't just plan events; we are custodians of memories. Our team of seasoned planners, artisans, chefs, and designers work in harmony—understanding that true luxury lies not in excess, but in the meticulousness of every detail, the warmth of every interaction, and the authenticity of every moment.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionReveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
              These principles guide every celebration we create
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Family-First Philosophy",
                description: "We treat every family as our own, understanding that weddings are not just about the couple—they are about uniting generations and honoring bonds."
              },
              {
                icon: Star,
                title: "Cultural Authenticity",
                description: "We honor Indian traditions in their purest form—whether it's a Maharashtrian wedding, a Punjabi celebration, or a South Indian spectacle."
              },
              {
                icon: Zap,
                title: "Flawless Execution",
                description: "From venue audits to vendor vetting, from contingency planning to real-time coordination, we ensure every moment unfolds with precision and grace."
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <SectionReveal key={i} delay={i * 0.1}>
                  <motion.div
                    className="text-center space-y-4"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Icon className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Our Team
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              A collective of 50+ professionals dedicated to your celebration
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                role: "Planning & Coordination",
                description: "Experienced event managers with an average of 10+ years in high-end Indian weddings, fluent in multiple regional traditions and setups."
              },
              {
                role: "Design & Aesthetics",
                description: "Award-winning designers and architects who blend heritage motifs with contemporary aesthetics, creating spaces that tell your story."
              },
              {
                role: "Culinary Excellence",
                description: "Michelin-trained chefs and sous-chefs specializing in regional Indian cuisines, curating multi-course experiences that celebrate local flavours."
              },
              {
                role: "Artisans & Craftspeople",
                description: "Master florists, decorators, lighting designers, and traditional craftspeople who bring heritage back to life through their artistry."
              },
            ].map((member, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="p-8 bg-white border border-gray-200 rounded-lg hover:border-primary/30 transition-all"
                  whileHover={{ y: -8 }}
                >
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    {member.role}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-foreground text-white">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif text-center">
              Why Couples Choose Vivaah Luxe
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "200+ Grand Weddings",
                  desc: "Proven expertise across diverse scales, budgets, and regional traditions."
                },
                {
                  title: "12+ Heritage Destinations",
                  desc: "Curated access to India's most exclusive palaces, forts, havelis, and estates."
                },
                {
                  title: "2,500+ Network",
                  desc: "A trusted ecosystem of artisans, chefs, musicians, and vendors across India."
                },
                {
                  title: "100% Family Satisfaction",
                  desc: "Not just happy couples, but jubilant parents and extended families."
                },
                {
                  title: "End-to-End Luxury",
                  desc: "From concept to post-wedding album—every touchpoint curated for excellence."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-white fill-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                    <p className="text-white/80 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-primary/10 to-pink-500/10">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionReveal className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              Let's craft a celebration that honors your heritage and creates timeless memories for generations to come.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="px-10 py-4 bg-foreground text-white rounded-lg font-bold uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 text-sm">
                  Schedule a Consultation
                </button>
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
