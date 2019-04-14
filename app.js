var express = require("express"); // This line calls the express framework to action
// invoke the express package into action from here
var app = express();
app.use("/css",express.static(__dirname + "/css"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js",express.static(__dirname + "/js"));
app.use("/fonts",express.static(__dirname + "/fonts"));
app.use("/partials",express.static(__dirname + "/partials"));

//app.use(express.static("css"));
app.use(express.static("fonts"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("view"));
app.use(express.static("model"));
app.use(express.static("controller"));
app.use(express.static("script"));
// *********** Never write anything above the express call line ****************
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const nodemailer = require("nodemailer");
app.set("view engine", "ejs");
var bcrypt = require('bcrypt-nodejs');


app.post('/sendmail', function(req,res){

// var secretMail = bcrypt.hashSync("Liam", null, null) 
const output = "<div style='width:100%'><p style='background-color: tomato; color: white; padding: 10px;'>Name: " + req.body.Name +" </p></div><div style='width:100%'><p style='background-color: tomato; color: white; padding: 10px;'>Encrypted Email: " + req.body.Email +" </p></div><div style='width:100%'><p style='background-color: tomato; color: white; padding: 10px;'>Number: " + req.body.PhoneNumber +" </p></div><div style='width:100%'><p style='background-color: tomato; color: white; padding: 10px;'>Message: " + req.body.Message +" </p></div>";

let transporter = nodemailer.createTransport({
  host: '********',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '********', // your domain email address
    pass: '*********' // your password
  },
  tls:{
    rejectUnauthorized: false
  }
});

let mailOptions = {
from: '********',
subject: 'Great',
to: '********',
html: output 
}

// Smtp Settings for outputing gmail for nodemailer
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
if(error){
  console.log(error);
  return;
} else {
  console.log(info);
}

});
res.redirect('/', {message: 'Email has been sent'});
})



app.get('/', function(req,res){

res.render("index");


});




app.get('/about', function(req,res){

  res.render("about");
  
  
  });

// Now we set up a way for our application to run whe we need it to

// ********************* NEVER WRITE BELOW THIS LINE .... EVER  ...... EVER  *************

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    
    console.log("Win is now live")  
    
    
});

