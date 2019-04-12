var express = require("express"); // This line calls the express framework to action
// invoke the express package into action from here
var app = express();
app.use("/css",express.static(__dirname + "/css"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js",express.static(__dirname + "/js"));
app.use("/fonts",express.static(__dirname + "/fonts"));

//app.use(express.static("css"));
app.use(express.static("fonts"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("view"));
app.use(express.static("model"));
app.use(express.static("controller"));
app.use(express.static("script"));
// *********** Never write anything above the express call line ****************

app.get('/', function(req,res){

res.render("index.ejs");


});

// Now we set up a way for our application to run whe we need it to

// ********************* NEVER WRITE BELOW THIS LINE .... EVER  ...... EVER  *************

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    
    console.log("Win is now live")  
    
    
});



// // Call the sql middleware to action
// var mysql = require('mysql');







// var flash    = require('connect-flash');
// // Passport
// var passport = require('passport');
// //var myObj = { "name":"John"};    // set a json object to represent the cart I called it myObject


// var LocalStrategy = require('passport-local').Strategy;
// var localStorage = require('node-localstorage')
// var session  = require('express-session');
// var cookieParser = require('cookie-parser');

// // Create a table called users with autoincrement id username and password fields as a mnimum


// var bcrypt = require('bcrypt-nodejs');

// app.use(cookieParser()); // read cookies (needed for auth)


// // required for passport
// app.use(session({
// 	secret: 'secretdatakeythatyoucanchange',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session



// app.set("view engine", "ejs");  // set default view engine
// var fs = require('fs');
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:true}));

// var contact = require("./model/contact.json"); // This declares the content of the contact.json file as a variable called contact
// var product = require("./model/product.json");

// // Call the access to the views folder and allow content to be rendered
// app.use(express.static("views"));


// // call the fileUpload middleware

// const fileUpload = require('express-fileupload');
// app.use(fileUpload());


// // Call the access to the script folder and allow content to be rendered
// app.use(express.static("script"));

// // Call the access to the images folder and allow content to be rendered
// app.use(express.static("images"));

// // create connectivity to sql Database

// // Sub these details for you own gear host database details
// const db = mysql.createConnection({
 
//  host: 'hostingmysql304.webapps.net',
//  user: 'liamme',
//  password: 'L1Am39??',
//  database: 'liam'
  
 
// });


// // Put some clarity on our connection status





// db.connect((err) => {
//      if(err){
//     console.log("The Connection Failed ....... Blame Liam");
//     }
//     else {
//         console.log("Yes the connection is great");
//     }
//  });



// app.get('/', function(req, res){ // this line will call a grt request on the / url of our application
//   // Now we need the function to actually do something  
//     //res.send("Hello January Class") // We will send a string response to the browser
//     res.render("index")
//     // We should get into the habbit of keeping track of our progress
    
//     console.log("The Message was sent and you made an app")
    
// });




// app.get('/createusers', function(req, res){
// let sql = 'CREATE TABLE users2 (Id int NOT NULL AUTO_INCREMENT PRIMARY KEY, username varchar(255), email varchar(255), password varchar(255));'
// let query = db.query(sql, (err,res) => {
//  if(err) throw err;
// });
    
// res.send("SQL Worked");
// });


// 	app.get('/profile', isLoggedIn , function(req, res) {
// 		res.render('profile', {
// 			user : req.user // get the user out of session and pass to template
// 		});
// 	});



// 	app.get('/register', function(req, res) {
// 		// render the page and pass in any flash data if it exists
// 		res.render('register');
// 	});

// 	// process the signup form
// 	app.post('/register', passport.authenticate('local-signup', {
// 		successRedirect : '/profile', // redirect to the secure profile section
// 		failureRedirect : '/register', // redirect back to the signup page if there is an error
// 		failureFlash : true // allow flash messages
// 	}));
	
	
// 		app.get('/login', function(req, res) {

