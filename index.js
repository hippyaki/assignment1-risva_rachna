const express = require("express");
const app = express();


app.get("/login", async (req, res) => {
    try {
        const body = req.query;
        const pass = body.pass;
        const user = body.user; 
        let user_check = new RegExp(/^[A-Z0-9]{6,12}$/i); /^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i
        let pass_check = new RegExp(/^[A-Z0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]{6,}$/i); 
        if(!user_check.test(user)){
          return res.status(500).json({error: "Username not valid"});
        }
        if(!pass_check.test(pass)){
          return res.status(200).json({error: "Password not valid"});
          //res.status(500).json({error: "Password not valid"});
        }
        res.status(200).send("Login Successful");
        
    } 
    catch(error) {
        return res.status(500).json({error: error.message});
    }
});

const server = app.listen(3001, () => {
  console.log("listening on port is %s...", server.address().port);
});
