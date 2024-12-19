import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, User, BookOpen, HelpCircle, LogOut, LayoutDashboard, ClipboardCheckIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuth } from '../auth/AuthContext';
import LoadingSpinner from '../ui/LoadingSpinner';

const navItems = [
  { path: '/', icon: <FileText className="h-5 w-5" />, label: 'الرئيسية' },
  {
    path: '/coordinator',
    icon: <ClipboardCheckIcon className="h-5 w-5" />,
    label: 'المشرف',

  },
  { path: '/dashboard', icon: <LayoutDashboard className="h-5 w-5" />, label: 'لوحة التحكم' },
  { path: '/profile', icon: <User className="h-5 w-5" />, label: 'الملف الشخصي' },
  { path: '/tutorial', icon: <BookOpen className="h-5 w-5" />, label: 'دليل المستخدم' },
  { path: '/faq', icon: <HelpCircle className="h-5 w-5" />, label: 'الأسئلة الشائعة' },
];

export default function Navbar() {
  const { logout, isLoading } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink
              to="/"
              className="flex-shrink-0 flex items-center transition-transform hover:-translate-y-0.5"
            >
              <img src="/logo.svg" alt="EKSC" className="h-12" />
            </NavLink>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                      'transition-all duration-300 ease-in-out hover:-translate-y-0.5',
                      isActive
                        ? 'border-brand-teal text-brand-teal'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    )
                  }
                >
                  <span className="inline-flex items-center space-x-2 rtl:space-x-reverse">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <select className="bg-transparent border-none text-sm text-gray-500 focus:ring-0">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
            <button
              onClick={logout}
              disabled={isLoading}
              className={cn(
                'text-gray-500 p-2 rounded-full',
                'transition-all duration-300 ease-in-out',
                'hover:bg-gray-100 hover:text-gray-700',
                'active:scale-95',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              {isLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <LogOut className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}