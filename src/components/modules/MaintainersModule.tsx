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
  X,
  Shield,
  FileText,
  Target,
  Briefcase,
  Star,
  Calendar,
  DollarSign,
  Percent,
  Hash,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reaseguradoras');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Reaseguradoras según especificaciones técnicas
  const reaseguradoras = [
    {
      id: 1,
      codigo: 'SWRE001',
      nombre: 'Swiss Re',
      razonSocial: 'Swiss Reinsurance Company Ltd.',
      pais: 'Suiza',
      ciudad: 'Zurich',
      direccion: 'Mythenquai 50/60, 8022 Zurich',
      telefono: '+41 43 285 2121',
      email: 'contact@swissre.com',
      sitioWeb: 'www.swissre.com',
      contactoPrincipal: 'Hans Mueller',
      cargoContacto: 'Senior Underwriter',
      emailContacto: 'hans.mueller@swissre.com',
      telefonoContacto: '+41 43 285 2150',
      ratingAMBest: 'A+',
      ratingSP: 'AA-',
      ratingMoodys: 'Aa3',
      ratingFitch: 'AA-',
      fechaInicioRelacion: '2020-01-15',
      tipoRelacion: 'Tratado Automático',
      limiteCredito: 50000000,
      monedaCredito: 'USD',
      comisionPromedio: 15.5,
      estado: 'Activo',
      observaciones: 'Reaseguradora principal para ramos de vida y no vida'
    },
    {
      id: 2,
      codigo: 'MURE001',
      nombre: 'Munich Re',
      razonSocial: 'Münchener Rückversicherungs-Gesellschaft AG',
      pais: 'Alemania',
      ciudad: 'Munich',
      direccion: 'Königinstraße 107, 80802 Munich',
      telefono: '+49 89 3891 0',
      email: 'info@munichre.com',
      sitioWeb: 'www.munichre.com',
      contactoPrincipal: 'Klaus Weber',
      cargoContacto: 'Regional Manager',
      emailContacto: 'klaus.weber@munichre.com',
      telefonoContacto: '+49 89 3891 1250',
      ratingAMBest: 'A+',
      ratingSP: 'AA-',
      ratingMoodys: 'Aa3',
      ratingFitch: 'AA-',
      fechaInicioRelacion: '2019-03-20',
      tipoRelacion: 'Tratado Automático',
      limiteCredito: 45000000,
      monedaCredito: 'EUR',
      comisionPromedio: 16.2,
      estado: 'Activo',
      observaciones: 'Especialista en riesgos catastróficos'
    },
    {
      id: 3,
      codigo: 'MARE001',
      nombre: 'Mapfre Re',
      razonSocial: 'Mapfre Re, Compañía de Reaseguros S.A.',
      pais: 'España',
      ciudad: 'Madrid',
      direccion: 'Carretera de Pozuelo 52, 28222 Madrid',
      telefono: '+34 91 581 1100',
      email: 'reaseguro@mapfre.com',
      sitioWeb: 'www.mapfrere.com',
      contactoPrincipal: 'Carlos Rodriguez',
      cargoContacto: 'Director Técnico',
      emailContacto: 'carlos.rodriguez@mapfre.com',
      telefonoContacto: '+34 91 581 1150',
      ratingAMBest: 'A',
      ratingSP: 'A',
      ratingMoodys: 'A2',
      ratingFitch: 'A',
      fechaInicioRelacion: '2021-06-10',
      tipoRelacion: 'Facultativo',
      limiteCredito: 25000000,
      monedaCredito: 'EUR',
      comisionPromedio: 18.0,
      estado: 'Activo',
      observaciones: 'Enfoque en mercado latinoamericano'
    }
  ];

  // Corredores según especificaciones técnicas
  const corredores = [
    {
      id: 1,
      codigo: 'AONB001',
      nombre: 'Aon Benfield',
      razonSocial: 'Aon Benfield Limited',
      pais: 'Reino Unido',
      ciudad: 'Londres',
      direccion: 'The Aon Centre, 200 Aldersgate Street, London',
      telefono: '+44 20 7086 8000',
      email: 'info@aonbenfield.com',
      sitioWeb: 'www.aon.com',
      contactoPrincipal: 'James Thompson',
      cargoContacto: 'Senior Broker',
      emailContacto: 'james.thompson@aon.com',
      telefonoContacto: '+44 20 7086 8150',
      licencia: 'FCA-REG-2019-001',
      fechaVencimientoLicencia: '2025-12-31',
      comisionPromedio: 2.5,
      volumenColocado: 150000000,
      monedaVolumen: 'USD',
      especialidades: ['Vida', 'No Vida', 'Catastrófico'],
      estado: 'Activo',
      observaciones: 'Corredor global líder en reaseguros'
    },
    {
      id: 2,
      codigo: 'WILL001',
      nombre: 'Willis Re',
      razonSocial: 'Willis Re Inc.',
      pais: 'Reino Unido',
      ciudad: 'Londres',
      direccion: '51 Lime Street, London EC3M 7DQ',
      telefono: '+44 20 3124 6000',
      email: 'info@willisre.com',
      sitioWeb: 'www.willisre.com',
      contactoPrincipal: 'Sarah Mitchell',
      cargoContacto: 'Managing Director',
      emailContacto: 'sarah.mitchell@willisre.com',
      telefonoContacto: '+44 20 3124 6100',
      licencia: 'FCA-REG-2020-002',
      fechaVencimientoLicencia: '2026-06-30',
      comisionPromedio: 2.8,
      volumenColocado: 120000000,
      monedaVolumen: 'USD',
      especialidades: ['Propiedad', 'Responsabilidad Civil', 'Marítimo'],
      estado: 'Activo',
      observaciones: 'Especialista en análisis de riesgos'
    }
  ];

  // Clasificadoras de riesgo según especificaciones técnicas
  const clasificadoras = [
    {
      id: 1,
      codigo: 'SP001',
      nombre: 'Standard & Poor\'s',
      razonSocial: 'S&P Global Ratings',
      pais: 'Estados Unidos',
      ciudad: 'Nueva York',
      direccion: '55 Water Street, New York, NY 10041',
      telefono: '+1 212 438 2000',
      email: 'ratings@spglobal.com',
      sitioWeb: 'www.standardandpoors.com',
      contactoPrincipal: 'Michael Johnson',
      cargoContacto: 'Senior Rating Analyst',
      emailContacto: 'michael.johnson@spglobal.com',
      telefonoContacto: '+1 212 438 2100',
      licencia: 'SEC-NRSRO-001',
      fechaVencimientoLicencia: '2025-12-31',
      escalasRating: ['AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-'],
      metodologia: 'Análisis fundamental y cuantitativo',
      frecuenciaRevision: 'Anual',
      estado: 'Activo',
      observaciones: 'Agencia de rating reconocida mundialmente'
    },
    {
      id: 2,
      codigo: 'MOOD001',
      nombre: 'Moody\'s',
      razonSocial: 'Moody\'s Investors Service',
      pais: 'Estados Unidos',
      ciudad: 'Nueva York',
      direccion: '7 World Trade Center, 250 Greenwich Street, New York',
      telefono: '+1 212 553 1653',
      email: 'info@moodys.com',
      sitioWeb: 'www.moodys.com',
      contactoPrincipal: 'Jennifer Davis',
      cargoContacto: 'Vice President',
      emailContacto: 'jennifer.davis@moodys.com',
      telefonoContacto: '+1 212 553 1700',
      licencia: 'SEC-NRSRO-002',
      fechaVencimientoLicencia: '2026-03-31',
      escalasRating: ['Aaa', 'Aa1', 'Aa2', 'Aa3', 'A1', 'A2', 'A3', 'Baa1', 'Baa2', 'Baa3'],
      metodologia: 'Análisis de crédito y riesgo',
      frecuenciaRevision: 'Semestral',
      estado: 'Activo',
      observaciones: 'Enfoque en análisis de solvencia'
    }
  ];

  // Tipos de contrato según especificaciones técnicas
  const tiposContrato = [
    {
      id: 1,
      codigo: 'QS',
      nombre: 'Cuota Parte (Quota Share)',
      descripcion: 'El reasegurador participa en una proporción fija de todos los riesgos cedidos por la cedente',
      categoria: 'Proporcional',
      aplicabilidad: ['Vida', 'No Vida'],
      caracteristicas: [
        'Participación fija en primas y siniestros',
        'Comisión de reaseguro aplicable',
        'Participación en gastos de adquisición'
      ],
      ventajas: [
        'Simplicidad administrativa',
        'Transferencia automática de riesgos',
        'Mejora del ratio de solvencia'
      ],
      desventajas: [
        'Cede también los buenos riesgos',
        'Menor control sobre la cartera'
      ],
      estado: 'Activo'
    },
    {
      id: 2,
      codigo: 'SUR',
      nombre: 'Excedente (Surplus)',
      descripcion: 'El reasegurador acepta la parte que excede la retención de la cedente hasta un límite determinado',
      categoria: 'Proporcional',
      aplicabilidad: ['Incendio', 'Ingeniería', 'Transporte'],
      caracteristicas: [
        'Retención variable según el riesgo',
        'Límite máximo de cesión',
        'Participación proporcional en primas y siniestros'
      ],
      ventajas: [
        'Mayor flexibilidad en la retención',
        'Mejor selección de riesgos',
        'Optimización de la capacidad'
      ],
      desventajas: [
        'Mayor complejidad administrativa',
        'Requiere evaluación individual de riesgos'
      ],
      estado: 'Activo'
    },
    {
      id: 3,
      codigo: 'WXL',
      nombre: 'Exceso de Pérdida por Riesgo (WXL)',
      descripcion: 'Cobertura que opera cuando una pérdida individual excede la retención de la cedente',
      categoria: 'No Proporcional',
      aplicabilidad: ['Responsabilidad Civil', 'Aviación', 'Marítimo'],
      caracteristicas: [
        'Prima fija independiente de siniestros',
        'Cobertura por evento individual',
        'Límite máximo de cobertura'
      ],
      ventajas: [
        'Protección contra grandes siniestros',
        'Estabilización de resultados',
        'Preservación de la rentabilidad'
      ],
      desventajas: [
        'Prima fija independiente de la experiencia',
        'No cubre acumulación de pequeños siniestros'
      ],
      estado: 'Activo'
    },
    {
      id: 4,
      codigo: 'CXL',
      nombre: 'Exceso de Pérdida por Evento (CXL)',
      descripcion: 'Cobertura para pérdidas agregadas causadas por un mismo evento catastrófico',
      categoria: 'No Proporcional',
      aplicabilidad: ['Catastrófico', 'Terremoto', 'Huracán'],
      caracteristicas: [
        'Cobertura por evento único',
        'Agregación de pérdidas por evento',
        'Definición específica de evento'
      ],
      ventajas: [
        'Protección contra catástrofes',
        'Cobertura de acumulación de riesgos',
        'Estabilización de resultados catastróficos'
      ],
      desventajas: [
        'Complejidad en la definición de eventos',
        'Primas elevadas para zonas de alto riesgo'
      ],
      estado: 'Activo'
    }
  ];

  // Ramos técnicos según especificaciones técnicas
  const ramosTecnicos = [
    {
      id: 1,
      codigo: 'INC',
      nombre: 'Incendio y Líneas Aliadas',
      descripcion: 'Cobertura contra incendio, rayo, explosión y riesgos adicionales como terremoto, inundación',
      categoria: 'Daños',
      subcategoria: 'Propiedad',
      riesgosIncluidos: [
        'Incendio',
        'Rayo',
        'Explosión',
        'Terremoto',
        'Inundación',
        'Vientos tempestuosos',
        'Granizo'
      ],
      exclusionesComunes: [
        'Guerra y actos de terrorismo',
        'Riesgos nucleares',
        'Desgaste natural',
        'Vicio propio'
      ],
      baseTecnica: 'Suma asegurada',
      unidadMedida: 'Monto asegurado',
      factoresRiesgo: ['Ubicación', 'Construcción', 'Ocupación', 'Protección'],
      regulacionAplicable: 'Circular SVS N° 2.124',
      estado: 'Activo'
    },
    {
      id: 2,
      codigo: 'RCG',
      nombre: 'Responsabilidad Civil General',
      descripcion: 'Cobertura de responsabilidad civil extracontractual por daños a terceros',
      categoria: 'Responsabilidad',
      subcategoria: 'Civil',
      riesgosIncluidos: [
        'Daños corporales a terceros',
        'Daños materiales a terceros',
        'Daños morales',
        'Gastos de defensa legal'
      ],
      exclusionesComunes: [
        'Responsabilidad contractual',
        'Daños a empleados',
        'Contaminación gradual',
        'Productos defectuosos'
      ],
      baseTecnica: 'Límite de responsabilidad',
      unidadMedida: 'Límite por evento/agregado',
      factoresRiesgo: ['Actividad', 'Facturación', 'Ubicación', 'Historial'],
      regulacionAplicable: 'Circular SVS N° 2.125',
      estado: 'Activo'
    },
    {
      id: 3,
      codigo: 'AUT',
      nombre: 'Automóviles',
      descripcion: 'Seguros de vehículos motorizados terrestres incluyendo daño propio y responsabilidad civil',
      categoria: 'Vehículos',
      subcategoria: 'Terrestres',
      riesgosIncluidos: [
        'Responsabilidad civil',
        'Daño propio por colisión',
        'Robo y hurto',
        'Incendio del vehículo',
        'Fenómenos naturales'
      ],
      exclusionesComunes: [
        'Conductor en estado de ebriedad',
        'Uso comercial no declarado',
        'Participación en competencias',
        'Desgaste normal'
      ],
      baseTecnica: 'Valor del vehículo',
      unidadMedida: 'Suma asegurada/Límite RC',
      factoresRiesgo: ['Edad conductor', 'Zona circulación', 'Uso vehículo', 'Marca/modelo'],
      regulacionAplicable: 'Ley N° 18.490',
      estado: 'Activo'
    }
  ];

  // Monedas según especificaciones técnicas
  const monedas = [
    {
      id: 1,
      codigo: 'USD',
      nombre: 'Dólar Estadounidense',
      simbolo: '$',
      pais: 'Estados Unidos',
      codigoNumerico: '840',
      decimales: 2,
      tasaCambio: 1.0000,
      fechaActualizacion: '2024-01-15',
      fuenteTasaCambio: 'Banco Central de Chile',
      esMonedaBase: true,
      estado: 'Activo'
    },
    {
      id: 2,
      codigo: 'EUR',
      nombre: 'Euro',
      simbolo: '€',
      pais: 'Zona Euro',
      codigoNumerico: '978',
      decimales: 2,
      tasaCambio: 1.0850,
      fechaActualizacion: '2024-01-15',
      fuenteTasaCambio: 'Banco Central Europeo',
      esMonedaBase: false,
      estado: 'Activo'
    },
    {
      id: 3,
      codigo: 'CLP',
      nombre: 'Peso Chileno',
      simbolo: '$',
      pais: 'Chile',
      codigoNumerico: '152',
      decimales: 0,
      tasaCambio: 890.50,
      fechaActualizacion: '2024-01-15',
      fuenteTasaCambio: 'Banco Central de Chile',
      esMonedaBase: false,
      estado: 'Activo'
    },
    {
      id: 4,
      codigo: 'GBP',
      nombre: 'Libra Esterlina',
      simbolo: '£',
      pais: 'Reino Unido',
      codigoNumerico: '826',
      decimales: 2,
      tasaCambio: 0.7850,
      fechaActualizacion: '2024-01-15',
      fuenteTasaCambio: 'Banco de Inglaterra',
      esMonedaBase: false,
      estado: 'Activo'
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
      case 'En Revisión':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingColor = (rating: string) => {
    if (rating.startsWith('AAA') || rating.startsWith('Aaa')) return 'bg-green-100 text-green-800';
    if (rating.startsWith('AA') || rating.startsWith('Aa')) return 'bg-blue-100 text-blue-800';
    if (rating.startsWith('A') || rating.startsWith('A')) return 'bg-indigo-100 text-indigo-800';
    if (rating.startsWith('BBB') || rating.startsWith('Baa')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
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
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {editingItem ? 'Editar' : 'Nuevo'} {activeTab.replace('-', ' ')}
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
        
        <div className="p-6 space-y-6">
          {/* Información Básica */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4">Información Básica</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.codigo || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.nombre || ''}
                />
              </div>
              {(activeTab === 'reaseguradoras' || activeTab === 'corredores' || activeTab === 'clasificadoras') && (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Razón Social
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue={editingItem?.razonSocial || ''}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      País
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue={editingItem?.pais || ''}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue={editingItem?.ciudad || ''}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Información de Contacto */}
          {(activeTab === 'reaseguradoras' || activeTab === 'corredores' || activeTab === 'clasificadoras') && (
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="text-lg font-medium text-emerald-900 mb-4">Información de Contacto</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows={2}
                    defaultValue={editingItem?.direccion || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    defaultValue={editingItem?.telefono || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    defaultValue={editingItem?.email || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sitio Web
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    defaultValue={editingItem?.sitioWeb || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contacto Principal
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    defaultValue={editingItem?.contactoPrincipal || ''}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Información Específica por Tipo */}
          {activeTab === 'reaseguradoras' && (
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="text-lg font-medium text-purple-900 mb-4">Información Financiera y Ratings</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating A.M. Best
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>A++</option>
                    <option>A+</option>
                    <option>A</option>
                    <option>A-</option>
                    <option>B++</option>
                    <option>B+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating S&P
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
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
                    Límite de Crédito
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    defaultValue={editingItem?.limiteCredito || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comisión Promedio (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    defaultValue={editingItem?.comisionPromedio || ''}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'monedas' && (
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-900 mb-4">Información Monetaria</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Símbolo
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    defaultValue={editingItem?.simbolo || ''}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código Numérico
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    defaultValue={editingItem?.codigoNumerico || ''}
                    maxLength={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Decimales
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="4"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    defaultValue={editingItem?.decimales || '2'}
                  />
                </div>
              </div>
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
              <option>En Revisión</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              defaultValue={editingItem?.observaciones || ''}
            />
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
                    País/Ciudad
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ratings
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Límite Crédito
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comisión
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
                          <div className="text-sm font-medium text-gray-900">{reaseguradora.nombre}</div>
                          <div className="text-sm text-gray-500">{reaseguradora.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <div>
                          <div className="text-sm text-gray-900">{reaseguradora.pais}</div>
                          <div className="text-sm text-gray-500">{reaseguradora.ciudad}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRatingColor(reaseguradora.ratingAMBest)}`}>
                          AM Best: {reaseguradora.ratingAMBest}
                        </span>
                        <br />
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRatingColor(reaseguradora.ratingSP)}`}>
                          S&P: {reaseguradora.ratingSP}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {formatCurrency(reaseguradora.limiteCredito, reaseguradora.monedaCredito)}
                          </div>
                          <div className="text-sm text-gray-500">{reaseguradora.monedaCredito}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Percent className="h-4 w-4 text-purple-500 mr-1" />
                        <span className="text-sm font-medium text-gray-900">{reaseguradora.comisionPromedio}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(reaseguradora.estado)}`}>
                        {reaseguradora.estado}
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
                    País/Ciudad
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Licencia
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volumen Colocado
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comisión
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
                          <div className="text-sm font-medium text-gray-900">{corredor.nombre}</div>
                          <div className="text-sm text-gray-500">{corredor.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <div>
                          <div className="text-sm text-gray-900">{corredor.pais}</div>
                          <div className="text-sm text-gray-500">{corredor.ciudad}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{corredor.licencia}</div>
                        <div className="text-sm text-gray-500">Vence: {corredor.fechaVencimientoLicencia}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {formatCurrency(corredor.volumenColocado, corredor.monedaVolumen)}
                          </div>
                          <div className="text-sm text-gray-500">{corredor.monedaVolumen}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Percent className="h-4 w-4 text-purple-500 mr-1" />
                        <span className="text-sm font-medium text-gray-900">{corredor.comisionPromedio}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(corredor.estado)}`}>
                        {corredor.estado}
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
                    País/Ciudad
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Licencia
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metodología
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frecuencia
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
                        <Shield className="h-5 w-5 text-purple-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{clasificadora.nombre}</div>
                          <div className="text-sm text-gray-500">{clasificadora.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <div>
                          <div className="text-sm text-gray-900">{clasificadora.pais}</div>
                          <div className="text-sm text-gray-500">{clasificadora.ciudad}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{clasificadora.licencia}</div>
                        <div className="text-sm text-gray-500">Vence: {clasificadora.fechaVencimientoLicencia}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{clasificadora.metodologia}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-sm text-gray-900">{clasificadora.frecuenciaRevision}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(clasificadora.estado)}`}>
                        {clasificadora.estado}
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

      case 'tipos-contrato':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo de Contrato
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aplicabilidad
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
                {tiposContrato.map((tipo) => (
                  <tr key={tipo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-indigo-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{tipo.nombre}</div>
                          <div className="text-sm text-gray-500">{tipo.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        tipo.categoria === 'Proporcional' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {tipo.categoria}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {tipo.aplicabilidad.map((item, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate" title={tipo.descripcion}>
                        {tipo.descripcion}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(tipo.estado)}`}>
                        {tipo.estado}
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

      case 'ramos-tecnicos':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ramo Técnico
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Base Técnica
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Regulación
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
                {ramosTecnicos.map((ramo) => (
                  <tr key={ramo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-orange-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{ramo.nombre}</div>
                          <div className="text-sm text-gray-500">{ramo.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{ramo.categoria}</div>
                        <div className="text-sm text-gray-500">{ramo.subcategoria}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{ramo.baseTecnica}</div>
                        <div className="text-sm text-gray-500">{ramo.unidadMedida}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ramo.regulacionAplicable}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ramo.estado)}`}>
                        {ramo.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(ramo)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(ramo.id)}
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

      case 'monedas':
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Moneda
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código Numérico
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tasa de Cambio
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última Actualización
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
                {monedas.map((moneda) => (
                  <tr key={moneda.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {moneda.simbolo} {moneda.nombre}
                          </div>
                          <div className="text-sm text-gray-500">{moneda.codigo}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{moneda.pais}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {moneda.codigoNumerico}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {moneda.esMonedaBase ? (
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        ) : (
                          <Hash className="h-4 w-4 text-gray-400 mr-1" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {moneda.esMonedaBase ? 'Base' : moneda.tasaCambio.toFixed(4)}
                          </div>
                          <div className="text-sm text-gray-500">{moneda.fuenteTasaCambio}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-sm text-gray-900">{moneda.fechaActualizacion}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(moneda.estado)}`}>
                        {moneda.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(moneda)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(moneda.id)}
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
          <p className="text-gray-600">Gestiona entidades maestras del sistema de reaseguros según especificaciones técnicas</p>
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
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('reaseguradoras')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'reaseguradoras'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reaseguradoras
            </button>
            <button
              onClick={() => setActiveTab('corredores')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'corredores'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Corredores
            </button>
            <button
              onClick={() => setActiveTab('clasificadoras')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'clasificadoras'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Clasificadoras
            </button>
            <button
              onClick={() => setActiveTab('tipos-contrato')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'tipos-contrato'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tipos de Contrato
            </button>
            <button
              onClick={() => setActiveTab('ramos-tecnicos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'ramos-tecnicos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ramos Técnicos
            </button>
            <button
              onClick={() => setActiveTab('monedas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'monedas'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Monedas
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
                placeholder={`Buscar ${activeTab.replace('-', ' ')}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filtros Avanzados</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          {renderTable()}
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reaseguradoras</p>
              <p className="text-2xl font-bold text-blue-600">{reaseguradoras.length}</p>
            </div>
            <Building className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Corredores Activos</p>
              <p className="text-2xl font-bold text-emerald-600">{corredores.filter(c => c.estado === 'Activo').length}</p>
            </div>
            <Users className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ramos Técnicos</p>
              <p className="text-2xl font-bold text-orange-600">{ramosTecnicos.length}</p>
            </div>
            <Target className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monedas Configuradas</p>
              <p className="text-2xl font-bold text-green-600">{monedas.length}</p>
            </div>
            <Briefcase className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal />}
    </div>
  );
};

export default MaintainersModule;