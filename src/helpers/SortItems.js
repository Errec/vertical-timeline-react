export const sortItems = (items) => {

  const sortedItems = items.reduce((memo, item) => {
    let transactionId = '';
    let currentStoreName = '';
    item.custom_data.forEach((data) => {
      if (data.key === 'transaction_id') {
        transactionId = data.value
      }
      if (data.key === 'store_name') {
        currentStoreName = data.value;
      }
    });

    if (!memo[transactionId]) {
      memo[transactionId] = [];
    }

    if (memo[transactionId].length === 1 && currentStoreName != '') {
      memo[transactionId].unshift({ store: currentStoreName });
    }
    memo[transactionId].push(item);

    return memo
  }, {});

  const sortedItemsArr = Object.keys(sortedItems).map(function(key) {
    return { [key]: sortedItems[key] };
  });

  return sortedItemsArr
}