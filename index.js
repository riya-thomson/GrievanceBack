//import express using require
var express = require('express')
var cors = require('cors')
require('./connection')
const user = require('./model/user');
const detailuser = require('./model/userDetail')
const nodemailer = require('nodemailer');

// initializing variable app
var app = express();

// middleware
app.use(express.json())

app.use(cors())

// --------email notification-----------
app.post('/send-email', async (req, res) => {
    const { recipientEmail, subject, text } = req.body;
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'riyademo23@gmail.com', // Your Gmail address
        pass: 'giuq kyfg thax hrre' // Your Gmail password
      }
    });
  
    var mailOptions = {
      from: 'riyademo23@gmail.com',
      to: recipientEmail,
      subject: subject,
      text: text
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  });
//   -------------

app.post('/form', async(req, res) => {
    try{
        console.log(req.body)
        await user(req.body).save();
        res.send({message:"Form submitted successfully."})
    } catch(error){
        console.log(error)
    }
})

// userDetail
app.post('/add', async (req, res) => {
    try {
      const newUser = new detailuser(req.body); // Create a new user instance with the received data
      await newUser.save(); // Save the user to the database
      res.status(201).json(newUser); // Send the newly created user back to the client
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error }); // Send an error response
    }
  });

app.get('/view',async(req,res)=>{
    try {
        const {Email} = req.query
        var data = await detailuser.findOne({Email})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send('Invalid email id or password\n' + error)
    }
})

// api creation
app.get('/', (req, res) => {
    res.send("Welcome!")
})


// port allocation
app.listen(3005, () => {
    console.log("port is up and running.")
})

module.exports = app;