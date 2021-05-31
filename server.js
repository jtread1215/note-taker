const express= require("express");
const path= require("path");
//const apiRoute = require("./routes/apiRoute");
//const htmlRoute = require("./routes/htmlRoute");

//Start app and designate port
const app = express();
let PORT = process.env.PORT || 3000;

//Routes and middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute.js")(app);

app.listen(PORT, () => {
    console.log("Server is listening port: ${PORT}")
})