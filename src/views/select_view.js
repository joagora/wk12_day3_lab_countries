const PubSub = require('../helpers/pub_sub.js');

const SelectView = function() {

}

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:data-ready', (event) => {
    const allCountries = event.detail;
    console.log(allCountries);
    this.populateDropdown(allCountries);
  });
  const selectElement = document.querySelector('#countries');
  selectElement.addEventListener('change' , (event) => {
    const selectedCountryIndex = event.target.value;
    PubSub.publish('SelectView:selected-country-index', selectedCountryIndex);
  })
}


SelectView.prototype.populateDropdown = function(countries) {
  const selectElement = document.querySelector('#countries');
  for(country of countries) {
    const optionElement = document.createElement('option');
    const idOfCountry = countries.indexOf(country);
    optionElement.setAttribute('value', idOfCountry);
    optionElement.textContent = country.name;
    selectElement.appendChild(optionElement);
  }

}
module.exports = SelectView;
