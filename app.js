const express  = require('express')
const app=express()
const dotenv = require('dotenv')
dotenv.config();

const authRoutes=require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

app.use(express.json());

app.use('/api',authRoutes)
app.use('/api',categoryRoutes)
app.use('/api',serviceRoutes)

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Something went wrong'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
