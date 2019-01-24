import { FETCH_ITEMS, GROUP_ITEMS } from '../actions/types';

const initialState = {
  itemsData: {
    items: [],
    isLoaded: false
  },
  groupsData: {
    groupedItems: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        itemsData: action.payload
      }
    case GROUP_ITEMS:
      return {
        ...state,
        groupsData: action.payload
      }
    default:
       return state;
  }
}