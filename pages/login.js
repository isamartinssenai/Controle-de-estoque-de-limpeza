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
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);


  async function Logar() {

    if (email === "" || pass === "") {

      Alert.alert(
        "Atenção!",
        "Digite seu e-mail e sua senha."
      );

      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(
        "http://192.168.56.1:8000/api/login",
        {
          email: email,
          senha: pass,
        }
      );

      console.log("Resposta da API:");
      console.log(response.data);


      // LOGIN REALIZADO
      if (response.data.erro === "n") {

        // Salva o token no celular
        if (response.data.token) {

          await AsyncStorage.setItem(
            "token",
            response.data.token
          );

        }

        Alert.alert(
          "Sucesso!",
          "Usuário logado com sucesso!",
          [
            {
              text: "OK",
              onPress: () => navigation.replace("Home"),
            },
          ]
        );

      } else {

        Alert.alert(
          "Erro!",
          response.data.mensagem ||
          "E-mail ou senha incorretos."
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
          error.response.data.mensagem ||
          "Não foi possível realizar o login."
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

        {/* TEXTO DE BOAS-VINDAS */}

        <View style={styles.welcome}>

          <Text style={styles.title}>
            SEJA BEM-VINDO
          </Text>

          <Text style={styles.description}>
            Acesse sua conta para continuar e aproveitar
            todas as funcionalidades do nosso sistema.
          </Text>

        </View>


        {/* CARD */}

        <View style={styles.card}>

          <Text style={styles.loginTitle}>
            ACESSE SUA CONTA
          </Text>


          {/* EMAIL */}

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />


          {/* SENHA */}

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={pass}
            onChangeText={setPass}
            secureTextEntry={true}
          />


          {/* BOTÃO */}

          <TouchableOpacity
            style={styles.button}
            onPress={Logar}
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


          {/* CADASTRO */}

          <Text style={styles.register}>
            Ainda não possui uma conta?{" "}

            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Cadastro")}
            >
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