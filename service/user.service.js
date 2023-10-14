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

const getEmailService = async(email) => {
    return await user.getEmail(email) ; 
}

const setPasswordService = async(new_password,token) => {
    return await user.setPassword(new_password,token) ; 
}

const getPasswordService = async(id) => {
    return await user.getPassword(id) ; 
}

const changePasswordService = async(new_password,id) => {
    return await user.changePassword(new_password,id) ; 
}

module.exports = {
    registerService,
    existsUserService,
    getAllUsersService,
    getUserByIdService,
    loginService,
    getEmailService,
    setPasswordService,
    getPasswordService,
    changePasswordService
}