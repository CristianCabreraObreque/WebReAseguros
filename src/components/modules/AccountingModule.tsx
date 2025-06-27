import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { Calculator, FileText, Download, TrendingUp, CreditCard } from 'lucide-react';

const AccountingModule: React.FC = () => {
  const { hasPermission, user } = useAuth();

  const getHeaderInfo = () => {
    if (user?.role === 'reaseguros') {
      return {
        title: 'Gestión de Cuentas Corrientes',
        subtitle: 'Administre cuentas corrientes, bordereaux y liquidaciones',
        color: 'bg-purple-600 hover:bg-purple-700'
      };
    }
    return {
      title: 'Cuenta Corriente',
      subtitle: 'Gestión de cuenta corriente y generación de bordereaux',
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
          {hasPermission('generate_bordereau') && (
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Download className="h-4 w-4" />
              <span>Generar Bordereau</span>
            </button>
          )}
          {hasPermission('manage_current_account') && (
            <button className={`${headerInfo.color} text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors`}>
              <FileText className="h-4 w-4" />
              <span>Nuevo Movimiento</span>
            </button>
          )}
        </div>
      </div>

      {/* Balance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Saldo Total</p>
              <p className="text-2xl font-bold text-gray-900">$2.4M</p>
              <p className="text-sm text-emerald-600">+5.2% vs mes anterior</p>
            </div>
            <Calculator className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Por Cobrar</p>
              <p className="text-2xl font-bold text-orange-600">$450K</p>
              <p className="text-sm text-gray-500">15 movimientos</p>
            </div>
            <CreditCard className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Por Pagar</p>
              <p className="text-2xl font-bold text-red-600">$280K</p>
              <p className="text-sm text-gray-500">8 movimientos</p>
            </div>
            <FileText className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Comisiones</p>
              <p className="text-2xl font-bold text-emerald-600">$320K</p>
              <p className="text-sm text-emerald-600">Este mes</p>
            </div>
            <TrendingUp className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Recent Movements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Movimientos Recientes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reaseguradora
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Debe
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Haber
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saldo
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Prima</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Prima contrato XL Motor</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Swiss Re</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">$50,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$2,450,000</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Comisión</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Comisión colocación</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Munich Re</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">$7,500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$2,500,000</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-13</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Siniestro</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Recupero siniestro incendio</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mapfre Re</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">$850,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$2,492,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bordereau Generation */}
      {hasPermission('generate_bordereau') && (
        <ProtectedRoute requiredPermission="generate_bordereau">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Generación de Bordereaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reaseguradora
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Seleccionar reaseguradora</option>
                  <option>Swiss Re</option>
                  <option>Munich Re</option>
                  <option>Mapfre Re</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Período
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Último mes</option>
                  <option>Último trimestre</option>
                  <option>Último semestre</option>
                  <option>Año actual</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Download className="h-4 w-4" />
                <span>Generar Bordereau</span>
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors">
                Vista Previa
              </button>
            </div>
          </div>
        </ProtectedRoute>
      )}

      {/* Financial Reports for Reinsurers */}
      {user?.role === 'reaseguros' && hasPermission('view_financial_reports') && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Reportes Financieros</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <FileText className="h-6 w-6 text-purple-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Estado de Cuenta</p>
                <p className="text-sm text-gray-500">Resumen mensual</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Análisis de Rentabilidad</p>
                <p className="text-sm text-gray-500">Por línea de negocio</p>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Liquidación de Cuentas</p>
                <p className="text-sm text-gray-500">Proceso automático</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountingModule;