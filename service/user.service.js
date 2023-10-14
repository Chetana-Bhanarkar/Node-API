const user = require('../dao/user.dao');

const registerService = async(first_name, last_name, username, password , email, phone,created,updated) => {
    return await user.registerUser(first_name, last_name, username, password , email, phone,created,updated)
}

const existsUserService = async(email,username)=>{
    return await user.existsUser(email,username) ; 
} 

const getAllUsersService = async() => {
    return await user.getAllUsers() ; 
}

const getUserByIdService = async(id) => {
    return await user.getUserById(id) ; 
}

const loginService = async(email,password) => {
    return await user.login(email,password) ; 
}


module.exports = {
    registerService,
    existsUserService,
    getAllUsersService,
    getUserByIdService,
    loginService
}