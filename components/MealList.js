import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = ({ listData, navigation }) => {

  const renderItem = (itemData) => (
    <MealItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      imageUrl={itemData.item.imageUrl}
      onSelectMeal={() => navigation.navigate('MealDetails', {
        mealId: itemData.item.id,
        mealTitle: itemData.item.title
      })}
    />
  )

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(meal) => meal.id}
        renderItem={renderItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
