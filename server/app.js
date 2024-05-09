const express = require("express");
const app = express();
const PORT = 3000;
require("./db/conn");
const User = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port number`);
});
