const express = require('express');
const app = express();

const connetDB = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary')

require('dotenv').config(); 
const port = process.env.PORT || 3000; 
 
app.use(express.json());

const fileupload = require('express-fileupload');
app.use(fileupload());      //   Ye middleware HTTP request se files ko extract karta hai, jaise ki HTML form ke through bheje gaye files. Ye files ko server ke filesystem mein temporary directory mein save karta hai.



// calling mongoDB for connection
connetDB();
 

//calling cloiudinary for connection
 cloudinaryConnect(); 
  
     
 
const Upload = require('./Routes/Fileuploader')
app.use('/api/v1/upload', Upload);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}) 




