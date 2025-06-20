
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Overview } from "./views/Overview";
import { Documents } from "./views/Documents";
import { Search } from "./views/Search";
import { Archive } from "./views/Archive";
import { Notifications } from "./views/Notifications";
import { UserManagement } from "./views/UserManagement";
import { SystemSettings } from "./views/SystemSettings";

interface MainContentProps {
  user: any;
  activeView: string;
}

export const MainContent = ({ user, activeView }: MainContentProps) => {
  const renderView = () => {
    switch (activeView) {
      case "overview":
        return <Overview user={user} />;
      case "documents":
        return <Documents user={user} />;
      case "search":
        return <Search user={user} />;
      case "archive":
        return <Archive user={user} />;
      case "notifications":
        return <Notifications user={user} />;
      case "users":
        return user.role === "Admin" ? <UserManagement user={user} /> : <Overview user={user} />;
      case "settings":
        return user.role === "Admin" ? <SystemSettings user={user} /> : <Overview user={user} />;
      default:
        return <Overview user={user} />;
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              {activeView === "overview" ? "Dashboard" : activeView.replace(/([A-Z])/g, ' $1')}
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back, {user.username}
            </p>
          </div>
        </div>
      </header>
      
      <div className="flex-1 p-6 overflow-auto">
        {renderView()}
      </div>
    </main>
  );
};
