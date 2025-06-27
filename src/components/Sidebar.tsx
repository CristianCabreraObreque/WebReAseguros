import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Shuffle, 
  AlertTriangle, 
  Calculator, 
  Settings,
  ChevronLeft,
  Shield
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeModule, 
  setActiveModule, 
  collapsed, 
  setCollapsed 
}) => {
  const { hasPermission, user } = useAuth();

  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard, 
      permission: 'view_dashboard' 
    },
    { 
      id: 'contracts', 
      label: 'Contratos', 
      icon: FileText, 
      permission: 'manage_contracts',
      roles: ['tecnico']
    },
    { 
      id: 'placement', 
      label: 'Colocación', 
      icon: Shuffle, 
      permission: 'view_placement',
      roles: ['compania', 'tecnico']
    },
    { 
      id: 'claims', 
      label: 'Siniestros', 
      icon: AlertTriangle, 
      permission: 'view_claims' 
    },
    { 
      id: 'accounting', 
      label: 'Cuenta Corriente', 
      icon: Calculator, 
      permission: 'view_accounting',
      roles: ['reaseguros', 'tecnico']
    },
    { 
      id: 'maintainers', 
      label: 'Mantenedores', 
      icon: Settings, 
      permission: 'manage_maintainers',
      roles: ['tecnico']
    },
  ];

  // Filtrar elementos del menú según permisos y roles
  const filteredMenuItems = menuItems.filter(item => {
    // Verificar permiso
    if (item.permission && !hasPermission(item.permission)) {
      return false;
    }
    
    // Verificar rol si está especificado
    if (item.roles && !item.roles.includes(user?.role || '')) {
      return false;
    }
    
    return true;
  });

  return (
    <div className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-30 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-[#ED6A26]" />
              <div>
                <span className="text-xl font-bold block">ReasegurosPro</span>
                <span className="text-xs text-[#ED6A26] capitalize">{user?.role}</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {filteredMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? user?.role === 'compania'
                        ? 'bg-[#ED6A26] text-white'
                        : user?.role === 'reaseguros'
                        ? 'bg-purple-600 text-white'
                        : 'bg-[#0D4F45] text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User info at bottom */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-[#ED6A26] rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    {user?.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user?.name}</p>
                <p className="text-xs text-slate-400 truncate">{user?.company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;