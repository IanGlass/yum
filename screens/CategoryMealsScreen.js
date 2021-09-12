import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {

  const categoryId = navigation.getParam('categoryId');

  const meals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, check your filters.</DefaultText>
      </View>
    )
  }

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
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
