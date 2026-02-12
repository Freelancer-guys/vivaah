import { SectionReveal } from "@/components/SectionReveal";
import { InquiryForm } from "@/components/InquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <SectionReveal>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">Begin Your Journey</h1>
            <p className="text-muted-foreground font-light text-lg mb-12 max-w-md">
              We take on a limited number of weddings each year to ensure the highest level of service. 
              Please fill out the form, and we will be in touch shortly.
            </p>

            <div className="space-y-8 mt-16">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-lg">Studio</h3>
                  <p className="text-muted-foreground font-light">123 Rue de la Paix<br/>75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-lg">Email</h3>
                  <p className="text-muted-foreground font-light">bonjour@lumiere.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-lg">Phone</h3>
                  <p className="text-muted-foreground font-light">+33 1 23 45 67 89</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Image */}
            <div className="mt-16 aspect-video overflow-hidden bg-muted relative">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
                alt="Stationery"
                className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="bg-white p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.02)] h-fit">
            <h2 className="font-serif text-3xl mb-8 text-center">Inquiry Form</h2>
            <InquiryForm />
          </SectionReveal>

        </div>
      </div>
    </div>
  );
}
