import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Building, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  Globe,
  Save,
  X
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reaseguradoras');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample data for different maintainers
  const reaseguradoras = [
    {
      id: 1,
      name: 'Swiss Re',
      country: 'Suiza',
      rating: 'AA-',
      contact: 'contact@swissre.com',
      phone: '+41 43 285 2121',
      address: 'Mythenquai 50/60, 8022 Zurich',
      website: 'www.swissre.com',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Munich Re',
      country: 'Alemania',
      rating: 'AA-',
      contact: 'info@munichre.com',
      phone: '+49 89 3891 0',
      address: 'Königinstraße 107, 80802 Munich',
      website: 'www.munichre.com',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Mapfre Re',
      country: 'España',
      rating: 'A',
      contact: 'reaseguro@mapfre.com',
      phone: '+34 91 581 1100',
      address: 'Carretera de Pozuelo 52, 28222 Madrid',
      website: 'www.mapfrere.com',
      status: 'Activo'
    }
  ];

  const corredores = [
    {
      id: 1,
      name: 'Aon Benfield',
      country: 'Reino Unido',
      contact: 'info@aonbenfield.com',
      phone: '+44 20 7086 8000',
      address: 'The Aon Centre, London',
      website: 'www.aon.com',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Willis Re',
      country: 'Reino Unido',
      contact: 'info@willisre.com',
      phone: '+44 20 3124 6000',
      address: '51 Lime Street, London',
      website: 'www.willisre.com',
      status: 'Activo'
    }
  ];

  const clasificadoras = [
    {
      id: 1,
      name: 'Standard & Poor\'s',
      country: 'Estados Unidos',
      contact: 'ratings@spglobal.com',
      phone: '+1 212 438 2000',
      address: '55 Water Street, New York',
      website: 'www.standardandpoors.com',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Moody\'s',
      country: 'Estados Unidos',
      contact: 'info@moodys.com',
      phone: '+1 212 553 1653',
      address: '7 World Trade Center, New York',
      website: 'www.moodys.com',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Fitch Ratings',
      country: 'Estados Unidos',
      contact: 'info@fitchratings.com',
      phone: '+1 212 908 0500',
      address: '33 Whitehall Street, New York',
      website: 'www.fitchratings.com',
      status: 'Activo'
    }
  ];

  const tiposAsociacion = [
    {
      id: 1,
      name: 'Cuota Parte',
      description: 'Participación proporcional en riesgos y primas',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Exceso de Pérdida',
      description: 'Cobertura por encima de una retención específica',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Stop Loss',
      description: 'Protección contra pérdidas agregadas',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'Surplus',
      description: 'Cobertura de excedente de líneas',
      status: 'Activo'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'bg-emerald-100 text-emerald-800';
      case 'Inactivo':
        return 'bg-red-100 text-red-800';
      case 'Suspendido':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Está seguro de que desea eliminar este elemento?')) {
      console.log('Deleting item:', id);
    }
  };

  const handleSave = () => {
    console.log('Saving item:', editingItem);
    setShowModal(false);
    setEditingItem(null);
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {editingItem ? 'Editar' : 'Nuevo'} {activeTab.slice(0, -1)}
          </h3>
          <button
            onClick={() => {
              setShowModal(false);
              setEditingItem(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue={editingItem?.name || ''}
            />
          </div>
          
          {activeTab !== 'tipos-asociacion' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  País
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.country || ''}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email de Contacto
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.contact || ''}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.phone || ''}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  defaultValue={editingItem?.address || ''}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sitio Web
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.website || ''}
                />
              </div>
            </>
          )}
          
          {activeTab === 'reaseguradoras' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>AAA</option>
                <option>AA+</option>
                <option>AA</option>
                <option>AA-</option>
                <option>A+</option>
                <option>A</option>
                <option>A-</option>
                <option>BBB+</option>
                <option>BBB</option>
                <option>BBB-</option>
              </select>
            </div>
          )}
          
          {activeTab === 'tipos-asociacion' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                defaultValue={editingItem?.description || ''}
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estado
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Activo</option>
              <option>Inactivo</option>
              <option>Suspendido</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={() => {
              setShowModal(false);
              setEditingItem(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Guardar</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderTable = () => {
    switch (activeTab) {
      case 'reaseguradoras':
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
                    Rating
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
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
                {reaseguradoras.map((reaseguradora) => (
                  <tr key={reaseguradora.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{reaseguradora.name}</div>
                          <div className="text-sm text-gray-500">{reaseguradora.website}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{reaseguradora.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {reaseguradora.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-1" />
                          {reaseguradora.contact}
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 text-gray-400 mr-1" />
                          {reaseguradora.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(reaseguradora.status)}`}>
                        {reaseguradora.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(reaseguradora)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(reaseguradora.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
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
        );

      case 'corredores':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Corredor
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
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
                {corredores.map((corredor) => (
                  <tr key={corredor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-emerald-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{corredor.name}</div>
                          <div className="text-sm text-gray-500">{corredor.website}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{corredor.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-1" />
                          {corredor.contact}
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 text-gray-400 mr-1" />
                          {corredor.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(corredor.status)}`}>
                        {corredor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(corredor)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(corredor.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
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
        );

      case 'clasificadoras':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clasificadora
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
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
                {clasificadoras.map((clasificadora) => (
                  <tr key={clasificadora.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-purple-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{clasificadora.name}</div>
                          <div className="text-sm text-gray-500">{clasificadora.website}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{clasificadora.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-1" />
                          {clasificadora.contact}
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 text-gray-400 mr-1" />
                          {clasificadora.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(clasificadora.status)}`}>
                        {clasificadora.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(clasificadora)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(clasificadora.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
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
        );

      case 'tipos-asociacion':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo de Asociación
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descripción
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
                {tiposAsociacion.map((tipo) => (
                  <tr key={tipo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{tipo.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{tipo.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(tipo.status)}`}>
                        {tipo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(tipo)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(tipo.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
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
        );

      default:
        return <div>Seleccione una categoría</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mantenedores del Sistema</h2>
          <p className="text-gray-600">Gestiona reaseguradoras, corredores y clasificadoras de riesgo</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Agregar Nuevo</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('reaseguradoras')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'reaseguradoras'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reaseguradoras
            </button>
            <button
              onClick={() => setActiveTab('corredores')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'corredores'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Corredores
            </button>
            <button
              onClick={() => setActiveTab('clasificadoras')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'clasificadoras'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Clasificadoras de Riesgo
            </button>
            <button
              onClick={() => setActiveTab('tipos-asociacion')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'tipos-asociacion'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tipos de Asociación
            </button>
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Buscar ${activeTab}...`}
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

        {/* Table */}
        <div className="overflow-hidden">
          {renderTable()}
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal />}
    </div>
  );
};

export default MaintainersModule;