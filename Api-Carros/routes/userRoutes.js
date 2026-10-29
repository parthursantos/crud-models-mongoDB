import express from "express";
import userController from "../controllers/userController.js";
import userService from "../services/userService.js";

const router = express.Router();

router.post("/", userController.createUser);

router.get(
    "/",
    userController.getAllUsers
)

router.get(
    "/:id",
    userController.getUserById
)

router.get(
    "/search/:name",
    userController.searchUserByName
)

router.delete(
    "/:id",
    userController.deleteUser
)

router.get(
    "/email/:email",
    userController.getUserByEmail
)

router.put(
    "/:id",
    userController.updateUser
)

router.get(
    "/count/users",
    userController.countUsers
)
export default router
