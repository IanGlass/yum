import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {

  const categoryId = navigation.getParam('categoryId');

  const meals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  return (
    <MealList
      listData={displayedMeals}
      navigation={navigation}
    />
  );
};

CategoryMealScreen.navigationOptions = (navigation) => {
  const categoryId = navigation.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  }
}

export default CategoryMealScreen;
