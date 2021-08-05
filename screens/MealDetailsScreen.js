import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ navigation }) => {

  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button title="Go Back to Categories" onPress={() => navigation.popToTop()} />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
