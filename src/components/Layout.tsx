import React from 'react';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Breadcrumbs from './layout/Breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}