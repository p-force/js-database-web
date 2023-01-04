const { Sequelize } = require('sequelize');

function createDataBase(dataBaseName, username, pass) {
  const sequelize = new Sequelize(dataBaseName, username, pass, {
    host: 'localhost',
    dialect: 'postgres',
  });
  return sequelize;
}

async function checkConnect(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

checkConnect(createDataBase('planet', 'diana', '123'));
