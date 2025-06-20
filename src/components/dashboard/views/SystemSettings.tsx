
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Database, Bell, Shield, FileText } from "lucide-react";

interface SystemSettingsProps {
  user: any;
}

export const SystemSettings = ({ user }: SystemSettingsProps) => {
  if (user.role !== "Admin") {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">You don't have permission to access system settings.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6 text-gray-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
          <p className="text-gray-600">Configure system-wide settings and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Document Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="doc-prefix">Document ID Prefix</Label>
              <Input id="doc-prefix" defaultValue="DOC" />
            </div>
            
            <div>
              <Label htmlFor="auto-archive">Auto-Archive Period (days)</Label>
              <Input id="auto-archive" type="number" defaultValue="365" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-numbering">Enable Auto-Numbering</Label>
              <Switch id="auto-numbering" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="digital-signature">Require Digital Signature</Label>
              <Switch id="digital-signature" />
            </div>
            
            <Button className="w-full">Save Document Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <Switch id="sms-notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" defaultChecked />
            </div>
            
            <div>
              <Label htmlFor="notification-schedule">Notification Schedule</Label>
              <Input id="notification-schedule" defaultValue="9:00 AM - 5:00 PM" />
            </div>
            
            <Button className="w-full">Save Notification Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" />
            </div>
            
            <div>
              <Label htmlFor="password-policy">Minimum Password Length</Label>
              <Input id="password-policy" type="number" defaultValue="8" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">Require Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="audit-logging">Enable Audit Logging</Label>
              <Switch id="audit-logging" defaultChecked />
            </div>
            
            <Button className="w-full">Save Security Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              System Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Database Status</h4>
              <p className="text-sm text-blue-700">Last backup: 2024-01-20 02:00 AM</p>
              <p className="text-sm text-blue-700">Database size: 2.4 GB</p>
            </div>
            
            <Button variant="outline" className="w-full">
              Create Database Backup
            </Button>
            
            <Button variant="outline" className="w-full">
              Clear System Cache
            </Button>
            
            <Button variant="outline" className="w-full">
              Export Audit Logs
            </Button>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">System Health</h4>
              <p className="text-sm text-yellow-700">CPU Usage: 23%</p>
              <p className="text-sm text-yellow-700">Memory Usage: 67%</p>
              <p className="text-sm text-yellow-700">Disk Space: 45% used</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
