const PubSub = require('../helpers/pub_sub.js');

const SelectView = function() {

}

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:data-ready', (event) => {
    const allCountries = event.detail;
    console.log(allCountries);
    this.populateDropdown(allCountries);
  });
}


SelectView.prototype.populateDropdown = function(countries) {
  const selectElement = document.querySelector('#countries');
  for(country of countries) {
    const optionElement = document.createElement('option');
    const idOfCountry = countries.indexOf(country);
    optionElement.textContent = country.name;
    selectElement.appendChild(optionElement);
  }

}
module.exports = SelectView;
