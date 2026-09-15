import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Splash({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),

      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >

        {/* Ícone de estoque feito com Views */}
        <View style={styles.iconContainer}>
          <View style={styles.boxTop} />
          
          <View style={styles.box}>
            <View style={styles.boxLine} />
            <View style={styles.boxLineSmall} />
          </View>

          <View style={styles.check}>
            <Text style={styles.checkText}>✓</Text>
          </View>
        </View>

        {/* Nome do sistema */}
        <Text style={styles.title}>
          STOCK
        </Text>

        <Text style={styles.subtitle}>
          CONTROLE DE ESTOQUE
        </Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Organização, controle e praticidade
        </Text>

      </Animated.View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          SISTEMA DE GESTÃO
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#087BC9",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
  },

  // Ícone
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  box: {
    width: 58,
    height: 48,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  boxTop: {
    position: "absolute",
    top: 17,
    width: 42,
    height: 15,
    borderWidth: 3,
    borderColor: "#fff",
    borderBottomWidth: 0,
    borderRadius: 4,
  },

  boxLine: {
    width: 30,
    height: 3,
    backgroundColor: "#fff",
    marginBottom: 7,
    borderRadius: 2,
  },

  boxLineSmall: {
    width: 20,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
  },

  check: {
    position: "absolute",
    right: 2,
    bottom: 4,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  checkText: {
    color: "#087BC9",
    fontSize: 20,
    fontWeight: "bold",
  },

  // Textos
  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 2,
    marginTop: 5,
  },

  divider: {
    width: 45,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
    marginVertical: 18,
  },

  description: {
    color: "#E8F5FF",
    fontSize: 12,
    letterSpacing: 0.5,
  },

  footer: {
    position: "absolute",
    bottom: 30,
  },

  footerText: {
    color: "#D8F0FF",
    fontSize: 9,
    letterSpacing: 2,
  },
});