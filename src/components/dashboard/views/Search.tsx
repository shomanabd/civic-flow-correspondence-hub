
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, Filter, FileText, Calendar, Building } from "lucide-react";

interface SearchProps {
  user: any;
}

export const Search = ({ user }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const searchResults = [
    {
      id: "DOC-2024-001",
      title: "Budget Proposal 2024",
      department: "Finance",
      status: "draft",
      type: "Official Letter",
      createdAt: "2024-01-15",
      excerpt: "Annual budget proposal for fiscal year 2024 including departmental allocations..."
    },
    {
      id: "DOC-2024-002",
      title: "Road Maintenance Request",
      department: "Public Works",
      status: "sent",
      type: "Request Form",
      createdAt: "2024-01-14",
      excerpt: "Request for emergency road maintenance on Main Street due to potholes..."
    },
    {
      id: "DOC-2023-089",
      title: "Employee Handbook Update",
      department: "HR",
      status: "archived",
      type: "Policy",
      createdAt: "2023-12-20",
      excerpt: "Updated employee handbook with new remote work policies and procedures..."
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SearchIcon className="w-5 h-5" />
            Document Search
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search documents by title, content, or document ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Departments</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="public-works">Public Works</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="received">Received</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="official-letter">Official Letter</SelectItem>
                <SelectItem value="memo">Memorandum</SelectItem>
                <SelectItem value="report">Report</SelectItem>
                <SelectItem value="request">Request Form</SelectItem>
                <SelectItem value="notice">Notice</SelectItem>
                <SelectItem value="policy">Policy</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Date</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Search Results ({searchResults.length})
          </h3>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {searchResults.map((result) => (
          <Card key={result.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-900">{result.title}</h4>
                    <Badge className={getStatusColor(result.status)}>
                      {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {result.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {result.createdAt}
                    </div>
                    <div>
                      Type: {result.type}
                    </div>
                    <div>
                      ID: {result.id}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{result.excerpt}</p>
                </div>
                
                <div className="ml-4">
                  <Button variant="outline" size="sm">
                    View Document
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
