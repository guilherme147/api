const userService = require("../service/user.js");

async function getAllUser(req, res) {
  try {
    const rows = await userService.getAllUser();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    await userService.createUser(name, email, password);
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.status(500).send({
      message: "error ading user",
      error: error.message,
    });
  }
}
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password} = req.body;
    res.status(504).json("sucess")
  } catch (error) {
    res.status(500).send({
      message:"error updating user",
      body: error.message,
    })
  }
}
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    await userService.deleteUser(id);

    res.status(200).send({messa: "deleted user"})
  } catch (error) {
    res.status(500).send({
      message: "error deleting user!",
      error: error.message,
    });
  }
}
async function getUserById(req, res){
  try {
    const{ id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "error getting user by ID",
      error: error.message,
    });
  }
}
module.exports = {
  getUserById,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
