//  Callback

// Higher order functions --- Like politicians

// .map, .filter, .forEach

const listOfNames = ["Bob", "Robert", "Roberto"];

const iterateOverNames = (listOfNames, callback) => {
  for (const name of listOfNames) {
    callback(name);
  }
};

iterateOverNames(listOfNames, name => console.log(name));
