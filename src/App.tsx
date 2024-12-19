import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import FaqPage from './pages/FaqPage';
import TutorialPage from './pages/TutorialPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CoordinatorPage from './pages/CoordinatorPage';
import { AuthProvider, useAuth } from './components/auth/AuthContext';
import { VoucherProvider } from './contexts/VoucherContext';
import './styles/transitions.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <VoucherProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/coordinator" element={<CoordinatorPage />} />
                      <Route path="/faq" element={<FaqPage />} />
                      <Route path="/tutorial" element={<TutorialPage />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </VoucherProvider>
      </AuthProvider>
    </Router>
  );
}