
const express = require("express");
var cors = require('cors');
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json())


app.use("/app/v1", rootRouter);

app.listen(3000)