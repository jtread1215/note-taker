const express= require("express");
const path= require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Start app and designate port
const app = express();
const PORT = process.env.PORT || 3000;

//Routes and middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening port: ${PORT}`)
});