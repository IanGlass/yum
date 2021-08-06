import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
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

FavouritesScreen.navigationOptions = (navigationData) => {

  return {
    headerTitle: 'Your Favourites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  }
};

export default FavouritesScreen;
