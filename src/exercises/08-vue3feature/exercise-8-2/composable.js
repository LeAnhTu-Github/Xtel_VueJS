// useAuth composable
import { ref, computed } from 'vue';

export const useAuth = () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const login = async (credentials) => {
    user.value = await authAPI.login(credentials);
  };

  const logout = () => {
    user.value = null;
  };

  return { user, isAuthenticated, login, logout };
};

// useFetch composable
export const useFetch = (url) => {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData };
};
