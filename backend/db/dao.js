var sequelize = require('sequelize');
var connection = require('./connection')(sequelize);
var creator = require('./creator')(connection, sequelize);

//TODO... exports logic