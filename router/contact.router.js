const express = require('express');
const router = express.Router();

let cont = require('../service/contact.service');
let users = require('../service/user.service');


router.post('/user-details', async (req, res) => {
    const fullname = req.body.fullname;
    const address = req.body.address;
    const contactno = req.body.contactno;
    const zip = req.body.zip;
    const email = req.body.email;
    const user_id = req.body.user_id;
    const created = req.body.created;
    const updated = req.body.updated;

    const dbResponse = await cont.insertcontactService(fullname, address, contactno, zip, email, user_id, created, updated)

    if (dbResponse) {
        res.status(200).json({
            status: "Success",
            message: dbResponse
        });
    } else {
        res.status(409).json({
            status: "Fail",
            message: "Error"
        });
    }
})

router.get('/user-details', async (req, res) => {
 
    const dbResponse = await cont.getDetailsService();

    if (dbResponse) {
        res.status(200).json({
            status: "Success",
            message: dbResponse
        });
    } else {
        res.status(409).json({
            status: "Fail",
            message: "Error"
        });
    }
})


router.get('/user/:user_id', async (req, res) => {
    const user_id = parseInt(req.params.user_id)

    const user = await users.getUserByIdService(user_id) ;
    const contact = await cont.getContactByidService(user_id)
    
    if (user.length === 0) {
        res.status(404).json({ error: 'User not found' });
    } else {
        const usr = user[0] 
        const userDetails = { ...usr, contact }
        res.status(200).json(userDetails);
    }
})



module.exports = router; 