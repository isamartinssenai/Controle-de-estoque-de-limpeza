import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>

          <View>
            <Text style={styles.welcome}>
              SEJA BEM-VINDO 👋
            </Text>

            <Text style={styles.title}>
              Controle de Estoque
            </Text>
          </View>

          <TouchableOpacity
            style={styles.logout}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.logoutText}>
              Sair
            </Text>
          </TouchableOpacity>

        </View>


        {/* RESUMO */}
        <Text style={styles.sectionTitle}>
          Resumo do estoque
        </Text>

        <View style={styles.cards}>

          {/* CARD 1 */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>
                📦
              </Text>
            </View>

            <View>
              <Text style={styles.cardNumber}>
                120
              </Text>

              <Text style={styles.cardText}>
                Produtos
              </Text>
            </View>
          </View>


          {/* CARD 2 */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>
                📊
              </Text>
            </View>

            <View>
              <Text style={styles.cardNumber}>
                98
              </Text>

              <Text style={styles.cardText}>
                Em estoque
              </Text>
            </View>
          </View>


          {/* CARD 3 */}
          <View style={styles.infoCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>
                ⚠️
              </Text>
            </View>

            <View>
              <Text style={styles.cardNumber}>
                22
              </Text>

              <Text style={styles.cardText}>
                Estoque baixo
              </Text>
            </View>
          </View>

        </View>


        {/* AÇÕES */}
        <Text style={styles.sectionTitle}>
          Ações rápidas
        </Text>


        {/* CADASTRAR ESTOQUE */}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => {
            // Depois podemos colocar a tela de cadastro aqui
          }}
        >
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>
              +
            </Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Cadastrar estoque
            </Text>

            <Text style={styles.actionDescription}>
              Adicione novos produtos ao estoque
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>


        {/* PRODUTOS */}
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => {
            // Depois podemos colocar a tela de produtos aqui
          }}
        >
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>
              📦
            </Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Ver produtos
            </Text>

            <Text style={styles.actionDescription}>
              Consulte todos os produtos cadastrados
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>


        {/* ESTOQUE BAIXO */}
        <TouchableOpacity
          style={styles.actionCard}
        >
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>
              ⚠
            </Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Estoque baixo
            </Text>

            <Text style={styles.actionDescription}>
              Confira os produtos que precisam de reposição
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>


        {/* RODAPÉ */}
        <Text style={styles.footer}>
          SISTEMA DE CONTROLE DE ESTOQUE
        </Text>

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#087BC9",
  },

  scroll: {
    padding: 20,
    paddingBottom: 35,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  welcome: {
    color: "#DFF2FF",
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 5,
  },

  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },

  logout: {
    backgroundColor: "#fff",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 6,
  },

  logoutText: {
    color: "#087BC9",
    fontSize: 11,
    fontWeight: "bold",
  },


  /* SEÇÕES */

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },


  /* CARDS */

  cards: {
    gap: 10,
    marginBottom: 28,
  },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#E8F5FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  icon: {
    fontSize: 20,
  },

  cardNumber: {
    color: "#087BC9",
    fontSize: 20,
    fontWeight: "bold",
  },

  cardText: {
    color: "#777",
    fontSize: 11,
    marginTop: 2,
  },


  /* AÇÕES */

  actionCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#087BC9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  actionIconText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },

  actionContent: {
    flex: 1,
  },

  actionTitle: {
    color: "#333",
    fontSize: 13,
    fontWeight: "bold",
  },

  actionDescription: {
    color: "#888",
    fontSize: 9,
    marginTop: 3,
  },

  arrow: {
    color: "#087BC9",
    fontSize: 25,
    fontWeight: "bold",
  },


  /* FOOTER */

  footer: {
    textAlign: "center",
    color: "#D8F0FF",
    fontSize: 8,
    letterSpacing: 1.5,
    marginTop: 20,
  },

});