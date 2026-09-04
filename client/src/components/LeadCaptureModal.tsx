import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Gift, Clock, Sparkles } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadData) => void;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
  eventDate?: string;
}

export function LeadCaptureModal({ isOpen, onClose, onSubmit }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onSubmit(formData);
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", eventDate: "" });
      }, 2000);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto overflow-x-hidden relative border border-amber-100"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-50/80 to-transparent pointer-events-none" />

            {/* Close Button */}
            <motion.button
              ref={closeBtnRef}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close lead modal"
              className="absolute top-5 right-5 z-50 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-all shadow-sm"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="relative z-10 p-6 sm:p-8">
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-amber-500/20">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block mb-2">
                      Private Consultation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-tight">
                      Plan Your Dream Celebration
                    </h2>
                    <p className="text-neutral-500 text-xs sm:text-sm font-light mt-1">
                      Complimentary 30-minute bespoke curation with our senior director
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 bg-neutral-50/80 p-3 rounded-2xl border border-neutral-100 text-center">
                    <div className="p-1.5">
                      <Gift className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                      <p className="text-[11px] font-medium text-neutral-800">Custom Proposal</p>
                    </div>
                    <div className="p-1.5 border-x border-neutral-200/60">
                      <Heart className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                      <p className="text-[11px] font-medium text-neutral-800">Venue Curation</p>
                    </div>
                    <div className="p-1.5">
                      <Clock className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                      <p className="text-[11px] font-medium text-neutral-800">Budget Guidance</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm transition-all bg-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm transition-all bg-white"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm transition-all bg-white"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Target Season or Date (e.g. Winter 2026, Dec 2026)"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-800 placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm transition-all bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-amber-100 rounded-xl font-semibold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-amber-200 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Request VIP Consultation →"
                      )}
                    </motion.button>

                    <p className="text-[11px] text-neutral-400 text-center font-light pt-1">
                      🔒 Discretion guaranteed • Direct callback within 2 hours
                    </p>
                  </form>
                </>
              ) : (
                // Success State
                <div className="text-center py-10 space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2"
                  >
                    <Heart className="w-8 h-8 fill-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-serif text-neutral-900">
                    Consultation Requested
                  </h3>
                  <p className="text-neutral-600 font-light text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Our wedding director will contact you directly to curate your royal celebration.
                  </p>
                  <div className="text-amber-700 text-xs font-semibold uppercase tracking-widest pt-2">
                    Returning to experience...
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
