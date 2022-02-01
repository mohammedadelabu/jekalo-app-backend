import express from "express";

const router = express.Router();

import { createUser, deleteUser, getAllUsers } from '../controllers/userController';



// CREATE
router.post("/users", createUser); 
  
// GET ALL USERS
router.get("/users", getAllUsers)

// DELETE
router.delete("/:username", deleteUser);
  
export default router;
