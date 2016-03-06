var mongoose = require('mongoose');
var Event = mongoose.model('Event');

exports.all = function(req, res) {
  Event.find({}).exec(function(err, events) {
    if(!err) {
      res.json(events);
    }else {
      console.log('Error in first query');
    }
  });
};

exports.add = function(req, res) {
  Event.create(req.body, function (err) {
    if (err) {
      console.log("test error");
      res.status(400).send(err);
    }
    res.status(200).send('OK');
  });
};

// exports.update = function(req, res) {
//   var query = { id: req.params.id };
//   var isIncrement = req.body.isIncrement;
//   var isFull = req.body.isFull;
//   var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
//   var data = _.omit(req.body, omitKeys);

//   if(isFull) {
//     Event.findOneAndUpdate(query, data, function(err, data) {
//       if(err) {
//         console.log('Error on save!');
//         res.status(500).send('We failed to save to due some reason');
//       }
//       res.status(200).send('Updated successfully');
//     });
//   } else {
//     Event.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1: -1 } }, function(err, data) {
//       if(err) {
//         console.log('Error on save!');
//          Not sure if server status is the correct status to return
//         res.status(500).send('We failed to save to due some reason');
//       }
//       res.status(200).send('Updated successfully');
//     });
//   }
  
// };

exports.remove = function(req, res) {
  var query = { id: req.params.id };
  Event.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};