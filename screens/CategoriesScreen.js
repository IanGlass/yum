import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

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
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {

  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  }
};

export default CategoriesScreen;
