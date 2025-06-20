
import { Home, FileText, Users, Search, Settings, Archive, Bell, LogOut } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  user: any;
  activeView: string;
  onViewChange: (view: string) => void;
  onLogout: () => void;
}

export const Sidebar = ({ user, activeView, onViewChange, onLogout }: SidebarProps) => {
  const menuItems = [
    { id: "overview", title: "Overview", icon: Home },
    { id: "documents", title: "Documents", icon: FileText },
    { id: "search", title: "Search", icon: Search },
    { id: "archive", title: "Archive", icon: Archive },
    { id: "notifications", title: "Notifications", icon: Bell },
  ];

  // Add admin-only items
  if (user.role === "Admin") {
    menuItems.push(
      { id: "users", title: "User Management", icon: Users },
      { id: "settings", title: "System Settings", icon: Settings }
    );
  }

  return (
    <ShadcnSidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">MCS</h2>
            <p className="text-xs text-gray-500">Municipal System</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full justify-start ${
                      activeView === item.id 
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-blue-100 text-blue-700">
              {user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user.username}</p>
            <p className="text-xs text-gray-500 truncate">{user.role} • {user.department}</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onLogout}
          className="w-full justify-start text-gray-700 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </ShadcnSidebar>
  );
};
