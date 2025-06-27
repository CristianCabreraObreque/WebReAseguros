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
  Briefcase,
  MapPin,
  Calendar,
  User,
  Clock,
  AlertCircle,
  CheckCircle,
  Globe,
  CreditCard,
  Hash,
  Building2
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedCompanyForAddress, setSelectedCompanyForAddress] = useState<any>(null);

  // Datos de ejemplo con la estructura completa de campos
  const companies = [
    {
      id: 1,
      codigo: 1001,
      nombre: 'Swiss Reinsurance Company Ltd.',
      abreviatura: 'Swiss Re',
      origenCompania: 'EXTRANJERA',
      pais: 'SUIZA',
      region: 'EUROPA',
      codigoCMF: 'CMF-SWR-001',
      cuentaContable: {
        codigo: '3311110100',
        nombre: 'Prima por Cobrar - Swiss Re'
      },
      identificacionTributaria: 'CHE-105.833.114',
      auxiliarContable: 'AUX-SWR-001',
      efectivaDesde: '2020-01-01',
      efectivaHasta: null,
      rol: 'REASEGURADOR',
      relacion: 'NINGUNA',
      observaciones: 'Reaseguradora líder mundial con excelente calificación crediticia',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fechaRegistro: '2024-01-15T10:30:00',
      rating: 'AA+',
      contact: 'contact@swissre.com',
      phone: '+41 43 285 2121',
      direcciones: [
        {
          id: 1,
          idCompania: 1,
          tipoDireccion: 'DOMICILIO_COMERCIAL',
          direccion: 'Mythenquai',
          numero: '50/60',
          codigoPostal: '8022',
          ciudad: 'Zurich',
          pais: 'Suiza'
        },
        {
          id: 2,
          idCompania: 1,
          tipoDireccion: 'TRIBUTARIO',
          direccion: 'Mythenquai',
          numero: '50/60',
          codigoPostal: '8022',
          ciudad: 'Zurich',
          pais: 'Suiza'
        }
      ],
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
            }
          ],
          classifiers: [
            { id: 1, name: 'Zona Geográfica', value: 'Región Metropolitana' },
            { id: 2, name: 'Tipo de Vehículo', value: 'Automóviles Particulares' }
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
            }
          ]
        }
      ]
    },
    {
      id: 2,
      codigo: 1002,
      nombre: 'Münchener Rückversicherungs-Gesellschaft AG',
      abreviatura: 'Munich Re',
      origenCompania: 'EXTRANJERA',
      pais: 'ALEMANIA',
      region: 'EUROPA',
      codigoCMF: 'CMF-MUN-002',
      cuentaContable: {
        codigo: '3311110200',
        nombre: 'Prima por Cobrar - Munich Re'
      },
      identificacionTributaria: 'DE 129274536',
      auxiliarContable: 'AUX-MUN-002',
      efectivaDesde: '2019-06-15',
      efectivaHasta: null,
      rol: 'REASEGURADOR',
      relacion: 'NINGUNA',
      observaciones: 'Una de las reaseguradoras más grandes del mundo',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fechaRegistro: '2024-01-10T14:20:00',
      rating: 'AA',
      contact: 'info@munichre.com',
      phone: '+49 89 3891 0',
      direcciones: [
        {
          id: 3,
          idCompania: 2,
          tipoDireccion: 'DOMICILIO_COMERCIAL',
          direccion: 'Königinstraße',
          numero: '107',
          codigoPostal: '80802',
          ciudad: 'München',
          pais: 'Alemania'
        }
      ],
      contracts: [],
      groupedBranches: []
    },
    {
      id: 3,
      codigo: 1003,
      nombre: 'Mapfre Re, Compañía de Reaseguros S.A.',
      abreviatura: 'Mapfre Re',
      origenCompania: 'EXTRANJERA',
      pais: 'ESPAÑA',
      region: 'EUROPA',
      codigoCMF: 'CMF-MAP-003',
      cuentaContable: {
        codigo: '3311110300',
        nombre: 'Prima por Cobrar - Mapfre Re'
      },
      identificacionTributaria: 'A-28141935',
      auxiliarContable: 'AUX-MAP-003',
      efectivaDesde: '2021-03-01',
      efectivaHasta: null,
      rol: 'REASEGURADOR',
      relacion: 'NINGUNA',
      observaciones: 'Reaseguradora española con fuerte presencia en Latinoamérica',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'jperez',
      fechaRegistro: '2024-02-01T09:15:00',
      rating: 'A+',
      contact: 'reaseguros@mapfre.com',
      phone: '+34 91 581 1100',
      direcciones: [
        {
          id: 4,
          idCompania: 3,
          tipoDireccion: 'DOMICILIO_COMERCIAL',
          direccion: 'Paseo de Recoletos',
          numero: '25',
          codigoPostal: '28004',
          ciudad: 'Madrid',
          pais: 'España'
        }
      ],
      contracts: [],
      groupedBranches: []
    }
  ];

  const brokers = [
    { 
      id: 1,
      codigo: 2001,
      nombre: 'Aon Benfield Chile Corredores de Reaseguros Ltda.',
      abreviatura: 'Aon Re',
      origenCompania: 'LOCAL',
      pais: 'CHILE',
      region: 'SUR AMÉRICA',
      codigoCMF: 'CMF-AON-001',
      cuentaContable: {
        codigo: '2211110100',
        nombre: 'Comisiones por Pagar - Aon Re'
      },
      identificacionTributaria: '96.571.220-8',
      auxiliarContable: 'AUX-AON-001',
      efectivaDesde: '2018-01-01',
      efectivaHasta: null,
      rol: 'BROKER',
      relacion: 'NINGUNA',
      observaciones: 'Broker líder en el mercado chileno de reaseguros',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fechaRegistro: '2024-01-05T11:00:00',
      contact: 'Juan Pérez', 
      email: 'juan.perez@aon.com', 
      phone: '+56 2 2345 6789',
      specialty: 'Reaseguros Facultativos',
      country: 'Chile',
      active: true
    }
  ];

  const paisesOptions = [
    'CHILE', 'ARGENTINA', 'BRASIL', 'COLOMBIA', 'PERÚ', 'MÉXICO',
    'ESTADOS UNIDOS', 'CANADÁ', 'REINO UNIDO', 'ALEMANIA', 'FRANCIA',
    'ESPAÑA', 'ITALIA', 'SUIZA', 'PAÍSES BAJOS', 'JAPÓN', 'SINGAPUR'
  ];

  const regionesOptions = [
    'SUR AMÉRICA', 'NORTE AMÉRICA', 'EUROPA', 'ASIA PACÍFICO', 'MEDIO ORIENTE', 'ÁFRICA'
  ];

  const rolesOptions = [
    'REASEGURADOR', 'BROKER', 'CEDENTE', 'RETROCESIONARIO'
  ];

  const motivosOptions = [
    'ALTA', 'MODIFICACIÓN', 'BAJA', 'SUSPENSIÓN', 'REACTIVACIÓN'
  ];

  const tiposDireccionOptions = [
    'DOMICILIO_COMERCIAL', 'TRIBUTARIO', 'CORRESPONDENCIA', 'SUCURSAL', 'REPRESENTACIÓN'
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

  const handleOpenAddressModal = (company: any) => {
    setSelectedCompanyForAddress(company);
    setShowAddressModal(true);
  };

  const handleCloseAddressModal = () => {
    setShowAddressModal(false);
    setSelectedCompanyForAddress(null);
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
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Compañía Reaseguradora' : 'Nueva Compañía Reaseguradora'}
          </h3>
          <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Información Básica */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Información Básica
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1001"
                  defaultValue={selectedItem?.codigo || ''}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre legal completo de la compañía"
                  defaultValue={selectedItem?.nombre || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Abreviatura <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre corto o comercial"
                  defaultValue={selectedItem?.abreviatura || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origen de Compañía <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedItem?.origenCompania || ''}
                >
                  <option value="">Seleccionar origen</option>
                  <option value="LOCAL">LOCAL</option>
                  <option value="EXTRANJERA">EXTRANJERA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  País <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedItem?.pais || ''}
                >
                  <option value="">Seleccionar país</option>
                  {paisesOptions.map(pais => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Información Regulatoria y Contable */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-emerald-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Información Regulatoria y Contable
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Región
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  defaultValue={selectedItem?.region || ''}
                >
                  <option value="">Seleccionar región</option>
                  {regionesOptions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código CMF
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="CMF-XXX-001"
                  defaultValue={selectedItem?.codigoCMF || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código Cuenta Contable <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="3311110100"
                  defaultValue={selectedItem?.cuentaContable?.codigo || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Cuenta Contable <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Prima por Cobrar - Compañía"
                  defaultValue={selectedItem?.cuentaContable?.nombre || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificación Tributaria
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="RUT, NIF, Tax ID, etc."
                  defaultValue={selectedItem?.identificacionTributaria || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auxiliar Contable
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="AUX-XXX-001"
                  defaultValue={selectedItem?.auxiliarContable || ''}
                />
              </div>
            </div>
          </div>

          {/* Información de Vigencia y Relación */}
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-orange-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Vigencia y Relación
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Desde <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={selectedItem?.efectivaDesde || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Hasta
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={selectedItem?.efectivaHasta || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rol <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={selectedItem?.rol || ''}
                >
                  <option value="">Seleccionar rol</option>
                  {rolesOptions.map(rol => (
                    <option key={rol} value={rol}>{rol}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relación
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={selectedItem?.relacion || 'NINGUNA'}
                >
                  <option value="NINGUNA">Ninguna</option>
                  <option value="MATRIZ">Matriz</option>
                  <option value="FILIAL">Filial</option>
                  <option value="ASOCIADA">Asociada</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={selectedItem?.motivo || 'ALTA'}
                >
                  {motivosOptions.map(motivo => (
                    <option key={motivo} value={motivo}>{motivo}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="habilitada"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  defaultChecked={selectedItem?.habilitada !== false}
                />
                <label htmlFor="habilitada" className="ml-2 block text-sm text-gray-900">
                  Habilitada
                </label>
              </div>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-purple-900 mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Información de Contacto
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email de Contacto
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="contacto@reaseguradora.com"
                  defaultValue={selectedItem?.contact || ''}
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
                  Calificación
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
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
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observaciones
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                  placeholder="Comentarios o notas administrativas"
                  defaultValue={selectedItem?.observaciones || ''}
                />
              </div>
            </div>
          </div>

          {/* Información de Auditoría */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Información de Auditoría
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usuario
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
                  value="admin"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Registro
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
                  value={new Date().toISOString().slice(0, 16)}
                  readOnly
                />
              </div>
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

  const AddressModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            Nueva Dirección - {selectedCompanyForAddress?.abreviatura}
          </h3>
          <button onClick={handleCloseAddressModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Dirección <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {tiposDireccionOptions.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo.replace('_', ' ')}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Calle, avenida u otra referencia"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código Postal
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12345"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ciudad"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleCloseAddressModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>Guardar Dirección</span>
          </button>
        </div>
      </div>
    </div>
  );

  const BrokerModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Broker' : 'Nuevo Broker'}
          </h3>
          <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Información Básica del Broker */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-purple-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Información Básica del Broker
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="2001"
                  defaultValue={selectedItem?.codigo || ''}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Broker <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nombre legal completo del broker"
                  defaultValue={selectedItem?.nombre || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Abreviatura <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nombre comercial"
                  defaultValue={selectedItem?.abreviatura || ''}
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
                  Persona de Contacto
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nombre del contacto principal"
                  defaultValue={selectedItem?.contact || ''}
                />
              </div>
            </div>
          </div>

          {/* Información Regulatoria del Broker */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-emerald-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Información Regulatoria y Contable
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código CMF
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="CMF-BRK-001"
                  defaultValue={selectedItem?.codigoCMF || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificación Tributaria
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="RUT o identificación fiscal"
                  defaultValue={selectedItem?.identificacionTributaria || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código Cuenta Contable <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="2211110100"
                  defaultValue={selectedItem?.cuentaContable?.codigo || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Cuenta Contable <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Comisiones por Pagar - Broker"
                  defaultValue={selectedItem?.cuentaContable?.nombre || ''}
                />
              </div>
            </div>
          </div>

          {/* Información de Contacto del Broker */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Información de Contacto
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contacto@broker.com"
                  defaultValue={selectedItem?.email || ''}
                />
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
                  País
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedItem?.pais || ''}
                >
                  <option value="">Seleccionar país</option>
                  {paisesOptions.map(pais => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="brokerHabilitado"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  defaultChecked={selectedItem?.habilitada !== false}
                />
                <label htmlFor="brokerHabilitado" className="ml-2 block text-sm text-gray-900">
                  Habilitado
                </label>
              </div>
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
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">{company.abreviatura}</h3>
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      #{company.codigo}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{company.nombre}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      {company.pais} ({company.origenCompania})
                    </span>
                    <span className="flex items-center">
                      <Hash className="h-3 w-3 mr-1" />
                      {company.identificacionTributaria}
                    </span>
                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {company.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  company.habilitada ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {company.habilitada ? 'Habilitada' : 'Deshabilitada'}
                </span>
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                  {company.rol}
                </span>
                <button 
                  onClick={() => handleOpenAddressModal(company)}
                  className="text-green-600 hover:text-green-900 transition-colors"
                  title="Gestionar direcciones"
                >
                  <MapPin className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleOpenModal('company', company)}
                  className="text-blue-600 hover:text-blue-900 transition-colors"
                  title="Editar compañía"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900 transition-colors" title="Eliminar">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          {expandedItems.has(`company-${company.id}`) && (
            <div className="p-6 space-y-6">
              {/* Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                    <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
                    Información Contable
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Cuenta Contable:</span>
                      <div className="font-medium text-gray-900">{company.cuentaContable.codigo}</div>
                      <div className="text-gray-600">{company.cuentaContable.nombre}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Auxiliar:</span>
                      <span className="font-medium text-gray-900 ml-1">{company.auxiliarContable}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">CMF:</span>
                      <span className="font-medium text-gray-900 ml-1">{company.codigoCMF}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    Vigencia
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Desde:</span>
                      <span className="font-medium text-gray-900 ml-1">{company.efectivaDesde}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Hasta:</span>
                      <span className="font-medium text-gray-900 ml-1">{company.efectivaHasta || 'Indefinido'}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Motivo:</span>
                      <span className="inline-flex px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 ml-1">
                        {company.motivo}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                    <User className="h-4 w-4 mr-2 text-purple-600" />
                    Auditoría
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Usuario:</span>
                      <span className="font-medium text-gray-900 ml-1">{company.usuario}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-medium text-gray-900 ml-1">
                        {new Date(company.fechaRegistro).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addresses Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-semibold text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    Direcciones ({company.direcciones?.length || 0})
                  </h4>
                  <button 
                    onClick={() => handleOpenAddressModal(company)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1"
                  >
                    <Plus className="h-3 w-3" />
                    <span>Nueva Dirección</span>
                  </button>
                </div>
                
                {company.direcciones && company.direcciones.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {company.direcciones.map((direccion) => (
                      <div key={direccion.id} className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {direccion.tipoDireccion.replace('_', ' ')}
                          </span>
                          <div className="flex space-x-1">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="h-3 w-3" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-900">
                          <div>{direccion.direccion} {direccion.numero}</div>
                          <div>{direccion.ciudad}, {direccion.codigoPostal}</div>
                          <div>{direccion.pais}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>No hay direcciones registradas</p>
                  </div>
                )}
              </div>

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
                
                {company.contracts.length > 0 ? (
                  company.contracts.map((contract) => (
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
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>No hay contratos registrados</p>
                  </div>
                )}
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

                {company.groupedBranches.length > 0 ? (
                  company.groupedBranches.map((branch) => (
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
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Briefcase className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>No hay ramos agrupados registrados</p>
                  </div>
                )}
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
              Información Regulatoria
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contacto
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Especialidad
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
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{broker.abreviatura}</span>
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                        #{broker.codigo}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">{broker.nombre}</div>
                    <div className="text-xs text-gray-400">{broker.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm">
                  <div className="text-gray-900">CMF: {broker.codigoCMF}</div>
                  <div className="text-gray-500">RUT: {broker.identificacionTributaria}</div>
                  <div className="text-gray-500">Cuenta: {broker.cuentaContable.codigo}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm text-gray-900">{broker.contact}</div>
                  <div className="text-sm text-gray-500">{broker.phone}</div>
                  <div className="text-sm text-gray-500">{broker.country}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                  {broker.specialty}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  broker.habilitada ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                }`}>
                  {broker.habilitada ? 'Habilitado' : 'Deshabilitado'}
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
              <span className="text-gray-500">──┬──<</span>
              <span className="font-semibold text-green-600">[CONTRATO]</span>
              <span className="text-gray-500">──┬──<</span>
              <span className="font-semibold text-purple-600">[LÍNEA_DE_CONTRATO]</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">│</span>
              <span className="ml-12 text-gray-500">└──<</span>
              <span className="font-semibold text-orange-600">[CLASIFICADORA]</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">│</span>
            </div>
            <div className="mb-2 ml-8">
              <span className="text-gray-500">└──<</span>
              <span className="font-semibold text-emerald-600">[RAMO_AGRUPADO]</span>
              <span className="text-gray-500">──<</span>
              <span className="font-semibold text-indigo-600">[COBERTURA]</span>
            </div>
            <div className="ml-16">
              <span className="text-gray-500">│</span>
            </div>
            <div className="ml-16">
              <span className="text-gray-500">└──<</span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{companies.length}</div>
            <div className="text-sm text-blue-700">Compañías Reaseguradoras</div>
            <div className="text-xs text-gray-500 mt-1">{companies.filter(c => c.habilitada).length} habilitadas</div>
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
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{brokers.length}</div>
            <div className="text-sm text-purple-700">Brokers</div>
            <div className="text-xs text-gray-500 mt-1">{brokers.filter(b => b.habilitada).length} habilitados</div>
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
          <p className="text-gray-600">Gestión completa de compañías reaseguradoras, brokers y sus relaciones jerárquicas</p>
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
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compañías</p>
              <p className="text-2xl font-bold text-blue-600">{companies.length}</p>
              <p className="text-xs text-emerald-600">{companies.filter(c => c.habilitada).length} habilitadas</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Direcciones</p>
              <p className="text-2xl font-bold text-green-600">
                {companies.reduce((sum, company) => sum + (company.direcciones?.length || 0), 0)}
              </p>
            </div>
            <MapPin className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Contratos</p>
              <p className="text-2xl font-bold text-purple-600">
                {companies.reduce((sum, company) => sum + company.contracts.length, 0)}
              </p>
            </div>
            <FileText className="h-8 w-8 text-purple-500" />
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
              <p className="text-xs text-emerald-600">{brokers.filter(b => b.habilitada).length} habilitados</p>
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
      {showAddressModal && <AddressModal />}
    </div>
  );
};

export default MaintainersModule;