import React from 'react';
import { ScrollView, Image, View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

import { MEALS } from '../data/dummy-data';

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

const MealDetailsScreen = ({ navigation }) => {

  const mealDetails = MEALS.find((meal) => meal.id === navigation.getParam('mealId'));

  return (
    <ScrollView>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{mealDetails.duration}m</DefaultText>
        <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{mealDetails.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients...</Text>
      {mealDetails.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
      <Text style={styles.title}>Steps</Text>
      {mealDetails.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealDetails = MEALS.find((meal) => meal.id === navigationData.navigation.getParam('mealId'));

  return {
    headerTitle: mealDetails.title,
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={HeaderButton}
      >
        <Item
          title='Favourite'
          iconName='ios-star'
          onPress={() => console.log('mark as favourite')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
