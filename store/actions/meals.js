export const toggleFavourite = (mealId) => ({
  type: 'TOGGLE_FAVOURITE',
  mealId
});

export const setFilters = (filterSettings) => ({
  type: 'SET_FILTERS',
  filters: filterSettings
});
