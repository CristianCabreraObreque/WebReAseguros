import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { 
  Plus, 
  Search, 
  Filter, 
  Building, 
  Edit,
  Trash2,
  Eye,
  MapPin,
  Phone,
  Mail,
  Star,
  DollarSign,
  Calendar,
  Globe,
  Users,
  FileText,
  X,
  Save,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface Company {
  id: number;
  nombre: string;
  abreviatura: string;
  codigoCMF: string;
  origenCompania: 'LOCAL' | 'EXTRANJERO';
  pais: string;
  region: string;
  identificacionTributaria: string;
  auxiliarContable: string;
  cuentaContable: string;
  efectivaDesde: string;
  efectivaHasta?: string;
  rol: 'Reasegurador' | 'Bróker' | 'Ambos';
  relacion: 'Ninguna' | 'Uso interno' | 'Es parte del grupo' | 'Es casa matriz';
  observaciones: string;
  habilitada: boolean;
  motivo: 'Alta' | 'Baja' | 'Modificación';
  usuario: string;
  fecha: string;
  direcciones: Address[];
  contactos: Contact[];
  clasificaciones: RiskClassification[];
  patrimonios: Patrimony[];
}

interface Address {
  id: number;
  idCompania: number;
  tipoDirection: string;
  direccion: string;
  numero: string;
  codigoPostal: string;
}

interface Contact {
  id: number;
  idCompania: number;
  tipoContacto: string;
  numeroContacto: string;
  contacto: string;
  email: string;
}

interface RiskClassification {
  id: number;
  idCompania: number;
  año: number;
  empresaClasificadora: string;
  tipoClasificacion: string;
  fechaClasificacion: string;
  fechaCarta: string;
}

interface Patrimony {
  id: number;
  idCompania: number;
  año: number;
  monto: number;
  moneda: string;
  agrupacionRamo: string;
  montoCumuloMaximo: number;
}

const MaintainersModule: React.FC = () => {
  const { hasPermission, user } = useAuth();
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'create' | 'edit' | 'view'>('create');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // Mock data for demonstration
  const companies: Company[] = [
    {
      id: 1,
      nombre: 'Swiss Reinsurance Company Ltd.',
      abreviatura: 'SWISS RE',
      codigoCMF: 'CMF-001',
      origenCompania: 'EXTRANJERO',
      pais: 'Suiza',
      region: 'EUROPA',
      identificacionTributaria: 'CHE-105.833.114',
      auxiliarContable: 'AUX-001',
      cuentaContable: 'PRIMAS-REASEGUROS',
      efectivaDesde: '2020-01-01',
      rol: 'Reasegurador',
      relacion: 'Ninguna',
      observaciones: 'Reaseguradora líder mundial con excelente rating crediticio',
      habilitada: true,
      motivo: 'Alta',
      usuario: 'admin',
      fecha: '2024-01-15',
      direcciones: [
        {
          id: 1,
          idCompania: 1,
          tipoDirection: 'DOMICILIO COMERCIAL',
          direccion: 'Mythenquai 50/60',
          numero: '50',
          codigoPostal: '8022'
        }
      ],
      contactos: [
        {
          id: 1,
          idCompania: 1,
          tipoContacto: 'Comercial',
          numeroContacto: '+41 43 285 2121',
          contacto: 'Hans Mueller',
          email: 'hans.mueller@swissre.com'
        }
      ],
      clasificaciones: [
        {
          id: 1,
          idCompania: 1,
          año: 2024,
          empresaClasificadora: "Standard & Poor's",
          tipoClasificacion: 'AA-',
          fechaClasificacion: '2024-01-15',
          fechaCarta: '2024-01-20'
        }
      ],
      patrimonios: [
        {
          id: 1,
          idCompania: 1,
          año: 2024,
          monto: 50000000000,
          moneda: 'USD',
          agrupacionRamo: 'Incendio',
          montoCumuloMaximo: 1000000000
        }
      ]
    },
    {
      id: 2,
      nombre: 'Munich Reinsurance Company',
      abreviatura: 'MUNICH RE',
      codigoCMF: 'CMF-002',
      origenCompania: 'EXTRANJERO',
      pais: 'Alemania',
      region: 'EUROPA',
      identificacionTributaria: 'DE-129274202',
      auxiliarContable: 'AUX-002',
      cuentaContable: 'PRIMAS-REASEGUROS',
      efectivaDesde: '2019-06-01',
      rol: 'Reasegurador',
      relacion: 'Ninguna',
      observaciones: 'Una de las reaseguradoras más grandes del mundo',
      habilitada: true,
      motivo: 'Alta',
      usuario: 'admin',
      fecha: '2024-01-10',
      direcciones: [
        {
          id: 2,
          idCompania: 2,
          tipoDirection: 'DOMICILIO COMERCIAL',
          direccion: 'Königinstraße 107',
          numero: '107',
          codigoPostal: '80802'
        }
      ],
      contactos: [
        {
          id: 2,
          idCompania: 2,
          tipoContacto: 'Técnico',
          numeroContacto: '+49 89 3891 0',
          contacto: 'Klaus Weber',
          email: 'klaus.weber@munichre.com'
        }
      ],
      clasificaciones: [
        {
          id: 2,
          idCompania: 2,
          año: 2024,
          empresaClasificadora: "Moody's",
          tipoClasificacion: 'Aa3',
          fechaClasificacion: '2024-01-10',
          fechaCarta: '2024-01-15'
        }
      ],
      patrimonios: [
        {
          id: 2,
          idCompania: 2,
          año: 2024,
          monto: 45000000000,
          moneda: 'EUR',
          agrupacionRamo: 'Responsabilidad Civil',
          montoCumuloMaximo: 800000000
        }
      ]
    },
    {
      id: 3,
      nombre: 'Mapfre Re Compañía de Reaseguros S.A.',
      abreviatura: 'MAPFRE RE',
      codigoCMF: 'CMF-003',
      origenCompania: 'EXTRANJERO',
      pais: 'España',
      region: 'EUROPA',
      identificacionTributaria: 'A-28141935',
      auxiliarContable: 'AUX-003',
      cuentaContable: 'PRIMAS-REASEGUROS',
      efectivaDesde: '2021-03-15',
      rol: 'Reasegurador',
      relacion: 'Ninguna',
      observaciones: 'Reaseguradora española con fuerte presencia en Latinoamérica',
      habilitada: true,
      motivo: 'Alta',
      usuario: 'admin',
      fecha: '2024-01-12',
      direcciones: [
        {
          id: 3,
          idCompania: 3,
          tipoDirection: 'DOMICILIO COMERCIAL',
          direccion: 'Carretera de Pozuelo 52',
          numero: '52',
          codigoPostal: '28222'
        }
      ],
      contactos: [
        {
          id: 3,
          idCompania: 3,
          tipoContacto: 'Financiero',
          numeroContacto: '+34 91 581 1100',
          contacto: 'Carmen López',
          email: 'carmen.lopez@mapfrere.com'
        }
      ],
      clasificaciones: [
        {
          id: 3,
          idCompania: 3,
          año: 2024,
          empresaClasificadora: "Standard & Poor's",
          tipoClasificacion: 'A',
          fechaClasificacion: '2024-01-12',
          fechaCarta: '2024-01-18'
        }
      ],
      patrimonios: [
        {
          id: 3,
          idCompania: 3,
          año: 2024,
          monto: 15000000000,
          moneda: 'EUR',
          agrupacionRamo: 'Automóviles',
          montoCumuloMaximo: 500000000
        }
      ]
    }
  ];

  const countries = [
    'Chile', 'Argentina', 'Brasil', 'Colombia', 'Perú', 'México',
    'Estados Unidos', 'Canadá', 'España', 'Francia', 'Alemania',
    'Reino Unido', 'Suiza', 'Italia', 'Países Bajos', 'Bélgica'
  ];

  const regions = [
    'SUR AMERICA', 'NORTE AMERICA', 'EUROPA', 'ASIA', 'OCEANIA', 'AFRICA'
  ];

  const technicalBranches = [
    'Incendio y Líneas Aliadas', 'Responsabilidad Civil', 'Automóviles',
    'Vida', 'Accidentes Personales', 'Transporte', 'Cascos Marítimos',
    'Todo Riesgo Construcción', 'Rotura de Maquinaria'
  ];

  const currencies = ['USD', 'EUR', 'CLP', 'ARS', 'BRL', 'COP', 'PEN'];

  const ratingAgencies = ["Standard & Poor's", "Moody's", "Fitch Ratings", "AM Best"];

  const getStatusColor = (habilitada: boolean) => {
    return habilitada ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800';
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCreateCompany = () => {
    setModalType('create');
    setSelectedCompany(null);
    setShowModal(true);
  };

  const handleEditCompany = (company: Company) => {
    setModalType('edit');
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleViewCompany = (company: Company) => {
    setModalType('view');
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleDeleteCompany = (companyId: number) => {
    if (confirm('¿Está seguro de que desea eliminar esta compañía?')) {
      console.log('Deleting company:', companyId);
    }
  };

  const CompanyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {modalType === 'create' ? 'Nueva Compañía Reaseguradora/Bróker' : 
             modalType === 'edit' ? 'Editar Compañía' : 'Detalles de la Compañía'}
          </h3>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Información Básica */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Información Básica
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre completo de la compañía"
                  defaultValue={selectedCompany?.nombre || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Abreviatura *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: SWISS RE"
                  defaultValue={selectedCompany?.abreviatura || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código CMF
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Código del regulador"
                  defaultValue={selectedCompany?.codigoCMF || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origen de Compañía *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.origenCompania || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="">Seleccionar origen</option>
                  <option value="LOCAL">LOCAL</option>
                  <option value="EXTRANJERO">EXTRANJERO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  País *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.pais || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="">Seleccionar país</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Región *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.region || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="">Seleccionar región</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificación Tributaria *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="RUT u otro identificador fiscal"
                  defaultValue={selectedCompany?.identificacionTributaria || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auxiliar Contable
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Referencia contable adicional"
                  defaultValue={selectedCompany?.auxiliarContable || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuenta Contable
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.cuentaContable || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="">Seleccionar cuenta</option>
                  <option value="PRIMAS-REASEGUROS">Primas Reaseguros</option>
                  <option value="COMISIONES-REASEGUROS">Comisiones Reaseguros</option>
                  <option value="SINIESTROS-REASEGUROS">Siniestros Reaseguros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Desde *
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.efectivaDesde || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Hasta
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.efectivaHasta || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rol *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.rol || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="">Seleccionar rol</option>
                  <option value="Reasegurador">Reasegurador</option>
                  <option value="Bróker">Bróker</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relación
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.relacion || ''}
                  disabled={modalType === 'view'}
                >
                  <option value="Ninguna">Ninguna</option>
                  <option value="Uso interno">Uso interno</option>
                  <option value="Es parte del grupo">Es parte del grupo</option>
                  <option value="Es casa matriz">Es casa matriz</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observaciones
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Comentarios adicionales"
                  defaultValue={selectedCompany?.observaciones || ''}
                  disabled={modalType === 'view'}
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked={selectedCompany?.habilitada ?? true}
                    disabled={modalType === 'view'}
                  />
                  <span className="ml-2 text-sm text-gray-700">Habilitada</span>
                </label>
              </div>
            </div>
          </div>

          {/* Direcciones */}
          <div className="bg-emerald-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-emerald-900 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Direcciones
              </h4>
              {modalType !== 'view' && (
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Plus className="h-4 w-4" />
                  <span>Agregar Dirección</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              {selectedCompany?.direcciones.map((direccion, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Tipo de Dirección
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={direccion.tipoDirection}
                        disabled={modalType === 'view'}
                      >
                        <option value="DOMICILIO COMERCIAL">Domicilio Comercial</option>
                        <option value="ADMINISTRATIVA">Administrativa</option>
                        <option value="LEGAL">Legal</option>
                        <option value="CORRESPONDENCIA">Correspondencia</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Dirección
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={direccion.direccion}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Número
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={direccion.numero}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Código Postal
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={direccion.codigoPostal}
                        disabled={modalType === 'view'}
                      />
                    </div>
                  </div>
                  {modalType !== 'view' && (
                    <div className="mt-2 flex justify-end">
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contactos */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-purple-900 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Contactos
              </h4>
              {modalType !== 'view' && (
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Plus className="h-4 w-4" />
                  <span>Agregar Contacto</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              {selectedCompany?.contactos.map((contacto, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Tipo de Contacto
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={contacto.tipoContacto}
                        disabled={modalType === 'view'}
                      >
                        <option value="Comercial">Comercial</option>
                        <option value="Técnico">Técnico</option>
                        <option value="Financiero">Financiero</option>
                        <option value="Jurídico">Jurídico</option>
                        <option value="Operativo">Operativo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Nombre del Contacto
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={contacto.contacto}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={contacto.numeroContacto}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={contacto.email}
                        disabled={modalType === 'view'}
                      />
                    </div>
                  </div>
                  {modalType !== 'view' && (
                    <div className="mt-2 flex justify-end">
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Clasificaciones de Riesgo */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-yellow-900 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Clasificaciones de Riesgo
              </h4>
              {modalType !== 'view' && (
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Plus className="h-4 w-4" />
                  <span>Agregar Clasificación</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              {selectedCompany?.clasificaciones.map((clasificacion, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Año
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={clasificacion.año}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Empresa Clasificadora
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={clasificacion.empresaClasificadora}
                        disabled={modalType === 'view'}
                      >
                        <option value="">Seleccionar</option>
                        {ratingAgencies.map(agency => (
                          <option key={agency} value={agency}>{agency}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Clasificación
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Ej: AA-, A2, BBB+"
                        defaultValue={clasificacion.tipoClasificacion}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Fecha Clasificación
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={clasificacion.fechaClasificacion}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Fecha Carta
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={clasificacion.fechaCarta}
                        disabled={modalType === 'view'}
                      />
                    </div>
                  </div>
                  {modalType !== 'view' && (
                    <div className="mt-2 flex justify-end">
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Patrimonio y Cúmulos */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-indigo-900 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Patrimonio y Cúmulos Máximos
              </h4>
              {modalType !== 'view' && (
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Plus className="h-4 w-4" />
                  <span>Agregar Patrimonio</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              {selectedCompany?.patrimonios.map((patrimonio, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-indigo-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Año
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={patrimonio.año}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Patrimonio
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={patrimonio.monto.toLocaleString()}
                        disabled={modalType === 'view'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Moneda
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={patrimonio.moneda}
                        disabled={modalType === 'view'}
                      >
                        {currencies.map(currency => (
                          <option key={currency} value={currency}>{currency}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Ramo Técnico
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={patrimonio.agrupacionRamo}
                        disabled={modalType === 'view'}
                      >
                        <option value="">Seleccionar ramo</option>
                        {technicalBranches.map(branch => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Cúmulo Máximo
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        defaultValue={patrimonio.montoCumuloMaximo.toLocaleString()}
                        disabled={modalType === 'view'}
                      />
                    </div>
                  </div>
                  {modalType !== 'view' && (
                    <div className="mt-2 flex justify-end">
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalType !== 'view' && (
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 bg-[#0D4F45] hover:bg-[#0D4F45]/80 text-white rounded-lg flex items-center space-x-2 transition-colors">
              <Save className="h-4 w-4" />
              <span>{modalType === 'create' ? 'Crear' : 'Actualizar'} Compañía</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <ProtectedRoute requiredPermission="manage_maintainers">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Mantenedores del Sistema</h2>
            <p className="text-gray-600">Gestión de compañías reaseguradoras, brókers y configuración</p>
          </div>
          <button 
            onClick={handleCreateCompany}
            className="bg-[#0D4F45] hover:bg-[#0D4F45]/80 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Nueva Compañía</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('companies')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'companies'
                    ? 'border-[#0D4F45] text-[#0D4F45]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Compañías Reaseguradoras/Brókers
              </button>
              <button
                onClick={() => setActiveTab('branches')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'branches'
                    ? 'border-[#0D4F45] text-[#0D4F45]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Ramos Técnicos
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'config'
                    ? 'border-[#0D4F45] text-[#0D4F45]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Configuración
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'companies' && (
              <div className="space-y-6">
                {/* Filters and Search */}
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar compañías por nombre, abreviatura o país..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D4F45] focus:border-transparent"
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
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los roles</option>
                        <option>Reasegurador</option>
                        <option>Bróker</option>
                        <option>Ambos</option>
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los países</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todas las regiones</option>
                        {regions.map(region => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los estados</option>
                        <option>Habilitada</option>
                        <option>Deshabilitada</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Companies Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Compañía
                          </th>
                          <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rol
                          </th>
                          <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            País/Región
                          </th>
                          <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rating
                          </th>
                          <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patrimonio
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
                        {companies.map((company) => (
                          <tr key={company.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Building className="h-5 w-5 text-[#0D4F45] mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{company.nombre}</div>
                                  <div className="text-sm text-gray-500">{company.abreviatura}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-[#0D4F45]/10 text-[#0D4F45]">
                                {company.rol}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Globe className="h-4 w-4 text-gray-400 mr-1" />
                                <div>
                                  <div className="text-sm text-gray-900">{company.pais}</div>
                                  <div className="text-xs text-gray-500">{company.region}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {company.clasificaciones.length > 0 && (
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="text-sm font-medium text-gray-900">
                                    {company.clasificaciones[0].tipoClasificacion}
                                  </span>
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {company.patrimonios.length > 0 && (
                                <div className="text-sm font-medium text-gray-900">
                                  {formatCurrency(company.patrimonios[0].monto, company.patrimonios[0].moneda)}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(company.habilitada)}`}>
                                {company.habilitada ? 'Habilitada' : 'Deshabilitada'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={() => handleViewCompany(company)}
                                  className="text-[#0D4F45] hover:text-[#0D4F45]/80 transition-colors"
                                  title="Ver detalles"
                                >
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button 
                                  onClick={() => handleEditCompany(company)}
                                  className="text-gray-600 hover:text-gray-900 transition-colors"
                                  title="Editar compañía"
                                >
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button 
                                  onClick={() => handleDeleteCompany(company.id)}
                                  className="text-red-600 hover:text-red-900 transition-colors"
                                  title="Eliminar compañía"
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
            )}

            {activeTab === 'branches' && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Gestión de Ramos Técnicos</h3>
                <p className="text-gray-500">
                  Configuración de ramos técnicos y coberturas del sistema
                </p>
              </div>
            )}

            {activeTab === 'config' && (
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Configuración del Sistema</h3>
                <p className="text-gray-500">
                  Parámetros generales y configuración avanzada
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Compañías</p>
                <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
              </div>
              <Building className="h-8 w-8 text-[#0D4F45]" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reaseguradoras</p>
                <p className="text-2xl font-bold text-[#ED6A26]">
                  {companies.filter(c => c.rol === 'Reasegurador' || c.rol === 'Ambos').length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-[#ED6A26]" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Brókers</p>
                <p className="text-2xl font-bold text-purple-600">
                  {companies.filter(c => c.rol === 'Bróker' || c.rol === 'Ambos').length}
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Habilitadas</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {companies.filter(c => c.habilitada).length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && <CompanyModal />}
      </div>
    </ProtectedRoute>
  );
};

export default MaintainersModule;