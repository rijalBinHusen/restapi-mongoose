// require express
const express = require("express")
// require cors
const cors = require("cors")

// initiate app
const app = express()

//cors whitelist
const corsOptions = {
    origin: "http://localhost:8081"
}

// use cors
app.use(cors(corsOptions))

// parse requests of content-type -application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to express application." });
// });

// require router
require("./router")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// require model
const db = require("./models");

// test to connect
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log("Cannot connect", err)
        process.exit()
    })