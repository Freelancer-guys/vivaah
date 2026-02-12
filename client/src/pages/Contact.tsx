import { SectionReveal } from "@/components/SectionReveal";
import { InquiryForm } from "@/components/InquiryForm";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
              Let's Create Magic
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">Begin Your Journey</h1>
          <p className="text-muted-foreground font-light text-lg">
            We take on a limited number of weddings each year to ensure the highest level of service and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <SectionReveal>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-muted-foreground font-light text-lg leading-relaxed">
                  Have a vision? We'd love to hear about it. Fill out the form and tell us about your special day, and we'll be in touch shortly to discuss how we can bring your dream celebration to life.
                </p>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div className="space-y-6 pt-8 border-t border-gray-200">
                {/* Location */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-pink-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <MapPin className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Studio Location</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Jubilee Hills<br />
                        Hyderabad, Telangana 500033, India<br />
                        <span className="text-xs uppercase tracking-widest text-primary">By appointment only</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-pink-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <Mail className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Email</h3>
                      <motion.a 
                        href="mailto:bonjour@lumiere.com"
                        className="text-muted-foreground font-light hover:text-primary transition-colors flex items-center gap-2 group/link"
                        whileHover={{ x: 5 }}
                      >
                        bonjour@lumiere.com
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </motion.a>
                      <p className="text-xs uppercase tracking-widest text-primary mt-2">Response within 24 hours</p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-pink-500/30 flex items-center justify-center flex-shrink-0"
                    >
                      <Phone className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Phone</h3>
                      <motion.a 
                        href="tel:+919988556611"
                        className="text-muted-foreground font-light hover:text-primary transition-colors flex items-center gap-2 group/link"
                        whileHover={{ x: 5 }}
                      >
                        +91 99885 56611
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </motion.a>
                      <p className="text-xs uppercase tracking-widest text-primary mt-2">Call us Mon-Fri, 10am-7pm IST</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Image with Video Play */}
              <motion.div 
                className="mt-16 aspect-video overflow-hidden bg-black relative rounded-lg shadow-lg group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
                  alt="Wedding Details"
                  className="w-full h-full object-cover opacity-90"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </SectionReveal>

          {/* Right Column - Form */}
          <SectionReveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 h-fit sticky top-32"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-1 bg-gradient-to-r from-primary to-pink-500 mb-8"
              />
              
              <h2 className="font-serif text-3xl md:text-4xl mb-2 text-foreground">Plan Together</h2>
              <p className="text-muted-foreground font-light text-sm mb-8 uppercase tracking-widest">
                Tell us your story
              </p>

              <InquiryForm />

              {/* Form Footer */}
              <motion.div
                className="mt-8 pt-8 border-t border-gray-200"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-xs text-muted-foreground text-center font-light">
                  ✓ Response within 24 hours<br/>
                  ✓ Confidential consultation<br/>
                  ✓ Zero pressure, no spam
                </p>
              </motion.div>
            </motion.div>
          </SectionReveal>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-32 pt-24 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground font-light">Quick answers to common questions</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What if we already have a date booked?",
                a: "We recommend reaching out early, even if your date is months away. Our schedule fills quickly."
              },
              {
                q: "How much does planning cost?",
                a: "Pricing varies based on the scope and scale of your celebration. We offer services starting from $4,500."
              },
              {
                q: "Can you work outside of Paris?",
                a: "Absolutely! We've planned weddings across Europe and beyond. Distance is never a barrier to excellence."
              },
              {
                q: "What's the booking process?",
                a: "After consultation, we'll prepare a custom proposal. A deposit secures your date, and planning begins immediately."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground font-light text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
