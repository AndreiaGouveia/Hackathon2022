let express = require("express");
let cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const vendorsRoute = require('./routes/vendors') 

const app = express();
app.use(cors())
app.use('/vendors', vendorsRoute)


mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));;

app.get('/', (req, res) => {        
    res.send('Hello world ;)');     
                                                        
});

app.listen(process.env.API_PORT, () => {           
    console.log(`Now listening on port ${process.env.API_PORT}`); 
});
