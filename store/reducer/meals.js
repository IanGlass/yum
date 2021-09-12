import _ from 'lodash';

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

    default:
      return state;
  }
};

export default mealsReducer;
