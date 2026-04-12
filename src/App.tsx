import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConversacionesRegenerativas from "./pages/servicios/ConversacionesRegenerativas";
import Regeneracion360 from "./pages/servicios/Regeneracion360";
import Transiciones from "./pages/servicios/Transiciones";
import SpeakerPage from "./pages/Speaker";
import ProyectosPage from "./pages/Proyectos";
import SobrePage from "./pages/Sobre";
import ContactoPage from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/conversaciones-regenerativas" element={<ConversacionesRegenerativas />} />
          <Route path="/servicios/espacios-regenerativos" element={<Navigate to="/servicios/conversaciones-regenerativas" replace />} />
          <Route path="/servicios/regeneracion-360" element={<Regeneracion360 />} />
          <Route path="/servicios/transiciones" element={<Transiciones />} />
          <Route path="/speaker" element={<SpeakerPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
