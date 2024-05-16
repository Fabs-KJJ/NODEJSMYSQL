const dbConfig = require('../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false //if errors in your code will overwrite the errors using this line
    }
) 



sequelize.authenticate()
.then(()=>{
    console.log('database connection successful...')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students =  require ('./StudentModel')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('re-sync done');
})
.catch(err => {
    console.error('Error during database synchronization:', err);
})

module.exports = db;
