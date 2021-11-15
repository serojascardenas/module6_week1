const db = require("../models");
const Country = db.country;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  
    Country.findAll({attributes: ['country_id', 'country']})
      .then(data => {          
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving countries."
        });
      });
  };