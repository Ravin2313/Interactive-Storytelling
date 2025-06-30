const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const selectRoutes = require("./routes/index");
const ben10Routes = require("./routes/ben10");
const spidermanRoutes = require("./routes/spiderman");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", selectRoutes); // for story selection
app.use("/ben10", ben10Routes); // for Ben 10 story
app.use("/spiderman", spidermanRoutes); // for Spider-Man story

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
