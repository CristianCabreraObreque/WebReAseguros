import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  AlertTriangle,
  Users,
  BarChart3,
  PieChart,
  Shield,
  Building,
  Calculator
  Shield,
  Building,
  Calculator
  Shield,
  Building,
  Calculator
} from 'lucide-react';
import StatsCard from './ui/StatsCard';
import ChartCard from './ui/ChartCard';
import RecentActivity from './ui/RecentActivity';

const Dashboard: React.FC = () => {
  const { user, hasPermission } = useAuth();

  const { user, hasPermission } = useAuth();

  const { user, hasPermission } = useAuth();

  const stats = [
    {
      title: 'Primas Cedidas',
      value: '$48.2M',
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign,
      permission: 'view_dashboard'
      permission: 'view_dashboard'
      permission: 'view_dashboard'
    },
    {
      title: 'Contratos Activos',
      value: '156',
      change: '+8',
      trend: 'up' as const,
      icon: FileText,
      permission: 'manage_contracts'
      permission: 'manage_contracts'
      permission: 'manage_contracts'
    },
    {
      title: 'Siniestros Pendientes',
      value: '23',
      change: '-5',
      trend: 'down' as const,
      icon: AlertTriangle,
      permission: 'view_claims'
      permission: 'view_claims'
      permission: 'view_claims'
    },
    {
      title: 'Reaseguradoras',
      value: '34',
      change: '+2',
      trend: 'up' as const,
      icon: Users,
      permission: 'manage_maintainers'
      permission: 'manage_maintainers'
      permission: 'manage_maintainers'
    }
  ];

  // Filtrar estadísticas según permisos
  const filteredStats = stats.filter(stat => 
    !stat.permission || hasPermission(stat.permission)
  );

  const getWelcomeMessage = () => {
    switch (user?.role) {
      case 'tecnico':
        return {
          title: 'Panel Técnico - Sistema de Reaseguros',
          subtitle: 'Gestione contratos, mantenedores y configuración del sistema',
          icon: Shield,
          color: 'from-[#0D4F45] to-[#0D4F45]/80'
        };
      case 'compania':
        return {
          title: 'Portal de Compañía - Colocación de Seguros',
          subtitle: 'Gestione la colocación de pólizas y seguimiento de reaseguros',
          icon: Building,
          color: 'from-[#ED6A26] to-[#C5581F]'
        };
      case 'reaseguros':
        return {
          title: 'Portal Reasegurador - Cuentas Corrientes',
          subtitle: 'Gestione cuentas corrientes, bordereaux y liquidaciones',
          icon: Calculator,
          color: 'from-purple-600 to-purple-800'
        };
      default:
        return {
          title: 'Bienvenido al Sistema de Reaseguros',
          subtitle: 'Gestiona contratos, colocaciones y siniestros de manera eficiente',
          icon: BarChart3,
          color: 'from-[#0D4F45] to-[#0D4F45]/80'
        };
    }
  };

  const welcomeConfig = getWelcomeMessage();
  const WelcomeIcon = welcomeConfig.icon;

  // Filtrar estadísticas según permisos
  const filteredStats = stats.filter(stat => 
    !stat.permission || hasPermission(stat.permission)
  );

  const getWelcomeMessage = () => {
    switch (user?.role) {
      case 'tecnico':
        return {
          title: 'Panel Técnico - Sistema de Reaseguros',
          subtitle: 'Gestione contratos, mantenedores y configuración del sistema',
          icon: Shield,
          color: 'from-blue-600 to-blue-800'
        };
      case 'compania':
        return {
          title: 'Portal de Compañía - Colocación de Seguros',
          subtitle: 'Gestione la colocación de pólizas y seguimiento de reaseguros',
          icon: Building,
          color: 'from-emerald-600 to-emerald-800'
        };
      case 'reaseguros':
        return {
          title: 'Portal Reasegurador - Cuentas Corrientes',
          subtitle: 'Gestione cuentas corrientes, bordereaux y liquidaciones',
          icon: Calculator,
          color: 'from-purple-600 to-purple-800'
        };
      default:
        return {
          title: 'Bienvenido al Sistema de Reaseguros',
          subtitle: 'Gestiona contratos, colocaciones y siniestros de manera eficiente',
          icon: BarChart3,
          color: 'from-blue-600 to-blue-800'
        };
    }
  };

  const welcomeConfig = getWelcomeMessage();
  const WelcomeIcon = welcomeConfig.icon;

  // Filtrar estadísticas según permisos
  const filteredStats = stats.filter(stat => 
    !stat.permission || hasPermission(stat.permission)
  );

  const getWelcomeMessage = () => {
    switch (user?.role) {
      case 'tecnico':
        return {
          title: 'Panel Técnico - Sistema de Reaseguros',
          subtitle: 'Gestione contratos, mantenedores y configuración del sistema',
          icon: Shield,
          color: 'from-blue-600 to-blue-800'
        };
      case 'compania':
        return {
          title: 'Portal de Compañía - Colocación de Seguros',
          subtitle: 'Gestione la colocación de pólizas y seguimiento de reaseguros',
          icon: Building,
          color: 'from-emerald-600 to-emerald-800'
        };
      case 'reaseguros':
        return {
          title: 'Portal Reasegurador - Cuentas Corrientes',
          subtitle: 'Gestione cuentas corrientes, bordereaux y liquidaciones',
          icon: Calculator,
          color: 'from-purple-600 to-purple-800'
        };
      default:
        return {
          title: 'Bienvenido al Sistema de Reaseguros',
          subtitle: 'Gestiona contratos, colocaciones y siniestros de manera eficiente',
          icon: BarChart3,
          color: 'from-blue-600 to-blue-800'
        };
    }
  };

  const welcomeConfig = getWelcomeMessage();
  const WelcomeIcon = welcomeConfig.icon;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className={`bg-gradient-to-r ${welcomeConfig.color} rounded-xl p-6 text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{welcomeConfig.title}</h2>
            <p className="text-blue-100">
              {welcomeConfig.subtitle}
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Bienvenido, {user?.name} - {user?.company}
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Bienvenido, {user?.name} - {user?.company}
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Bienvenido, {user?.name} - {user?.company}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 rounded-lg p-4">
              <WelcomeIcon className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
      {hasPermission('view_dashboard') && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hasPermission('manage_contracts') && (
              <button className="flex items-center space-x-3 p-4 bg-[#0D4F45]/10 hover:bg-[#0D4F45]/20 rounded-lg transition-colors">
                <FileText className="h-6 w-6 text-[#0D4F45]" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Nuevo Contrato</p>
                  <p className="text-sm text-gray-500">Crear contrato de reaseguro</p>
                </div>
              </button>
            )}
            {hasPermission('create_placement') && (
              <button className="flex items-center space-x-3 p-4 bg-[#ED6A26]/10 hover:bg-[#ED6A26]/20 rounded-lg transition-colors">
                <PieChart className="h-6 w-6 text-[#ED6A26]" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Colocar Póliza</p>
                  <p className="text-sm text-gray-500">Procesar nueva colocación</p>
                </div>
              </button>
            )}
            {hasPermission('view_claims') && (
              <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Reportar Siniestro</p>
                  <p className="text-sm text-gray-500">Registrar nuevo siniestro</p>
                </div>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {hasPermission('view_dashboard') && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hasPermission('manage_contracts') && (
              <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <FileText className="h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Nuevo Contrato</p>
                  <p className="text-sm text-gray-500">Crear contrato de reaseguro</p>
                </div>
              </button>
            )}
            {hasPermission('manage_placement') && (
              <button className="flex items-center space-x-3 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                <PieChart className="h-6 w-6 text-emerald-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Colocar Póliza</p>
                  <p className="text-sm text-gray-500">Procesar nueva colocación</p>
                </div>
              </button>
            )}
            {hasPermission('view_claims') && (
              <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Reportar Siniestro</p>
                  <p className="text-sm text-gray-500">Registrar nuevo siniestro</p>
                </div>
              </button>
            )}
          </div>
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Reportar Siniestro</p>
                  <p className="text-sm text-gray-500">Registrar nuevo siniestro</p>
                </div>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;