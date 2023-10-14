const contact = require('../dao/contact.dao');

const insertcontactService = async(fullname, address, contactno, zip, email, user_id, created, updated) => {
    return await contact.insertContact(fullname, address, contactno, zip, email, user_id, created, updated)
}

const getDetailsService = async() => {
    return await contact.getDetails() ; 
}

const getContactByidService = async(user_id) => {
    return await contact.getContactByUserId(user_id) ; 
}





module.exports = {
    insertcontactService,
    getDetailsService,
    getContactByidService
}