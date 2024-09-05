import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/post", (req, res) => {
  console.log(req.body);

  res.render("index.ejs", { request: req.body });
});

app.listen(port, () => {
  console.log(`Click http://localhost:${port}`);
});
