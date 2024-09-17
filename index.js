import express from "express";
import compression from "compression";
import ejs from "ejs";
import bodyParser from "body-parser";
import { DB, CreateWaitListTable, SaveEmail, GetEmail } from "./models/db";

const app = express();
const PORT = 4000;

// Create database table
CreateWaitListTable();

app.use(compression());

// Serve static files
app.use(express.static("public"));

app.set("view engine", "html");
app.engine("html", require("ejs").__express);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: "10kb" }));

// Handle form submission
app.post("/", (req, res) => {
  const { email } = req.body;

  // Save Email to DB
  try {
    const emailExists = GetEmail(email);

    if (emailExists) {
      return res.render("index", {
        data: { errorMsg: "Email already submitted" },
      });
    }

    SaveEmail(email);

    res.render("index", { data: { email } });
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.render("index", { data: { errorMsg: err.message } });
  }
});

// Return the index page for all request
app.all("*", (req, res) => {
  res.render("index", { data: "" });
});

app.listen(PORT, () =>
  console.log(`App running on PORT: ${PORT} | http://127.0.0.1:${PORT}`),
);
