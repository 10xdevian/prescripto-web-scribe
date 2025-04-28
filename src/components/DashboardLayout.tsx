
import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 max-w-full overflow-x-hidden">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
