// Import af nødvendige moduler og komponenter
import React from "react";
import { Button, View, Text } from "react-native";
import GlobalStyles from "./GlobalStyles"; // Import af globale stilarter

// navController funktion til at håndtere navigation
// Tager den aktuelle navigationskontekst og målruten som parametre
const navController = (navigation, route) => {
  navigation.navigate(route); // Navigerer til den angivne rute
};

// Funktionskomponent for SettingsScreen
function SettingsScreen({ navigation }) {
  return (
    // View komponent med global styling
    <View style={GlobalStyles.container}>
      {/* Knapkomponent til at navigere til Profile skærmen */}
      {/* OnPress event udløser navigation til 'Profile' ruten */}
      <Button
        title="Profile"
        style={GlobalStyles.button} // Styling af knappen med globale stilarter
        onPress={() => navController(navigation, "Profile")} // Håndtering af tryk-hændelse
        color="#d2b8a4" // Knapfarve
      />
      {/* Mellemrum for bedre layout */}
      <Text>{"\n"}</Text>
      {/* Knapkomponent til at navigere til Messages skærmen */}
      {/* OnPress event udløser navigation til 'Messages' ruten */}
      <Button
        title="Messages"
        style={GlobalStyles.button} // Styling af knappen med globale stilarter
        onPress={() => navController(navigation, "Messages")} // Håndtering af tryk-hændelse
        color="#d2b8a4" // Knapfarve
      />
      {/* Mellemrum for bedre layout */}
      <Text>{"\n"}</Text>
      {/* Knap for logud (pt. uden funktionalitet) */}
      <Button title="Log ud" color="#d2b8a4" />
    </View>
  );
}

// Eksporterer komponenten til brug i andre dele af appen
export default SettingsScreen;
