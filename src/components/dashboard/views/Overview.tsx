
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Send, Archive, Users } from "lucide-react";

interface OverviewProps {
  user: any;
}

export const Overview = ({ user }: OverviewProps) => {
  const stats = [
    { title: "Total Documents", value: "156", icon: FileText, color: "blue" },
    { title: "Sent Today", value: "12", icon: Send, color: "green" },
    { title: "Archived", value: "89", icon: Archive, color: "gray" },
    { title: "Active Users", value: "24", icon: Users, color: "purple" },
  ];

  const recentActivity = [
    { action: "Document sent", document: "Budget Report 2024", time: "2 hours ago", status: "sent" },
    { action: "Document received", document: "Permit Application #456", time: "4 hours ago", status: "received" },
    { action: "Document archived", document: "Meeting Minutes - March", time: "1 day ago", status: "archived" },
    { action: "Document created", document: "Safety Protocol Update", time: "2 days ago", status: "draft" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent": return "bg-green-100 text-green-700";
      case "received": return "bg-blue-100 text-blue-700";
      case "archived": return "bg-gray-100 text-gray-700";
      case "draft": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.document}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-medium text-blue-900">Create New Document</div>
              <div className="text-sm text-blue-700">Start a new correspondence</div>
            </button>
            <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-medium text-green-900">Search Documents</div>
              <div className="text-sm text-green-700">Find existing documents</div>
            </button>
            <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="font-medium text-purple-900">View Archive</div>
              <div className="text-sm text-purple-700">Access archived documents</div>
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Public Works</span>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Finance</span>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Administration</span>
                <span className="text-sm text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Legal</span>
                <span className="text-sm text-yellow-600">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
