
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Pill, 
  History, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ to, icon, label, isActive, onClick }: SidebarLinkProps) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
      isActive 
        ? "bg-prescripto-100 text-prescripto-800 font-medium" 
        : "text-gray-600 hover:bg-gray-100"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { to: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "/patients", icon: <Users size={20} />, label: "Patients" },
    { to: "/prescriptions", icon: <FileText size={20} />, label: "Prescriptions" },
    { to: "/medications", icon: <Pill size={20} />, label: "Medications" },
    { to: "/history", icon: <History size={20} />, label: "History" },
    { to: "/messages", icon: <MessageSquare size={20} />, label: "Messages" },
    { to: "/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button 
          onClick={toggleMobileMenu} 
          size="icon" 
          className="h-12 w-12 rounded-full bg-prescripto-600 hover:bg-prescripto-700 shadow-lg"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 p-4">
        <nav className="flex-1 space-y-1">
          {links.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={isActive(link.to)}
            />
          ))}
        </nav>
        
        <div className="pt-4 border-t border-gray-200">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>
      
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50">
          <div className="absolute bottom-20 right-4 w-64 bg-white rounded-lg shadow-xl p-4">
            <nav className="space-y-1">
              {links.map((link) => (
                <SidebarLink
                  key={link.to}
                  to={link.to}
                  icon={link.icon}
                  label={link.label}
                  isActive={isActive(link.to)}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              
              <SidebarLink
                to="/logout"
                icon={<LogOut size={20} />}
                label="Sign Out"
                isActive={false}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
