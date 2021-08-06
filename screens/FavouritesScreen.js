import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = ({ navigation }) => {

  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList
      listData={favMeals}
      navigation={navigation}
    />
  );
};

FavouritesScreen.navigationOptions = {
  headerTitle: 'Your Favourites'
}

export default FavouritesScreen;
