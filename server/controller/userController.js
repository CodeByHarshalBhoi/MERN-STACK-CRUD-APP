const User = require("../models/userSchema");

const addUser = async (req, res) => {
  console.log(req.body);
  const { name, email, age, mobile, work, address, description } = req.body;
  if (!name || !email || !age || !mobile || !work || !address || !description) {
    res.status(400).json("Please fill full form");
  }
  try {
    const prevUser = await User.findOne({ email: email });
    if (prevUser) {
      res.status(400).json("User already exist! Please try with another email");
    } else {
      const addUser = new User({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      });
      await addUser.save();
      res.status(200).json(addUser);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
    console.log(allUser);
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById({ _id: id });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateUser);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete({_id:id});
    console.log(deleteUser);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json(error)
  }
};
module.exports = { addUser, getAllUser, getSingleUser, updateUser, deleteUser };
