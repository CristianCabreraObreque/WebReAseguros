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
  Save,
  X,
  Search,
  Calendar,
  CheckCircle,
  AlertCircle,
  Eye
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical-branches');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');

  // Estados para formularios
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    category: '',
    description: '',
    priority: 1,
    active: true,
    country: '',
    rating: '',
    contact: '',
    email: '',
    phone: '',
    technicalBranchId: '',
    contractId: '',
    year: '2024'
  });

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
    { 
      id: 1, 
      name: 'Swiss Re', 
      country: 'Suiza', 
      rating: 'AA+', 
      contact: 'contact@swissre.com',
      phone: '+41 43 285 2121',
      address: 'Mythenquai 50/60, 8022 Zurich',
      active: true
    },
    { 
      id: 2, 
      name: 'Munich Re', 
      country: 'Alemania', 
      rating: 'AA', 
      contact: 'info@munichre.com',
      phone: '+49 89 3891 0',
      address: 'Königinstraße 107, 80802 Munich',
      active: true
    },
    { 
      id: 3, 
      name: 'Mapfre Re', 
      country: 'España', 
      rating: 'A+', 
      contact: 'reaseguros@mapfre.com',
      phone: '+34 91 581 1100',
      address: 'Carretera de Pozuelo 52, 28222 Majadahonda',
      active: true
    },
    { 
      id: 4, 
      name: 'Hannover Re', 
      country: 'Alemania', 
      rating: 'AA-', 
      contact: 'info@hannover-re.com',
      phone: '+49 511 5604 0',
      address: 'Karl-Wiechert-Allee 50, 30625 Hannover',
      active: true
    },
    { 
      id: 5, 
      name: 'SCOR', 
      country: 'Francia', 
      rating: 'A+', 
      contact: 'contact@scor.com',
      phone: '+33 1 58 44 70 00',
      address: '5 Avenue Kléber, 75116 Paris',
      active: false
    }
  ];

  const brokers = [
    { 
      id: 1, 
      name: 'Aon Re', 
      contact: 'Juan Pérez', 
      email: 'juan.perez@aon.com', 
      phone: '+56 2 2345 6789',
      address: 'Av. Providencia 1208, Santiago',
      specialties: ['Incendio', 'RC', 'Construcción'],
      active: true
    },
    { 
      id: 2, 
      name: 'Guy Carpenter', 
      contact: 'María González', 
      email: 'maria.gonzalez@guycarp.com', 
      phone: '+56 2 3456 7890',
      address: 'Av. El Bosque Norte 0177, Santiago',
      specialties: ['Automóviles', 'Marítimo'],
      active: true
    },
    { 
      id: 3, 
      name: 'Willis Re', 
      contact: 'Carlos Rodríguez', 
      email: 'carlos.rodriguez@willisre.com', 
      phone: '+56 2 4567 8901',
      address: 'Av. Vitacura 2939, Santiago',
      specialties: ['Técnicos', 'Responsabilidades'],
      active: true
    }
  ];

  // Contratos disponibles para asociación
  const availableContracts = [
    { id: 'CON-2024-001', name: 'Contrato XL Motor 2024', type: 'Exceso de Pérdida' },
    { id: 'CON-2024-002', name: 'Tratado Incendio Industrial', type: 'Cuota Parte + Excedente' },
    { id: 'CON-2023-045', name: 'XL Responsabilidad Civil', type: 'Exceso de Pérdida' }
  ];

  // Asociaciones de contratos con ramos técnicos y coberturas por año
  const [contractAssociations, setContractAssociations] = useState([
    {
      id: 1,
      contractId: 'CON-2024-001',
      contractName: 'Contrato XL Motor 2024',
      year: '2024',
      technicalBranches: [
        {
          branchId: 3,
          branchCode: 'AUT',
          branchName: 'Automóviles',
          coverages: [10, 11, 12] // IDs de coberturas
        }
      ],
      active: true,
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      contractId: 'CON-2024-002',
      contractName: 'Tratado Incendio Industrial',
      year: '2024',
      technicalBranches: [
        {
          branchId: 1,
          branchCode: 'INC',
          branchName: 'Incendio y Líneas Aliadas',
          coverages: [1, 2, 3, 4, 5] // IDs de coberturas
        },
        {
          branchId: 4,
          branchCode: 'TEC',
          branchName: 'Todo Riesgo Construcción',
          coverages: [14, 15] // IDs de coberturas
        }
      ],
      active: true,
      createdDate: '2024-01-15'
    },
    {
      id: 3,
      contractId: 'CON-2023-045',
      contractName: 'XL Responsabilidad Civil',
      year: '2023',
      technicalBranches: [
        {
          branchId: 2,
          branchCode: 'RC',
          branchName: 'Responsabilidad Civil General',
          coverages: [6, 7, 8, 9] // IDs de coberturas
        }
      ],
      active: false,
      createdDate: '2023-07-01'
    }
  ]);

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

  const getRatingColor = (rating: string) => {
    if (rating.startsWith('AA')) return 'bg-emerald-100 text-emerald-800';
    if (rating.startsWith('A')) return 'bg-blue-100 text-blue-800';
    if (rating.startsWith('BBB')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const handleOpenModal = (type: string, item?: any) => {
    setModalType(type);
    setEditingItem(item);
    if (item) {
      setFormData({ ...formData, ...item });
    } else {
      setFormData({
        code: '',
        name: '',
        category: '',
        description: '',
        priority: 1,
        active: true,
        country: '',
        rating: '',
        contact: '',
        email: '',
        phone: '',
        technicalBranchId: '',
        contractId: '',
        year: selectedYear
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setModalType('');
  };

  const handleSave = () => {
    console.log('Saving:', modalType, formData);
    // Aquí implementarías la lógica de guardado
    handleCloseModal();
  };

  const handleDelete = (id: number, type: string) => {
    if (confirm(`¿Está seguro de que desea eliminar este ${type}?`)) {
      console.log('Deleting:', type, id);
      // Aquí implementarías la lógica de eliminación
    }
  };

  const filteredData = (data: any[]) => {
    return data.filter(item => 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {editingItem ? 'Editar' : 'Nuevo'} {getModalTitle()}
          </h3>
          <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          {renderModalContent()}
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleCloseModal}
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

  const getModalTitle = () => {
    switch (modalType) {
      case 'technical-branch': return 'Ramo Técnico';
      case 'coverage': return 'Cobertura';
      case 'reinsurer': return 'Reaseguradora';
      case 'broker': return 'Broker';
      case 'contract-association': return 'Asociación de Contrato';
      default: return '';
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'technical-branch':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Código</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: INC, RC, AUT"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Patrimoniales">Patrimoniales</option>
                  <option value="Responsabilidades">Responsabilidades</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Técnicos">Técnicos</option>
                  <option value="Personas">Personas</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Ramo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre completo del ramo técnico"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Descripción detallada del ramo técnico"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prioridad</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>1 - Crítico</option>
                  <option value={2}>2 - Alto</option>
                  <option value={3}>3 - Medio</option>
                  <option value={4}>4 - Bajo</option>
                  <option value={5}>5 - Mínimo</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({...formData, active: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="active" className="ml-2 block text-sm text-gray-900">
                  Activo
                </label>
              </div>
            </div>
          </div>
        );

      case 'coverage':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ramo Técnico</label>
              <select
                value={formData.technicalBranchId}
                onChange={(e) => setFormData({...formData, technicalBranchId: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seleccionar ramo técnico</option>
                {technicalBranches.filter(branch => branch.active).map(branch => (
                  <option key={branch.id} value={branch.id}>
                    {branch.code} - {branch.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Cobertura</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre de la cobertura"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Código</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({...formData, code: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Código único"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Descripción detallada de la cobertura"
              />
            </div>
          </div>
        );

      case 'reinsurer':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre de la reaseguradora"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="País de origen"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Calificación</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar calificación</option>
                  <option value="AAA">AAA</option>
                  <option value="AA+">AA+</option>
                  <option value="AA">AA</option>
                  <option value="AA-">AA-</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="BBB+">BBB+</option>
                  <option value="BBB">BBB</option>
                  <option value="BBB-">BBB-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Teléfono de contacto"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email de Contacto</label>
              <input
                type="email"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@reaseguradora.com"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="reinsurer-active"
                checked={formData.active}
                onChange={(e) => setFormData({...formData, active: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="reinsurer-active" className="ml-2 block text-sm text-gray-900">
                Activo
              </label>
            </div>
          </div>
        );

      case 'broker':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Broker</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre del broker"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Persona de Contacto</label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre del contacto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@broker.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Teléfono de contacto"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="broker-active"
                checked={formData.active}
                onChange={(e) => setFormData({...formData, active: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="broker-active" className="ml-2 block text-sm text-gray-900">
                Activo
              </label>
            </div>
          </div>
        );

      case 'contract-association':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contrato</label>
                <select
                  value={formData.contractId}
                  onChange={(e) => setFormData({...formData, contractId: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleccionar contrato</option>
                  {availableContracts.map(contract => (
                    <option key={contract.id} value={contract.id}>
                      {contract.id} - {contract.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Año</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ramos Técnicos</label>
              <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
                {technicalBranches.filter(branch => branch.active).map(branch => (
                  <label key={branch.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-900">
                      {branch.code} - {branch.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="association-active"
                checked={formData.active}
                onChange={(e) => setFormData({...formData, active: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="association-active" className="ml-2 block text-sm text-gray-900">
                Activo
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderTable = () => {
    switch (activeTab) {
      case 'technical-branches':
        return (
          <div className="space-y-6">
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
                      Coberturas
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
                  {filteredData(technicalBranches).map((branch) => (
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
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <Shield className="h-3 w-3 mr-1" />
                          <span className="font-medium">{branch.coverages.length} coberturas</span>
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
                          <button 
                            onClick={() => handleOpenModal('technical-branch', branch)}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(branch.id, 'ramo técnico')}
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
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData(reinsurers).map((reinsurer) => (
                  <tr key={reinsurer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{reinsurer.name}</div>
                          <div className="text-sm text-gray-500">{reinsurer.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reinsurer.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRatingColor(reinsurer.rating)}`}>
                        {reinsurer.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reinsurer.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        reinsurer.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {reinsurer.active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleOpenModal('reinsurer', reinsurer)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(reinsurer.id, 'reaseguradora')}
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
                    Especialidades
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
                {filteredData(brokers).map((broker) => (
                  <tr key={broker.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-purple-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{broker.name}</div>
                          <div className="text-sm text-gray-500">{broker.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {broker.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {broker.email}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {broker.specialties?.slice(0, 2).map((specialty, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                            {specialty}
                          </span>
                        ))}
                        {broker.specialties && broker.specialties.length > 2 && (
                          <span className="text-xs text-gray-500">+{broker.specialties.length - 2}</span>
                        )}
                      </div>
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
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(broker.id, 'broker')}
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

      case 'coverages':
        return (
          <div className="space-y-6">
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
                  {filteredData(allCoverages).map((coverage) => (
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
                          <button 
                            onClick={() => handleOpenModal('coverage', coverage)}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(coverage.id, 'cobertura')}
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
          </div>
        );

      case 'contract-associations':
        return (
          <div className="space-y-6">
            {/* Year Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <label className="text-sm font-medium text-gray-700">Año:</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contrato
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Año
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ramos Técnicos
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coberturas Totales
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha Creación
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contractAssociations
                    .filter(assoc => selectedYear === 'all' || assoc.year === selectedYear)
                    .map((association) => (
                    <tr key={association.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-blue-500 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{association.contractName}</div>
                            <div className="text-sm text-gray-500">{association.contractId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {association.year}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {association.technicalBranches.map((branch, index) => (
                            <div key={index} className="flex items-center text-xs">
                              <Layers className="h-3 w-3 mr-1 text-emerald-500" />
                              <span className="font-medium text-gray-900">{branch.branchCode}</span>
                              <span className="text-gray-500 ml-1">- {branch.branchName}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-emerald-500 mr-1" />
                          <span className="text-sm font-medium text-gray-900">
                            {association.technicalBranches.reduce((total, branch) => total + branch.coverages.length, 0)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                          association.active ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {association.active ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Activo
                            </>
                          ) : (
                            <>
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Inactivo
                            </>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {association.createdDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button 
                            className="text-green-600 hover:text-green-900 transition-colors"
                            title="Ver detalles"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleOpenModal('contract-association', association)}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(association.id, 'asociación de contrato')}
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
          </div>
        );

      default:
        return null;
    }
  };

  const getAddButtonText = () => {
    switch (activeTab) {
      case 'technical-branches': return 'Nuevo Ramo Técnico';
      case 'coverages': return 'Nueva Cobertura';
      case 'reinsurers': return 'Nueva Reaseguradora';
      case 'brokers': return 'Nuevo Broker';
      case 'contract-associations': return 'Nueva Asociación';
      default: return 'Agregar Nuevo';
    }
  };

  const getAddButtonType = () => {
    switch (activeTab) {
      case 'technical-branches': return 'technical-branch';
      case 'coverages': return 'coverage';
      case 'reinsurers': return 'reinsurer';
      case 'brokers': return 'broker';
      case 'contract-associations': return 'contract-association';
      default: return '';
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
        <button 
          onClick={() => handleOpenModal(getAddButtonType())}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>{getAddButtonText()}</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, código o contacto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
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
            <button
              onClick={() => setActiveTab('contract-associations')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'contract-associations'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Link className="h-4 w-4" />
                <span>Asociaciones de Contratos</span>
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
              <p className="text-2xl font-bold text-gray-900">{reinsurers.length}</p>
              <p className="text-xs text-emerald-600">{reinsurers.filter(r => r.active).length} activas</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Brokers</p>
              <p className="text-2xl font-bold text-gray-900">{brokers.length}</p>
              <p className="text-xs text-emerald-600">{brokers.filter(b => b.active).length} activos</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Asociaciones</p>
              <p className="text-2xl font-bold text-gray-900">{contractAssociations.length}</p>
              <p className="text-xs text-orange-600">Contratos asociados</p>
            </div>
            <Target className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal />}
    </div>
  );
};

export default MaintainersModule;