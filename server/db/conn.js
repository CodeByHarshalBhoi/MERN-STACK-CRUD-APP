const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Database Connected....");
  })
  .catch((error) => {
    console.log("Some Error Occured", error);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/merncrud");
}
