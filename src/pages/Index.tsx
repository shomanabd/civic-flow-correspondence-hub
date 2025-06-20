
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { Dashboard } from "@/components/dashboard/Dashboard";

const Index = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Municipal Correspondence System
            </h1>
            <p className="text-gray-600">
              Secure document management for municipal operations
            </p>
          </div>
          <LoginForm onLogin={setUser} />
        </div>
      </div>
    );
  }

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
};

export default Index;
