import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProtectedRoute from '../ProtectedRoute';
import { 
  Plus, 
  Search, 
  Filter, 
  Building, 
  MapPin,
  Phone,
  Mail,
  Star,
  DollarSign,
  Edit,
  Eye,
  Trash2,
  X,
  Save,
  Users,
  Globe,
  Shield,
  Calendar,
  FileText,
  Settings,
  CreditCard,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface Company {
  id: number;
  name: string;
  abbreviation: string;
  cmfCode: string;
  origin: 'LOCAL' | 'EXTRANJERO';
  country: string;
  region: string;
  taxId: string;
  accountingAux: string;
  accountingAccount: string;
  effectiveFrom: string;
  effectiveTo: string | null;
  role: 'Reasegurador' | 'Bróker' | 'Ambos';
  relationship: 'Ninguna' | 'Uso interno' | 'Es parte del grupo' | 'Es casa matriz';
  observations: string;
  enabled: boolean;
  reason: 'Alta' | 'Baja' | 'Modificación';
  user: string;
  lastModified: string;
  addresses: Address[];
  contacts: Contact[];
  riskClassifications: RiskClassification[];
  patrimony: Patrimony[];
}

interface Address {
  id: number;
  companyId: number;
  type: string;
  address: string;
  number: string;
  postalCode: string;
  city: string;
}

interface Contact {
  id: number;
  companyId: number;
  type: 'Comercial' | 'Técnico' | 'Financiero' | 'Jurídico';
  contactNumber: string;
  name: string;
  email: string;
}

interface RiskClassification {
  id: number;
  companyId: number;
  year: number;
  ratingAgency: string;
  classificationType: string;
  classificationDate: string;
  letterDate: string;
}

interface Patrimony {
  id: number;
  companyId: number;
  year: number;
  amount: number;
  currency: string;
  technicalBranch: string;
  maxAccumulation: number;
}

const MaintainersModule: React.FC = () => {
  const { hasPermission, user } = useAuth();
  const [activeTab, setActiveTab] = useState('companies');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [showNewCompanyModal, setShowNewCompanyModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  // Mock data for companies with complete entity structure
  const companies: Company[] = [
    {
      id: 1,
      name: 'Swiss Reinsurance Company Ltd.',
      abbreviation: 'Swiss Re',
      cmfCode: 'SWR-001',
      origin: 'EXTRANJERO',
      country: 'Suiza',
      region: 'EUROPA',
      taxId: 'CHE-105.833.114',
      accountingAux: 'AUX-001',
      accountingAccount: 'PRIMAS',
      effectiveFrom: '2020-01-01',
      effectiveTo: null,
      role: 'Reasegurador',
      relationship: 'Ninguna',
      observations: 'Principal reasegurador para líneas de incendio y responsabilidad civil. Excelente capacidad financiera y rating crediticio.',
      enabled: true,
      reason: 'Alta',
      user: 'admin',
      lastModified: '2024-01-15',
      addresses: [
        {
          id: 1,
          companyId: 1,
          type: 'DOMICILIO COMERCIAL',
          address: 'Mythenquai 50/60',
          number: '50',
          postalCode: '8022',
          city: 'Zurich'
        },
        {
          id: 2,
          companyId: 1,
          type: 'ADMINISTRATIVA',
          address: 'Bahnhofstrasse 45',
          number: '45',
          postalCode: '8001',
          city: 'Zurich'
        }
      ],
      contacts: [
        {
          id: 1,
          companyId: 1,
          type: 'Comercial',
          name: 'Hans Mueller',
          contactNumber: '+41-43-285-2121',
          email: 'hans.mueller@swissre.com'
        },
        {
          id: 2,
          companyId: 1,
          type: 'Técnico',
          name: 'Anna Schmidt',
          contactNumber: '+41-43-285-2122',
          email: 'anna.schmidt@swissre.com'
        },
        {
          id: 3,
          companyId: 1,
          type: 'Financiero',
          name: 'Klaus Weber',
          contactNumber: '+41-43-285-2123',
          email: 'klaus.weber@swissre.com'
        }
      ],
      riskClassifications: [
        {
          id: 1,
          companyId: 1,
          year: 2024,
          ratingAgency: "Standard & Poor's",
          classificationType: 'AA-',
          classificationDate: '2024-01-15',
          letterDate: '2024-01-10'
        },
        {
          id: 2,
          companyId: 1,
          year: 2023,
          ratingAgency: "Moody's",
          classificationType: 'Aa3',
          classificationDate: '2023-12-20',
          letterDate: '2023-12-15'
        }
      ],
      patrimony: [
        {
          id: 1,
          companyId: 1,
          year: 2024,
          amount: 45000000000,
          currency: 'USD',
          technicalBranch: 'Incendio',
          maxAccumulation: 500000000
        },
        {
          id: 2,
          companyId: 1,
          year: 2024,
          amount: 45000000000,
          currency: 'USD',
          technicalBranch: 'Responsabilidad Civil',
          maxAccumulation: 300000000
        }
      ]
    },
    {
      id: 2,
      name: 'Munich Reinsurance Company',
      abbreviation: 'Munich Re',
      cmfCode: 'MUN-001',
      origin: 'EXTRANJERO',
      country: 'Alemania',
      region: 'EUROPA',
      taxId: 'DE-129274536',
      accountingAux: 'AUX-002',
      accountingAccount: 'PRIMAS',
      effectiveFrom: '2019-06-01',
      effectiveTo: null,
      role: 'Reasegurador',
      relationship: 'Ninguna',
      observations: 'Especialista en reaseguros de vida y salud. Amplia experiencia en mercados emergentes.',
      enabled: true,
      reason: 'Alta',
      user: 'admin',
      lastModified: '2024-01-10',
      addresses: [
        {
          id: 3,
          companyId: 2,
          type: 'DOMICILIO COMERCIAL',
          address: 'Königinstraße 107',
          number: '107',
          postalCode: '80802',
          city: 'Munich'
        }
      ],
      contacts: [
        {
          id: 4,
          companyId: 2,
          type: 'Comercial',
          name: 'Klaus Weber',
          contactNumber: '+49-89-3891-0',
          email: 'klaus.weber@munichre.com'
        },
        {
          id: 5,
          companyId: 2,
          type: 'Técnico',
          name: 'Ingrid Hoffman',
          contactNumber: '+49-89-3891-1234',
          email: 'ingrid.hoffman@munichre.com'
        }
      ],
      riskClassifications: [
        {
          id: 3,
          companyId: 2,
          year: 2024,
          ratingAgency: "Moody's",
          classificationType: 'Aa3',
          classificationDate: '2024-01-20',
          letterDate: '2024-01-18'
        }
      ],
      patrimony: [
        {
          id: 3,
          companyId: 2,
          year: 2024,
          amount: 38000000000,
          currency: 'EUR',
          technicalBranch: 'Vida',
          maxAccumulation: 300000000
        }
      ]
    },
    {
      id: 3,
      name: 'Mapfre Re, Compañía de Reaseguros',
      abbreviation: 'Mapfre Re',
      cmfCode: 'MAP-001',
      origin: 'EXTRANJERO',
      country: 'España',
      region: 'EUROPA',
      taxId: 'ES-A28141935',
      accountingAux: 'AUX-003',
      accountingAccount: 'PRIMAS',
      effectiveFrom: '2021-03-15',
      effectiveTo: null,
      role: 'Reasegurador',
      relationship: 'Ninguna',
      observations: 'Enfoque en mercados latinoamericanos. Especialista en ramos generales.',
      enabled: true,
      reason: 'Alta',
      user: 'admin',
      lastModified: '2024-01-12',
      addresses: [
        {
          id: 4,
          companyId: 3,
          type: 'DOMICILIO COMERCIAL',
          address: 'Paseo de Recoletos 25',
          number: '25',
          postalCode: '28004',
          city: 'Madrid'
        }
      ],
      contacts: [
        {
          id: 6,
          companyId: 3,
          type: 'Comercial',
          name: 'Carlos Mendoza',
          contactNumber: '+34-91-581-1100',
          email: 'carlos.mendoza@mapfrere.com'
        }
      ],
      riskClassifications: [
        {
          id: 4,
          companyId: 3,
          year: 2024,
          ratingAgency: 'Fitch Ratings',
          classificationType: 'A',
          classificationDate: '2024-01-25',
          letterDate: '2024-01-22'
        }
      ],
      patrimony: [
        {
          id: 4,
          companyId: 3,
          year: 2024,
          amount: 8500000000,
          currency: 'EUR',
          technicalBranch: 'Automóviles',
          maxAccumulation: 150000000
        }
      ]
    },
    {
      id: 4,
      name: 'THB Reaseguros Limitada',
      abbreviation: 'THB RE',
      cmfCode: 'THB-001',
      origin: 'LOCAL',
      country: 'Chile',
      region: 'SUR AMERICA',
      taxId: '96.123.456-7',
      accountingAux: 'AUX-004',
      accountingAccount: 'COMISIONES',
      effectiveFrom: '2022-01-01',
      effectiveTo: null,
      role: 'Bróker',
      relationship: 'Es parte del grupo',
      observations: 'Bróker local especializado en colocación de reaseguros. Parte del grupo empresarial.',
      enabled: true,
      reason: 'Alta',
      user: 'admin',
      lastModified: '2024-01-08',
      addresses: [
        {
          id: 5,
          companyId: 4,
          type: 'DOMICILIO COMERCIAL',
          address: 'Av. Providencia 1234',
          number: '1234',
          postalCode: '7500000',
          city: 'Santiago'
        }
      ],
      contacts: [
        {
          id: 7,
          companyId: 4,
          type: 'Comercial',
          name: 'Roberto Silva',
          contactNumber: '+56-2-2345-6789',
          email: 'roberto.silva@thbre.cl'
        },
        {
          id: 8,
          companyId: 4,
          type: 'Jurídico',
          name: 'Patricia Morales',
          contactNumber: '+56-2-2345-6790',
          email: 'patricia.morales@thbre.cl'
        }
      ],
      riskClassifications: [
        {
          id: 5,
          companyId: 4,
          year: 2024,
          ratingAgency: 'Feller Rate',
          classificationType: 'A+',
          classificationDate: '2024-02-01',
          letterDate: '2024-01-28'
        }
      ],
      patrimony: [
        {
          id: 5,
          companyId: 4,
          year: 2024,
          amount: 25000000,
          currency: 'CLP',
          technicalBranch: 'Generales',
          maxAccumulation: 5000000
        }
      ]
    }
  ];

  const technicalBranches = [
    { id: 1, name: 'Incendio y Líneas Aliadas', code: 'INC', enabled: true },
    { id: 2, name: 'Responsabilidad Civil', code: 'RC', enabled: true },
    { id: 3, name: 'Automóviles', code: 'AUTO', enabled: true },
    { id: 4, name: 'Vida', code: 'VIDA', enabled: true },
    { id: 5, name: 'Salud', code: 'SALUD', enabled: true },
    { id: 6, name: 'Cascos Marítimos', code: 'MAR', enabled: true },
    { id: 7, name: 'Aviación', code: 'AVIA', enabled: true },
    { id: 8, name: 'Todo Riesgo Construcción', code: 'TRC', enabled: true }
  ];

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getOriginColor = (origin: string) => {
    return origin === 'LOCAL' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Reasegurador':
        return 'bg-emerald-100 text-emerald-800';
      case 'Bróker':
        return 'bg-orange-100 text-orange-800';
      case 'Ambos':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case 'Es parte del grupo':
        return 'bg-blue-100 text-blue-800';
      case 'Es casa matriz':
        return 'bg-purple-100 text-purple-800';
      case 'Uso interno':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewCompany = (company: Company) => {
    setSelectedCompany(company);
    setShowCompanyDetails(true);
  };

  const handleEditCompany = (company: Company) => {
    setSelectedCompany(company);
    setShowNewCompanyModal(true);
  };

  const handleDeleteCompany = (companyId: number) => {
    if (confirm('¿Está seguro de que desea eliminar esta compañía?')) {
      console.log('Deleting company:', companyId);
    }
  };

  const CompanyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedCompany ? 'Editar Compañía' : 'Nueva Compañía Reaseguradora/Bróker'}
          </h3>
          <button
            onClick={() => {
              setShowNewCompanyModal(false);
              setSelectedCompany(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Company Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Información Básica de la Compañía
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
                  defaultValue={selectedCompany?.name || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Abreviatura *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: Swiss Re"
                  defaultValue={selectedCompany?.abbreviation || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código CMF
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Código regulador"
                  defaultValue={selectedCompany?.cmfCode || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origen de Compañía *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.origin || 'EXTRANJERO'}
                >
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
                  defaultValue={selectedCompany?.country || ''}
                >
                  <option>Chile</option>
                  <option>Suiza</option>
                  <option>Alemania</option>
                  <option>España</option>
                  <option>Reino Unido</option>
                  <option>Estados Unidos</option>
                  <option>Francia</option>
                  <option>Italia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Región
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.region || ''}
                >
                  <option>SUR AMERICA</option>
                  <option>EUROPA</option>
                  <option>NORTE AMERICA</option>
                  <option>ASIA</option>
                  <option>OCEANIA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificación Tributaria
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="RUT u otro identificador fiscal"
                  defaultValue={selectedCompany?.taxId || ''}
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
                  defaultValue={selectedCompany?.accountingAux || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuenta Contable
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.accountingAccount || 'PRIMAS'}
                >
                  <option value="PRIMAS">PRIMAS</option>
                  <option value="COMISIONES">COMISIONES</option>
                  <option value="SINIESTROS">SINIESTROS</option>
                  <option value="GASTOS">GASTOS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Desde *
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.effectiveFrom || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Hasta
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.effectiveTo || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rol *
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.role || 'Reasegurador'}
                >
                  <option>Reasegurador</option>
                  <option>Bróker</option>
                  <option>Ambos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relación
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.relationship || 'Ninguna'}
                >
                  <option>Ninguna</option>
                  <option>Uso interno</option>
                  <option>Es parte del grupo</option>
                  <option>Es casa matriz</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={selectedCompany?.reason || 'Alta'}
                >
                  <option>Alta</option>
                  <option>Baja</option>
                  <option>Modificación</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enabled"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  defaultChecked={selectedCompany?.enabled ?? true}
                />
                <label htmlFor="enabled" className="ml-2 block text-sm text-gray-900">
                  Compañía Habilitada
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Observaciones
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Comentarios adicionales"
                defaultValue={selectedCompany?.observations || ''}
              />
            </div>
          </div>

          {/* Addresses Section */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-emerald-900 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Direcciones
              </h4>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Dirección</span>
              </button>
            </div>
            <div className="space-y-3">
              {[1, 2].map((index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-emerald-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Tipo de Dirección</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>DOMICILIO COMERCIAL</option>
                        <option>ADMINISTRATIVA</option>
                        <option>SUCURSAL</option>
                        <option>REPRESENTACIÓN</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Dirección</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Dirección completa"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Número</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Número"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Código Postal</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Código postal"
                      />
                    </div>
                    <div className="flex items-end">
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts Section */}
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-orange-900 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contactos
              </h4>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Contacto</span>
              </button>
            </div>
            <div className="space-y-3">
              {[1, 2].map((index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-orange-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Tipo de Contacto</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>Comercial</option>
                        <option>Técnico</option>
                        <option>Financiero</option>
                        <option>Jurídico</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Nombre del Contacto</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Número de Contacto</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Número de teléfono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="correo@empresa.com"
                      />
                    </div>
                    <div className="flex items-end">
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Classifications Section */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-yellow-900 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Clasificaciones de Riesgo
              </h4>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Clasificación</span>
              </button>
            </div>
            <div className="space-y-3">
              {[1].map((index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-yellow-200">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Año</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="2024"
                        min="2020"
                        max="2030"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Empresa Clasificadora</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>Standard & Poor's</option>
                        <option>Moody's</option>
                        <option>Fitch Ratings</option>
                        <option>Feller Rate</option>
                        <option>ICR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Tipo de Clasificación</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="AA-, A2, BBB+"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Fecha de Clasificación</label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Fecha Carta</label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    </div>
                    <div className="flex items-end">
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patrimony Section */}
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-purple-900 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Patrimonio y Cúmulos Máximos
              </h4>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Patrimonio</span>
              </button>
            </div>
            <div className="space-y-3">
              {[1].map((index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Año</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="2024"
                        min="2020"
                        max="2030"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Monto</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="45,000,000,000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Moneda</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>CLP</option>
                        <option>GBP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Agrupación / Ramo</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>Incendio</option>
                        <option>Responsabilidad Civil</option>
                        <option>Automóviles</option>
                        <option>Vida</option>
                        <option>Generales</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Cúmulo Máximo</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="500,000,000"
                      />
                    </div>
                    <div className="flex items-end">
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={() => {
              setShowNewCompanyModal(false);
              setSelectedCompany(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedCompany ? 'Actualizar' : 'Guardar'} Compañía</span>
          </button>
        </div>
      </div>
    </div>
  );

  const CompanyDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{selectedCompany?.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-gray-500">{selectedCompany?.abbreviation}</span>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOriginColor(selectedCompany?.origin || '')}`}>
                {selectedCompany?.origin}
              </span>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(selectedCompany?.role || '')}`}>
                {selectedCompany?.role}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              setShowCompanyDetails(false);
              setSelectedCompany(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Company Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">País/Región</p>
                  <p className="text-lg font-bold text-blue-900">{selectedCompany?.country}</p>
                  <p className="text-xs text-blue-600">{selectedCompany?.region}</p>
                </div>
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-700">Código CMF</p>
                  <p className="text-lg font-bold text-emerald-900">{selectedCompany?.cmfCode}</p>
                  <p className="text-xs text-emerald-600">Regulador</p>
                </div>
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Relación</p>
                  <p className="text-sm font-bold text-purple-900">{selectedCompany?.relationship}</p>
                  <p className="text-xs text-purple-600">Tipo</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-700">Estado</p>
                  <p className="text-lg font-bold text-orange-900">{selectedCompany?.enabled ? 'Activa' : 'Inactiva'}</p>
                  <p className="text-xs text-orange-600">{selectedCompany?.reason}</p>
                </div>
                {selectedCompany?.enabled ? (
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-red-600" />
                )}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Vigencia</p>
                  <p className="text-sm font-bold text-gray-900">{selectedCompany?.effectiveFrom}</p>
                  <p className="text-xs text-gray-600">Desde</p>
                </div>
                <Calendar className="h-8 w-8 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-blue-600" />
              Información Básica
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Identificación Tributaria</p>
                <p className="font-medium text-gray-900">{selectedCompany?.taxId}</p>
              </div>
              <div>
                <p className="text-gray-600">Auxiliar Contable</p>
                <p className="font-medium text-gray-900">{selectedCompany?.accountingAux}</p>
              </div>
              <div>
                <p className="text-gray-600">Cuenta Contable</p>
                <p className="font-medium text-gray-900">{selectedCompany?.accountingAccount}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-600">Observaciones</p>
                <p className="font-medium text-gray-900">{selectedCompany?.observations}</p>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
              Direcciones
            </h4>
            <div className="space-y-3">
              {selectedCompany?.addresses?.map((address, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{address.type}</p>
                      <p className="text-gray-600">{address.address} {address.number}</p>
                      <p className="text-sm text-gray-500">{address.postalCode} {address.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-orange-600" />
              Contactos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCompany?.contacts?.map((contact, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 rounded-lg p-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.type}</p>
                      <p className="text-sm text-gray-500">{contact.contactNumber}</p>
                      <p className="text-sm text-blue-600">{contact.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Classifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-600" />
              Clasificaciones de Riesgo
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Año</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Agencia</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Clasificación</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Fecha Clasificación</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Fecha Carta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedCompany?.riskClassifications?.map((classification, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm text-gray-900">{classification.year}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{classification.ratingAgency}</td>
                      <td className="px-4 py-2">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {classification.classificationType}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">{classification.classificationDate}</td>
                      <td className="px-4 py-2 text-sm text-gray-500">{classification.letterDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Patrimony */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-purple-600" />
              Patrimonio y Cúmulos Máximos
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Año</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Patrimonio</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Moneda</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Ramo Técnico</th>
                    <th className="text-left px-4 py-2 text-xs font-medium text-gray-500 uppercase">Cúmulo Máximo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedCompany?.patrimony?.map((patrimony, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm text-gray-900">{patrimony.year}</td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        {formatCurrency(patrimony.amount, patrimony.currency)}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">{patrimony.currency}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{patrimony.technicalBranch}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {formatCurrency(patrimony.maxAccumulation, patrimony.currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
            <p className="text-gray-600">Gestión completa de compañías reaseguradoras, brókers y configuración del sistema</p>
          </div>
          <button 
            onClick={() => setShowNewCompanyModal(true)}
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
                {/* Search and Filters */}
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar compañías por nombre, abreviatura, país o código CMF..."
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
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los roles</option>
                        <option>Reasegurador</option>
                        <option>Bróker</option>
                        <option>Ambos</option>
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los países</option>
                        <option>Chile</option>
                        <option>Suiza</option>
                        <option>Alemania</option>
                        <option>España</option>
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todas las regiones</option>
                        <option>SUR AMERICA</option>
                        <option>EUROPA</option>
                        <option>NORTE AMERICA</option>
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todas las relaciones</option>
                        <option>Ninguna</option>
                        <option>Es parte del grupo</option>
                        <option>Es casa matriz</option>
                        <option>Uso interno</option>
                      </select>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Todos los estados</option>
                        <option>Activa</option>
                        <option>Inactiva</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Companies Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Compañía
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Origen/País
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rol/Relación
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Clasificación
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patrimonio
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Vigencia
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
                              <Building className="h-5 w-5 text-blue-500 mr-3" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{company.name}</div>
                                <div className="text-sm text-gray-500">{company.abbreviation}</div>
                                <div className="text-xs text-gray-400">{company.cmfCode}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOriginColor(company.origin)}`}>
                                {company.origin}
                              </span>
                              <div className="text-sm text-gray-900 mt-1">{company.country}</div>
                              <div className="text-xs text-gray-500">{company.region}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="space-y-1">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(company.role)}`}>
                                {company.role}
                              </span>
                              <div>
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRelationshipColor(company.relationship)}`}>
                                  {company.relationship}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {company.riskClassifications.length > 0 && (
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <div>
                                  <span className="text-sm font-medium text-gray-900">
                                    {company.riskClassifications[0].classificationType}
                                  </span>
                                  <div className="text-xs text-gray-500">
                                    {company.riskClassifications[0].ratingAgency}
                                  </div>
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {company.patrimony.length > 0 && (
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {formatCurrency(company.patrimony[0].amount, company.patrimony[0].currency)}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {company.patrimony[0].technicalBranch}
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              company.enabled ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {company.enabled ? 'Activa' : 'Inactiva'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{company.effectiveFrom}</div>
                            {company.effectiveTo && (
                              <div className="text-xs text-gray-500">hasta {company.effectiveTo}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => handleViewCompany(company)}
                                className="text-blue-600 hover:text-blue-900 transition-colors"
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
            )}

            {activeTab === 'branches' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Ramos Técnicos</h3>
                  <button className="bg-[#0D4F45] hover:bg-[#0D4F45]/80 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Nuevo Ramo</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {technicalBranches.map((branch) => (
                    <div key={branch.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{branch.name}</h4>
                          <p className="text-sm text-gray-500">Código: {branch.code}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            branch.enabled ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {branch.enabled ? 'Activo' : 'Inactivo'}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Configuración del Sistema
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Parámetros Generales</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Moneda Base del Sistema
                        </label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>USD - Dólar Estadounidense</option>
                          <option>CLP - Peso Chileno</option>
                          <option>EUR - Euro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Formato de Fecha
                        </label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>DD/MM/YYYY</option>
                          <option>MM/DD/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Configuración de Reportes</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Generar bordereaux automáticamente</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Notificaciones por email</span>
                        <input type="checkbox" className="rounded" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Backup automático diario</span>
                        <input type="checkbox" className="rounded" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Compañías</p>
                <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
              </div>
              <Building className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reaseguradoras</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {companies.filter(c => c.role === 'Reasegurador' || c.role === 'Ambos').length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Brókers</p>
                <p className="text-2xl font-bold text-orange-600">
                  {companies.filter(c => c.role === 'Bróker' || c.role === 'Ambos').length}
                </p>
              </div>
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Extranjeras</p>
                <p className="text-2xl font-bold text-purple-600">
                  {companies.filter(c => c.origin === 'EXTRANJERO').length}
                </p>
              </div>
              <Globe className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ramos Técnicos</p>
                <p className="text-2xl font-bold text-indigo-600">{technicalBranches.length}</p>
              </div>
              <FileText className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
        </div>

        {/* Modals */}
        {showNewCompanyModal && <CompanyModal />}
        {showCompanyDetails && <CompanyDetailsModal />}
      </div>
    </ProtectedRoute>
  );
};

export default MaintainersModule;