import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";

// Route-level code splitting — secondary pages load on demand,
// so the home page bundle stays small.
const ConversacionesRegenerativas = lazy(() => import("./pages/servicios/ConversacionesRegenerativas"));
const Regeneracion360 = lazy(() => import("./pages/servicios/Regeneracion360"));
const Transiciones = lazy(() => import("./pages/servicios/Transiciones"));
const SpeakerPage = lazy(() => import("./pages/Speaker"));
const SobrePage = lazy(() => import("./pages/Sobre"));
const ContactoPage = lazy(() => import("./pages/Contacto"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-musgo/30 border-t-musgo rounded-full animate-spin" aria-label="Cargando" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="main">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios/conversaciones-regenerativas" element={<ConversacionesRegenerativas />} />
              <Route path="/servicios/espacios-regenerativos" element={<Navigate to="/servicios/conversaciones-regenerativas" replace />} />
              <Route path="/servicios/regeneracion-360" element={<Regeneracion360 />} />
              <Route path="/servicios/transiciones" element={<Transiciones />} />
              <Route path="/speaker" element={<SpeakerPage />} />
              <Route path="/proyectos" element={<Navigate to="/sobre" replace />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
