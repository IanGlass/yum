import _ from 'lodash';
import { ActionSheetIOS } from 'react-native';

import { MEALS } from '../../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (_.find(state.favouriteMeals, (meal) => meal.id === action.mealId)) {
        return {
          ...state,
          favouriteMeals: _.filter(state.favouriteMeals, (meal) => meal.id !== action.mealId)
        }
      }
      return {
        ...state,
        favouriteMeals: _.concat(state.favouriteMeals, _.find(state.meals, (meal) => meal.id === action.mealId))
      }

    case 'SET_FILTERS':
      return {
        ...state,
        filteredMeals: _.filter(state.meals, (meal) => {
          if (action.filters.glutenFree && !meal.isGlutenFree) {
            return false;
          }
          if (action.filters.lactoseFree && !meal.isLactoseFree) {
            return false;
          }
          if (action.filters.vegetarian && !meal.isVegetarian) {
            return false;
          }
          if (action.filters.vegan && !meal.isVegan) {
            return false;
          }
          return true;
        })
      }

    default:
      return state;
  }
};

export default mealsReducer;
