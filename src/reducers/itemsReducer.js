import { FETCH_ITEMS } from '../actions/types';

const initialState = {
  itemsData: {
    items: [],
    isLoaded: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        itemsData: action.payload
      }
    default:
       return state;
  }
}