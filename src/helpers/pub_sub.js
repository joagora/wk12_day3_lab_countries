const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
    console.log("published");
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
    console.log("subscribed");
  }
};

module.exports = PubSub;
