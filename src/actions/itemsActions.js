import { FETCH_ITEMS } from './types.js';

export const fetchItems = () => dispath => {
  fetch("https://storage.googleapis.com/dito-questions/events.json")
    .then(items => items.json())
    .then(items => {
      console.log(items.events);
      dispath({
        type: FETCH_ITEMS,
        payload: {
          items: items.events,
          isLoaded: true
        }
      });
    });
}
