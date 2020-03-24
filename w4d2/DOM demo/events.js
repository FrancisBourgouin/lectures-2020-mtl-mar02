document.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');

  const addWeeklyAvg = avg => {
    // Create a tr - table row
    const tr = document.createElement('tr');

    // Create a td - cell
    const td = document.createElement('td');

    // set the colspan attribute on the new td
    td.setAttribute('colspan', '7');

    // Set the text content of the new td
    td.textContent = `Weekly Average: ${avg}`;

    // Add the new td to the new tr
    tr.appendChild(td);

    // Select tbody tag
    const tbody = document.querySelector('tbody');

    // Add the tr to the existing tobdy tag on the page
    tbody.appendChild(tr);
  };
  // Select the form element on the page
  const frm = document.querySelector('form');

  frm.addEventListener('submit', event => {
    // Stopping the usual form submit
    event.preventDefault();

    // grab the content of the input
    const average = event.target.elements.avg.value;

    addWeeklyAvg(average);
  });
});
