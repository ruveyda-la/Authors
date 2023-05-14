const express = require("express");
const cors = require('cors'); 
const app= express();
app.use(cors());  

require("./config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

const AllMyAuthorRoutes = require("./routes/authors.routes");
AllMyAuthorRoutes(app);

const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );