import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = (item) => {
    return (
      <CategoryGridTile
        onSelect={() => navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: item.item.id
          }
        })}
        color={item.item.color}
        title={item.item.title}
      />
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
