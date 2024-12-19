import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const breadcrumbLabels: Record<string, string> = {
  '': 'الرئيسية',
  'profile': 'الملف الشخصي',
  'tutorial': 'دليل المستخدم',
  'faq': 'الأسئلة الشائعة'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            الرئيسية
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={path} className="flex items-center">
              <ChevronLeft className="h-4 w-4 text-gray-400 mx-2" />
              {isLast ? (
                <span className="text-gray-900 font-medium">
                  {breadcrumbLabels[segment]}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {breadcrumbLabels[segment]}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}