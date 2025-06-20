
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, AlertCircle, Info, Clock } from "lucide-react";

interface NotificationsProps {
  user: any;
}

export const Notifications = ({ user }: NotificationsProps) => {
  const notifications = [
    {
      id: 1,
      type: "document_received",
      title: "New Document Received",
      message: "Budget Proposal 2024 has been received from Finance Department",
      time: "2 hours ago",
      read: false,
      priority: "high"
    },
    {
      id: 2,
      type: "document_approved",
      title: "Document Approved",
      message: "Your Safety Protocol Update has been approved by the Department Head",
      time: "4 hours ago",
      read: false,
      priority: "normal"
    },
    {
      id: 3,
      type: "system_update",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur tonight from 11 PM to 2 AM",
      time: "6 hours ago",
      read: true,
      priority: "low"
    },
    {
      id: 4,
      type: "document_archived",
      title: "Document Archived",
      message: "Meeting Minutes - March has been automatically archived",
      time: "1 day ago",
      read: true,
      priority: "low"
    },
    {
      id: 5,
      type: "pending_review",
      title: "Document Pending Review",
      message: "Road Maintenance Request requires your attention",
      time: "2 days ago",
      read: false,
      priority: "high"
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "document_received":
        return <Info className="w-5 h-5 text-blue-600" />;
      case "document_approved":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "system_update":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "pending_review":
        return <Clock className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700";
      case "normal": return "bg-blue-100 text-blue-700";
      case "low": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-gray-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            <p className="text-gray-600">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <Button variant="outline">
          Mark All as Read
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-700">{unreadCount}</div>
            <div className="text-sm text-gray-600">Unread</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">
              {notifications.filter(n => n.priority === "high").length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">{notifications.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`hover:shadow-md transition-shadow ${
              !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {notification.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {notification.message}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <Badge className={getPriorityColor(notification.priority)}>
                        {notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)}
                      </Badge>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{notification.time}</span>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <Button variant="outline" size="sm">
                          Mark as Read
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
