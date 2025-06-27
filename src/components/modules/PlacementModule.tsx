import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { 
  Upload, 
  FileSpreadsheet, 
  Target, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Plus,
  Download
} from 'lucide-react';

const PlacementModule: React.FC = () => {
  const { hasPermission, user } = useAuth();
  const [activeTab, setActiveTab] = useState('individual');

  const placements = [
    {
      id: 'PLC-2024-001',
      policyNumber: 'POL-456789',
      insured: 'Constructora ABC',
      coverage: 'Responsabilidad Civil',
      amount: '$500,000',
      commission: '12.5%',
      reinsurer: 'Swiss Re',
      status: 'Colocado',
      date: '2024-01-15'
    },
    {
      id: 'PLC-2024-002',
      policyNumber: 'POL-456790',
      insured: 'Industrial XYZ',
      coverage: 'Incendio',
      amount: '$1,200,000',
      commission: '15%',
      reinsurer: 'Munich Re',
      status: 'Pendiente',
      date: '2024-01-16'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Colocado':
        return 'bg-emerald-100 text-emerald-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rechazado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Colocado':
        return <CheckCircle className="h-4 w-4" />;
      case 'Pendiente':
        return <Clock className="h-4 w-4" />;
      case 'Rechazado':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getHeaderInfo = () => {
    if (user?.role === 'compania') {
      return {
        title: 'Colocación de Seguros',
        subtitle: 'Gestione la colocación de pólizas en el mercado reasegurador',
        color: 'bg-emerald-600 hover:bg-emerald-700'
      };
    }
    return {
      title: 'Colocación de Reaseguros',
      subtitle: 'Gestiona colocaciones individuales y masivas de pólizas',
      color: 'bg-blue-600 hover:bg-blue-700'
    };
  };

  const headerInfo = getHeaderInfo();
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{headerInfo.title}</h2>
          <p className="text-gray-600">{headerInfo.subtitle}</p>
        </div>
        <div className="flex space-x-3">
          {hasPermission('upload_policies') && (
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Upload className="h-4 w-4" />
              <span>Carga Masiva</span>
            </button>
          )}
          {hasPermission('create_placement') && (
            <button className={`${headerInfo.color} text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors`}>
              <Plus className="h-4 w-4" />
              <span>Colocación Individual</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {hasPermission('create_placement') && (
              <button
                onClick={() => setActiveTab('individual')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'individual'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Colocación Individual
              </button>
            )}
            {hasPermission('upload_policies') && (
              <button
                onClick={() => setActiveTab('bulk')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'bulk'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Carga Masiva
              </button>
            )}
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Historial de Colocaciones
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'individual' && hasPermission('create_placement') && (
            <ProtectedRoute requiredPermission="create_placement">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Nueva Colocación Individual</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Póliza
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="POL-000000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asegurado
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nombre del asegurado"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cobertura
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Seleccionar cobertura</option>
                      <option>Incendio</option>
                      <option>Responsabilidad Civil</option>
                      <option>Automóviles</option>
                      <option>Vida</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Suma Asegurada
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="$0.00"
                    />
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className={`${headerInfo.color} text-white px-6 py-2 rounded-lg transition-colors`}>
                    Colocar Reaseguro
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
            </ProtectedRoute>
          )}

          {activeTab === 'bulk' && hasPermission('upload_policies') && (
            <ProtectedRoute requiredPermission="upload_policies">
            <div className="space-y-6">
              <div className="text-center py-12">
                <FileSpreadsheet className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Carga Masiva de Pólizas</h3>
                <p className="text-gray-500 mb-6">
                  Arrastra y suelta tu archivo Excel o CSV aquí, o haz clic para seleccionar
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Upload className="h-4 w-4" />
                    <span>Subir Archivo</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Descargar Plantilla</span>
                  </button>
                </div>
              </div>
            </div>
            </ProtectedRoute>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID Colocación
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Póliza
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Asegurado
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Suma Asegurada
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reaseguradora
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {placements.map((placement) => (
                      <tr key={placement.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                          {placement.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {placement.policyNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {placement.insured}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {placement.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {placement.reinsurer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(placement.status)}`}>
                            {getStatusIcon(placement.status)}
                            <span className="ml-1">{placement.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {placement.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Colocaciones Hoy</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">En Proceso</p>
              <p className="text-2xl font-bold text-yellow-600">5</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Exitosas</p>
              <p className="text-2xl font-bold text-emerald-600">143</p>
            </div>
            <CheckCircle className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tasa Éxito</p>
              <p className="text-2xl font-bold text-gray-900">94.2%</p>
            </div>
            <FileSpreadsheet className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementModule;