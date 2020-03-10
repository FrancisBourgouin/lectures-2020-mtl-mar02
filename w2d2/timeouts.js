// setTimeout(() => {
//   console.log(name);
// }, 5000);

// let name = "Steven";

// setTimeout(() => {
//   console.log(name);
//   name = "Raoul";
// }, 2000);

// console.log(name);

const listToSort = [5, 4, 3, 2, 1];

// setTimeout(callback, delay)

for (const number of listToSort) {
  setTimeout(() => console.log(number), number * 1000);
}
