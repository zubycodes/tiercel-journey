import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Consultation from "./pages/Consultation";
import Destinations from "./pages/Destinations";
import IELTS from "./pages/IELTS";
import PTE from "./pages/PTE";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import TopUniversities from './pages/blog/TopUniversities';
import AceApplicationEssay from './pages/blog/AceApplicationEssay';
import ScholarshipOpportunities from './pages/blog/ScholarshipOpportunities';
import IvyLeague from './pages/IvyLeauge';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/ielts" element={<IELTS />} />
          <Route path="/ivy-league" element={<IvyLeague />} />
          <Route path="/pte" element={<PTE />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/top-universities" element={<TopUniversities />} />
          <Route path="/ace-application-essay" element={<AceApplicationEssay />} />
          <Route path="/blog/scholarship-opportunities" element={<ScholarshipOpportunities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
