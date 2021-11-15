module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      country_id: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      last_update: {
        type: Sequelize.DATE
      }
    },{tableName: 'country'});
  
    return Country;
  };