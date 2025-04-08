import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/Feather";

export default function LoginScreen() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image source={require("../../assets/images/wisetrip-acess.png")} />
        </View>
        <Text style={styles.acessTitle}>Acesse</Text>
        <Text style={styles.acessText}>Com o email e senha</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.inputTextTitle}>Login</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputPlaceholder}
            placeholder="Digite seu nome"
          />
        </View>
        <Text style={styles.inputTextTitle}>Senha</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputPlaceholder}
            placeholder="Digite sua senha"
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Icon
              name={mostrarSenha ? "eye" : "eye-off"}
              size={24}
              color="#AFB1B6"
            />
          </TouchableOpacity>
        </View>
        <Pressable onPress={() => setChecked(!checked)} style={styles.checkboxContainer}>
          <View style={[styles.checkbox, checked && styles.checked]}>
            {checked && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.label}>Lembrar minha senha</Text>
        </Pressable>
        <Link href={"/login"} style={styles.button}>
          Faça seu login
        </Link>
      <View style={styles.footerContent}>
        <Link href={"/cadastro"} style={styles.footerText}>Criar conta</Link>
        <Link href={"/"} style={styles.footerText}>Esqueci minha senha</Link>
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002952",
  },
  content: {
    justifyContent: "center",
    marginTop: "65%",
    marginRight: 26,
    marginLeft: 26,
  },
  contentImage: {
    alignItems: "center",
  },
  acessTitle: {
    marginTop: 20,
    textAlign: "left",
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
  },
  acessText: {
    fontSize: 18,
    fontWeight: "regular",
    color: "#fff",
  },
  box: {
    position: "absolute",
    top: "60%",
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "#fff",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    justifyContent: "center",
    gap: 8,
  },
  inputTextTitle: {
    textAlign: "left",
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
  },
  inputBox: {
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#AFB1B6",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputPlaceholder: {
    textAlign: "left",
    width: "90%",
  },
  textTitle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  textSubtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#AFB1B6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#002952",
  },
  checkmark: {
    fontSize: 16,
    color: "#fff",
  },
  label: {
    fontSize: 16,
    color: "#000",
  },

  button: {
    backgroundColor: "#002952",
    paddingVertical: 12,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  footerContent:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  footerText:{
    fontSize: 16,
    color: "#000",
    textDecorationLine: "underline",
  }
});
