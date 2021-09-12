import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { connect } from 'react-redux';
import { toggleFavourite } from '../store/actions/meals';

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

const MealDetailsScreen = ({
  navigation,
  meals,
  favouriteMeals,
  toggleFavourite,
}) => {
  const mealId = navigation.getParam('mealId');
  const mealDetails = meals.find((meal) => meal.id === mealId);
  const isFavourite = _.some(favouriteMeals, (meal) => meal.id === mealId);

  const toggleFavouriteHandler = useCallback(() => {
    toggleFavourite(mealId)
  }, [mealId]);

  useEffect(() => {
    navigation.setParams({ 'toggleFav': toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFavourite });
  }, [isFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{mealDetails.duration}m</DefaultText>
        <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{mealDetails.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients...</Text>
      {mealDetails.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
      <Text style={styles.title}>Steps</Text>
      {mealDetails.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam('mealTitle'),
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={HeaderButton}
      >
        <Item
          title='Favourite'
          iconName={navigationData.navigation.getParam('isFavourite') ? 'ios-star' : 'ios-star-outline'}
          onPress={navigationData.navigation.getParam('toggleFav')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

const mapStateToProps = state => ({
  meals: state.meals.meals,
  favouriteMeals: state.meals.favouriteMeals
});

const mapDispatchToProps = dispatch => ({
  toggleFavourite: (mealId) => dispatch(toggleFavourite(mealId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsScreen);
