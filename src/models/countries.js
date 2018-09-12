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
//
// Countries.prototype.bindEvents = function() {
//   this.getData();
//   console.log(this.data);
//
// }

module.exports = Countries;
