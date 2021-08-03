import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CatergoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const Navigator = createStackNavigator({
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

export default createAppContainer(Navigator);
