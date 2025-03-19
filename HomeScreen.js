import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const insightsData = [
  { id: "1", title: "Scan new", icon: "scan-outline", count: "Scanned 483", color: "#D6D4FF" },
  { id: "2", title: "Counterfeits", icon: "warning-outline", count: "Counterfeited 32", color: "#FCE4E4" },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 50 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hello 👋</Text>
      <Text style={{ fontSize: 16, color: "#666" }}>Nguyen xuan thanh</Text>

      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Your Insights</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
        {insightsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: "48%",
              backgroundColor: item.color,
              borderRadius: 12,
              padding: 20,
              marginBottom: 10,
              alignItems: "center",
            }}
            onPress={() => item.id === "1" && navigation.navigate("Scan")}
          >
            <Icon name={item.icon} size={30} color="#444" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: "#666" }}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
