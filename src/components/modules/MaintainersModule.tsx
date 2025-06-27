import React, { useState } from 'react';
import { Settings, Building, Users, Shield, FileText, Plus, Edit, Trash2, Layers, Target, Link } from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical-branches');

  const technicalBranches = [
    { 
      id: 1, 
      code: 'INC', 
      name: 'Incendio y Líneas Aliadas', 
      category: 'Patrimoniales',
      description: 'Cobertura contra incendios, explosión, rayo y riesgos aliados',
      commercialBranches: ['Incendio Residencial', 'Incendio Industrial', 'Incendio Comercial'],
      coverages: [
        { id: 1, name: 'Incendio', description: 'Daños por fuego directo' },
        { id: 2, name: 'Explosión', description: 'Daños por explosión' },
        { id: 3, name: 'Rayo', description: 'Daños por descarga eléctrica atmosférica' },
        { id: 4, name: 'Humo', description: 'Daños por humo' },
        { id: 5, name: 'Impacto de Aeronaves', description: 'Daños por impacto de aeronaves' }
      ],
      active: true,
      priority: 1
    },
    { 
      id: 2, 
      code: 'RC', 
      name: 'Responsabilidad Civil General', 
      category: 'Responsabilidades',
      description: 'Responsabilidad civil extracontractual y contractual',
      commercialBranches: ['RC Profesional', 'RC Productos', 'RC Patronal'],
      coverages: [
        { id: 6, name: 'RC General', description: 'Responsabilidad civil general' },
        { id: 7, name: 'RC Cruzada', description: 'Responsabilidad civil cruzada' },
        { id: 8, name: 'Gastos de Defensa', description: 'Gastos legales de defensa' },
        { id: 9, name: 'RC Productos', description: 'Responsabilidad por productos defectuosos' }
      ],
      active: true,
      priority: 2
    },
    { 
      id: 3, 
      code: 'AUT', 
      name: 'Automóviles', 
      category: 'Transporte',
      description: 'Seguros de vehículos terrestres motorizados',
      commercialBranches: ['Auto Particular', 'Auto Comercial', 'Flota Empresarial'],
      coverages: [
        { id: 10, name: 'Daño Propio', description: 'Daños al vehículo asegurado' },
        { id: 11, name: 'RC Vehicular', description: 'Responsabilidad civil vehicular' },
        { id: 12, name: 'Robo Total', description: 'Robo total del vehículo' },
        { id: 13, name: 'Accesorios', description: 'Accesorios del vehículo' }
      ],
      active: true,
      priority: 3
    },
    { 
      id: 4, 
      code: 'TEC', 
      name: 'Todo Riesgo Construcción', 
      category: 'Técnicos',
      description: 'Cobertura integral para proyectos de construcción',
      commercialBranches: ['Construcción Civil', 'Montaje Industrial', 'Obras Públicas'],
      coverages: [
        { id: 14, name: 'Daños Materiales', description: 'Daños a obras y materiales' },
        { id: 15, name: 'RC Construcción', description: 'Responsabilidad civil construcción' },
        { id: 16, name: 'Equipos de Construcción', description: 'Equipos y maquinaria' },
        { id: 17, name: 'Gastos Adicionales', description: 'Gastos adicionales por demora' }
      ],
      active: true,
      priority: 4
    },
    { 
      id: 5, 
      code: 'MAR', 
      name: 'Cascos Marítimos', 
      category: 'Transporte',
      description: 'Seguros de embarcaciones y estructuras marítimas',
      commercialBranches: ['Cascos Comerciales', 'Embarcaciones Menores', 'Plataformas'],
      coverages: [
        { id: 18, name: 'Pérdida Total', description: 'Pérdida total de la embarcación' },
        { id: 19, name: 'Avería Particular', description: 'Averías particulares' },
        { id: 20, name: 'Colisión', description: 'Daños por colisión' }
      ],
      active: false,
      priority: 5
    }
  ];

  // Flatten all coverages with their technical branch reference
  const allCoverages = technicalBranches.flatMap(branch => 
    branch.coverages.map(coverage => ({
      ...coverage,
      technicalBranchId: branch.id,
      technicalBranchCode: branch.code,
      technicalBranchName: branch.name,
      category: branch.category
    }))
  );

  const reinsurers = [
    { id: 1, name: 'Swiss Re', country: 'Suiza', rating: 'AA+', contact: 'contact@swissre.com' },
    { id: 2, name: 'Munich Re', country: 'Alemania', rating: 'AA', contact: 'info@munichre.com' },
    { id: 3, name: 'Mapfre Re', country: 'España', rating: 'A+', contact: 'reaseguros@mapfre.com' }
  ];

  const brokers = [
    { id: 1, name: 'Aon Re', contact: 'Juan Pérez', email: 'juan.perez@aon.com', phone: '+56 2 2345 6789' },
    { id: 2, name: 'Guy Carpenter', contact: 'María González', email: 'maria.gonzalez@guycarp.com', phone: '+56 2 3456 7890' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Patrimoniales':
        return 'bg-blue-100 text-blue-800';
      case 'Responsabilidades':
        return 'bg-purple-100 text-purple-800';
      case 'Transporte':
        return 'bg-emerald-100 text-emerald-800';
      case 'Técnicos':
        return 'bg-orange-100 text-orange-800';
      case 'Personas':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: number) => {
    if (priority <= 2) return 'text-red-600 font-semibold';
    if (priority <= 4) return 'text-yellow-600 font-medium';
    return 'text-green-600';
  };

  const renderTable = () => {
    switch (activeTab) {
      case 'technical-branches':
        return (
          <div className="space-y-6">
            {/* Technical Branches Form */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <Layers className="h-5 w-5 mr-2" />
                Nuevo Ramo Técnico
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: INC, RC, AUT"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Ramo
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre completo del ramo técnico"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Seleccionar categoría</option>
                    <option>Patrimoniales</option>
                    <option>Responsabilidades</option>
                    <option>Transporte</option>
                    <option>Técnicos</option>
                    <option>Personas</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descripción detallada del ramo técnico"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prioridad
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 - Crítico</option>
                    <option>2 - Alto</option>
                    <option>3 - Medio</option>
                    <option>4 - Bajo</option>
                    <option>5 - Mínimo</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Guardar Ramo
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors">
                  Cancelar
                </button>
              </div>
            </div>

            {/* Technical Branches Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Código
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ramo Técnico
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ramos Comerciales
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coberturas Asociadas
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prioridad
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {technicalBranches.map((branch) => (
                    <tr key={branch.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {branch.code}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Layers className="h-5 w-5 text-blue-500 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{branch.name}</div>
                            <div className="text-sm text-gray-500">{branch.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(branch.category)}`}>
                          {branch.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {branch.commercialBranches.slice(0, 2).map((cb, index) => (
                            <div key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {cb}
                            </div>
                          ))}
                          {branch.commercialBranches.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{branch.commercialBranches.length - 2} más
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-600 mb-1">
                            <Shield className="h-3 w-3 mr-1" />
                            <span className="font-medium">{branch.coverages.length} coberturas</span>
                          </div>
                          {branch.coverages.slice(0, 3).map((coverage, index) => (
                            <div key={index} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded flex items-center">
                              <Link className="h-3 w-3 mr-1" />
                              {coverage.name}
                            </div>
                          ))}
                          {branch.coverages.length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{branch.coverages.length - 3} más coberturas
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm ${getPriorityColor(branch.priority)}`}>
                          {branch.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          branch.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {branch.active ? 'Activo' : 'Inactivo'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'reinsurers':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reaseguradora
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Calificación
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reinsurers.map((reinsurer) => (
                  <tr key={reinsurer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium text-gray-900">{reinsurer.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reinsurer.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                        {reinsurer.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reinsurer.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'brokers':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Broker
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {brokers.map((broker) => (
                  <tr key={broker.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-purple-500 mr-3" />
                        <span className="text-sm font-medium text-gray-900">{broker.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {broker.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {broker.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {broker.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'coverages':
        return (
          <div className="space-y-6">
            {/* Coverage Form */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <h4 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Nueva Cobertura
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ramo Técnico
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option>Seleccionar ramo técnico</option>
                    {technicalBranches.filter(branch => branch.active).map(branch => (
                      <option key={branch.id} value={branch.id}>
                        {branch.code} - {branch.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la Cobertura
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Nombre de la cobertura"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Código único"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows={2}
                    placeholder="Descripción detallada de la cobertura"
                  />
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Guardar Cobertura
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors">
                  Cancelar
                </button>
              </div>
            </div>

            {/* Coverages Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cobertura
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ramo Técnico
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descripción
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allCoverages.map((coverage) => (
                    <tr key={coverage.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-emerald-500 mr-3" />
                          <span className="text-sm font-medium text-gray-900">{coverage.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Link className="h-4 w-4 text-blue-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {coverage.technicalBranchCode}
                            </div>
                            <div className="text-xs text-gray-500">
                              {coverage.technicalBranchName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(coverage.category)}`}>
                          {coverage.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {coverage.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mantenedores del Sistema</h2>
          <p className="text-gray-600">Administra datos maestros del sistema de reaseguros</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Agregar Nuevo</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('technical-branches')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'technical-branches'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Layers className="h-4 w-4" />
                <span>Ramos Técnicos</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('coverages')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'coverages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Coberturas</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('reinsurers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'reinsurers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Reaseguradoras</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('brokers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'brokers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Brokers</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {renderTable()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ramos Técnicos</p>
              <p className="text-2xl font-bold text-gray-900">{technicalBranches.length}</p>
              <p className="text-xs text-emerald-600">{technicalBranches.filter(b => b.active).length} activos</p>
            </div>
            <Layers className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Coberturas</p>
              <p className="text-2xl font-bold text-gray-900">{allCoverages.length}</p>
              <p className="text-xs text-blue-600">Vinculadas a ramos</p>
            </div>
            <Shield className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Reaseguradoras</p>
              <p className="text-2xl font-bold text-gray-900">34</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Brokers</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Relaciones</p>
              <p className="text-2xl font-bold text-gray-900">{allCoverages.length}</p>
              <p className="text-xs text-orange-600">Cobertura-Ramo</p>
            </div>
            <Target className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintainersModule;