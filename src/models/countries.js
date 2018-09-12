const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.data = null;
}

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data;
    PubSub.publish('Countries:data-ready', this.data);
  })
}

Countries.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:selected-country-index', (event) => {
    const indexOfSelectedCountry = event.detail;
    const selectedCountry = this.data[indexOfSelectedCountry];
    PubSub.publish('Countries:selected-country-ready', selectedCountry);
  })

}

module.exports = Countries;
