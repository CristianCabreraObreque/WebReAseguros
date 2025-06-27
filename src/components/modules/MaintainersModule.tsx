import React, { useState } from 'react';
import { 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Building, 
  Users, 
  Shield, 
  Star,
  Search,
  Filter
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clasificadoras');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample data for Clasificadoras de Riesgo
  const [clasificadoras, setClasificadoras] = useState([
    {
      id: '1-1',
      nombre: "Moody's Investors Service",
      codigoCMF: 'MOODY001',
      setClasificacion: 'Modelo 1',
      clasificacionMinima: 'Baa3',
      habilitada: true
    },
    {
      id: '1-2',
      nombre: "Standard & Poor's",
      codigoCMF: 'SP001',
      setClasificacion: 'Modelo 1',
      clasificacionMinima: 'BBB',
      habilitada: true
    },
    {
      id: '1-3',
      nombre: 'FITCH Ratings',
      codigoCMF: 'FITCH001',
      setClasificacion: 'Modelo 2',
      clasificacionMinima: 'BBB',
      habilitada: true
    },
    {
      id: '1-4',
      nombre: 'A.M. Best',
      codigoCMF: 'AMBEST001',
      setClasificacion: 'Modelo 3',
      clasificacionMinima: 'B+',
      habilitada: false
    }
  ]);

  // Sample data for Tipos de Asociación de Línea
  const [tiposAsociacion, setTiposAsociacion] = useState([
    {
      id: 1,
      descripcion: 'Ramo Técnico',
      prioridad: 1,
      activa: true
    },
    {
      id: 2,
      descripcion: 'Tipo de Cobertura',
      prioridad: 2,
      activa: true
    },
    {
      id: 3,
      descripcion: 'Región Geográfica',
      prioridad: 3,
      activa: true
    },
    {
      id: 4,
      descripcion: 'Monto de Suma Asegurada',
      prioridad: 4,
      activa: false
    }
  ]);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleDelete = (id: string | number) => {
    if (confirm('¿Está seguro de que desea eliminar este elemento?')) {
      if (activeTab === 'clasificadoras') {
        setClasificadoras(clasificadoras.filter(c => c.id !== id));
      } else {
        setTiposAsociacion(tiposAsociacion.filter(t => t.id !== id));
      }
    }
  };

  const handleSave = () => {
    // Logic to save the item
    setShowModal(false);
    setEditingItem(null);
  };

  const ClasificadorasTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Clasificadoras de Riesgo</h3>
          <p className="text-sm text-gray-600">Gestiona las entidades clasificadoras de riesgo crediticio</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nueva Clasificadora</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar clasificadoras..."
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
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre Entidad
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Código CMF
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Set Clasificación
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clasificación Mínima
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {clasificadora.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-sm font-medium text-gray-900">{clasificadora.nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {clasificadora.codigoCMF}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {clasificadora.setClasificacion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      {clasificadora.clasificacionMinima}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      clasificadora.habilitada 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {clasificadora.habilitada ? 'Habilitada' : 'Deshabilitada'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleEdit(clasificadora)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(clasificadora.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Eliminar"
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
    </div>
  );

  const TiposAsociacionTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Tipos de Asociación de Línea</h3>
          <p className="text-sm text-gray-600">Define los criterios de asociación para líneas de contrato</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nuevo Tipo</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar tipos de asociación..."
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
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
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
              {tiposAsociacion.map((tipo) => (
                <tr key={tipo.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tipo.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-sm font-medium text-gray-900">{tipo.descripcion}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Prioridad {tipo.prioridad}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      tipo.activa 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tipo.activa ? 'Activa' : 'Inactiva'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleEdit(tipo)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(tipo.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Eliminar"
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
    </div>
  );

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {editingItem ? 'Editar' : 'Nuevo'} {activeTab === 'clasificadoras' ? 'Clasificadora' : 'Tipo de Asociación'}
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
          {activeTab === 'clasificadoras' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID Clasificadora
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1-1"
                    defaultValue={editingItem?.id || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código CMF *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="MOODY001"
                    defaultValue={editingItem?.codigoCMF || ''}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Entidad
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Moody's Investors Service"
                  defaultValue={editingItem?.nombre || ''}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Set de Clasificación
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Modelo 1</option>
                    <option>Modelo 2</option>
                    <option>Modelo 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Clasificación Mínima
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Baa3, BBB, B+"
                    defaultValue={editingItem?.clasificacionMinima || ''}
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked={editingItem?.habilitada ?? true}
                  />
                  <span className="ml-2 text-sm text-gray-700">Clasificadora habilitada</span>
                </label>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ramo Técnico"
                  defaultValue={editingItem?.descripcion || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prioridad
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1"
                  defaultValue={editingItem?.prioridad || ''}
                  min="1"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked={editingItem?.activa ?? true}
                  />
                  <span className="ml-2 text-sm text-gray-700">Tipo activo</span>
                </label>
              </div>
            </>
          )}
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
            <span>{editingItem ? 'Actualizar' : 'Guardar'}</span>
          </button>
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
          <p className="text-gray-600">Gestiona las entidades maestras del sistema de reaseguros</p>
        </div>
        <div className="flex items-center space-x-2">
          <Settings className="h-6 w-6 text-gray-400" />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('clasificadoras')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'clasificadoras'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Clasificadoras de Riesgo</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tipos-asociacion')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'tipos-asociacion'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Tipos de Asociación</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'clasificadoras' && <ClasificadorasTab />}
          {activeTab === 'tipos-asociacion' && <TiposAsociacionTab />}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Clasificadoras Activas</p>
              <p className="text-2xl font-bold text-emerald-600">
                {clasificadoras.filter(c => c.habilitada).length}
              </p>
            </div>
            <Shield className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Clasificadoras</p>
              <p className="text-2xl font-bold text-blue-600">{clasificadoras.length}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tipos Asociación Activos</p>
              <p className="text-2xl font-bold text-purple-600">
                {tiposAsociacion.filter(t => t.activa).length}
              </p>
            </div>
            <Building className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tipos</p>
              <p className="text-2xl font-bold text-orange-600">{tiposAsociacion.length}</p>
            </div>
            <Settings className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal />}
    </div>
  );
};

export default MaintainersModule;