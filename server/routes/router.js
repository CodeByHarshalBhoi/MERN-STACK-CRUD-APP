const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../controller/userController");

router.post("/register", addUser);
router.get("/getallusers", getAllUser);
router.get("/user/:id", getSingleUser);
router.put("/updateuser/:id", updateUser);
router.delete("/delete/:id", deleteUser);


router.get("/", (req, res) => {
  res.send("Hello");
});
module.exports = router;
