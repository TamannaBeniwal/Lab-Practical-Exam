const express = require("express");
const session = require("express-session");
const routes = require("./src/routes/authRoutes");
const app = express();
app.use(express.json());
app.use(session({
  secret: "secret123",
  resave: false,
  saveUninitialized: true
}));


app.use(routes);

app.listen(3000,()=> 
console.log("Server running on http://localhost:3000"));