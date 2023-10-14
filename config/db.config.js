require('dotenv').config() ; 


const config = {
    user : process.env.DATABASE_USER,
    host : process.env.DATABASE_HOST,
    database : process.env.DATABASE,
    password : process.env.DATABASE_PASSWORD
}

module.exports = {
    config
}