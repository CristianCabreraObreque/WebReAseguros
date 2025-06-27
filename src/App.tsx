import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ContractsModule from './components/modules/ContractsModule';
import PlacementModule from './components/modules/PlacementModule';
import ClaimsModule from './components/modules/ClaimsModule';
import AccountingModule from './components/modules/AccountingModule';
import MaintainersModule from './components/modules/MaintainersModule';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'contracts':
        return <ContractsModule />;
      case 'placement':
        return <PlacementModule />;
      case 'claims':
        return <ClaimsModule />;
      case 'accounting':
        return <AccountingModule />;
      case 'maintainers':
        return <MaintainersModule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AuthProvider>
      <ProtectedRoute fallback={<LoginPage />}>
        <div className="min-h-screen bg-gray-50">
          <Sidebar
            activeModule={activeModule}
            setActiveModule={setActiveModule}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          <div className={`transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
            <Header />
            <main className="p-6">
              {renderModule()}
            </main>
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default App;