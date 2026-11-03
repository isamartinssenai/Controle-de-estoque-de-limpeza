import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "http://10.122.35.182:8000/api";
const TOKEN_KEY = "auth_token";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      // Altere para "password" se esse for o nome esperado pelo Laravel.
      senha: password,
    }),
  });

  const data = await response.json();

  if (!response.ok || data.erro === "s") {
    throw new Error(data.mensagem || "Usuário ou senha incorretos.");
  }

  if (data.token) {
    await AsyncStorage.setItem(TOKEN_KEY, data.token);
  }

  return data;
}

export async function getAuthToken() {
  return AsyncStorage.getItem(TOKEN_KEY);
}

export async function apiFetch(endpoint, options = {}) {
  const token = await getAuthToken();

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}

export async function logout() {
  await AsyncStorage.removeItem(TOKEN_KEY);
}