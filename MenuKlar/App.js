//Imports:
//--Standard React
import * as React from 'react';
//DB
import { getApps, initializeApp } from "firebase/app"
//import {firebase} from 'firebase'
//--Navigation & ikoner
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//--Komponenter
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import StackNavigator from "./components/StackNavigator";
import GroceryList from './components/GroceryList';


//Konstanter
//--Konstant for tabnavigator.
const Tab = createBottomTabNavigator();

//--Tekst brugeren vises i de to "screen" komponenter
const GrocerylistScreenText = "Grocery List!"
const RecipeScreenText = "Recipe Form!"
const RecipeListScreenText = "Recipe List"


//Standard react applikation - root komponentet
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAOCAkZISDMxe7GZLEad-hAht1EVbaNdDQ",
    authDomain: "database-6b25a.firebaseapp.com",
    databaseURL: "https://database-6b25a-default-rtdb.firebaseio.com",
    projectId: "database-6b25a",
    storageBucket: "database-6b25a.appspot.com",
    messagingSenderId: "320432698864",
    appId: "1:320432698864:web:eaa19bef19f716bdced935"
  };

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // Initialize other firebase products here
  }

  // Funktion til tilføjelse af opskrifter i Firebase
  const addRecipeToFirebase = (name, ingredients) => {
    return firebase().collection('recipes').add({ name, ingredients });
  };

  return (
    //Navigations beholderen
    <NavigationContainer>
      {/* Navigationen kaldes som styrer tabsne
            screenOptions bruges til at bestemme ruten */}
      <Tab.Navigator screenOptions={({ route }) => ({
        /* styling af navigationsbaren */
        tabBarActiveTintColor: "#d2b8a4",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ],
        /* Styling af tab-bar ikonerne
            Ionicons kaldes. https://ionic.io/ionicons 
            if-statement for at ikonerne fastsættes til de enkelte navigationer*/
        tabBarIcon: ({ color, size }) => {
          // Ikoner baseret på rutenavn
          if (route.name === 'Recipe List') {
            return (
              <Ionicons
                name={'restaurant'}
                size={size}
                color="#d2b8a4"
              />
            );
          } else if (route.name === 'Add Recipe') {
            return (
              <Ionicons
                name='add-circle'
                size={size}
                color="#d2b8a4"
              />
            );
          }else if (route.name === 'Grocery List') {
              return (
                <Ionicons
                  name='cart'
                  size={size}
                  color="#d2b8a4"
                />
              );
          }
          else {
            return (
              <Ionicons
                name='ellipsis-vertical'
                size={size}
                color="#d2b8a4"
              />
            );
          }
        },
      })}
      /* De importeret Screen-komponenter kaldes 
      Komponentet vises gennem en funktion som returner de komponenter der er fastlagt til Tab-navigationen  
      Hvert komponent bruger prop til at fremvise den tekst der er blevet angivet i konstanterne
      */
      >
        <Tab.Screen name="Add Recipe" children={() => <RecipeForm prop={RecipeScreenText} />} />
        <Tab.Screen name="Recipe List" children={() => <RecipeList prop={RecipeListScreenText} />} />
        <Tab.Screen name="Grocery List" children={() => <GroceryList prop={GrocerylistScreenText} />} />

        {/* nested stacknavigator der vil blive fremvist i settings */}
        <Tab.Screen name="Settings" component={StackNavigator} />
        {/* Tab-navigationen afsluttes */}
      </Tab.Navigator>
      {/* Navigations beholderen afsluttes */}
    </NavigationContainer>
  );
}

//Eksport
export default App