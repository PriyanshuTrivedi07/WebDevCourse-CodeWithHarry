const express = require("express");
const path = require('path');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance', {useNewUrlParser: true});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();
const port = 80;

//Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    gender: String,
    address: String
});
const Contact = mongoose.model('Contact', contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files



// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//ENDPOINTS
app.get('/',(req, res)=>{
    const con = 'This is the content';
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact',(req, res)=>{
    const con = 'This is the content';
    const params = {};
    res.status(200).render('contact.pug', params);
})
app.post('/contact',(req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database.");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database.")
    })
    // res.status(200).render('contact.pug');
})


//START THE SERVER
app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})