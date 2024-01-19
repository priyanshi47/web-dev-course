const express = require("express");
const router = express.Router();

const {createPost, retrievePost} = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");
const {likePost, unlikePost} = require("../controllers/likeController");

router.post("/createPost", createPost);
router.get("/findPost", retrievePost);
router.post("/createComment", createComment);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;