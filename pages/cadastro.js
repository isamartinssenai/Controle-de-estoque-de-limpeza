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

import axios from "axios";
import { StatusBar } from "expo-status-bar";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const [loading, setLoading] = useState(false);

function formatDate(data) {
const [day, month, year] = data.split("/");
return `${year}-${month}-${day}`;
}

  async function Cadastrar() {

    if (
      nome === "" ||
      email === "" ||
      senha === "" ||
      dataNascimento === "" ||
      cpf === ""
    ) {
      Alert.alert(
        "Atenção!",
        "Preencha todos os campos."
      );

      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Atenção!",
        "A senha deve ter pelo menos 6 caracteres."
      );

      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://192.168.56.1:8000/api/cadastra_usuario",
        {
          nome: nome,
          email: email,
          senha: senha,
          data_nascimento: formatDate(dataNascimento),
          cpf: cpf,
        }
      );

      console.log("Resposta da API:");
      console.log(response.data);

      if (response.data.erro === "n") {

        Alert.alert(
          "Sucesso!",
          response.data.message ||
          "Usuário cadastrado com sucesso!",
          [
            {
              text: "OK",
              onPress: () => navigation.replace("Login"),
            },
          ]
        );

      } else {

        Alert.alert(
          "Erro!",
          response.data.message ||
          "Não foi possível realizar o cadastro."
        );

      }

    } catch (error) {

      console.log("ERRO COMPLETO:", error);

      if (error.response) {

        console.log(
          "Resposta do servidor:",
          error.response.data
        );

        Alert.alert(
          "Erro!",
          error.response.data.message ||
          "Não foi possível realizar o cadastro."
        );

      } else {

        Alert.alert(
          "Erro de conexão",
          "Não foi possível conectar com a API."
        );

      }

    } finally {

      setLoading(false);

    }
  }

  return (

    <View style={styles.container}>

      <StatusBar style="light" />

      <View style={styles.content}>

        <View style={styles.welcome}>

          <Text style={styles.title}>
            CRIE SUA CONTA
          </Text>

          <Text style={styles.description}>
            Cadastre seus dados para começar a utilizar
            o sistema de controle de estoque.
          </Text>

        </View>

        <View style={styles.card}>

          <Text style={styles.loginTitle}>
            CADASTRO DE USUÁRIO
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Data de nascimento"
            placeholderTextColor="#999"
            value={dataNascimento}
            onChangeText={setDataNascimento}
            keyboardType=""
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#999"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            maxLength={11}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={Cadastrar}
            disabled={loading}
          >

            {loading ? (

              <ActivityIndicator color="#fff" />

            ) : (

              <Text style={styles.buttonText}>
                Cadastrar
              </Text>

            )}

          </TouchableOpacity>

          <Text style={styles.register}>

            Já possui uma conta?{" "}

            <Text
              style={styles.link}
              onPress={() => navigation.replace("Login")}
            >
              Entrar
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
    marginBottom: 20,
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
    marginBottom: 10,
  },

  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#087BC9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 8,
    color: "#888",
  },

  link: {
    color: "#087BC9",
    fontSize: 8,
    fontWeight: "bold",
  },

});