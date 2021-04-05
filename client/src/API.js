const $ = require('jquery');

module.exports = {
  readAll: (successCB) => {
    $.ajax({
      url: '/tracks',
      type: 'GET',
      // contentType: 'application/json',
      success: successCB,
      error: (error) => {
        console.log('AJAX GET RES FAILED: ', error);
      }
    });
  },
  sendItem: (options, successCB) => {
    $.ajax({
      url: '/tracks',
      type: 'POST',
      data: JSON.stringify(options),
      contentType: 'application/json',
      success: successCB,
      error: (error) => {
        console.log('AJAX POST REQ FAILED: ', error);
      }
    });
  }
};