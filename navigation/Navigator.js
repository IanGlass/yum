import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CatergoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const MealsNavigator = createStackNavigator({
  Categories: CatergoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: defaultStackOptions
});

const FavouritesNavigator = createStackNavigator({
  Favourites: FavouritesScreen,
  MealDetails: MealDetailsScreen
}, {
  defaultNavigationOptions: defaultStackOptions
})

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
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text> : 'Meals'
    },
  },
  Favourites: {
    screen: FavouritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor}
        />
      ),
      tabBarColor: Colors.accent,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Favourites</Text> : 'Favourites'
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.accent,
      shifting: true,
      barStyle: {
        backgroundColor: Colors.primary
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accent
      }
    });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: defaultStackOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accent,
    labelsStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);
