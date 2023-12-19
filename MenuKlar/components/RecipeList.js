// Import af nødvendige moduler og komponenter
import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './GlobalStyles';

/*ChatGPT prompt: Right now the flat-list that displays all the recipies 
from the database are coded to such the user can tap on them (click the button) 
and be navigated. Instead of navigating them, I would like the user to mark the 
recipies they tap/click on. 
*/
function RecipeList() {
  // State hooks til at holde styr på opskrifter og markerede opskrifter
  const [recipes, setRecipes] = useState({});
  const navigation = useNavigation();
  const [markedRecipes, setMarkedRecipes] = useState({});

  useEffect(() => {
    // Henter database referencen og lytter til opdateringer
    const db = getDatabase();
    const recipesRef = ref(db, "Recipies");

    onValue(recipesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRecipes(data); // Opdaterer state med nye data
      }
    });

    return () => {
      off(recipesRef); // Afmeld lytteren ved unmounting
    };
  }, []);

  // Funktion til at markere en opskrift
  const handleMarkRecipe = (id) => {
    // Opdaterer state for markerede og selve opskrifterne
    setMarkedRecipes((prevMarked) => {
      const updatedMarked = { ...prevMarked };
      updatedMarked[id] = !updatedMarked[id];
      return updatedMarked;
    });
    setRecipes((prevRecipes) => {
      const updatedRecipes = { ...prevRecipes };
      updatedRecipes[id] = { ...updatedRecipes[id], marked: !updatedRecipes[id]?.marked };
      return updatedRecipes;
    });
  };

  // Omdanner recipes objektet til et array for let håndtering i FlatList
  const recipeArray = Object.values(recipes);
  const recipeKeys = Object.keys(recipes);

  // Tæller antallet af markerede opskrifter
  const markedRecipeCount = Object.values(markedRecipes).filter(Boolean).length;

  // Viser knappen når mere end 7 opskrifter er markeret
  const isButtonVisible = markedRecipeCount >= 7;

  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={recipeArray}
        keyExtractor={(item, index) => recipeKeys[index]}
        numColumns={2} // Opsætning af 2 kolonner
        //GPT prompt: Instead of flex fitting all containers adjust it 
        //so each recipe name is in a container  the is side by side another 
        //container for a recipe name. So the containers only fit in two  columns
        renderItem={({ item, index }) => {
          const isRecipeMarked = markedRecipes[recipeKeys[index]];
          //GPT prompt: Make a count that shows how many recipes has been marked
          return (
            // TouchableOpacity for at kunne markere opskrifter
            <TouchableOpacity
              style={[
                GlobalStyles.recipeContainer,
                isRecipeMarked ? { backgroundColor: 'white' } : null,
              ]}
              onPress={() => handleMarkRecipe(recipeKeys[index])}
            >
              <Text style={GlobalStyles.recipeText}>
                {item.recipe_name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={GlobalStyles.markedRecipeCount}>
        Marked Recipes: {markedRecipeCount}/7
      </Text>
      {isButtonVisible && (
        <Button
          title="Continue"
          onPress={() => {
            navigation.navigate("Grocery List", { recipes });
          }}
          color="#d2b8a4"
        />
      )}
    </View>
  );
}

export default RecipeList;
