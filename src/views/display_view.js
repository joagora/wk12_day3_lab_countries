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
  countryDiv.textContent = "";
  const nameHeader = document.createElement('h1');
  countryDiv.appendChild(nameHeader);
  nameHeader.textContent = countryToDisplay.name;

  const imageDiv = document.createElement('div');
  countryDiv.appendChild(imageDiv);
  imageDiv.setAttribute('id', 'flag-image');
  imageDiv.setAttribute('style', `background-image: url(${countryToDisplay.flag})`);

  const regionHeader = document.createElement('h3');
  countryDiv.appendChild(regionHeader);
  regionHeader.textContent = countryToDisplay.region;

  const populationHeader = document.createElement('h4');
  countryDiv.appendChild(populationHeader);
  populationHeader.textContent = `population: ${countryToDisplay.population}`;

  const languagesUl = document.createElement('ul');
  countryDiv.appendChild(languagesUl);
  const countryLanguages = countryToDisplay.languages;
  for(countryLanguage of countryLanguages) {
    const languageLi = document.createElement('li');
    languagesUl.appendChild(languageLi);
    languageLi.textContent = countryLanguage.name;
  }
  console.log(countryLanguages);
}


module.exports = DisplayView;
