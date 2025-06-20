
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: (user: any) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Mock users for demo
  const mockUsers = {
    admin: { username: "admin", password: "admin123", role: "Admin", department: "Administration", id: 1 },
    dept_head: { username: "dept_head", password: "dept123", role: "Department Head", department: "Public Works", id: 2 },
    employee: { username: "employee", password: "emp123", role: "Employee", department: "Finance", id: 3 }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = Object.values(mockUsers).find(
        u => u.username === username && u.password === password
      );

      if (user) {
        onLogin(user);
        toast({
          title: "Login Successful",
          description: `Welcome back, ${user.username}!`,
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-semibold text-blue-800 mb-2">Demo Accounts:</p>
          <div className="text-xs text-blue-700 space-y-1">
            <div>Admin: admin / admin123</div>
            <div>Dept Head: dept_head / dept123</div>
            <div>Employee: employee / emp123</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
