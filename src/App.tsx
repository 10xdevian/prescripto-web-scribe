
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Prescriptions from "./pages/Prescriptions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          
          {/* Placeholder Routes */}
          <Route path="/patients/:id" element={<DashboardLayout><div className="p-8 text-center">Patient details page (To be implemented)</div></DashboardLayout>} />
          <Route path="/patients/new" element={<DashboardLayout><div className="p-8 text-center">New patient form (To be implemented)</div></DashboardLayout>} />
          <Route path="/prescriptions/:id" element={<DashboardLayout><div className="p-8 text-center">Prescription details page (To be implemented)</div></DashboardLayout>} />
          <Route path="/prescriptions/new" element={<DashboardLayout><div className="p-8 text-center">New prescription form (To be implemented)</div></DashboardLayout>} />
          <Route path="/medications" element={<DashboardLayout><div className="p-8 text-center">Medications page (To be implemented)</div></DashboardLayout>} />
          <Route path="/history" element={<DashboardLayout><div className="p-8 text-center">History page (To be implemented)</div></DashboardLayout>} />
          <Route path="/messages" element={<DashboardLayout><div className="p-8 text-center">Messages page (To be implemented)</div></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><div className="p-8 text-center">Settings page (To be implemented)</div></DashboardLayout>} />
          
          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
