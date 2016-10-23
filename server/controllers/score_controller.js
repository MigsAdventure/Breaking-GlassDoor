var app = require('../app');
var db = app.get('db');

module.exports = {

  create_score: function(req, res, next) {
    db.create_score([req.body.advancement, req.body.support, req.body.safety, req.body.company_id], function(err, score) {
            console.log('score:', score);
            res.status(200).send('it was good');
        });
    },

  get_advancement_score: function(req, res, next) {
    db.get_avg_advancement_company_score([req.params.id], function(err, company) {
              console.log("name:", company);
              res.status(200).send('it was good');
          });
      },

  get_support_score: function(req, res, next) {
      db.get_avg_support_company_score([req.params.id], function(err, company) {
            console.log("name:", company);
            res.status(200).send('it was good');
        });
    },

    get_safety_score: function(req, res, next) {
        db.get_avg_safety_company_score([req.params.id], function(err, company) {
              console.log("name:", company);
              res.status(200).send('it was good');
          });
      },

}; //end CONTROLLERSller
