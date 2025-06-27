import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  activeModule: string;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  activeModule, 
  sidebarCollapsed, 
  setSidebarCollapsed 
}) => {
  const getModuleTitle = (module: string) => {
    const titles = {
      dashboard: 'Panel de Control',
      contracts: 'Gestión de Contratos',
      placement: 'Colocación de Reaseguros',
      claims: 'Gestión de Siniestros',
      accounting: 'Cuenta Corriente',
      maintainers: 'Mantenedores del Sistema'
    };
    return titles[module as keyof typeof titles] || 'Dashboard';
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {getModuleTitle(activeModule)}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Ana Martínez</p>
              <p className="text-xs text-gray-500">Gerente de Reaseguros</p>
            </div>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;