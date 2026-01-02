import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import AnalyzerPage from "./pages/AnalyzerPage";
import EDTAPage from "./pages/EDTAPage";
import BoilerTroublesPage from "./pages/BoilerTroublesPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import ProcessesPage from "./pages/ProcessesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/analyzer" element={<AnalyzerPage />} />
          <Route path="/edta" element={<EDTAPage />} />
          <Route path="/boiler-troubles" element={<BoilerTroublesPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/processes" element={<ProcessesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
