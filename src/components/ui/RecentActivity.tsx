import React from 'react';
import { Clock, FileText, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      action: 'Contrato renovado',
      description: 'Contrato XL Motor 2024 con Mapfre Re',
      time: 'Hace 2 horas',
      icon: FileText,
      color: 'blue'
    },
    {
      id: 2,
      action: 'Siniestro reportado',
      description: 'Incendio industrial - $850K',
      time: 'Hace 4 horas',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      id: 3,
      action: 'Colocación completada',
      description: 'Póliza individual - Riesgo AA',
      time: 'Hace 6 horas',
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      id: 4,
      action: 'Nueva reaseguradora',
      description: 'Swiss Re agregada al sistema',
      time: 'Hace 1 día',
      icon: Users,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      orange: 'text-orange-600 bg-orange-100',
      emerald: 'text-emerald-600 bg-emerald-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500 truncate">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors">
        Ver toda la actividad
      </button>
    </div>
  );
};

export default RecentActivity;