// 		// render the page and pass in any flash data if it exists
// 		res.render('login.ejs', { message: req.flash('loginMessage') });
// 	});

	
// 		// process the login form
// 	app.post('/login', passport.authenticate('local-login', {
//             successRedirect : '/profile', // redirect to the secure profile section
//             failureRedirect : '/login', // redirect back to the signup page if there is an error
//             failureFlash : true // allow flash messages
// 		}),
//         function(req, res) {
//             console.log("hello");

//             if (req.body.remember) {
//               req.session.cookie.maxAge = 1000 * 60 * 3;
//             } else {
//               req.session.cookie.expires = false;
//             }
//         res.redirect('/');
//     });
	
	
// 	// route middleware to make sure
// function isLoggedIn(req, res, next) {

// 	// if user is authenticated in the session, carry on
// 	if (req.isAuthenticated())
// 		return next();

// 	// if they aren't redirect them to the home page
// 	res.redirect('/');
// }


// 	app.get('/logout', function(req, res) {
// 		req.logout();
// 		res.redirect('/');
// 	});

	
	
// 	   // =========================================================================
//     // passport session setup ==================================================
//     // =========================================================================
//     // required for persistent login sessions
//     // passport needs ability to serialize and unserialize users out of session

//     // used to serialize the user for the session
//     passport.serializeUser(function(user, done) {
//         done(null, user.Id); // Very important to ensure the case if the Id from your database table is the same as it is here
//     });

//     // used to deserialize the 
//     passport.deserializeUser(function(Id, done) {    // LOCAL SIGNUP ============================================================

//        db.query("SELECT * FROM users2 WHERE Id = ? ",[Id], function(err, rows){
//             done(err, rows[0]);
//         });
//     });

//     // =========================================================================
//     // =========================================================================
//     // we are using named strategies since we have one for login and one for signup
//     // by default, if there was no name, it would just be called 'local'

//   passport.use(
//         'local-signup',
//         new LocalStrategy({
//             // by default, local strategy uses username and password, we will override with email
//             usernameField : 'username',
//             passwordField : 'password',
//             passReqToCallback : true // allows us to pass back the entire request to the callback
//         },
//         function(req, username, password, done) {
//             // find a user whose email is the same as the forms email
//             // we are checking to see if the user trying to login already exists
//             db.query("SELECT * FROM users2 WHERE username = ?",[username], function(err, rows) {
//                 if (err)
//                     return done(err);
//                 if (rows.length) {
//                     return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
//                 } else {
//                     // if there is no user with that username
//                     // create the user
//                     var newUserMysql = {
//                         username: username,
//                         email: req.body.email,
//                         password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
//                     };

//                     var insertQuery = "INSERT INTO users2 ( username, email, password ) values (?,?,?)";

//                     db.query(insertQuery,[newUserMysql.username, newUserMysql.email, newUserMysql.password],function(err, rows) {
//                         newUserMysql.Id = rows.insertId;

//                         return done(null, newUserMysql);
//                     });
//                 }
//             });
//         })
//     );

	
	
//    // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================
//     // we are using named strategies since we have one for login and one for signup
//     // by default, if there was no name, it would just be called 'local'

//     passport.use(
//         'local-login',
//         new LocalStrategy({
//             // by default, local strategy uses username and password, we will override with email
//             usernameField : 'username',
//             passwordField : 'password',
//             passReqToCallback : true // allows us to pass back the entire request to the callback
//         },
//         function(req, username, password, done) { // callback with email and password from our form
//             db.query("SELECT * FROM users2 WHERE username = ?",[username], function(err, rows){
//                 if (err)
//                     return done(err);
//                 if (!rows.length) {
//                     return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//                 }

//                 // if the user is found but the password is wrong
//                 if (!bcrypt.compareSync(password, rows[0].password))
//                     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

//                 // all is well, return successful user
//                 return done(null, rows[0]);
//             });
//         })
//     );
// //};

	
	
	
	


//                                                     // ######## SQL DATA Starts HERE

// // create a route to create a database table

// //app.get('/createtable', function(req, res){
    
//  //   let sql = 'CREATE TABLE liammc (Id int NOT NULL AUTO_INCREMENT PRIMARY KEY, Name varchar(255), Price int, Image varchar(255), Activity varchar(255));'
    
