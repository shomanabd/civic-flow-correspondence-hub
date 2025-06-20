
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Download, Eye, Edit } from "lucide-react";
import { CreateDocumentModal } from "@/components/documents/CreateDocumentModal";

interface DocumentsProps {
  user: any;
}

export const Documents = ({ user }: DocumentsProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const mockDocuments = [
    {
      id: "DOC-2024-001",
      title: "Budget Proposal 2024",
      department: "Finance",
      status: "draft",
      createdBy: "John Smith",
      createdAt: "2024-01-15",
      type: "Official Letter"
    },
    {
      id: "DOC-2024-002",
      title: "Road Maintenance Request",
      department: "Public Works",
      status: "sent",
      createdBy: "Jane Doe",
      createdAt: "2024-01-14",
      type: "Request Form"
    },
    {
      id: "DOC-2024-003",
      title: "Policy Update Notice",
      department: "Administration",
      status: "received",
      createdBy: "Admin User",
      createdAt: "2024-01-13",
      type: "Notice"
    },
    {
      id: "DOC-2024-004",
      title: "Safety Inspection Report",
      department: "Public Works",
      status: "archived",
      createdBy: "Safety Officer",
      createdAt: "2024-01-12",
      type: "Report"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-yellow-100 text-yellow-700";
      case "sent": return "bg-green-100 text-green-700";
      case "received": return "bg-blue-100 text-blue-700";
      case "archived": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const canEdit = (doc: any) => {
    if (user.role === "Admin") return true;
    if (user.role === "Department Head" && doc.department === user.department) return true;
    if (user.role === "Employee" && doc.department === user.department && doc.status === "draft") return true;
    return false;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
          <p className="text-gray-600">Manage your department's correspondence</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Document
        </Button>
      </div>

      <div className="grid gap-4">
        {mockDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                    <Badge className={getStatusColor(doc.status)}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-medium">Document ID:</span> {doc.id}
                    </div>
                    <div>
                      <span className="font-medium">Department:</span> {doc.department}
                    </div>
                    <div>
                      <span className="font-medium">Type:</span> {doc.type}
                    </div>
                    <div>
                      <span className="font-medium">Created:</span> {doc.createdAt}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Created by <span className="font-medium">{doc.createdBy}</span>
                  </p>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  {canEdit(doc) && (
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CreateDocumentModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        user={user}
      />
    </div>
  );
};
