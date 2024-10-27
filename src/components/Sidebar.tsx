import React from 'react';
import { BarChart3, Users, Calendar, Activity, Settings, Shield } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Overview', path: '/' },
  { icon: Users, label: 'Guards', path: '/guards' },
  { icon: Calendar, label: 'Events', path: '/events' },
  { icon: Activity, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

interface SidebarProps {
  setCurrentPath: (path: string) => void;
}

export function Sidebar({ setCurrentPath }: SidebarProps) {
  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="h-8 w-8 text-indigo-600" />
        <h1 className="text-xl font-bold">SecureGuard</h1>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            onClick={(e) => handleNavigation(item.path, e)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              window.location.pathname === item.path
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}