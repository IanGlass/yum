import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={value}
        onValueChange={(value) => onChange(value)}
      />
    </View>
  )
}

const FiltersScreen = () => {

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Filters Screen</Text>
      <FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={setIsGlutenFree} />
      <FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={setIsLactoseFree} />
      <FilterSwitch label='Vegan' value={isVegan} onChange={setIsVegan} />
      <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={setIsVegetarian} />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {

  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
