import React, { useState } from 'react';
import { 
  Settings, 
  Building, 
  Users, 
  Shield, 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Layers, 
  Target, 
  Link,
  Search,
  Filter,
  Eye,
  Save,
  X,
  ChevronDown,
  ChevronRight,
  Network,
  Tag,
  Briefcase
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Datos de ejemplo siguiendo la estructura jerárquica
  const companies = [
    {
      id: 1,
      name: 'Swiss Re',
      country: 'Suiza',
      rating: 'AA+',
      contact: 'contact@swissre.com',
      phone: '+41 43 285 2121',
      address: 'Mythenquai 50/60, 8022 Zurich',
      active: true,
      contracts: [
        {
          id: 'CON-2024-001',
          name: 'Contrato XL Motor 2024',
          type: 'Exceso de Pérdida',
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          status: 'Activo',
          lines: [
            {
              id: 1,
              name: 'Primera Capa',
              retention: 100000,
              limit: 500000,
              participation: 60,
              rate: 2.5,
              commission: 15
            },
            {
              id: 2,
              name: 'Segunda Capa',
              retention: 500000,
              limit: 1000000,
              participation: 40,
              rate: 3.2,
              commission: 18
            }
          ],
          classifiers: [
            { id: 1, name: 'Zona Geográfica', value: 'Región Metropolitana' },
            { id: 2, name: 'Tipo de Vehículo', value: 'Automóviles Particulares' },
            { id: 3, name: 'Antigüedad', value: 'Hasta 10 años' }
          ]
        }
      ],
      groupedBranches: [
        {
          id: 1,
          name: 'Automóviles Grupo A',
          description: 'Vehículos particulares y comerciales livianos',
          category: 'Transporte',
          active: true,
          coverages: [
            { 
              id: 1, 
              name: 'RC Vehicular', 
              description: 'Responsabilidad civil vehicular',
              code: 'RCV',
              active: true,
              associationTypes: [
                { id: 1, name: 'Obligatoria', description: 'Cobertura obligatoria por ley' },
                { id: 2, name: 'Voluntaria', description: 'Cobertura adicional opcional' }
              ]
            },
            { 
              id: 2, 
              name: 'Daño Propio', 
              description: 'Daños al vehículo asegurado',
              code: 'DP',
              active: true,
              associationTypes: [
                { id: 3, name: 'Básica', description: 'Cobertura básica de daños' },
                { id: 4, name: 'Amplia', description: 'Cobertura amplia con todo riesgo' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Munich Re',
      country: 'Alemania',
      rating: 'AA',
      contact: 'info@munichre.com',
      phone: '+49 89 3891 0',
      address: 'Königinstraße 107, 80802 München',
      active: true,
      contracts: [],
      groupedBranches: [
        {
          id: 2,
          name: 'Incendio Industrial',
          description: 'Riesgos industriales y comerciales',
          category: 'Patrimoniales',
          active: true,
          coverages: [
            { 
              id: 3, 
              name: 'Incendio', 
              description: 'Daños por fuego directo',
              code: 'INC',
              active: true,
              associationTypes: [
                { id: 5, name: 'Básica', description: 'Cobertura básica de incendio' },
                { id: 6, name: 'Extendida', description: 'Incluye riesgos aliados' }
              ]
            }
          ]
        }
      ]
    }
  ];

  const brokers = [
    { 
      id: 1, 
      name: 'Aon Re', 
      contact: 'Juan Pérez', 
      email: 'juan.perez@aon.com', 
      phone: '+56 2 2345 6789',
      specialty: 'Reaseguros Facultativos',
      country: 'Chile',
      active: true
    },
    { 
      id: 2, 
      name: 'Guy Carpenter', 
      contact: 'María González', 
      email: 'maria.gonzalez@guycarp.com', 
      phone: '+56 2 3456 7890',
      specialty: 'Tratados Automáticos',
      country: 'Chile',
      active: true
    }
  ];

  const handleOpenModal = (type: string, item?: any) => {
    setModalType(type);
    setSelectedItem(item || null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedItem(null);
  };

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const getTabConfig = () => {
    switch (activeTab) {
      case 'companies':
        return {
          title: 'Compañías Reaseguradoras',
          buttonText: 'Nueva Compañía',
          icon: Building,
          color: 'blue'
        };
      case 'brokers':
        return {
          title: 'Brokers de Reaseguros',
          buttonText: 'Nuevo Broker',
          icon: Users,
          color: 'purple'
        };
      case 'associations':
        return {
          title: 'Asociaciones y Relaciones',
          buttonText: 'Nueva Asociación',
          icon: Network,
          color: 'emerald'
        };
      default:
        return {
          title: 'Mantenedores',
          buttonText: 'Nuevo',
          icon: Settings,
          color: 'gray'
        };
    }
  };

  const tabConfig = getTabConfig();

  const CompanyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Compañía Reaseguradora' : 'Nueva Compañía Reaseguradora'}
          </h3>
          <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Compañía
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre de la reaseguradora"
                defaultValue={selectedItem?.name || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                País
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="País de origen"
                defaultValue={selectedItem?.country || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calificación
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>AAA</option>
                <option>AA+</option>
                <option>AA</option>
                <option>AA-</option>
                <option>A+</option>
                <option>A</option>
                <option>A-</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+XX XXX XXX XXXX"
                defaultValue={selectedItem?.phone || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email de Contacto
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="contacto@reaseguradora.com"
                defaultValue={selectedItem?.contact || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="true">Activa</option>
                <option value="false">Inactiva</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={2}
                placeholder="Dirección completa"
                defaultValue={selectedItem?.address || ''}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedItem ? 'Actualizar' : 'Guardar'}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const BrokerModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Broker' : 'Nuevo Broker'}
          </h3>
          <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del Broker
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Nombre de la empresa"
                defaultValue={selectedItem?.name || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Persona de Contacto
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Nombre del contacto"
                defaultValue={selectedItem?.contact || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="email@broker.com"
                defaultValue={selectedItem?.email || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="+XX XXX XXX XXXX"
                defaultValue={selectedItem?.phone || ''}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Especialidad
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Reaseguros Facultativos</option>
                <option>Tratados Automáticos</option>
                <option>Reaseguros de Vida</option>
                <option>Reaseguros Técnicos</option>
                <option>Catástrofes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                País
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="País"
                defaultValue={selectedItem?.country || ''}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedItem ? 'Actualizar' : 'Guardar'}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCompaniesTab = () => (
    <div className="space-y-6">
      {companies.map((company) => (
        <div key={company.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Company Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleExpanded(`company-${company.id}`)}
                  className="p-1 hover:bg-blue-100 rounded transition-colors"
                >
                  {expandedItems.has(`company-${company.id}`) ? (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                <Building className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{company.country}</span>
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {company.rating}
                    </span>
                    <span>{company.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  company.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {company.active ? 'Activa' : 'Inactiva'}
                </span>
                <button 
                  onClick={() => handleOpenModal('company', company)}
                  className="text-blue-600 hover:text-blue-900 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {expandedItems.has(`company-${company.id}`) && (
            <div className="p-6 space-y-6">
              {/* Contracts Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-semibold text-gray-900 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Contratos ({company.contracts.length})
                  </h4>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                    <Plus className="h-3 w-3" />
                    <span>Nuevo Contrato</span>
                  </button>
                </div>
                
                {company.contracts.map((contract) => (
                  <div key={contract.id} className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-medium text-gray-900">{contract.name}</h5>
                        <p className="text-sm text-gray-600">{contract.id} • {contract.type}</p>
                      </div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        contract.status === 'Activo' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {contract.status}
                      </span>
                    </div>

                    {/* Contract Lines */}
                    <div className="mb-4">
                      <h6 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Layers className="h-4 w-4 mr-1" />
                        Líneas de Contrato
                      </h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {contract.lines.map((line) => (
                          <div key={line.id} className="bg-white rounded border border-gray-200 p-3">
                            <div className="text-sm">
                              <div className="font-medium text-gray-900">{line.name}</div>
                              <div className="text-gray-600">
                                Retención: ${line.retention.toLocaleString()} | 
                                Límite: ${line.limit.toLocaleString()}
                              </div>
                              <div className="text-gray-600">
                                Participación: {line.participation}% | 
                                Tasa: {line.rate}% | 
                                Comisión: {line.commission}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Classifiers */}
                    <div>
                      <h6 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        Clasificadoras
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {contract.classifiers.map((classifier) => (
                          <div key={classifier.id} className="bg-blue-50 border border-blue-200 rounded px-2 py-1">
                            <span className="text-xs font-medium text-blue-800">{classifier.name}:</span>
                            <span className="text-xs text-blue-700 ml-1">{classifier.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grouped Branches Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-semibold text-gray-900 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-emerald-600" />
                    Ramos Agrupados ({company.groupedBranches.length})
                  </h4>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                    <Plus className="h-3 w-3" />
                    <span>Nuevo Ramo Agrupado</span>
                  </button>
                </div>

                {company.groupedBranches.map((branch) => (
                  <div key={branch.id} className="bg-emerald-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-medium text-gray-900">{branch.name}</h5>
                        <p className="text-sm text-gray-600">{branch.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                          {branch.category}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          branch.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {branch.active ? 'Activo' : 'Inactivo'}
                        </span>
                      </div>
                    </div>

                    {/* Coverages */}
                    <div>
                      <h6 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        Coberturas ({branch.coverages.length})
                      </h6>
                      <div className="space-y-2">
                        {branch.coverages.map((coverage) => (
                          <div key={coverage.id} className="bg-white rounded border border-gray-200 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <span className="font-medium text-gray-900">{coverage.name}</span>
                                <span className="text-sm text-gray-500 ml-2">({coverage.code})</span>
                              </div>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                coverage.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {coverage.active ? 'Activa' : 'Inactiva'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{coverage.description}</p>
                            
                            {/* Association Types */}
                            <div>
                              <h7 className="text-xs font-medium text-gray-600 mb-1 flex items-center">
                                <Network className="h-3 w-3 mr-1" />
                                Tipos de Asociación
                              </h7>
                              <div className="flex flex-wrap gap-1">
                                {coverage.associationTypes.map((type) => (
                                  <span key={type.id} className="inline-flex px-2 py-1 text-xs rounded bg-purple-100 text-purple-800">
                                    {type.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderBrokersTab = () => (
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
              Especialidad
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              País
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
          {brokers.map((broker) => (
            <tr key={broker.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{broker.name}</div>
                    <div className="text-sm text-gray-500">{broker.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm text-gray-900">{broker.contact}</div>
                  <div className="text-sm text-gray-500">{broker.phone}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                  {broker.specialty}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {broker.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  broker.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {broker.active ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleOpenModal('broker', broker)}
                    className="text-purple-600 hover:text-purple-900 transition-colors"
                  >
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

  const renderAssociationsTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
        <h4 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
          <Network className="h-5 w-5 mr-2" />
          Mapa de Relaciones del Sistema
        </h4>
        <div className="bg-white rounded-lg p-4 border border-emerald-200">
          <div className="text-sm font-mono text-gray-700 leading-relaxed">
            <div className="mb-2">
              <span className="font-semibold text-blue-600">[COMPAÑÍA_REASEGURADORA]</span>
              <span className="text-gray-500">──┬──&lt;</span>
              <span className="font-semibold text-green-600">[CONTRATO]</span>
              <span className="text-gray-500">──┬──&lt;</span>
              <span className="font-semibold text-purple-600">[LÍNEA_DE_CONTRATO]</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">│</span>
              <span className="ml-12 text-gray-500">└──&lt;</span>
              <span className="font-semibold text-orange-600">[CLASIFICADORA]</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">│</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">└──&lt;</span>
              <span className="font-semibold text-emerald-600">[RAMO_AGRUPADO]</span>
              <span className="text-gray-500">──&lt;</span>
              <span className="font-semibold text-indigo-600">[COBERTURA]</span>
            </div>
            <div className="ml-16">
              <span className="text-gray-500">│</span>
            </div>
            <div className="ml-16">
              <span className="text-gray-500">└──&lt;</span>
              <span className="font-semibold text-pink-600">[TIPO_ASOCIACIÓN]</span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Compañías Reaseguradoras</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Contratos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span>Líneas de Contrato</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>Clasificadoras</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-500 rounded"></div>
            <span>Ramos Agrupados</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-indigo-500 rounded"></div>
            <span>Coberturas</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Resumen de Relaciones</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{companies.length}</div>
            <div className="text-sm text-blue-700">Compañías Reaseguradoras</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {companies.reduce((sum, company) => sum + company.contracts.length, 0)}
            </div>
            <div className="text-sm text-green-700">Contratos Totales</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600">
              {companies.reduce((sum, company) => sum + company.groupedBranches.length, 0)}
            </div>
            <div className="text-sm text-emerald-700">Ramos Agrupados</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mantenedores del Sistema</h2>
          <p className="text-gray-600">Gestión jerárquica de datos maestros del sistema de reaseguros</p>
        </div>
        <button 
          onClick={() => handleOpenModal(activeTab)}
          className={`bg-${tabConfig.color}-600 hover:bg-${tabConfig.color}-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors`}
        >
          <Plus className="h-4 w-4" />
          <span>{tabConfig.buttonText}</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Buscar ${tabConfig.title.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'companies'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Compañías Reaseguradoras</span>
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
            <button
              onClick={() => setActiveTab('associations')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'associations'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Network className="h-4 w-4" />
                <span>Asociaciones y Relaciones</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'companies' && renderCompaniesTab()}
          {activeTab === 'brokers' && renderBrokersTab()}
          {activeTab === 'associations' && renderAssociationsTab()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compañías</p>
              <p className="text-2xl font-bold text-blue-600">{companies.length}</p>
              <p className="text-xs text-emerald-600">{companies.filter(c => c.active).length} activas</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Contratos</p>
              <p className="text-2xl font-bold text-green-600">
                {companies.reduce((sum, company) => sum + company.contracts.length, 0)}
              </p>
            </div>
            <FileText className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ramos Agrupados</p>
              <p className="text-2xl font-bold text-emerald-600">
                {companies.reduce((sum, company) => sum + company.groupedBranches.length, 0)}
              </p>
            </div>
            <Briefcase className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Coberturas</p>
              <p className="text-2xl font-bold text-indigo-600">
                {companies.reduce((sum, company) => 
                  sum + company.groupedBranches.reduce((branchSum, branch) => 
                    branchSum + branch.coverages.length, 0), 0)}
              </p>
            </div>
            <Shield className="h-8 w-8 text-indigo-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Brokers</p>
              <p className="text-2xl font-bold text-purple-600">{brokers.length}</p>
              <p className="text-xs text-emerald-600">{brokers.filter(b => b.active).length} activos</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && modalType === 'company' && <CompanyModal />}
      {showModal && modalType === 'companies' && <CompanyModal />}
      {showModal && modalType === 'broker' && <BrokerModal />}
      {showModal && modalType === 'brokers' && <BrokerModal />}
    </div>
  );
};

export default MaintainersModule;