import { useState, useEffect } from 'react';
import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  };
 

  const login = async (username: string, password: string) => {
    try {
      const userData = await authService.login(username, password);
      setUser(userData);
      router.push('/todos');
    } catch (error) {
      throw error;
    }
  };

  const register = async (username: string, password: string) => {
    try {
      await authService.register(username, password);
      router.push('/login');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push('/login');
  };

  return { user, loading, login, register, logout };
}