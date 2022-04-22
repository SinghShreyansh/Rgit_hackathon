const express = require('express');
const cors = require("cors")
const { body, validationResult, query } = require('express-validator')
const firebase = require("firebase/compat/app")
const mongoose = require("mongoose")
const auth = require("firebase/compat/auth")
require ("firebase/compat/firestore")
require ("firebase/compat/storage")
const UserSchema = require("./dbUser")
const CheckedSchema = require("./dbChecked")
const userQuerySchema = require("./dbUserQuery")
const fileUpload = require('express-fileupload')




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
app.use(fileUpload());


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


app.post('/admin/register', [
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


app.post('/userquery',[
    body('title','Title must be atleast 5 characters').isLength({ min: 5 }),
    body('sendername','Enter a valid senderName').isLength({ min: 5 }),
    body('senderemail','Enter a valid sender Email-ID').isEmail(),
    body('senderrole',"Enter atleast 2-5 words in about section").isLength({min:2}),
    body('receiverrole',"Enter atleast 2-5 words in eligibility section").isLength({min:2}),
    body('complain',"Enter atleast 20 words in benefits section").isLength({min:20}),
], async (req, res) =>{
    console.log(req.body)
        // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(
            { errors:errors.array()} );
    }

            let insobj= req.body

            console.log(insobj)
            userQuerySchema.create(insobj, (err, data) => {
                if(err){
                    //internal server error 
                    res.status(500).send(err)
                }else {
                    res.json({"status":"Record inserted successfully"});
        
                }
            })
        
    

   
    })

 
    app.post('/adminReply',[
        body('complain',"Enter atleast 20 words in benefits section").isLength({min:20}),
    ], async (req, res) =>{
        console.log(req.body)
            // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(
                { errors:errors.array()} );
        }

        let query={complain : req.body.complain }
        let checkedData ="";
        await userQuerySchema.find(query,(err,data) => {
            if(err){
                res.status(500).send(err)
                console.log(err)
    
            } else {
                data=data[0]

                let newObj = {
                    title:data.title,
                    sendername:data.sendername,
                    senderrole:data.senderrole,
                    senderemail:data.senderemail,
                    receiverrole:data.receiverrole,
                    complain:data.complain,
                    replymsg:req.body.replymsg
                }
                 
              CheckedSchema.create(newObj, (err, data) => {
                    if(err){
                        //internal server error 
                        res.status(500).send(err)
                    }else {

                        userQuerySchema.deleteOne(query,(err,data)=>{
                            if(err){
                                res.status(500).send(err)
                                console.log(err)
                    
                            }
                        })


                        res.json({"status":"Record inserted successfully"});
                        console.log("success")
                    }
                })
            }
        })
    
                
            
        
    
       
        })    


    app.get("/user/pending", (req,res) =>{
        console.log(req.query)
        
        userQuerySchema.find(req.query,(err,data) => {
            if(err){
                res.status(500).send(err)
                console.log(err)
    
            } else {
                console.log(data)
                res.status(200).send(data)
            }
        })
    })  
    
    
app.delete('/user/pending/delete',(req,res)=>{
    console.log(req.query)

    userQuerySchema.deleteOne(req.query,(err,data)=>{
        if(err){
            res.status(500).send(err)
            console.log(err)

        } else {
              res.status(200).send("deleted successfully")
        }
    })
})    




//  listen
app.listen(port,() => console.log(`I am port is -${port}`))