const express = require('express');
const app = express()
const port = 3000;


app.use(express.json());

app.get('/',(req, res)=>{
    res.send({message: 'welcome to express server'});
});

app.post('/signup', (req, res)=>{
    const {Username, Email, password} = req.body;

    if(!Username){
        res.status(400).json({error: 'Username cannot be empty'});
    }

    if(!Email){
        res.status(400).json({error: 'Email cannot be empty'});
    }

    if(8>password>=16){
        res.status(200).json({message: 'success'});
    }else{
        res.status(400).json({error: 'Password length should be greater than 8 or less than or equal to 16'});
    }

    res.status(200).json({
        message: "signup successful",
        data: {username}
    })
})

app.listen(port, ()=>{
    console.log(`server is running in the port ${port}`);
});