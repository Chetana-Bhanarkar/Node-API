const contact = require('../dao/contact.dao');


//insert contact service 
const insertcontactService = async(fullname, address, contactno, zip, email, user_id, created, updated) => 
{
    return await contact.insertContact(fullname, address, contactno, zip, email, user_id, created, updated)
}



//contact details API with user details service


const getDetailsService = async() => 
{
    return await contact.getDetails() ; 
}



// user details by user id along with all contacts of that user Service
const getContactByidService = async(user_id) => 
{
    return await contact.getContactByUserId(user_id) ; 
}





module.exports = {
    insertcontactService,
    getDetailsService,
    getContactByidService
}