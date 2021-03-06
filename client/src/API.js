const $ = require('jquery');

module.exports = {
  readAll: (successCB) => {
    $.ajax({
      url: '/tracks',
      type: 'GET',
      success: successCB,
      error: (error) => {
        console.log('AJAX GET RES FAILED: ', error);
      }
    });
  },

  readOne: (options, successCB) => {
    $.ajax({
      url: '/trackSearch',
      type: 'POST',
      data: JSON.stringify(options),
      contentType: 'application/json',
      success: successCB,
      error: (error) => {
        console.log('AJAX READONE FAILED: ', error);
      }
    });
  },

  sendItem: (options, successCB) => {
    $.ajax({
      url: '/trackSubmit',
      type: 'POST',
      data: JSON.stringify(options),
      contentType: 'application/json',
      success: successCB,
      error: (error) => {
        console.log('AJAX POST REQ FAILED: ', error);
      }
    });
  },

  sendComment: (options, successCB) => {
    $.ajax({
      url: '/commentSubmit',
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