//  //   let query = db.query(sql, (err,res) => {
        
//  //       if(err) throw err;
        
        
//  //   });
    
// //    res.send("SQL Worked");
    
    
// //});

// // Route to create a product by hardcode
// app.get('/createproduct', function(req, res){
//     let sql = 'INSERT INTO liammc (Name, Price, Image, Activity) VALUES ("POLAR M400", 199, "polarm400.png", "Running")'
//      let query = db.query(sql, (err,res) => {
//         if(err) throw err;
//     });
//     res.send("Product Created");
 
// });

// // Route to show all products from database 
// app.get('/productssql', isLoggedIn , function(req, res){
    
//     let sql = 'SELECT * FROM liammc';
//     let query = db.query(sql, (err,res1) => {
        
//         if(err) throw err;
        
//         res.render('showallproducts', {res1})
        
//     });
    
//    // res.send("Product Created");
    
    
// });

// // route to render create product page
// app.get('/createsql', function(req, res){
//     res.render('createsql')
   
    
// });

// // route to post new product 

// app.post('/createsql', function(req, res){
//     let sql = 'INSERT INTO liammc (Name, Price, Image, Activity) VALUES ("'+req.body.name+'", '+req.body.price+', "'+req.body.image+'", "'+req.body.activity+'")'
//      let query = db.query(sql, (err,res) => {
//         if(err) throw err;
//     });
//     res.redirect("/productssql");
 
// });


// // route to edit sql data 

// app.get('/edit/:id', function(req, res){
  
//     let sql = 'SELECT * FROM liammc WHERE Id = "'+req.params.id+'" '
//     let query = db.query(sql, (err, res1) => {
//         if(err) throw err;
//         console.log(res1);
        
        
//         res.render('edit', {res1});
        
//     });
    
// });


// // Post request URL to edit product with SQL

// app.post('/editsql/:id', function(req, res){
    
//        let sql = 'UPDATE liammc SET Name = "'+req.body.name+'", Price = '+req.body.price+', Image = "'+req.body.image+'", Activity = "'+req.body.activity+'" WHERE Id = "'+req.params.id+'"      '
//        let query = db.query(sql, (err,res) => {
//         if(err) throw err;
//     });
//     res.redirect("/productssql");
    
    
// });


// // route to delete sql product 

// app.get('/deletesql/:id', function(req, res){
   
//    let sql = 'DELETE FROM liammc WHERE Id = '+req.params.id+' ' 
//    let query = db.query(sql, (err, res ) => {
//        if(err) throw err;
  
       
//    });
//    res.redirect("/productssql");
    
    
// });


// // route to show individual page 

// app.get('/show/:id', function(req, res){
    
//     let sql = 'SELECT * FROM liammc WHERE Id = '+req.params.id+'';
//     let query = db.query(sql, (err,res1) => {
        
//         if(err) throw err;
        
//         res.render('show', {res1})
        
//     });
    
//    // res.send("Product Created");
    
    
// });





//                                                     // ######## SQL DATA ENDS HERE






//                                                    // ### JSON DATA STARTS HERE

// // route to get comments page

// app.get('/contacts', function(req, res){
//       res.render("contacts", {contact})
//      console.log("You are on the way to the contacts page")
    
  
// });


// app.get('/products', function(req, res){
//       res.render("products", {product})
//      console.log("You are on the way to the contacts page")
    
  
// });

// // =####### Functions to add a contact #############

// app.get('/add', function(req, res){
//       res.render("add")
//      console.log("Welcome to leave comment page")
    
  
// });



// app.post('/add', function(req,res){
//     // Write a function to find the max id in my JSON file
 
//     function getMax(contacts, id) {
//         var max
//         for (var i=0; i<contacts.length; i++) {
//             if(!max || parseInt(contact[i][id]) > parseInt(max[id]))
//             max = contacts[i];
//         }
//         console.log("The max id is " + max)
//         return max;

//     }
  

//     maxCid = getMax(contact, "id")
    
