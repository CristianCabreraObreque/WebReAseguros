import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  AlertTriangle,
  Users,
  BarChart3,
  PieChart
} from 'lucide-react';
import StatsCard from './ui/StatsCard';
import ChartCard from './ui/ChartCard';
import RecentActivity from './ui/RecentActivity';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Primas Cedidas',
      value: '$48.2M',
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign
    },
    {
      title: 'Contratos Activos',
      value: '156',
      change: '+8',
      trend: 'up' as const,
      icon: FileText
    },
    {
      title: 'Siniestros Pendientes',
      value: '23',
      change: '-5',
      trend: 'down' as const,
      icon: AlertTriangle
    },
    {
      title: 'Reaseguradoras',
      value: '34',
      change: '+2',
      trend: 'up' as const,
      icon: Users
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Bienvenido al Sistema de Reaseguros</h2>
            <p className="text-blue-100">
              Gestiona contratos, colocaciones y siniestros de manera eficiente
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 rounded-lg p-4">
              <BarChart3 className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard 
            title="Evolución de Primas Cedidas"
            subtitle="Últimos 12 meses"
          />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <FileText className="h-6 w-6 text-blue-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Nuevo Contrato</p>
              <p className="text-sm text-gray-500">Crear contrato de reaseguro</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
            <PieChart className="h-6 w-6 text-emerald-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Colocar Póliza</p>
              <p className="text-sm text-gray-500">Procesar nueva colocación</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Reportar Siniestro</p>
              <p className="text-sm text-gray-500">Registrar nuevo siniestro</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;