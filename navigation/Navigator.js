import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CatergoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CatergoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-restaurant'
          size={25}
          color={tabInfo.tintColor}
        />
      ),
      tabBarColor: Colors.primary
    },
  },
  Favourites: {
    screen: FavouritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor}
        />
      ),
      tabBarColor: Colors.accent
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.accent,
      shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accent
      }
    });

export default createAppContainer(MealsFavTabNavigator);
