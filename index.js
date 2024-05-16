const express = require('express');
const cors = require('cors');
require('dotenv').config();
const studentRoutes = require ('./routes/studentRoutes')

const app = express()

var corOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corOptions))

app.use(express.json())
app.use(studentRoutes)
app.use(express.urlencoded({extended:true}))

// Handling 404 error
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  });
  
  // Error Handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});