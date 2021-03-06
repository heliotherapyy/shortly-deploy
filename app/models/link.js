//var db = require('../config');
var Url = require('../config').Url;
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = Link;





var urlMethod = {};

urlMethod.createUrl = function(url,title,baseUrl, cb){
  var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));

  new Url({
    url: url,
    title: title,
    baseUrl: basUrl,
    code : shasum.digest('hex').slice(0, 5),
    dafsdf
  }).save( function(err){
    if(err) cb(err);
    cb();

  })


}


exports.urlMethod = urlMethod;