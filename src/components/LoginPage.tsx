import React, { useState } from 'react';
import { Shield, User, Lock, Building, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Credenciales inválidas. Verifique su email y contraseña.');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const demoUsers = [
    {
      role: 'Perfil Técnico',
      email: 'admin@tecnico.com',
      description: 'Gestión de contratos, mantenedores y configuración del sistema',
      color: 'bg-[#0D4F45]',
      icon: Shield
    },
    {
      role: 'Perfil Compañía',
      email: 'usuario@compania.com',
      description: 'Colocación de seguros y gestión de pólizas',
      color: 'bg-[#ED6A26]',
      icon: Building
    },
    {
      role: 'Perfil Reaseguros',
      email: 'reaseguros@swiss.com',
      description: 'Gestión de cuentas corrientes y bordereaux',
      color: 'bg-[#0D4F45]',
      icon: User
    }
  ];

  const fillCredentials = (userEmail: string) => {
    setEmail(userEmail);
    setPassword('123456');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D4F45] via-[#0D4F45]/80 to-[#0D4F45] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel de Login */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src="/logo-m2mBroker-462x81-1.png" alt="m2m Broker" className="h-12" />
            </div>
            <p className="text-gray-600">Sistema Profesional de Gestión de Reaseguros</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <User className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED6A26] focus:border-transparent"
                  placeholder="Ingrese su email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED6A26] focus:border-transparent"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ED6A26] hover:bg-[#C5581F] text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Para la demostración, use cualquiera de los perfiles de la derecha
            </p>
          </div>
        </div>

        {/* Panel de Perfiles Demo */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Perfiles de Usuario</h2>
            <p className="text-[#F5F5F5]">Seleccione un perfil para acceder al sistema</p>
          </div>

          {demoUsers.map((user, index) => {
            const IconComponent = user.icon;
            return (
              <div
                key={index}
                onClick={() => fillCredentials(user.email)}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${user.color} p-3 rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{user.role}</h3>
                    <p className="text-[#F5F5F5] text-sm mb-2">{user.description}</p>
                    <div className="bg-black/20 rounded-lg p-2">
                      <p className="text-xs text-[#F5F5F5] font-mono">{user.email}</p>
                      <p className="text-xs text-[#F5F5F5]">Contraseña: 123456</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white font-medium mb-2">Funcionalidades por Perfil:</h4>
            <ul className="text-sm text-[#F5F5F5] space-y-1">
              <li>• <strong>Técnico:</strong> Contratos, mantenedores, configuración</li>
              <li>• <strong>Compañía:</strong> Colocación de seguros, carga de pólizas</li>
              <li>• <strong>Reaseguros:</strong> Cuentas corrientes, bordereaux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;