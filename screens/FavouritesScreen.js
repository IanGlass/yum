import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavouritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

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
