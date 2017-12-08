var path = require('path');

module.exports = function(app){
  //  GET route to `/survey` which displays the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
  // default, catch-all route that leads to `home.html` which displays the home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};