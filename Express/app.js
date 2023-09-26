const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();


const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//ENDPOINTS
app.get('/',(req, res)=>{
    const con = 'This is the content';
    const params = {'title':'My Pug Website', 'content': con, 'heading': 'This is heading'};
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let outputToWrite = `Name : ${name}\nAge : ${age}\nGender : ${gender}\nAddress : ${address}\n`;
    console.log(outputToWrite);
    // fs.readFileSync('output.txt',);
    const params = {'message':'Your form has been submitted successfully :)'};
    res.status(200).render('index.pug', params);
})


//START THE SERVER
app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})