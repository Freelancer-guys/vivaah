import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { LiveChatIndicator } from "@/components/LiveChatIndicator";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLeadPopup } from "@/hooks/use-lead-popup";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import WeddingDetails from "@/pages/WeddingDetails";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Helper to scroll to top on route change
function ScrollToTopWrapper() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/weddings/:id" component={WeddingDetails} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { isOpen, handleClose, handleSubmit } = useLeadPopup({
    showAfterSeconds: 3, // Show after 3 seconds
    showOnExitIntent: false, // ignore cursor movement / exit-intent
    maxShowCount: 2, // Show maximum 2 times per session
  });

  return (
    <>
      <Navigation />
      <ScrollToTopWrapper />
      <Router />
      <Toaster />
      <LeadCaptureModal isOpen={isOpen} onClose={handleClose} onSubmit={handleSubmit} />
      <LiveChatIndicator />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
