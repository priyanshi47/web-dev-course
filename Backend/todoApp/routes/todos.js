const express = require("express");

const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const {getSingleTodo} = require("../controllers/getSingleTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getSingleTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;