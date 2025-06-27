import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContractsModule from './components/modules/ContractsModule';
import PlacementModule from './components/modules/PlacementModule';
import ClaimsModule from './components/modules/ClaimsModule';
import AccountingModule from './components/modules/AccountingModule';
import MaintainersModule from './components/modules/MaintainersModule';

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'contracts':
        return (
          <ProtectedRoute requiredPermission="manage_contracts">
            <ContractsModule />
          </ProtectedRoute>
        );
      case 'placement':
        return (
          <ProtectedRoute requiredPermission="view_placement">
            <PlacementModule />
          </ProtectedRoute>
        );
      case 'claims':
        return (
          <ProtectedRoute requiredPermission="view_claims">
            <ClaimsModule />
          </ProtectedRoute>
        );
      case 'accounting':
        return (
          <ProtectedRoute requiredPermission="view_accounting">
            <AccountingModule />
          </ProtectedRoute>
        );
      case 'maintainers':
        return (
          <ProtectedRoute requiredPermission="manage_maintainers">
            <MaintainersModule />
          </ProtectedRoute>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header 
          activeModule={activeModule}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        <main className="flex-1 p-6">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;