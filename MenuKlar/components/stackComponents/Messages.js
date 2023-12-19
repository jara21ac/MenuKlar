// Import af React og nødvendige komponenter
import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles"; // Import af globale stilarter

// Funktionel komponent for meddelelser
function Messages({ navigation }) {
  return (
    // Container view med global styling
    <View style={GlobalStyles.container}>
      {/* Indre view med flex layout til at arrangere tekst */}
      <View style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
        {/* Tekstkomponent med beskeder */}
        <Text style={GlobalStyles.textInformation}>
          Velkomstbesked {"\n"} Hvordan man laver en ugemadplan {"\n"} Tillykke!
        </Text>
      </View>
    </View>
  );
}

// Eksport af Messages komponenten til brug i andre dele af appen
export default Messages;
