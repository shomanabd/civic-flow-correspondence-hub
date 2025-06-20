
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Edit, Trash2, UserCheck, UserX } from "lucide-react";

interface UserManagementProps {
  user: any;
}

export const UserManagement = ({ user }: UserManagementProps) => {
  const [users] = useState([
    {
      id: 1,
      username: "admin",
      email: "admin@municipality.gov",
      role: "Admin",
      department: "Administration",
      status: "active",
      lastLogin: "2024-01-20 09:30",
      created: "2023-01-15"
    },
    {
      id: 2,
      username: "dept_head",
      email: "depthead@municipality.gov",
      role: "Department Head",
      department: "Public Works",
      status: "active",
      lastLogin: "2024-01-19 14:15",
      created: "2023-02-10"
    },
    {
      id: 3,
      username: "employee",
      email: "employee@municipality.gov",
      role: "Employee",
      department: "Finance",
      status: "active",
      lastLogin: "2024-01-18 11:45",
      created: "2023-03-05"
    },
    {
      id: 4,
      username: "j.smith",
      email: "j.smith@municipality.gov",
      role: "Employee",
      department: "Legal",
      status: "inactive",
      lastLogin: "2024-01-10 16:20",
      created: "2023-04-12"
    },
    {
      id: 5,
      username: "m.johnson",
      email: "m.johnson@municipality.gov",
      role: "Department Head",
      department: "HR",
      status: "active",
      lastLogin: "2024-01-19 08:00",
      created: "2023-05-20"
    }
  ]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-purple-100 text-purple-700";
      case "Department Head": return "bg-blue-100 text-blue-700";
      case "Employee": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-green-100 text-green-700" 
      : "bg-red-100 text-red-700";
  };

  const activeUsers = users.filter(u => u.status === "active").length;
  const inactiveUsers = users.filter(u => u.status === "inactive").length;

  if (user.role !== "Admin") {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">You don't have permission to access user management.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage system users and their permissions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">{users.length}</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">{activeUsers}</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-700">{inactiveUsers}</div>
            <div className="text-sm text-gray-600">Inactive Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">5</div>
            <div className="text-sm text-gray-600">Departments</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((userItem) => (
              <div key={userItem.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      {userItem.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-gray-900">{userItem.username}</h4>
                      <Badge className={getRoleColor(userItem.role)}>
                        {userItem.role}
                      </Badge>
                      <Badge className={getStatusColor(userItem.status)}>
                        {userItem.status.charAt(0).toUpperCase() + userItem.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>{userItem.email}</div>
                      <div className="flex gap-4">
                        <span>Department: {userItem.department}</span>
                        <span>Last Login: {userItem.lastLogin}</span>
                        <span>Created: {userItem.created}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  
                  {userItem.status === "active" ? (
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <UserX className="w-4 h-4 mr-1" />
                      Deactivate
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                      <UserCheck className="w-4 h-4 mr-1" />
                      Activate
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
