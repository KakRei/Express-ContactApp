const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const { loadData, infoContact } = require("./handle-contact");
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "My Express App", layout: "layouts/main" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us", layout: "layouts/main" });
});

app.get("/contact", (req, res) => {
  const contacts = loadData();
  res.render("contact", {
    title: "Contacts",
    layout: "layouts/main",
    contacts,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
