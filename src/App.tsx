import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import DSLab from "./pages/DSLab";
import MLCenter from "./pages/MLCenter";
import DLStudio from "./pages/DLStudio";
import AIAdvisor from "./pages/AIAdvisor";
import Reports from "./pages/Reports";
import PromptLab from "./pages/PromptLab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ds-lab" element={<DSLab />} />
            <Route path="/ml-center" element={<MLCenter />} />
            <Route path="/dl-studio" element={<DLStudio />} />
            <Route path="/ai-advisor" element={<AIAdvisor />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/prompt-lab" element={<PromptLab />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
