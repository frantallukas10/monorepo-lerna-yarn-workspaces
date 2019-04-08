const commonFunction = require("@yarn-workspace-example/common");
const express = require("express");
const app = express();
const port = 3000;

console.log(commonFunction());

app.get("/", (req, res) => res.send(commonFunction()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
