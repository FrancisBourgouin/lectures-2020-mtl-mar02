// Pets array of objects
const pets = [
  {
    name: 'Dingo',
    type: 'dog',
    age: 1,
  },
  {
    name: 'Kongo',
    type: 'snake',
    age: 3,
  },
  {
    name: 'Meowngo',
    type: 'cat',
    age: 2,
  },
  {
    name: 'Bongo',
    type: 'dog',
    age: 2,
  },
];
// Create an article element using an animal object
const createElement = animalObj => {
  // HTML templage we need to recreate

  // <article>
  //   <header>
  //     <h2>Dingo</h2>
  //   </header>
  //   <div class="content">
  //     <ul>
  //       <li>
  //         <span>Species: </span>dog
  //       </li>
  //       <li>
  //         <span>Age: </span>1
  //       </li>
  //     </ul>
  //   </div>
  //   <footer>Dingo is a dog and is 1 years old</footer>
  // </article>;

  // Create the Article element
  const $article = $('<article>');

  // Creating the header element
  const $header = $('<header>');

  // Create and add an H2 element to the header
  $('<h2>')
    .text(animalObj.name)
    .appendTo($header);

  // Add the header to the article
  $article.append($header);

  // Creating the content div with a class of content
  const $contentDiv = $('<div>').addClass('content');

  // Creating the ul element
  const $ul = $('<ul>');

  // createing the specis li element
  const $speciesLi = $('<li>');

  // creating the span element and adds it to the species li
  $('<span>')
    .text('Species: ')
    .appendTo($speciesLi);

  // adding the species to the li
  $speciesLi.append(` ${animalObj.type}`);

  // creating the age li
  const $ageLi = $('<li>');

  // creating the age span and adds it to the age li element
  $('<span>')
    .text('age: ')
    .appendTo($ageLi);

  // adds the age
  $ageLi.append(` ${animalObj.age}`);

  // adds the species li and age li to the ul
  $ul.append($speciesLi).append($ageLi);

  // add the ul to the content div
  $contentDiv.append($ul);

  // add the content div to the article
  $article.append($contentDiv);

  // create the footer
  const $footer = $('<footer>').text(
    `${animalObj.name} is a dog and is ${animalObj.age} years old`
  );

  // adds the footer to the article
  $article.append($footer);

  return $article;
};

// loop through the array of animal objects and create an
// article element out of each object and appends it to the page section
const renderElements = petsArr => {
  $.each(petsArr, (index, animalObj) => {
    $('.pets-container').append(createElement(animalObj));
  });
};

$(document).ready(function() {
  renderElements(pets);
});
