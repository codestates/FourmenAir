const express = require("express");
const app = express();

const controllers = require("./controllers")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user/signup", controllers.signup);
app.post("/user/login", controllers.login);
app.delete("/user/resign", controllers.resign);
app.get("/user/info", controllers.info);
app.patch("/user/edit", controllers.edit);

app.get("/post", controllers.post);

let server = app.listen(4000)

module.exports = server;