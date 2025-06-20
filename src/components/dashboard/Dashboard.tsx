
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

export const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [activeView, setActiveView] = useState("overview");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar 
          user={user} 
          activeView={activeView} 
          onViewChange={setActiveView}
          onLogout={onLogout}
        />
        <MainContent user={user} activeView={activeView} />
      </div>
    </SidebarProvider>
  );
};
