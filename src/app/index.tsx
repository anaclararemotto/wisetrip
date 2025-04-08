import { Link, useRouter } from "expo-router";
import { View, StyleSheet, Text, Pressable, Image, Button } from "react-native";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/images/wisetrip_telainicial.png")} />
        <Text style={styles.wisetripText}>WiseTrip</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.textBox}>
          <Text style={styles.textTitle}>Bem-vindo!</Text>
          <Text style={styles.textSubtitle}>
            Acesse sua conta e viaje sem preocupações.
          </Text>
        </View>
        
        <Link href={"/login"} style={styles.button}>Faça seu login</Link>
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
  },
  wisetripText: {
    textAlign: "center",
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
  },
  box: {
    position: "absolute",
    top: "65%",
    left: 0,
    right: 0,
    height: "35%",
    backgroundColor: "#fff",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    justifyContent: "center",
  },
  textBox: {
    alignItems: "center",
    paddingHorizontal: 70,
  },
  textTitle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  textSubtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#002952",
    paddingVertical: 12,
    margin: 20,
    borderRadius: 8,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
