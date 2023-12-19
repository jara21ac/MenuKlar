//Imports:
//--standard react
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
//--Navigation
import { createStackNavigator } from '@react-navigation/stack';
//--Komponenter
import SettingsScreen from "./SettingsScreen";
import Profile from "./stackComponents/ProfileSettings";
import Messages from "./stackComponents/Messages";

//Konstanter
//--Der startes en stack hvor react funktionen createStackNavigator kaldes
const Stack = createStackNavigator()

//Stack navigationen
//--Stack navigationens funktion
function StackNavigator() {
    return (
        // Stack.Navigator indpakker de skærme, der skal navigeres mellem
        <Stack.Navigator
            /* det indledende rute navn sættes til "Settings" */
            initialRouteName="Settings"
        >{/* SettingsScreen sættes som standard destination for StackNavigator 
                en screen for settings og profil fastssættes til stacken
                Hver skærm styles unikt ved brug af options
                */}
            {/* Stack.Screen definerer en skærm i stacken */}
            <Stack.Screen name="Options" style={styles.container} component={SettingsScreen}
                options={{
                    headerTitleAlign: 'center', // Justering af titel
                    headerTitleStyle: { color: 'black' }, // Stil til header titel
                }
                }
            />
            {/* Profilskærmen med specifikke headerindstillinger */}
            <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerTitleStyle: { textAlign: 'right', color: 'black' }, // Tekstjustering og farve
                }} />
            {/* Beskedskærmen med specifikke headerindstillinger */}
            <Stack.Screen name="Messages" component={Messages}
                options={{
                    headerTitleStyle: { textAlign: 'right', color: 'black' }, // Tekstjustering og farve
                }} />
        </Stack.Navigator>
    )
}

//Eksport
export default StackNavigator

// StyleSheet definerer stilarter for komponenter
const styles = StyleSheet.create({
    container: {
        
    }
})
