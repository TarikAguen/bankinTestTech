const express = require("express");
const port = process.env.PORTSERV || 3050;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/routes"));

app.listen(port, () => console.log(`listening here http://localhost:${port}`));
