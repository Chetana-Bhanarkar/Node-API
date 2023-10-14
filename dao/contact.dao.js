const { Pool } = require('pg');
const db = require('../config/db.config');

const conn = async (req, res) => {
    const pool = new Pool(db.config)
    const results = pool.query(sql, (err, res) => {
        if (err) {
            throw err
        }
        return results
    })
}

// Create contact table 

const createContactTable = async () => {
    const pool = new Pool(db.config);

    const qr = `CREATE TABLE IF NOT EXISTS public.contact(
        id bigint NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999999 CACHE 1),
        fullname VARCHAR(50) NOT NULL,
        address TEXT NOT NULL,
        contactno VARCHAR(10) UNIQUE ,
        zip VARCHAR(10) NOT NULL,
        email VARCHAR(25) NOT NULL,
        user_id BIGINT NOT NULL,
        created TIMESTAMP DEFAULT NULL,
        updated TIMESTAMP DEFAULT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(user_id) REFERENCES public.user(id) 
        ON UPDATE CASCADE
        ON DELETE CASCADE
        )`;

    const result = await pool.query(qr);
    pool.end();
    return result
}

// createContactTable();



// insert contact 

const insertContact = async (fullname, address, contactno, zip, email, user_id, created, updated) => {
    const pool = new Pool(db.config);

    const qr = `INSERT INTO 
                public.contact(fullname, address, contactno, zip , email, user_id, created,  updated) 
                VALUES('${fullname}', '${address}', '${contactno}', '${zip}' , '${email}', '${user_id}','${created}','${updated}')`

    const result = await pool.query(qr);
    let message = "Data inserted";
    if (result.affectedRows) {
        message: message;
    }
    pool.end();
    console.log(result);
    return result;
}



// contact details API with user details

const getDetails = async () => {
    const pool = new Pool(db.config);

    const qr = `SELECT fullname,first_name,last_name,username,phone,u.email,address,contactno,zip 
                FROM public.contact as c 
                JOIN public.user as u 
                ON c.user_id = u.id  
                LIMIT 1 ;`

    const result = await pool.query(qr);
    pool.end();
    console.log(result.rows);
    return result.rows;
}



// user details by user id along with all contacts of that user 

const getContactByUserId = async(user_id) =>{

    const pool = new Pool(db.config);
    const qr = `SELECT fullname,email,contactno,address,zip 
                FROM contact 
                WHERE user_id = '${user_id}'`

    const result = await pool.query(qr);
    pool.end();
    console.log(result.rows);
    return result.rows;
}



module.exports = {
    insertContact,
    getDetails,
    getContactByUserId
}


