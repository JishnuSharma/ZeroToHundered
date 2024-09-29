/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let categoryPrices = {};
  let resultArray = [];

  transactions.forEach(element => {

      const { category, price } = element;

      if (!categoryPrices[category]) {
          categoryPrices[category] = 0;
      }

      categoryPrices[category] += price;
  });

  // Converting the object into expected format

  Object.keys(categoryPrices).forEach(element => {
      resultArray.push({ category: element, totalSpent: categoryPrices[element] });
  });

  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
