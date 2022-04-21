const express = require('express');
const cors = require("cors")
const { body, validationResult, query } = require('express-validator')
const firebase = require("firebase/compat/app")
const mongoose = require("mongoose")
const auth = require("firebase/compat/auth")
require ("firebase/compat/firestore")
require ("firebase/compat/storage")
const UserSchema = require("./dbUser")



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBQ47Rgz8C5JPWlH8YvRbHdSuVBi6B8X4A",
    authDomain: "rgit-hackathon-e050d.firebaseapp.com",
    projectId: "rgit-hackathon-e050d",
    storageBucket: "rgit-hackathon-e050d.appspot.com",
    messagingSenderId: "966986279184",
    appId: "1:966986279184:web:e38a179bd42c403dc39d95",
    measurementId: "G-3ZLDQ08PX7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();

  const Auth = firebase.auth();
//app config
const app = express();
const port = process.env.PORT || 9000 ;

//middleware
app.use(express.json())
// cors library is used for sharing resources from one domain to another
app.use(cors())


const database= mongoose.connection


//DB config
const connection_url='mongodb+srv://Shreyansh:7mItJWRVmBvGMJR9@cluster0.jljvk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connection successfull ...."))
.catch((err) => console.log(err , `\n \n`))



app.post('/user/register', [
    body('username', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('mobile','Enter valid mobile number').isMobilePhone(),
], async (req, res) => {
    
    console.log(req.body)
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;
    const UserData = req.body;
    Auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                 
               UserSchema.create(UserData,(err,res)=>{
                if(err){
                    //internal server error 
                    return res.status(500).send("Your data not included in database")
                }
                                
               })

            }
        })
        .catch(error => { 
            console.log(error)
            res.status(400).send("You are already registered or may be technical issue !")
        })

        res.status(200).send("Successfully registered !")        

});


app.get('/signIn', [
    query('email', 'Enter a valid email').isEmail(),
    query('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    console.log(req.query)
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const email = req.query.email;
    console.log(email)
    const password = req.query.password;
    console.log(password)
    Auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                res.status(200).send("Successfully SignedIn !")
            }
        })
        .catch(error => { 
            res.status(400).send("Please first register yourself !")
        })
});



//  listen
app.listen(port,() => console.log(`I am port is -${port}`))