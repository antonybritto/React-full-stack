var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var _ = require('lodash');

exports.all = function(req, res) {
  Event.find({}).exec(function(err, events) {
    if(!err) {
      res.json(events);
    } else {
      console.log('Error');
    }
  });
};

exports.add = function(req, res) {
  Event.create(req.body, function (err) {
    if (err) {
      console.log("Error");
      res.status(400).send(err);
    }
    res.status(200).send('OK');
  });
};

exports.update = function(req, res) {
  var query = { _id: req.params.id };
  var omitKeys = ['_id', '_v'];
  var data = _.omit(req.body, omitKeys);

  Event.findOneAndUpdate(query, data, function(err, data) {
    if(err) {
      console.log('Error on save!');
      res.status(500).send('We failed to save to due some reason');
    }
    res.status(200).send('Updated successfully');
  });
  
};

exports.remove = function(req, res) {
  var query = { _id: req.params.id };
  Event.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};