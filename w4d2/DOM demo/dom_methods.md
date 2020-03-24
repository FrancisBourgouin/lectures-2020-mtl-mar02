# DOM Methods

## Accessing Elements

```js
document.getElementById('forecast');
document.getElementsByClassName('daily');
document.querySelector('tbody');
document.getElementsByTagName('th');
document.getElementsByTagName('h1');
document.getElementsByName('today');
```

## Creating an Element

```js
const parentElement = document.querySelector('tbody');
const newElement = document.createElement('td');
const newElement.setAttribute('colspan','7');
const newElement.textContent = 'Weekly Average: 25';
const parentElement.appendChild(newElement);
```
