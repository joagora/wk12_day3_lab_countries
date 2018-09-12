const PubSub = require('../helpers/pub_sub.js');
const DisplayView = function() {

}

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (event) => {
    const countryToDisplay = event.detail;
    this.displayData(countryToDisplay);
  })
}

DisplayView.prototype.displayData = function(countryToDisplay) {
  const countryDiv = document.querySelector('#country');
  const nameHeader = document.createElement('h1');
  countryDiv.appendChild(nameHeader);
  nameHeader.textContent = countryToDisplay.name;

}


module.exports = DisplayView;
