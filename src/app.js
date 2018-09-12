const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const selectView = new SelectView();
  selectView.bindEvents();

  const displayView = new DisplayView();
  displayView.bindEvents();
});
