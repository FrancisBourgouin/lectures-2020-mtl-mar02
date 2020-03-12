const francisFridge = {
  milk: { quantity: 1, expired: false },
  chocolate: { quantity: 5, expired: true },
  butter: { quantity: 1, expired: false },
  cheese: { quantity: 1, expired: false },
  flour: { quantity: 1, expired: true },
  cucumber: { quantity: 1, expired: false }
};

// try {
//   console.log(`I have ${francisFridge.tomatoes.quantity} items of Tomatoes`);
// } catch (error) {
//   console.log(error);
// }
// console.log(`I have ${francisFridge.chocolate.quantity} items of Chocolate`);

const fetchContentOfFridge = (fridge, item, callback) => {
  setTimeout(() => {
    try {
      callback(null, item, fridge[item]);
    } catch (error) {
      const fridgeError = new Error("Item doesn't exist in the fridge"); // More user friendly
      callback(fridgeError, item, null);
    }
  }, 2000);
};

const tellAboutTheItem = (error, item, itemProperties) => {
  if (error) {
    return console.log(`${error}`);
  }
  console.log(`The item ${item} has a quantity of ${itemProperties.quantity}`);
};

const checkIfExpired = (error, item, itemProperties) => {
  if (error) {
    return console.log(`${error}`);
  }
  if (itemProperties.expired) {
    console.log(`The item ${item} is expired`);
  } else {
    console.log(`The item ${item} is not expired`);
  }
};

fetchContentOfFridge(francisFridge, "cucumber", tellAboutTheItem);
fetchContentOfFridge(francisFridge, "tomatoes", tellAboutTheItem);

fetchContentOfFridge(francisFridge, "tomatoes", checkIfExpired);
fetchContentOfFridge(francisFridge, "flour", checkIfExpired);

//  CALLBACK HELL
//

fetchContentOfFridge(francisFridge, "flour", (err, name, properties) => {
  if (err) {
    return err;
  }

  console.log(`Got the ${name}`);
  fetchContentOfFridge(francisFridge, "butter", (err, name, properties) => {
    if (err) {
      return err;
    }

    console.log(`Got the ${name}`);
    fetchContentOfFridge(francisFridge, "cheese", (err, name, properties) => {
      if (err) {
        return err;
      }

      console.log(`Got the ${name}`);
      console.log("Fetched all of the ingredients");
    });
  });
});
