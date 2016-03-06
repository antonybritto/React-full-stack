/**
 * Routes for express app
 */
var events = require('./controllers/events');

module.exports = function(app) {

  app.get('/events', events.all);

  app.post('/events/:id', function(req, res) {
      events.add(req, res);
  });

  app.put('/events/:id', function(req, res) {
   	  events.update(req, res);
  });

  app.delete('/events/:id', function(req, res) {
      events.remove(req, res);
  });

};
