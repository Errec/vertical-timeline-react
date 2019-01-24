import { FETCH_ITEMS, GROUP_ITEMS } from "./types.js";
import { sortItems } from "../helpers/SortItems.js"

export const fetchItems = () => dispath => {
  fetch("https://storage.googleapis.com/dito-questions/events.json")
    .then(items => items.json())
    .then(items => {
      dispath({
        type: FETCH_ITEMS,
        payload: {
          items: items.events,
          isLoaded: true
        }
      })

      const groupedItems = sortItems(items.events);

      dispath({
        type: GROUP_ITEMS,
        payload: {
          groupedItems: groupedItems
        }
      });
    })
    .catch(err => {
      console.log(err)
    })
}

export const groupItems = (items) => dispath => {
  dispath({
    type: GROUP_ITEMS,
    payload: {
      groupedItems: items
    }
  });
}
