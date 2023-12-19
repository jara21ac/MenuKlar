// Import af nødvendige moduler og komponenter
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GlobalStyles from './GlobalStyles';

/* ChatGPT prompt:
In "GroceryList.js" diplay the ingredients in a list of the 7 chosen recipes.
Remove the names of the recipes, and if any ingredients appear more than once 
please count them together and not display them seperately":
*/

function GroceryList() {
  // Bruger useRoute hook til at få adgang til de navigationsparametre der er sendt til komponenten
  const route = useRoute();
  const recipes = route.params.recipes;

  // Filtrer de markerede opskrifter
  const markedRecipes = Object.entries(recipes)
    .filter(([, recipe]) => recipe.marked)
    .map(([id, recipe]) => ({ id, ...recipe }));

  // Sammensætter ingredienser og tæller forekomster
  const combinedIngredients = markedRecipes.reduce((acc, recipe) => {
    acc[recipe.ingredient_1] = (acc[recipe.ingredient_1] || 0) + 1;
    acc[recipe.ingredient_2] = (acc[recipe.ingredient_2] || 0) + 1;
    acc[recipe.ingredient_3] = (acc[recipe.ingredient_3] || 0) + 1;
    return acc;
  }, {});

  return (
    // Container view med global styling
    <View style={GlobalStyles.container}>
      {/* FlatList til at vise en liste af ingredienser */}
      <FlatList
        data={Object.entries(combinedIngredients)}
        keyExtractor={([ingredient]) => ingredient} // Unik nøgle for hvert listeelement
        renderItem={({ item }) => (
          // Visning af hver ingrediens og dens antal
          <View>
            <Text style={GlobalStyles.groceryText}>{item[0]}: {item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default GroceryList;
