import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert(
        "Atenção",
        "Digite seu usuário e sua senha."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://10.122.41.156:8000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: username,
            senha: password,
          }),
        }
      );

      const data = await response.json();

      console.log("Status:", response.status);
      console.log("Resposta da API:", data);

      if (data.erro === "n") {
        Alert.alert(
          "Sucesso!",
          "Login realizado com sucesso!"
        );

        console.log("Token:", data.token);
      } else {
        Alert.alert(
          "Erro!",
          data.mensagem || "Usuário ou senha incorretos."
        );
      }
    } catch (error) {
      console.log("Erro:", error);

      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar com a API."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>

        <View style={styles.welcome}>
          <Text style={styles.title}>
            SEJA BEM-VINDO
          </Text>

          <Text style={styles.description}>
            Acesse sua conta para continuar e aproveitar
            todas as funcionalidades do nosso sistema.
          </Text>
        </View>

        <View style={styles.card}>

          <Text style={styles.loginTitle}>
            ACESSE SUA CONTA
          </Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <View style={styles.options}>

            <TouchableOpacity style={styles.remember}>
              <View style={styles.checkbox} />

              <Text style={styles.smallText}>
                Lembrar de mim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.link}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Entrar
              </Text>
            )}
          </TouchableOpacity>

          <Text style={styles.register}>
            Ainda não possui uma conta?{" "}
            <Text style={styles.link}>
              Cadastre-se
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#087BC9",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  welcome: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 25,
  },

  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  description: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },

  card: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },

  loginTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },

  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 11,
    color: "#333",
    marginBottom: 9,
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  remember: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 2,
    marginRight: 5,
  },

  smallText: {
    color: "#777",
    fontSize: 8,
  },

  link: {
    color: "#087BC9",
    fontSize: 8,
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#087BC9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 13,
    fontSize: 8,
    color: "#888",
  },
});