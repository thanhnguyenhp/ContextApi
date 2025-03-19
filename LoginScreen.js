import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "./AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={{ color: "#F7941D" }}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="red" />
          <Text style={styles.socialText}> Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon name="facebook" size={20} color="white" />
          <Text style={[styles.socialText, { color: "white" }]}> Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>
          Not yet a member? <Text style={{ color: "#F7941D" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: "#F7941D",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  facebookButton: {
    backgroundColor: "#4267B2",
    borderColor: "#4267B2",
  },
  socialText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  signUpText: {
    fontSize: 16,
    color: "#666",
  },
});
