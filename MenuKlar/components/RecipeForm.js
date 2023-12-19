// Import af nødvendige moduler og komponenter
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useEffect, useState } from 'react';
import {
  getDatabase,
  ref,
  child,
  push,
} from 'firebase/database';
import GlobalStyles from './GlobalStyles';

function AddRecipe({ navigation, route }) {
  // Få adgang til Firebase-databasen
  const db = getDatabase();

  // Initial state for en ny opskrift
  const initialState = {
    recipe_name: '',
    ingredient_1: '',
    ingredient_2: '',
    ingredient_3: '',
  };

  // State hook til at holde styr på opskriftens data
  const [newRecipe, setRecipe] = useState(initialState);

  // Funktion til at håndtere inputændringer
  const changeTextInput = (name, event) => {
    setRecipe({ ...newRecipe, [name]: event });
  };

  // Funktion til at gemme den nye opskrift
  const handleSave = async () => {
    const { recipe_name, ingredient_1, ingredient_2, ingredient_3 } = newRecipe;

    // Tjekker om alle felter er udfyldt
    if (
      recipe_name.length === 0 ||
      ingredient_1.length === 0 ||
      ingredient_2.length === 0 ||
      ingredient_3.length === 0
    ) {
      return Alert.alert('One or more fields are empty!');
    } else {
      // Reference til opskrifter i databasen
      const recipeRef = ref(db, '/Recipies/');

      // Data for den nye opskrift
      const newRecipeData = {
        recipe_name,
        ingredient_1,
        ingredient_2,
        ingredient_3,
      };

      // Pusher den nye opskrift til databasen
      await push(recipeRef, newRecipeData)
        .then(() => {
          Alert.alert('Saved'); // Viser besked når opskriften er gemt
          setRecipe(initialState); // Nulstiller formen
        })
        .catch((error) => {
          console.error(`Error: ${error.message}`); // Logger eventuelle fejl
        });
    }
  };

  return (
    // Sikker visningsområde for at undgå overlap med systemelementer som statuslinjen
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView>
        {/* Itererer over initialState for at oprette inputfelter for hver ingrediens */}
        {Object.keys(initialState).map((key, index) => {
          return (
            <View style={GlobalStyles.row} key={index}>
              <Text style={GlobalStyles.label}>{key}</Text>
              <TextInput
                value={newRecipe[key]}
                onChangeText={(event) => changeTextInput(key, event)}
                style={GlobalStyles.input}
              />
            </View>
          );
        })}
        <Button title="Add Recipe" onPress={() => handleSave()} color='#d2b8a4' />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddRecipe;
