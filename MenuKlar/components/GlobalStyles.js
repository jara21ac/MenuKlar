// Import af StyleSheet fra 'react-native' til at oprette genanvendelige stilarter
import { StyleSheet } from 'react-native';

// Oprettelse af et StyleSheet objekt til global styling
const GlobalStyles = StyleSheet.create({
  // Grundlæggende containerstil med baggrundsfarve og polstring
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    padding: 10,
  },
  // Stil for rækker, der bruges til layout i formularer
  row: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
  },
  // Stil for etiketter/labels med fed tekst og bestemt bredde
  label: {
    fontWeight: 'bold',
    width: 100,
    color: '#808080', // Brun farve
  },
  // Inputfelt stil med border, afrundede hjørner og padding
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    color: 'black',
  },
  // Stil til container for opskrifter, med border og afrundede hjørner
  recipeContainer: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 10,
    width: 160,
  },
  // Stil for tekst i opskriftscontainer med fed skrift og centreret tekst
  recipeText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  // Stil for tekst i indkøbslisten med fed skrift og centreret tekst
  groceryText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  // Stil for at vise antal markerede opskrifter
  markedRecipeCount: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  // Stil for knapper
  button: {
    color: 'black'
  },
  // Generel tekststil
  text: {
    fontSize: 20,
  },
  // Stil for informativ tekst med centreret tekstjustering
  textInformation: {
    textAlign: 'center',
  },
});

// Eksport af GlobalStyles for at kunne anvende det i hele appen
export default GlobalStyles;
