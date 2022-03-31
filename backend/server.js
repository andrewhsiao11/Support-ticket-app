const express = require('express')
const colors = require("colors");
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const PORT = process.env.PORT || 5050

//Connect to database
connectDb();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to the Support Desk API'})
})

// Routes - connects /api/users to that userRoutes file
app.use('/api/users', require('./routes/userRoutes'))
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);


app.listen(PORT, () => console.log(`server started  ${PORT}`))
