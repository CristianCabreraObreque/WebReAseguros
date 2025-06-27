import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'tecnico' | 'compania' | 'reaseguros';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  company?: string;
  permissions: string[];
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuarios de ejemplo para demostración
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@tecnico.com',
    name: 'Carlos Rodríguez',
    role: 'tecnico',
    company: 'Departamento Técnico',
    permissions: [
      'view_dashboard',
      'manage_contracts',
      'manage_maintainers',
      'view_placement',
      'manage_placement',
      'view_claims',
      'view_accounting',
      'create_contracts',
      'edit_contracts',
      'delete_contracts',
      'manage_reinsurers',
      'manage_brokers',
      'manage_technical_branches',
      'system_configuration'
    ],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    email: 'usuario@compania.com',
    name: 'María González',
    role: 'compania',
    company: 'Seguros La Cordillera',
    permissions: [
      'view_dashboard',
      'view_contracts',
      'view_placement',
      'manage_placement',
      'view_claims',
      'create_placement',
      'upload_policies',
      'view_statistics'
    ],
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    email: 'reaseguros@swiss.com',
    name: 'Hans Mueller',
    role: 'reaseguros',
    company: 'Swiss Re Chile',
    permissions: [
      'view_dashboard',
      'view_contracts',
      'view_placement',
      'view_accounting',
      'manage_accounting',
      'view_claims',
      'generate_bordereau',
      'manage_current_account',
      'view_financial_reports'
    ],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay una sesión guardada
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de autenticación
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password === '123456') { // Password simple para demo
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission) || false;
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated,
      hasPermission,
      hasRole
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};