//    var newId = maxCid.id + 1; // make a ne variable for id which is 1 larger than the current max
    
//     console.log("New id is: " + newId);
//     var json = JSON.stringify(contact) // we tell the application to get our JSON readdy to modify
//     // Now we will create a new JSON object
    
//     var contactsx = {
        
//         name: req.body.name,
//         Comment: req.body.comment,
//         id: newId,
//         email: req.body.email
        
        
//     }
    
    
//     // Now we push the data back to the JSON file
    
//     fs.readFile('./model/contact.json', 'utf8', function readfileCallback(err){
//         if(err){
//             throw(err)
            
//         } else {
            
//           contact.push(contactsx)  // add the new contact to the JSON file
//           json = JSON.stringify(contact, null, 4) // structure the new data nicely in the JSON file
//           fs.writeFile('./model/contact.json', json, 'utf8')
//         }
        
        
//     })
    
//     res.redirect('/contacts')
    
// });



// //// ########## Function to delete a contact ####

// app.get('/deletecontact/:id', function(req,res){
    
  
//      var json = JSON.stringify(contact);
//      // Get the id we want to delete from the URL parameter 
//      var keyToFind = parseInt(req.params.id); 
    
//     var data = contact // Declare the json file as a variable called data
    
//     // lets map the data and find the information we need
//     var index = data.map(function(contact){return contact.id;}).indexOf(keyToFind)
    
//     // JavaScript allows us to splice our JSON data
    
//     contact.splice(index, 1); // delete only one item from the position of the index variable above
    
      
//           json = JSON.stringify(contact, null, 4) // structure the new data nicely in the JSON file
//           fs.writeFile('./model/contact.json', json, 'utf8')

// console.log("Ha Ha ....... its gone!")    
// res.redirect('/contacts')

// });



// // ################### render route to edit contact 


// app.get('/editcontact/:id', function(req,res){
    
//     function chooseContact(indOne){
//         return indOne.id === parseInt(req.params.id)
//     }
    
//     var indOne = contact.filter(chooseContact)
//      res.render('editcontact', {res:indOne});
    
// });


// // ### post request to edit contact 

// app.post('/editcontact/:id', function(req,res){
    
//     var json = JSON.stringify(contact);
    
//     var keyToFind = parseInt(req.params.id);  // Find the data we need to edit
//     var data = contact // Declare the json file as a variable called data
//     var index = data.map(function(contact){return contact.id;}).indexOf(keyToFind) // map out data and find what we need
    
    
   
//     var y = req.body.comment;
//     var z = parseInt(req.params.id)
    
    
//      contact.splice(index, 1, {
         
//          name: req.body.name,
//          Comment: y,
//          id: z,
//          email: req.body.email
         
//      });
    
//     json = JSON.stringify(contact, null, 4);
//     fs.writeFile("./model/contact.json", json, 'utf8' );
    
//     res.redirect("/contacts");
    
// });


// // post request url to search database and use an existing page (products) to display results

// app.post('/search', function(req, res){
    
    
    
//     let sql = 'SELECT * FROM liammc WHERE Name LIKE  "%'+req.body.search+'%"  OR Activity LIKE  "%'+req.body.search+'%"    ';
//     let query = db.query(sql, (err,res1) => {
        
//         if(err) throw err;
        
//         res.render('showallproducts', {res1})
        
//     });
    
//    // res.send("Product Created");
    
    
// });



// // app to render image upload page

// app.get('/upload', function(req, res){
    
//   res.render('upload')  
    
// });


// // post request to upload an image - make sure you include the npm middleware at the top of the app.js file

// app.post('/upload', function(req, res){
    
//  //    need to get the image from the form
 
//  let sampleFile = req.files.sampleFile
//   filename = sampleFile.name;
//  // we use the middleware (file upload ) to move the data from the form to the desired location
//     sampleFile.mv('./images/' + filename, function(err){
//         if(err)
      
//         return res.status(500).send(err);
        
//         console.log("Image is " + req.files.sampleFile)
        
//         res.redirect('/');
        
//     });
    
// });
