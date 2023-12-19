// Import af React og nødvendige komponenter
import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles"; // Import af globale stilarter

// Funktionel komponent for brugerprofilen
function Profile({ navigation }) {
  return (
    // Container view med global styling
    <View style={GlobalStyles.container}>
      {/* Indre view med flex layout til at arrangere tekst */}
      <View style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
        {/* Tekstkomponent med profilinformationer */}
        <Text style={GlobalStyles.textInformation}>
          Navn: Jacob {"\n"} Kategori: studerende {"\n"} Personer: 1 {"\n"} Foretrukket mad: Italienske
        </Text>
      </View>
    </View>
  );
}

// Eksport af Profile komponenten til brug i andre dele af appen
export default Profile;
