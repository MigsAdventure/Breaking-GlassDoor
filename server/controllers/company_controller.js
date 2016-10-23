var app = require('../app');
var db = app.get('db');

module.exports = {

  create_company: function(req, res, next) {
    db.create_company([req.body.name], function(err, name) {
            res.status(200).send('it was good');
        });
    },

  get_company_by_name: function(req, res, next) {
    db.get_company_by_name([req.params.name], function(err, name) {
              console.log("name:", name);
              res.status(200).send('it was good');
          });
      },

}; //end CONTROLLERSller
