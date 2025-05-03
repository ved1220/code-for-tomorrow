const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config();

exports.login= (req,res) => {
    const {email,password} = req.body;
    
    if (email === 'admin@codesfortomorrow.com' && password=== 'Admin123!@#'){
        const token= jwt.sign({email},process.env.JWT_SECRET)
        return res.json({token});

    }
    res.status(401).json({message:'Invalid Credentials'});
}