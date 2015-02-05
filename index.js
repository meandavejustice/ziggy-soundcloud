var req = require('request');
var shorturl = require('shorturl');
// var clientId = 'c23df04aed9a788cd31fd5b100f22a7a';

module.exports = function(ziggy, settings) {

  ziggy.on('message', function(user, channel, text) {
    var bits = text.split(' ');
    var command = bits.shift();
    var clientID = settings['soundcloud-client-id'];

    if (command === '!sc') {
      if (!clientID) {
        ziggy.say(channel, 'You need a soundcloud clientId to use this, contact your bot administrator');
      } else {
        search(clientID, 'tracks', bits.join(' '), function(err, url) {
          if (err) ziggy.say(channel, 'Error fetching stream url for track ', bits.join(' '));
          else ziggy.say(channel, url);
        })
      }
    }
  })
}

function search(clientID, type, query, cb) {
  var url = formatQuery(clientID, type, query)
  req(url, function(err, response, body) {
    if (err) cb(err);
    var result = JSON.parse(body)[0].stream_url;
    shorturl(result +'?client_id='+clientID, function(streamUrl) {
      cb(null, streamUrl);
    });
  });
}

function formatQuery (clientId, type, query) {
  return 'http://api.soundcloud.com/'+type+'?q='+query+'&client_id='+clientId+'&format=json';
}