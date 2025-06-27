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
  Briefcase
} from 'lucide-react';

const MaintainersModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('reaseguradoras');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Reaseguradoras actualizadas según el documento
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
    },
    {
      id: 4,
      name: 'Hannover Re',
      country: 'Alemania',
      rating: 'AA-',
      contact: 'info@hannover-re.com',
      phone: '+49 511 5604 0',
      address: 'Karl-Wiechert-Allee 50, 30625 Hannover',
      website: 'www.hannover-re.com',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'SCOR',
      country: 'Francia',
      rating: 'A+',
      contact: 'contact@scor.com',
      phone: '+33 1 58 44 70 00',
      address: '5 Avenue Kléber, 75116 Paris',
      website: 'www.scor.com',
      status: 'Activo'
    },
    {
      id: 6,
      name: 'Lloyd\'s of London',
      country: 'Reino Unido',
      rating: 'A',
      contact: 'enquiries@lloyds.com',
      phone: '+44 20 7327 1000',
      address: 'One Lime Street, London EC3M 7HA',
      website: 'www.lloyds.com',
      status: 'Activo'
    },
    {
      id: 7,
      name: 'Berkshire Hathaway Re',
      country: 'Estados Unidos',
      rating: 'AA+',
      contact: 'info@brk.com',
      phone: '+1 402 346 1400',
      address: '3555 Farnam Street, Omaha, NE 68131',
      website: 'www.berkshirehathaway.com',
      status: 'Activo'
    },
    {
      id: 8,
      name: 'Gen Re',
      country: 'Estados Unidos',
      rating: 'AA+',
      contact: 'info@genre.com',
      phone: '+1 203 328 5000',
      address: '175 King Street, Armonk, NY 10504',
      website: 'www.genre.com',
      status: 'Activo'
    },
    {
      id: 9,
      name: 'Arch Re',
      country: 'Estados Unidos',
      rating: 'A+',
      contact: 'info@archre.com',
      phone: '+1 441 278 9250',
      address: 'Wessex House, 45 Reid Street, Hamilton',
      website: 'www.archre.com',
      status: 'Activo'
    },
    {
      id: 10,
      name: 'PartnerRe',
      country: 'Bermuda',
      rating: 'A',
      contact: 'info@partnerre.com',
      phone: '+1 441 292 0888',
      address: 'Wellesley House, 90 Pitts Bay Road, Pembroke',
      website: 'www.partnerre.com',
      status: 'Activo'
    }
  ];

  // Corredores de reaseguros actualizados
  const corredores = [
    {
      id: 1,
      name: 'Aon Benfield',
      country: 'Reino Unido',
      contact: 'info@aonbenfield.com',
      phone: '+44 20 7086 8000',
      address: 'The Aon Centre, 200 Aldersgate Street, London',
      website: 'www.aon.com',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Willis Re',
      country: 'Reino Unido',
      contact: 'info@willisre.com',
      phone: '+44 20 3124 6000',
      address: '51 Lime Street, London EC3M 7DQ',
      website: 'www.willisre.com',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Guy Carpenter',
      country: 'Estados Unidos',
      contact: 'info@guycarp.com',
      phone: '+1 212 345 5000',
      address: '1166 Avenue of the Americas, New York',
      website: 'www.guycarp.com',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'JLT Re',
      country: 'Reino Unido',
      contact: 'info@jltre.com',
      phone: '+44 20 7528 4444',
      address: 'The St Botolph Building, 138 Houndsditch, London',
      website: 'www.jltre.com',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'TigerRisk Partners',
      country: 'Estados Unidos',
      contact: 'info@tigerrisk.com',
      phone: '+1 203 542 7000',
      address: '101 Park Avenue, New York, NY 10178',
      website: 'www.tigerrisk.com',
      status: 'Activo'
    }
  ];

  // Clasificadoras de riesgo actualizadas
  const clasificadoras = [
    {
      id: 1,
      name: 'Standard & Poor\'s (S&P)',
      country: 'Estados Unidos',
      contact: 'ratings@spglobal.com',
      phone: '+1 212 438 2000',
      address: '55 Water Street, New York, NY 10041',
      website: 'www.standardandpoors.com',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Moody\'s Investors Service',
      country: 'Estados Unidos',
      contact: 'info@moodys.com',
      phone: '+1 212 553 1653',
      address: '7 World Trade Center, 250 Greenwich Street, New York',
      website: 'www.moodys.com',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Fitch Ratings',
      country: 'Estados Unidos',
      contact: 'info@fitchratings.com',
      phone: '+1 212 908 0500',
      address: '33 Whitehall Street, New York, NY 10004',
      website: 'www.fitchratings.com',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'A.M. Best',
      country: 'Estados Unidos',
      contact: 'info@ambest.com',
      phone: '+1 908 439 2200',
      address: '1 Ambest Road, Oldwick, NJ 08858',
      website: 'www.ambest.com',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'DBRS Morningstar',
      country: 'Canadá',
      contact: 'info@dbrsmorningstar.com',
      phone: '+1 416 593 5577',
      address: '181 University Avenue, Suite 700, Toronto',
      website: 'www.dbrsmorningstar.com',
      status: 'Activo'
    }
  ];

  // Tipos de asociación/contrato actualizados
  const tiposAsociacion = [
    {
      id: 1,
      name: 'Cuota Parte (Quota Share)',
      description: 'El reasegurador participa en una proporción fija de todos los riesgos cedidos',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Excedente (Surplus)',
      description: 'El reasegurador acepta la parte que excede la retención de la cedente',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Exceso de Pérdida por Riesgo (WXL)',
      description: 'Cobertura que opera cuando una pérdida individual excede la retención',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'Exceso de Pérdida por Evento (CXL)',
      description: 'Cobertura para pérdidas agregadas causadas por un mismo evento',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'Stop Loss',
      description: 'Protección contra pérdidas agregadas anuales que excedan un porcentaje',
      status: 'Activo'
    },
    {
      id: 6,
      name: 'Facultativo',
      description: 'Reaseguro negociado individualmente para cada riesgo específico',
      status: 'Activo'
    },
    {
      id: 7,
      name: 'Automático',
      description: 'Reaseguro obligatorio según términos predefinidos del tratado',
      status: 'Activo'
    }
  ];

  // Ramos técnicos según el documento
  const ramosTecnicos = [
    {
      id: 1,
      name: 'Incendio y Líneas Aliadas',
      description: 'Cobertura contra incendio, rayo, explosión y riesgos adicionales',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Responsabilidad Civil General',
      description: 'Cobertura de responsabilidad civil extracontractual',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Automóviles',
      description: 'Seguros de vehículos motorizados terrestres',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'Todo Riesgo Construcción',
      description: 'Cobertura integral durante la construcción de obras',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'Cascos Marítimos',
      description: 'Seguros de embarcaciones y estructuras marítimas',
      status: 'Activo'
    },
    {
      id: 6,
      name: 'Transporte de Mercancías',
      description: 'Cobertura de bienes durante su transporte',
      status: 'Activo'
    },
    {
      id: 7,
      name: 'Aviación',
      description: 'Seguros de aeronaves y responsabilidad aeronáutica',
      status: 'Activo'
    },
    {
      id: 8,
      name: 'Vida Individual',
      description: 'Seguros de vida para personas naturales',
      status: 'Activo'
    },
    {
      id: 9,
      name: 'Vida Colectivo',
      description: 'Seguros de vida para grupos de personas',
      status: 'Activo'
    },
    {
      id: 10,
      name: 'Accidentes Personales',
      description: 'Cobertura por accidentes que afecten a las personas',
      status: 'Activo'
    }
  ];

  // Monedas según el documento
  const monedas = [
    {
      id: 1,
      name: 'Dólar Estadounidense',
      codigo: 'USD',
      simbolo: '$',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Euro',
      codigo: 'EUR',
      simbolo: '€',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Peso Chileno',
      codigo: 'CLP',
      simbolo: '$',
      status: 'Activo'
    },
    {
      id: 4,
      name: 'Libra Esterlina',
      codigo: 'GBP',
      simbolo: '£',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'Yen Japonés',
      codigo: 'JPY',
      simbolo: '¥',
      status: 'Activo'
    },
    {
      id: 6,
      name: 'Franco Suizo',
      codigo: 'CHF',
      simbolo: 'CHF',
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
          
          {(activeTab === 'reaseguradoras' || activeTab === 'corredores' || activeTab === 'clasificadoras') && (
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
          
          {(activeTab === 'tipos-asociacion' || activeTab === 'ramos-tecnicos') && (
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

          {activeTab === 'monedas' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.codigo || ''}
                  maxLength={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Símbolo
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  defaultValue={editingItem?.simbolo || ''}
                  maxLength={5}
                />
              </div>
            </>
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
                        <Shield className="h-5 w-5 text-purple-500 mr-3" />
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
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-indigo-500 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{tipo.name}</div>
                      </div>
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
                {ramosTecnicos.map((ramo) => (
                  <tr key={ramo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-orange-500 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{ramo.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{ramo.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ramo.status)}`}>
                        {ramo.status}
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
                    Código
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Símbolo
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
                        <div className="text-sm font-medium text-gray-900">{moneda.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {moneda.codigo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{moneda.simbolo}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(moneda.status)}`}>
                        {moneda.status}
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
          <p className="text-gray-600">Gestiona entidades del sistema de reaseguros</p>
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
              onClick={() => setActiveTab('tipos-asociacion')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'tipos-asociacion'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tipos de Asociación
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