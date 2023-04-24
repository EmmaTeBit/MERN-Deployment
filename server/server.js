const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); //allows JSON Objects to be posted

app.use(
  express.urlencoded({ extended: true }) // allows JSON Objects with strings and arrays
);
require("./config/mongoose.config");

//------------------------------------
//CHANGE ROUTE NAME //comment out route if not yet made
require("./routes/pet.route")(app);
//------------------------------------

app.listen(8000, () => {
  console.log("Em-Listening at Port 8000");
});
