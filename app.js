const user = require('./router/user.router')
const contact = require('./router/contact.router')
const port = 3000 ; 
const express = require('express')
const app = express() ; 


app.use(express.json()) ; 
app.use(express.urlencoded({extended:false}))
    
app.use('/api/v1/user',user) ; 
app.use('/api/v1/contact',contact) ; 

app.listen(port , ()=>{
    console.log('server start');
})