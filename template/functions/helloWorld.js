exports.handler = function(context, event, callback) {
  let response;

  response.body = 'Hello World!';

  callback(null, response);
};
