# Client-Side JavaScript

## I.BOM and DOM

- Browser Object Model
- Document Object Model

### BOM

The browser object model (BOM) is a hierarchy of browser objects that are used to manipulate methods and properties associated with the Web browser itself.

- window object
- navigator object
- screen object
- history object
- location object
- document object (DOM)

#### Window Object

- top-level object in the browser

```js
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;
```

#### Navigator Object

```js
navigator.userAgent;

navigator.geolocation.getCurrentPosition(function(geo) {
  console.log(geo.coords.latitude + ', ' + geo.coords.longitude);
});
```

#### Location and History

```js
window.location.href = 'http://www.amazon.ca';
window.history.back();
window.history.forward();
```

### The DOM (Document Object Model)

- `window.document`

- Whenever a page is loaded into a browser, it creates a Document Object Model where each HTML element is an **object with properties** that can be accessed and manipulated with a programming language such as JavaScript.

- The html document is parsed by the browser rendering engine.

| Chrome | Firefox | Edge      | Safari |
| :----- | :------ | :-------- | :----- |
| Blink  | Gecko   | Edge HTML | WebKit |

- The document is converted into the DOM. This means that each element, starting at the root, is represented by an object or node in a tree structure.

- The DOM is used to modify the content, structure or style of the document.

![Dom Tree](./DOM-model.svg)

Source: wikipedia - https://en.wikipedia.org/wiki/Document_Object_Model

- use `console.dir(document)` in devtools to display the DOM in a document

## II. Manipulating the DOM

- The DOM can be manipulating the DOM with JavaScript

### document methods to find DOM elements

```js
document.getElementById;
document.getElementsByTagName;
document.getElementsByName;
document.querySelector;
document.querySelectorAll;
document.getElementsByClassName();
```

- Return either the first element or a collection of elements
- Selector can be HTML element, class or pseudo-class, id, or attribute

_Examples_

```js
// returns the specific div element with the id 'container'
document.getElementById('container');

// returns a list of elements that have the class 'fields'
document.getElementsByClassName('fields');

// returns a list of elements that have the name attribute with a value of 'add'
document.getElementsByName('add');

// returns a list of the elements that have the tag 'button'
document.getElementsByTagName('button');
```

### Creating an Element

- createElement and appendChild:

```js
document.createElement('element');
parentElement.appendChild(childElement);
```

- Update Existing Content

  - textContent - Text in the HTML
  - innerText - text as it appears visually ( not fully supported by all browser)
  - innerHTML - Text rendered as HTML

```js
const parentElement = document.querySelector('tbody');
const newElement = document.createElement('td');
const newElement.setAttribute('colspan','7');
const newElement.textContent = 'Weekly Average: 25';
const parentElement.appendChild(newElement);
```

[MDN Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## III. Browser Events

The browser supports a lot of different events. We use this interface to listen for certain events that happen so we can react to them.

Today we will focus on DOM events, but there are many others. You can use events to implement features that rely on drag and drop, clipboard behaviour, and Gamepad support.

Any of these events seem interesting?

- click
- focus, blur
- keyup, keydown
- mouseup, mousedown, mouseover, mousemove
- scroll
- select

### Monitor Events

```javaScript
monitorEvents(document.body, "click");
unmonitorEvents(document.body);
```

### Add an Event Listener

JavaScript can listen to a particular event on a DOM element:

```javascript
document
  .querySelector('input[type=submit]')
  .addEventListener('click', function(event) {
    event.preventDefault();
    console.log('clicking ok');
  });
```

Another event that we can use is the 'DOMContentLoaded' event. The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

There is a lot more information available in the `event` object that is passed to the callback. The details are well documented on [MDN click Event](https://developer.mozilla.org/en-US/docs/Web/Events/click).

```javascript
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('The DOM is loaded!');
});
```

#### PreventDefault

When we handle events sometimes we want to ensure that they are not handled any further. In the example today we had a button that was part of a form. We only want to handle the click event on the button, and don't want to submit the form.

We can cancel events. Using the `Event.preventDefault()` method we can tell the browser that we are happy to do all the necessary work when the event is triggered.

[MDN Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

Events are a very important in building complex user interaction in your web applications. It is important to review the documentation and get an overall understanding of the available events. No one expects you to remember them all, especially not the details. It is however important to know what is possible when interacting with the browser.

[MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## IV. JQuery

jQuery is a fast, small, and feature-rich JavaScript library.

It makes things much simpler:

- HTML document traversal and manipulation
- Event handling
- Animation
- Ajax much simpler
- Works across a multitude of browsers

### DOM Traversal with jQuery

- [Aliens Demo](./demo-aliens/)

### Create HTML Dynamically

- Create HTML Dynamically with jQuery

- [Pet Demo](./demo-pet/)
