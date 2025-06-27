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
  Star,
  TrendingUp,
  Calendar,
  DollarSign,
  Upload,
  Download,
  Eye,
  X,
  Save,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
  Percent,
  FileCheck,
  Folder,
  Archive
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample data for companies with complete structure
  const companies = [
    {
      id: 1,
      codigo: 1001,
      nombre: 'Swiss Reinsurance Company Ltd.',
      abreviatura: 'Swiss Re',
      origenCompania: 'EXTRANJERA',
      pais: 'SUIZA',
      region: 'EUROPA',
      codigoCMF: 'CMF-001-2024',
      cuentaContable: '3311110100 - Prima por Cobrar Reaseguros',
      identificacionTributaria: 'CHE-105.833.114',
      auxiliarContable: 'AUX-001',
      efectivaDesde: '2020-01-01',
      efectivaHasta: null,
      rol: 'REASEGURADOR',
      relacion: 'NINGUNA',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fecha: '2024-01-15',
      observaciones: 'Reaseguradora principal para ramos de incendio y responsabilidad civil',
      direcciones: [
        {
          id: 1,
          tipo: 'DOMICILIO_COMERCIAL',
          direccion: 'Mythenquai',
          numero: '50/60',
          codigoPostal: '8022',
          ciudad: 'Zurich',
          pais: 'SUIZA'
        }
      ],
      clasificaciones: [
        {
          id: 1,
          año: 2024,
          empresaClasificadora: "Standard & Poor's",
          tipoClasificacion: 'AA-',
          fechaClasificacion: '2024-01-15',
          fechaCarta: '2024-01-20'
        },
        {
          id: 2,
          año: 2024,
          empresaClasificadora: "Moody's",
          tipoClasificacion: 'Aa3',
          fechaClasificacion: '2024-02-10',
          fechaCarta: '2024-02-15'
        }
      ],
      cumulos: [
        {
          id: 1,
          año: 2024,
          agrupacionRamo: 'INCENDIO',
          monto: 50000000,
          moneda: 'USD'
        },
        {
          id: 2,
          año: 2024,
          agrupacionRamo: 'RESPONSABILIDAD_CIVIL',
          monto: 25000000,
          moneda: 'USD'
        }
      ]
    },
    {
      id: 2,
      codigo: 1002,
      nombre: 'Munich Reinsurance Company',
      abreviatura: 'Munich Re',
      origenCompania: 'EXTRANJERA',
      pais: 'ALEMANIA',
      region: 'EUROPA',
      codigoCMF: 'CMF-002-2024',
      cuentaContable: '3311110200 - Prima por Cobrar Munich Re',
      identificacionTributaria: 'DE-129274202',
      auxiliarContable: 'AUX-002',
      efectivaDesde: '2019-06-01',
      efectivaHasta: null,
      rol: 'REASEGURADOR',
      relacion: 'NINGUNA',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fecha: '2024-01-10',
      observaciones: 'Especialista en reaseguros técnicos y catastróficos',
      direcciones: [
        {
          id: 2,
          tipo: 'DOMICILIO_COMERCIAL',
          direccion: 'Königinstraße',
          numero: '107',
          codigoPostal: '80802',
          ciudad: 'Munich',
          pais: 'ALEMANIA'
        }
      ],
      clasificaciones: [
        {
          id: 3,
          año: 2024,
          empresaClasificadora: "Standard & Poor's",
          tipoClasificacion: 'AA-',
          fechaClasificacion: '2024-01-10',
          fechaCarta: '2024-01-15'
        }
      ],
      cumulos: [
        {
          id: 3,
          año: 2024,
          agrupacionRamo: 'CATASTROFICOS',
          monto: 100000000,
          moneda: 'USD'
        }
      ]
    }
  ];

  // Sample contracts data
  const contracts = [
    {
      id: 'CPEQELE-20',
      descripcion: 'Contrato XL Equipos Electrónicos 2024',
      fechaInicio: '2024-01-01T00:00:00',
      fechaFin: '2024-12-31T23:59:59',
      moneda: 'USD',
      epi: 15000000,
      validoHasta: '2024-12-31',
      identificadorReportes: 'RPT-CPEQELE-20-2024',
      siniestrosPagoContado: 50000,
      capacidadDisponible: 85.5,
      primaGarantizada: 'CLAUSULA_PRIMA_MINIMA',
      clausulaInspeccion: 'CLAUSULA_INSPECCION_STANDARD',
      capacidadReducidaCoseguro: false,
      comentarios: 'Contrato renovado con condiciones mejoradas',
      capas: [
        {
          id: 1,
          numeroCapa: 1,
          montoLimite: 5000000,
          porcentajeCesion: 60.00,
          participaciones: [
            {
              id: 1,
              broker: 'Aon Re',
              compania: 'Swiss Re',
              porcentaje: 40.00,
              acuerdoPago: 'TRIMESTRAL',
              tipoComision: 'DIRECTA',
              adjuntos: 'contrato_swiss_re_2024.pdf'
            },
            {
              id: 2,
              broker: 'Guy Carpenter',
              compania: 'Munich Re',
              porcentaje: 20.00,
              acuerdoPago: 'SEMESTRAL',
              tipoComision: 'DIRECTA',
              adjuntos: 'contrato_munich_re_2024.pdf'
            }
          ]
        },
        {
          id: 2,
          numeroCapa: 2,
          montoLimite: 10000000,
          porcentajeCesion: 75.00,
          participaciones: [
            {
              id: 3,
              broker: 'Willis Re',
              compania: 'Hannover Re',
              porcentaje: 35.00,
              acuerdoPago: 'ANUAL',
              tipoComision: 'DIRECTA',
              adjuntos: 'contrato_hannover_2024.pdf'
            },
            {
              id: 4,
              broker: 'Aon Re',
              compania: 'SCOR',
              porcentaje: 40.00,
              acuerdoPago: 'TRIMESTRAL',
              tipoComision: 'DIRECTA',
              adjuntos: 'contrato_scor_2024.pdf'
            }
          ]
        }
      ],
      documentos: [
        {
          id: 1,
          compania: 'Swiss Re',
          tipoDocumento: 'CARTA_CONFIRMACION',
          identificador: 'CONF-SWISS-2024-001',
          nombreDocumento: 'Confirmación Participación Swiss Re',
          archivoAdjunto: 'confirmacion_swiss_re.pdf',
          fecha: '2024-01-15',
          observaciones: 'Confirmación recibida dentro del plazo'
        },
        {
          id: 2,
          compania: 'Munich Re',
          tipoDocumento: 'CERTIFICADO',
          identificador: 'CERT-MUNICH-2024-001',
          nombreDocumento: 'Certificado de Cobertura Munich Re',
          archivoAdjunto: 'certificado_munich_re.pdf',
          fecha: '2024-01-20',
          observaciones: 'Certificado con condiciones especiales'
        }
      ]
    }
  ];

  // Sample cumulo lines data
  const cumuloLines = [
    {
      id: 1,
      descripcion: 'Sismo Categoría 4 - Zona Centro',
      tipoCumulo: 'UBICACION',
      contratos: [
        { id: 1, idContrato: 'CPEQELE-20', orden: 1 },
        { id: 2, idContrato: 'CTERR-21', orden: 2 },
        { id: 3, idContrato: 'CCAT-22', orden: 3 }
      ]
    },
    {
      id: 2,
      descripcion: 'Flota Marítima Comercial',
      tipoCumulo: 'BUQUE/FECHA',
      contratos: [
        { id: 4, idContrato: 'CMAR-20', orden: 1 },
        { id: 5, idContrato: 'CFLOTA-21', orden: 2 }
      ]
    }
  ];

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
    }
  ];

  const brokers = [
    { 
      id: 1, 
      codigo: 2001,
      nombre: 'Aon Reinsurance Solutions',
      abreviatura: 'Aon Re',
      origenCompania: 'EXTRANJERA',
      pais: 'REINO_UNIDO',
      region: 'EUROPA',
      codigoCMF: 'CMF-BRK-001-2024',
      cuentaContable: '2211110100 - Comisiones por Pagar Brokers',
      identificacionTributaria: 'GB-123456789',
      auxiliarContable: 'AUX-BRK-001',
      efectivaDesde: '2020-01-01',
      efectivaHasta: null,
      rol: 'BROKER',
      relacion: 'NINGUNA',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fecha: '2024-01-10',
      observaciones: 'Broker principal para colocaciones internacionales',
      especialidad: 'Reaseguros Catastróficos',
      personaContacto: 'John Smith - Director Regional'
    },
    { 
      id: 2, 
      codigo: 2002,
      nombre: 'Guy Carpenter & Company LLC',
      abreviatura: 'Guy Carpenter',
      origenCompania: 'EXTRANJERA',
      pais: 'ESTADOS_UNIDOS',
      region: 'NORTE_AMERICA',
      codigoCMF: 'CMF-BRK-002-2024',
      cuentaContable: '2211110200 - Comisiones por Pagar Guy Carpenter',
      identificacionTributaria: 'US-987654321',
      auxiliarContable: 'AUX-BRK-002',
      efectivaDesde: '2019-06-01',
      efectivaHasta: null,
      rol: 'BROKER',
      relacion: 'NINGUNA',
      habilitada: true,
      motivo: 'ALTA',
      usuario: 'admin',
      fecha: '2024-01-05',
      observaciones: 'Especialista en mercados de Lloyd\'s',
      especialidad: 'Mercados de Londres',
      personaContacto: 'Sarah Johnson - VP Reinsurance'
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

  const toggleCompanyExpansion = (companyId: number) => {
    const newExpanded = new Set(expandedCompanies);
    if (newExpanded.has(companyId)) {
      newExpanded.delete(companyId);
    } else {
      newExpanded.add(companyId);
    }
    setExpandedCompanies(newExpanded);
  };

  const openModal = (type: string, item?: any) => {
    setModalType(type);
    setSelectedItem(item || null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedItem(null);
  };

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

  const getStatusColor = (status: boolean) => {
    return status ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800';
  };

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Modal Components
  const CompanyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Compañía' : 'Nueva Compañía Reaseguradora'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre legal completo"
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
                  placeholder="Nombre corto"
                  defaultValue={selectedItem?.abreviatura || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origen de Compañía <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seleccionar origen</option>
                  <option value="LOCAL">LOCAL</option>
                  <option value="EXTRANJERA">EXTRANJERA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  País <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seleccionar país</option>
                  <option value="CHILE">CHILE</option>
                  <option value="SUIZA">SUIZA</option>
                  <option value="ALEMANIA">ALEMANIA</option>
                  <option value="REINO_UNIDO">REINO UNIDO</option>
                  <option value="ESTADOS_UNIDOS">ESTADOS UNIDOS</option>
                  <option value="FRANCIA">FRANCIA</option>
                  <option value="ESPAÑA">ESPAÑA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Región
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seleccionar región</option>
                  <option value="SUR_AMERICA">SUR AMÉRICA</option>
                  <option value="EUROPA">EUROPA</option>
                  <option value="NORTE_AMERICA">NORTE AMÉRICA</option>
                  <option value="ASIA_PACIFICO">ASIA PACÍFICO</option>
                  <option value="AFRICA">ÁFRICA</option>
                  <option value="MEDIO_ORIENTE">MEDIO ORIENTE</option>
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
                  Código CMF
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="CMF-001-2024"
                  defaultValue={selectedItem?.codigoCMF || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuenta Contable <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="3311110100 - Prima por Cobrar..."
                  defaultValue={selectedItem?.cuentaContable || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificación Tributaria
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="RUT, NIF, Tax ID"
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
                  placeholder="AUX-001"
                  defaultValue={selectedItem?.auxiliarContable || ''}
                />
              </div>
            </div>
          </div>

          {/* Vigencia y Relación */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-purple-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Vigencia y Relación
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Desde <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  defaultValue={selectedItem?.efectivaDesde || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Efectiva Hasta
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  defaultValue={selectedItem?.efectivaHasta || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rol <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Seleccionar rol</option>
                  <option value="REASEGURADOR">REASEGURADOR</option>
                  <option value="BROKER">BROKER</option>
                  <option value="CEDENTE">CEDENTE</option>
                  <option value="RETROCESIONARIO">RETROCESIONARIO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relación
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="NINGUNA">NINGUNA</option>
                  <option value="MATRIZ">MATRIZ</option>
                  <option value="FILIAL">FILIAL</option>
                  <option value="ASOCIADA">ASOCIADA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Seleccionar motivo</option>
                  <option value="ALTA">ALTA</option>
                  <option value="MODIFICACION">MODIFICACIÓN</option>
                  <option value="BAJA">BAJA</option>
                  <option value="SUSPENSION">SUSPENSIÓN</option>
                  <option value="REACTIVACION">REACTIVACIÓN</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="habilitada"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  defaultChecked={selectedItem?.habilitada || true}
                />
                <label htmlFor="habilitada" className="ml-2 block text-sm text-gray-900">
                  Habilitada
                </label>
              </div>
            </div>
          </div>

          {/* Observaciones */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Observaciones
            </h4>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              rows={3}
              placeholder="Comentarios o notas administrativas"
              defaultValue={selectedItem?.observaciones || ''}
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedItem ? 'Actualizar' : 'Guardar'} Compañía</span>
          </button>
        </div>
      </div>
    </div>
  );

  const AddressModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Dirección' : 'Nueva Dirección'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
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
                <option value="">Seleccionar tipo</option>
                <option value="DOMICILIO_COMERCIAL">DOMICILIO COMERCIAL</option>
                <option value="TRIBUTARIO">TRIBUTARIO</option>
                <option value="CORRESPONDENCIA">CORRESPONDENCIA</option>
                <option value="LEGAL">LEGAL</option>
                <option value="OPERATIVO">OPERATIVO</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                País <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar país</option>
                <option value="CHILE">CHILE</option>
                <option value="SUIZA">SUIZA</option>
                <option value="ALEMANIA">ALEMANIA</option>
                <option value="REINO_UNIDO">REINO UNIDO</option>
                <option value="ESTADOS_UNIDOS">ESTADOS UNIDOS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Calle, avenida, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Número de calle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ciudad"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código Postal
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Código postal"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
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

  const RiskClassificationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Clasificación de Riesgo' : 'Nueva Clasificación de Riesgo'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Año <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar año</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Empresa Clasificadora <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar clasificadora</option>
                <option value="Standard & Poor's">Standard & Poor's</option>
                <option value="Moody's">Moody's</option>
                <option value="Fitch Ratings">Fitch Ratings</option>
                <option value="A.M. Best">A.M. Best</option>
                <option value="DBRS">DBRS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Clasificación <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: AA-, A2, BBB+"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Clasificación <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Carta <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>Guardar Clasificación</span>
          </button>
        </div>
      </div>
    </div>
  );

  const CumuloModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Cúmulo Máximo' : 'Nuevo Cúmulo Máximo'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Año <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar año</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agrupación/Ramo <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar ramo</option>
                <option value="INCENDIO">INCENDIO</option>
                <option value="RESPONSABILIDAD_CIVIL">RESPONSABILIDAD CIVIL</option>
                <option value="AUTOMOVILES">AUTOMÓVILES</option>
                <option value="CATASTROFICOS">CATASTRÓFICOS</option>
                <option value="MARITIMO">MARÍTIMO</option>
                <option value="AVIACION">AVIACIÓN</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moneda <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Seleccionar moneda</option>
                <option value="USD">USD - Dólar Estadounidense</option>
                <option value="CLP">CLP - Peso Chileno</option>
                <option value="UF">UF - Unidad de Fomento</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>Guardar Cúmulo</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ContractModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Contrato' : 'Nuevo Contrato de Reaseguro'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Información Principal del Contrato */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Información Principal del Contrato
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Contrato <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="CPEQELE-20"
                  defaultValue={selectedItem?.id || ''}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre descriptivo del contrato"
                  defaultValue={selectedItem?.descripcion || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Inicio <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Fin <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moneda <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seleccionar moneda</option>
                  <option value="USD">USD</option>
                  <option value="UF">UF</option>
                  <option value="CLP">CLP</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  EPI (Exposición Probable de Pérdida)
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Válido Hasta
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identificador Reportes
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="RPT-CONTRATO-2024"
                />
              </div>
            </div>
          </div>

          {/* Configuraciones Adicionales */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-emerald-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Configuraciones Adicionales
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Siniestro Pago Contado
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacidad Disponible (%)
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prima Garantizada
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Seleccionar cláusula</option>
                  <option value="CLAUSULA_PRIMA_MINIMA">Cláusula Prima Mínima</option>
                  <option value="CLAUSULA_PRIMA_GARANTIZADA">Cláusula Prima Garantizada</option>
                  <option value="SIN_CLAUSULA">Sin Cláusula</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cláusula Inspección
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Seleccionar cláusula</option>
                  <option value="CLAUSULA_INSPECCION_STANDARD">Cláusula Inspección Standard</option>
                  <option value="CLAUSULA_INSPECCION_ESPECIAL">Cláusula Inspección Especial</option>
                  <option value="SIN_CLAUSULA">Sin Cláusula</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="capacidadReducida"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="capacidadReducida" className="ml-2 block text-sm text-gray-900">
                  Capacidad Reducida Coseguro
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comentarios
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                rows={3}
                placeholder="Observaciones del contrato"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>{selectedItem ? 'Actualizar' : 'Guardar'} Contrato</span>
          </button>
        </div>
      </div>
    </div>
  );

  const CumuloLineModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedItem ? 'Editar Línea de Cúmulo' : 'Nueva Línea de Cúmulo'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Información de la Línea */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-purple-900 mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2" />
              Información de la Línea de Cúmulo
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ej: Sismo Categoría 4 - Zona Centro"
                  defaultValue={selectedItem?.descripcion || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Cúmulo <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Seleccionar tipo</option>
                  <option value="UBICACION">UBICACIÓN</option>
                  <option value="BUQUE/FECHA">BUQUE/FECHA</option>
                  <option value="CONTRATANTE">CONTRATANTE</option>
                  <option value="POLIZA/COBERTURA">PÓLIZA/COBERTURA</option>
                  <option value="POLIZA">PÓLIZA</option>
                  <option value="POLIZA/ITEM">PÓLIZA/ITEM</option>
                  <option value="GPS">GPS</option>
                  <option value="EJERCICIO">EJERCICIO</option>
                  <option value="TIPO RAMO">TIPO RAMO</option>
                  <option value="EJERCICIO/TIPO RAMO/ASEGURADO">EJERCICIO/TIPO RAMO/ASEGURADO</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contratos Asociados */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-blue-900 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Contratos Asociados a la Línea
              </h4>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                <Plus className="h-4 w-4" />
                <span>Agregar Contrato</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white rounded border border-blue-200 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Contrato {index}
                    </span>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Contrato</label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                        <option value="">Seleccionar contrato</option>
                        <option value="CPEQELE-20">CPEQELE-20 - Equipos Electrónicos</option>
                        <option value="CTERR-21">CTERR-21 - Terremoto</option>
                        <option value="CCAT-22">CCAT-22 - Catastróficos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Orden de Aplicación</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="1"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Save className="h-4 w-4" />
            <span>Guardar Línea de Cúmulo</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderTable = () => {
    switch (activeTab) {
      case 'companies':
        return (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar compañías por nombre, código o país..."
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
              <button 
                onClick={() => openModal('company')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Nueva Compañía</span>
              </button>
            </div>

            {filterOpen && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Todos los roles</option>
                    <option>REASEGURADOR</option>
                    <option>BROKER</option>
                    <option>CEDENTE</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Todos los países</option>
                    <option>CHILE</option>
                    <option>SUIZA</option>
                    <option>ALEMANIA</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Todas las regiones</option>
                    <option>SUR_AMERICA</option>
                    <option>EUROPA</option>
                    <option>NORTE_AMERICA</option>
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Compañía
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rol/País
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Información Regulatoria
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vigencia
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Datos Asociados
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {companies.map((company) => (
                    <React.Fragment key={company.id}>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() => toggleCompanyExpansion(company.id)}
                              className="mr-2 text-gray-400 hover:text-gray-600"
                            >
                              {expandedCompanies.has(company.id) ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </button>
                            <Building className="h-5 w-5 text-blue-500 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {company.nombre}
                              </div>
                              <div className="text-sm text-gray-500">
                                {company.abreviatura} - Código: {company.codigo}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              company.rol === 'REASEGURADOR' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {company.rol}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">{company.pais} - {company.region}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">CMF: {company.codigoCMF}</div>
                          <div className="text-sm text-gray-500">RUT: {company.identificacionTributaria}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Desde: {company.efectivaDesde}</div>
                          <div className="text-sm text-gray-500">
                            {company.efectivaHasta ? `Hasta: ${company.efectivaHasta}` : 'Vigente'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(company.habilitada)}`}>
                            {company.habilitada ? 'Habilitada' : 'Deshabilitada'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <MapPin className="h-3 w-3 mr-1" />
                              {company.direcciones?.length || 0} dir.
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Star className="h-3 w-3 mr-1" />
                              {company.clasificaciones?.length || 0} rating
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              <Target className="h-3 w-3 mr-1" />
                              {company.cumulos?.length || 0} cúm.
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => openModal('company', company)}
                              className="text-blue-600 hover:text-blue-900 transition-colors"
                              title="Editar compañía"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 transition-colors" title="Eliminar">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Details */}
                      {expandedCompanies.has(company.id) && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-gray-50">
                            <div className="space-y-4">
                              {/* Direcciones */}
                              <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <div className="flex items-center justify-between mb-3">
                                  <h5 className="font-medium text-gray-900 flex items-center">
                                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                                    Direcciones ({company.direcciones?.length || 0})
                                  </h5>
                                  <button 
                                    onClick={() => openModal('address')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs flex items-center space-x-1"
                                  >
                                    <Plus className="h-3 w-3" />
                                    <span>Agregar</span>
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {company.direcciones?.map((direccion, index) => (
                                    <div key={index} className="bg-blue-50 rounded p-3 border border-blue-200">
                                      <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-blue-800">{direccion.tipo}</span>
                                        <div className="flex space-x-1">
                                          <button className="text-blue-600 hover:text-blue-800">
                                            <Edit className="h-3 w-3" />
                                          </button>
                                          <button className="text-red-600 hover:text-red-800">
                                            <Trash2 className="h-3 w-3" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="text-xs text-gray-700">
                                        {direccion.direccion} {direccion.numero}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {direccion.ciudad}, {direccion.pais} - {direccion.codigoPostal}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Clasificaciones de Riesgo */}
                              <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <div className="flex items-center justify-between mb-3">
                                  <h5 className="font-medium text-gray-900 flex items-center">
                                    <Star className="h-4 w-4 mr-2 text-yellow-600" />
                                    Clasificaciones de Riesgo ({company.clasificaciones?.length || 0})
                                  </h5>
                                  <button 
                                    onClick={() => openModal('classification')}
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded text-xs flex items-center space-x-1"
                                  >
                                    <Plus className="h-3 w-3" />
                                    <span>Agregar</span>
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {company.clasificaciones?.map((clasificacion, index) => (
                                    <div key={index} className="bg-yellow-50 rounded p-3 border border-yellow-200">
                                      <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-yellow-800">
                                          {clasificacion.empresaClasificadora}
                                        </span>
                                        <div className="flex space-x-1">
                                          <button className="text-yellow-600 hover:text-yellow-800">
                                            <Edit className="h-3 w-3" />
                                          </button>
                                          <button className="text-red-600 hover:text-red-800">
                                            <Trash2 className="h-3 w-3" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="text-sm font-semibold text-gray-900">
                                        {clasificacion.tipoClasificacion}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {clasificacion.año} - {clasificacion.fechaClasificacion}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Cúmulos Máximos */}
                              <div className="bg-white rounded-lg p-4 border border-gray-200">
                                <div className="flex items-center justify-between mb-3">
                                  <h5 className="font-medium text-gray-900 flex items-center">
                                    <Target className="h-4 w-4 mr-2 text-emerald-600" />
                                    Cúmulos Máximos ({company.cumulos?.length || 0})
                                  </h5>
                                  <button 
                                    onClick={() => openModal('cumulo')}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 rounded text-xs flex items-center space-x-1"
                                  >
                                    <Plus className="h-3 w-3" />
                                    <span>Agregar</span>
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {company.cumulos?.map((cumulo, index) => (
                                    <div key={index} className="bg-emerald-50 rounded p-3 border border-emerald-200">
                                      <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-emerald-800">
                                          {cumulo.agrupacionRamo}
                                        </span>
                                        <div className="flex space-x-1">
                                          <button className="text-emerald-600 hover:text-emerald-800">
                                            <Edit className="h-3 w-3" />
                                          </button>
                                          <button className="text-red-600 hover:text-red-800">
                                            <Trash2 className="h-3 w-3" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="text-sm font-semibold text-gray-900">
                                        {formatCurrency(cumulo.monto, cumulo.moneda)}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Año {cumulo.año}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'contracts':
        return (
          <div className="space-y-6">
            {/* Header with Add Button */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Contratos de Reaseguro</h4>
                <p className="text-sm text-gray-600">Gestión completa de contratos con capas y participaciones</p>
              </div>
              <button 
                onClick={() => openModal('contract')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Nuevo Contrato</span>
              </button>
            </div>

            {/* Contracts Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contrato
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vigencia
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      EPI/Capacidad
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estructura
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Documentos
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
                            <div className="text-sm font-medium text-gray-900">{contract.id}</div>
                            <div className="text-sm text-gray-500">{contract.descripcion}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(contract.fechaInicio).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(contract.fechaFin).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          EPI: {formatCurrency(contract.epi, contract.moneda)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Disponible: {contract.capacidadDisponible}%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Layers className="h-3 w-3 mr-1" />
                            {contract.capas?.length || 0} capas
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            <Building className="h-3 w-3 mr-1" />
                            {contract.capas?.reduce((total, capa) => total + (capa.participaciones?.length || 0), 0)} reaseg.
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <FileCheck className="h-3 w-3 mr-1" />
                          {contract.documentos?.length || 0} docs
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors" title="Ver detalles">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => openModal('contract', contract)}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="Editar contrato"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors" title="Eliminar">
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

      case 'cumulo-lines':
        return (
          <div className="space-y-6">
            {/* Header with Add Button */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Líneas de Contrato Cúmulo</h4>
                <p className="text-sm text-gray-600">Agrupación de contratos por criterios de cúmulo</p>
              </div>
              <button 
                onClick={() => openModal('cumulo-line')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Nueva Línea de Cúmulo</span>
              </button>
            </div>

            {/* Cumulo Lines Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Línea de Cúmulo
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo de Cúmulo
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contratos Asociados
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cumuloLines.map((line) => (
                    <tr key={line.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Layers className="h-5 w-5 text-purple-500 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{line.descripcion}</div>
                            <div className="text-sm text-gray-500">ID: {line.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                          {line.tipoCumulo}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-1">
                          {line.contratos?.slice(0, 3).map((contrato, index) => (
                            <div key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded flex items-center">
                              <span className="bg-blue-200 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center text-xs mr-2">
                                {contrato.orden}
                              </span>
                              {contrato.idContrato}
                            </div>
                          ))}
                          {(line.contratos?.length || 0) > 3 && (
                            <div className="text-xs text-gray-500">
                              +{(line.contratos?.length || 0) - 3} contratos más
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 transition-colors" title="Ver detalles">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => openModal('cumulo-line', line)}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="Editar línea"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 transition-colors" title="Eliminar">
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
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(branch.active)}`}>
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

      case 'brokers':
        return (
          <div className="space-y-6">
            {/* Header with Add Button */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Brokers de Reaseguros</h4>
                <p className="text-sm text-gray-600">Gestión de corredores de reaseguros con información completa</p>
              </div>
              <button 
                onClick={() => openModal('broker')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Nuevo Broker</span>
              </button>
            </div>

            {/* Brokers Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Broker
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      País/Región
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Especialidad
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
                  {brokers.map((broker) => (
                    <tr key={broker.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-purple-500 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{broker.nombre}</div>
                            <div className="text-sm text-gray-500">{broker.abreviatura} - Código: {broker.codigo}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{broker.pais}</div>
                        <div className="text-sm text-gray-500">{broker.region}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                          {broker.especialidad}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{broker.personaContacto}</div>
                        <div className="text-sm text-gray-500">CMF: {broker.codigoCMF}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(broker.habilitada)}`}>
                          {broker.habilitada ? 'Habilitado' : 'Deshabilitado'}
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
        <button 
          onClick={() => openModal('company')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Agregar Nuevo</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'companies'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Compañías</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('contracts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'contracts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Contratos</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('cumulo-lines')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'cumulo-lines'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Layers className="h-4 w-4" />
                <span>Líneas de Cúmulo</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('technical-branches')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
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
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
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
              onClick={() => setActiveTab('brokers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
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
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compañías</p>
              <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
              <p className="text-xs text-emerald-600">{companies.filter(c => c.habilitada).length} activas</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Contratos</p>
              <p className="text-2xl font-bold text-gray-900">{contracts.length}</p>
              <p className="text-xs text-blue-600">Activos</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Líneas Cúmulo</p>
              <p className="text-2xl font-bold text-gray-900">{cumuloLines.length}</p>
              <p className="text-xs text-purple-600">Configuradas</p>
            </div>
            <Layers className="h-8 w-8 text-purple-500" />
          </div>
        </div>
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
              <p className="text-xs text-blue-600">Vinculadas</p>
            </div>
            <Shield className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Brokers</p>
              <p className="text-2xl font-bold text-gray-900">{brokers.length}</p>
              <p className="text-xs text-purple-600">Registrados</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && modalType === 'company' && <CompanyModal />}
      {showModal && modalType === 'address' && <AddressModal />}
      {showModal && modalType === 'classification' && <RiskClassificationModal />}
      {showModal && modalType === 'cumulo' && <CumuloModal />}
      {showModal && modalType === 'contract' && <ContractModal />}
      {showModal && modalType === 'cumulo-line' && <CumuloLineModal />}
    </div>
  );
};

export default MaintainersModule;