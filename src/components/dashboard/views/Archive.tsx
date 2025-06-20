import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Archive as ArchiveIcon, Download, ArchiveRestore } from "lucide-react";

interface ArchiveProps {
  user: any;
}

export const Archive = ({ user }: ArchiveProps) => {
  const archivedDocuments = [
    {
      id: "DOC-2023-045",
      title: "Q4 Financial Report",
      department: "Finance",
      archivedDate: "2023-12-31",
      originalDate: "2023-10-15",
      type: "Report",
      size: "2.4 MB"
    },
    {
      id: "DOC-2023-089",
      title: "Employee Handbook v2.1",
      department: "HR",
      archivedDate: "2023-12-20",
      originalDate: "2023-11-05",
      type: "Policy",
      size: "5.1 MB"
    },
    {
      id: "DOC-2023-012",
      title: "Safety Inspection Checklist",
      department: "Public Works",
      archivedDate: "2023-11-15",
      originalDate: "2023-08-20",
      type: "Form",
      size: "1.2 MB"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <ArchiveIcon className="w-6 h-6 text-gray-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Document Archive</h2>
          <p className="text-gray-600">Access archived correspondence and documents</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Archive Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">156</div>
              <div className="text-sm text-blue-600">Total Archived</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">89.2 MB</div>
              <div className="text-sm text-green-600">Storage Used</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-700">12</div>
              <div className="text-sm text-purple-600">This Month</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700">5</div>
              <div className="text-sm text-yellow-600">Departments</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Archived Documents</h3>
        
        {archivedDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <ArchiveIcon className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                    <Badge variant="secondary">{doc.type}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Document ID:</span> {doc.id}
                    </div>
                    <div>
                      <span className="font-medium">Department:</span> {doc.department}
                    </div>
                    <div>
                      <span className="font-medium">Archived:</span> {doc.archivedDate}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span> {doc.size}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  {user.role === "Admin" && (
                    <Button variant="outline" size="sm">
                      <ArchiveRestore className="w-4 h-4 mr-1" />
                      Restore
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
