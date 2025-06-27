import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Calendar,
  DollarSign,
  Building,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Layers,
  Target,
  Save,
  X,
  AlertCircle,
  CheckCircle,
  Users,
  Percent,
  Calculator
} from 'lucide-react';

const ContractsModule: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [showNewContractModal, setShowNewContractModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const [showContractDetails, setShowContractDetails] = useState(false);

  const contracts = [
    {
      id: 'CON-2024-001',
      name: 'Contrato XL Motor 2024',
      type: 'Exceso de Pérdida',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'Activo',
      layers: [
        {
          id: 1,
          name: 'Primera Capa',
          retention: 100000,
          limit: 500000,
          capacity: 400000,
          reinsurers: [
            {
              id: 1,
              name: 'Mapfre Re',
              participation: 60,
              capacity: 240000,
              rate: 2.5,
              commission: 15,
              estimatedPremium: 6000
            },
            {
              id: 2,
              name: 'Swiss Re',
              participation: 40,
              capacity: 160000,
              rate: 2.8,
              commission: 12,
              estimatedPremium: 4480
            }
          ]
        },
        {
          id: 2,
          name: 'Segunda Capa',
          retention: 500000,
          limit: 1000000,
          capacity: 500000,
          reinsurers: [
            {
              id: 3,
              name: 'Munich Re',
              participation: 50,
              capacity: 250000,
              rate: 3.2,
              commission: 18,
              estimatedPremium: 8000
            },
            {
              id: 4,
              name: 'Hannover Re',
              participation: 30,
              capacity: 150000,
              rate: 3.5,
              commission: 16,
              estimatedPremium: 5250
            },
            {
              id: 5,
              name: 'SCOR',
              participation: 20,
              capacity: 100000,
              rate: 3.8,
              commission: 14,
              estimatedPremium: 3800
            }
          ]
        },
        {
          id: 3,
          name: 'Tercera Capa',
          retention: 1000000,
          limit: 2000000,
          capacity: 1000000,
          reinsurers: [
            {
              id: 6,
              name: 'Lloyd\'s Syndicate 123',
              participation: 45,
              capacity: 450000,
              rate: 4.8,
              commission: 20,
              estimatedPremium: 21600
            },
            {
              id: 7,
              name: 'Berkshire Hathaway Re',
              participation: 35,
              capacity: 350000,
              rate: 5.0,
              commission: 18,
              estimatedPremium: 17500
            },
            {
              id: 8,
              name: 'Gen Re',
              participation: 20,
              capacity: 200000,
              rate: 5.2,
              commission: 16,
              estimatedPremium: 10400
            }
          ]
        }
      ],
      totalCapacity: 1900000,
      totalPremium: 77030,
      technicalBranch: 'Automóviles',
      coverage: 'RC Vehicular',
      totalReinsurers: 8,
      averageRate: 3.8
    },
    {
      id: 'CON-2024-002',
      name: 'Tratado Incendio Industrial',
      type: 'Cuota Parte + Excedente',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      status: 'Activo',
      layers: [
        {
          id: 1,
          name: 'Cuota Parte 40%',
          retention: 0,
          limit: 2000000,
          capacity: 2000000,
          reinsurers: [
            {
              id: 1,
              name: 'Swiss Re',
              participation: 100,
              capacity: 2000000,
              rate: 3.6,
              commission: 25,
              estimatedPremium: 72000
            }
          ]
        },
        {
          id: 2,
          name: 'Excedente Primera Línea',
          retention: 2000000,
          limit: 5000000,
          capacity: 3000000,
          reinsurers: [
            {
              id: 2,
              name: 'Munich Re',
              participation: 40,
              capacity: 1200000,
              rate: 4.2,
              commission: 22,
              estimatedPremium: 50400
            },
            {
              id: 3,
              name: 'Mapfre Re',
              participation: 35,
              capacity: 1050000,
              rate: 4.0,
              commission: 20,
              estimatedPremium: 42000
            },
            {
              id: 4,
              name: 'Hannover Re',
              participation: 25,
              capacity: 750000,
              rate: 4.5,
              commission: 18,
              estimatedPremium: 33750
            }
          ]
        },
        {
          id: 3,
          name: 'Excedente Segunda Línea',
          retention: 5000000,
          limit: 10000000,
          capacity: 5000000,
          reinsurers: [
            {
              id: 5,
              name: 'Lloyd\'s Market',
              participation: 60,
              capacity: 3000000,
              rate: 5.8,
              commission: 25,
              estimatedPremium: 174000
            },
            {
              id: 6,
              name: 'SCOR',
              participation: 25,
              capacity: 1250000,
              rate: 6.0,
              commission: 22,
              estimatedPremium: 75000
            },
            {
              id: 7,
              name: 'Arch Re',
              participation: 15,
              capacity: 750000,
              rate: 6.2,
              commission: 20,
              estimatedPremium: 46500
            }
          ]
        }
      ],
      totalCapacity: 10000000,
      totalPremium: 493650,
      technicalBranch: 'Incendio',
      coverage: 'Incendio y Líneas Aliadas',
      totalReinsurers: 7,
      averageRate: 4.9
    },
    {
      id: 'CON-2023-045',
      name: 'XL Responsabilidad Civil',
      type: 'Exceso de Pérdida',
      startDate: '2023-07-01',
      endDate: '2024-06-30',
      status: 'Por Renovar',
      layers: [
        {
          id: 1,
          name: 'Primera Capa',
          retention: 250000,
          limit: 1000000,
          capacity: 750000,
          reinsurers: [
            {
              id: 1,
              name: 'Munich Re',
              participation: 70,
              capacity: 525000,
              rate: 5.2,
              commission: 20,
              estimatedPremium: 27300
            },
            {
              id: 2,
              name: 'Swiss Re',
              participation: 30,
              capacity: 225000,
              rate: 5.0,
              commission: 18,
              estimatedPremium: 11250
            }
          ]
        },
        {
          id: 2,
          name: 'Segunda Capa',
          retention: 1000000,
          limit: 3000000,
          capacity: 2000000,
          reinsurers: [
            {
              id: 3,
              name: 'Lloyd\'s Syndicate 456',
              participation: 50,
              capacity: 1000000,
              rate: 6.8,
              commission: 25,
              estimatedPremium: 68000
            },
            {
              id: 4,
              name: 'Hannover Re',
              participation: 30,
              capacity: 600000,
              rate: 7.0,
              commission: 22,
              estimatedPremium: 42000
            },
            {
              id: 5,
              name: 'SCOR',
              participation: 20,
              capacity: 400000,
              rate: 7.2,
              commission: 20,
              estimatedPremium: 28800
            }
          ]
        },
        {
          id: 3,
          name: 'Tercera Capa',
          retention: 3000000,
          limit: 10000000,
          capacity: 7000000,
          reinsurers: [
            {
              id: 6,
              name: 'Berkshire Hathaway Re',
              participation: 40,
              capacity: 2800000,
              rate: 8.5,
              commission: 18,
              estimatedPremium: 238000
            },
            {
              id: 7,
              name: 'Lloyd\'s Market Pool',
              participation: 35,
              capacity: 2450000,
              rate: 8.8,
              commission: 22,
              estimatedPremium: 215600
            },
            {
              id: 8,
              name: 'Gen Re',
              participation: 25,
              capacity: 1750000,
              rate: 9.0,
              commission: 20,
              estimatedPremium: 157500
            }
          ]
        },
        {
          id: 4,
          name: 'Cuarta Capa',
          retention: 10000000,
          limit: 25000000,
          capacity: 15000000,
          reinsurers: [
            {
              id: 9,
              name: 'Lloyd\'s Excess Market',
              participation: 60,
              capacity: 9000000,
              rate: 12.0,
              commission: 30,
              estimatedPremium: 1080000
            },
            {
              id: 10,
              name: 'Specialty Syndicate Pool',
              participation: 25,
              capacity: 3750000,
              rate: 12.5,
              commission: 28,
              estimatedPremium: 468750
            },
            {
              id: 11,
              name: 'Excess & Surplus Lines',
              participation: 15,
              capacity: 2250000,
              rate: 13.0,
              commission: 25,
              estimatedPremium: 292500
            }
          ]
        }
      ],
      totalCapacity: 24750000,
      totalPremium: 2629700,
      technicalBranch: 'Responsabilidad Civil',
      coverage: 'RC General',
      totalReinsurers: 11,
      averageRate: 10.6
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'bg-emerald-100 text-emerald-800';
      case 'Por Renovar':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vencido':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const handleViewContract = (contract: any) => {
    setSelectedContract(contract);
    setShowContractDetails(true);
  };

  const handleEditContract = (contract: any) => {
    setSelectedContract(contract);
    setShowNewContractModal(true);
  };

  const handleDeleteContract = (contractId: string) => {
    if (confirm('¿Está seguro de que desea eliminar este contrato?')) {
      console.log('Deleting contract:', contractId);
    }
  };

  const NewContractModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedContract ? 'Editar Contrato' : 'Nuevo Contrato de Reaseguro'}
          </h3>
          <button
            onClick={() => {
              setShowNewContractModal(false);
              setSelectedContract(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Contract Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4">Información Básica del Contrato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Contrato
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre descriptivo del contrato"
                  defaultValue={selectedContract?.name || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Contrato
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Exceso de Pérdida</option>
                  <option>Cuota Parte</option>
                  <option>Stop Loss</option>
                  <option>Surplus</option>
                  <option>Cuota Parte + Excedente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ramo Técnico
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Incendio y Líneas Aliadas</option>
                  <option>Responsabilidad Civil</option>
                  <option>Automóviles</option>
                  <option>Todo Riesgo Construcción</option>
                  <option>Cascos Marítimos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cobertura Principal
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Incendio</option>
                  <option>RC General</option>
                  <option>RC Vehicular</option>
                  <option>Daño Propio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Inicio
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedContract?.startDate || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Vencimiento
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedContract?.endDate || ''}
                />
              </div>
            </div>
          </div>

          {/* Contract Layers with Multiple Reinsurers */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-emerald-900 flex items-center">
                <Layers className="h-5 w-5 mr-2" />
                Capas del Contrato
              </h4>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Capa</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {[1, 2].map((layerIndex) => (
                <div key={layerIndex} className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-medium text-gray-900 flex items-center">
                      <Layers className="h-4 w-4 mr-2 text-emerald-600" />
                      Capa {layerIndex}
                    </h5>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Layer Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Retención (USD)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-emerald-500"
                        placeholder="100,000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Límite (USD)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-emerald-500"
                        placeholder="500,000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Capacidad Total (USD)
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-emerald-500 bg-gray-50"
                        placeholder="400,000"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Nombre de la Capa
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-emerald-500"
                        placeholder="Primera Capa"
                      />
                    </div>
                  </div>

                  {/* Multiple Reinsurers per Layer */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-sm font-medium text-gray-800 flex items-center">
                        <Building className="h-4 w-4 mr-1 text-blue-600" />
                        Reaseguradoras de la Capa {layerIndex}
                      </h6>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                        <Plus className="h-3 w-3" />
                        <span>Agregar Reaseguradora</span>
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2, 3].map((reinsurerIndex) => (
                        <div key={reinsurerIndex} className="bg-white rounded border border-gray-200 p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-600">
                              Reaseguradora {reinsurerIndex}
                            </span>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Reaseguradora</label>
                              <select className="w-full border border-gray-300 rounded px-2 py-1 text-xs">
                                <option>Swiss Re</option>
                                <option>Munich Re</option>
                                <option>Mapfre Re</option>
                                <option>Lloyd's</option>
                                <option>Hannover Re</option>
                                <option>SCOR</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Participación (%)</label>
                              <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                                placeholder="50"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Capacidad (USD)</label>
                              <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs bg-gray-50"
                                placeholder="200,000"
                                readOnly
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Tasa (%)</label>
                              <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                                placeholder="2.5"
                                step="0.1"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Comisión (%)</label>
                              <input
                                type="number"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                                placeholder="15"
                                step="0.1"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600 mb-1">Prima Est. (USD)</label>
                              <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-xs bg-gray-50"
                                placeholder="5,000"
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Layer Summary */}
                    <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div>
                          <span className="text-gray-600">Total Participación:</span>
                          <div className="font-semibold text-blue-800">100%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Capacidad Capa:</span>
                          <div className="font-semibold text-blue-800">$400,000</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Tasa Promedio:</span>
                          <div className="font-semibold text-blue-800">2.7%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Prima Estimada:</span>
                          <div className="font-semibold text-blue-800">$10,800</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Resumen del Contrato
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600">Capacidad Total</p>
                <p className="text-lg font-bold text-blue-600">$1,900,000</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600">Prima Total Estimada</p>
                <p className="text-lg font-bold text-emerald-600">$77,030</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600">Tasa Promedio</p>
                <p className="text-lg font-bold text-orange-600">3.8%</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600">Número de Capas</p>
                <p className="text-lg font-bold text-purple-600">3</p>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600">Total Reaseguradoras</p>
                <p className="text-lg font-bold text-indigo-600">8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={() => {
              setShowNewContractModal(false);
              setSelectedContract(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedContract ? 'Actualizar' : 'Guardar'} Contrato</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ContractDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{selectedContract?.name}</h3>
            <p className="text-sm text-gray-500">{selectedContract?.id}</p>
          </div>
          <button
            onClick={() => {
              setShowContractDetails(false);
              setSelectedContract(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Contract Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Capacidad Total</p>
                  <p className="text-2xl font-bold text-blue-900">{formatCurrency(selectedContract?.totalCapacity)}</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-700">Prima Total</p>
                  <p className="text-2xl font-bold text-emerald-900">{formatCurrency(selectedContract?.totalPremium)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Número de Capas</p>
                  <p className="text-2xl font-bold text-purple-900">{selectedContract?.layers?.length}</p>
                </div>
                <Layers className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-700">Reaseguradoras</p>
                  <p className="text-2xl font-bold text-orange-900">{selectedContract?.totalReinsurers}</p>
                </div>
                <Building className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-700">Tasa Promedio</p>
                  <p className="text-2xl font-bold text-indigo-900">{formatPercentage(selectedContract?.averageRate)}</p>
                </div>
                <Percent className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Detailed Layer Structure with Multiple Reinsurers */}
          <div className="space-y-6">
            {selectedContract?.layers?.map((layer: any, layerIndex: number) => (
              <div key={layer.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Layers className="h-5 w-5 mr-2 text-blue-600" />
                      {layer.name}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-center">
                        <p className="text-gray-600">Retención</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(layer.retention)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Límite</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(layer.limit)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Capacidad</p>
                        <p className="font-semibold text-blue-600">{formatCurrency(layer.capacity)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Reaseguradora</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Participación</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Capacidad</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Tasa</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Comisión</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Prima Estimada</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {layer.reinsurers?.map((reinsurer: any, reinsurerIndex: number) => (
                        <tr key={reinsurer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="text-sm font-medium text-gray-900">{reinsurer.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${reinsurer.participation}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{formatPercentage(reinsurer.participation)}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-blue-600">{formatCurrency(reinsurer.capacity)}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-900">{formatPercentage(reinsurer.rate)}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-900">{formatPercentage(reinsurer.commission)}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-emerald-600">{formatCurrency(reinsurer.estimatedPremium)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Layer Summary */}
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-6">
                      <div>
                        <span className="text-gray-600">Reaseguradoras en esta capa: </span>
                        <span className="font-semibold text-gray-900">{layer.reinsurers?.length}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Total Participación: </span>
                        <span className="font-semibold text-gray-900">
                          {formatPercentage(layer.reinsurers?.reduce((sum: number, r: any) => sum + r.participation, 0))}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600">Prima de la Capa: </span>
                      <span className="font-semibold text-emerald-600">
                        {formatCurrency(layer.reinsurers?.reduce((sum: number, r: any) => sum + r.estimatedPremium, 0))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Contratos</h2>
          <p className="text-gray-600">Administra contratos de reaseguro multicapa y multirreasegurador</p>
        </div>
        <button 
          onClick={() => setShowNewContractModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nuevo Contrato</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar contratos por nombre, ID o reaseguradora..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </button>
        </div>

        {filterOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos los tipos</option>
                <option>Exceso de Pérdida</option>
                <option>Cuota Parte</option>
                <option>Stop Loss</option>
                <option>Cuota Parte + Excedente</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Todos los estados</option>
                <option>Activo</option>
                <option>Por Renovar</option>
                <option>Vencido</option>
              </select>
              <input
                type="date"
                placeholder="Fecha inicio"
                className="border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="date"
                placeholder="Fecha fin"
                className="border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* Contracts Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contrato
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacidad Total
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prima Total
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vigencia
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capas/Reaseguradoras
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{contract.name}</div>
                        <div className="text-sm text-gray-500">{contract.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contract.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm font-medium text-blue-600">{formatCurrency(contract.totalCapacity)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-gray-900">{formatCurrency(contract.totalPremium)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{contract.startDate} - {contract.endDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contract.status)}`}>
                      {contract.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Layers className="h-3 w-3 mr-1" />
                        {contract.layers.length} capas
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <Building className="h-3 w-3 mr-1" />
                        {contract.totalReinsurers} reaseg.
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewContract(contract)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="Ver detalles"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleEditContract(contract)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Editar contrato"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteContract(contract.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Eliminar contrato"
                      >
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contratos</p>
              <p className="text-2xl font-bold text-gray-900">{contracts.length}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Capacidad Total</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(contracts.reduce((sum, contract) => sum + contract.totalCapacity, 0))}
              </p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Prima Total</p>
              <p className="text-2xl font-bold text-emerald-600">
                {formatCurrency(contracts.reduce((sum, contract) => sum + contract.totalPremium, 0))}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reaseguradoras</p>
              <p className="text-2xl font-bold text-purple-600">
                {contracts.reduce((sum, contract) => sum + contract.totalReinsurers, 0)}
              </p>
            </div>
            <Building className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Por Renovar</p>
              <p className="text-2xl font-bold text-orange-600">
                {contracts.filter(c => c.status === 'Por Renovar').length}
              </p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showNewContractModal && <NewContractModal />}
      {showContractDetails && <ContractDetailsModal />}
    </div>
  );
};

export default ContractsModule;