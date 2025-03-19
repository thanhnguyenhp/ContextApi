import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AuthContext } from "./AuthContext";

const { width, height } = Dimensions.get("window");

export default function AccountScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.name}>Thanh Nguyen</Text>
          <Text style={styles.role}>Mobile developer</Text>
          <Text style={styles.description}>
            
            Sinh vien lop D17CNPM5 thuoc truong Dai hoc Dien Luc
          </Text>

          <TouchableOpacity style={styles.signOutButton} onPress={logout}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    width: "100%",
    height: height * 0.2,
    backgroundColor: "#00AEEF",
  },
  contentWrapper: {
    position: "absolute",
    top: height * 0.15,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 16,
    color: "#00AEEF",
    fontWeight: "600",
    marginTop: 5,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  signOutButton: {
    marginTop: 15,
    backgroundColor: "#F7931E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  signOutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

