import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContractsModule from './components/modules/ContractsModule';
import PlacementModule from './components/modules/PlacementModule';
import ClaimsModule from './components/modules/ClaimsModule';
import AccountingModule from './components/modules/AccountingModule';
import MaintainersModule from './components/modules/MaintainersModule';

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveModule = () => {
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
}

export default App;