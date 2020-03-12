const francisFridge = {
  milk: { quantity: 1, expired: false },
  chocolate: { quantity: 5, expired: true },
  butter: { quantity: 1, expired: false },
  cheese: { quantity: 1, expired: false },
  flour: { quantity: 1, expired: true },
  cucumber: { quantity: 1, expired: false }
};

const tellAboutTheItem = item => {
  console.log(
    `The item ${item.name} has a quantity of ${item.properties.quantity}`
  );
};

const checkIfExpired = item => {
  if (item.properties.expired) {
    console.log(`The item ${item.name} is expired`);
  } else {
    console.log(`The item ${item.name} is not expired`);
  }
};

const fetchContentOfFridge = (fridge, item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({ name: item, properties: fridge[item] }); //Will trigger the then method
      } catch (error) {
        const fridgeError = new Error("Item doesn't exist in the fridge"); // More user friendly
        reject(fridgeError); //Will trigger the catch method
      }
    }, 2000);
  });
};

const fetchContentOfFridgeFancyCallbackVersion = (
  fridge,
  item,
  callbackIfItWorks,
  callbackIfItDoesntWork
) => {
  setTimeout(() => {
    try {
      callbackIfItWorks({ name: item, properties: fridge[item] }); //Will trigger the then method
    } catch (error) {
      const fridgeError = new Error("Item doesn't exist in the fridge"); // More user friendly
      callbackIfItDoesntWork(fridgeError); //Will trigger the catch method
    }
  }, 2000);
};

fetchContentOfFridgeFancyCallbackVersion(
  francisFridge,
  "chocolate",
  console.log,
  console.error
);

fetchContentOfFridge(francisFridge, "milk")
  .then(tellAboutTheItem)
  .catch(err => console.log(err));

fetchContentOfFridge(francisFridge, "pickles")
  .then(tellAboutTheItem)
  .catch(err => console.log(err));

console.log(fetchContentOfFridge(francisFridge, "milk"));

fetchContentOfFridge(francisFridge, "flour")
  .then(() => fetchContentOfFridge(francisFridge, "butter"))
  .then(() => fetchContentOfFridge(francisFridge, "cheese"))
  .then(() => console.log("got all the ingredients"))
  .catch(e => console.log(e));
