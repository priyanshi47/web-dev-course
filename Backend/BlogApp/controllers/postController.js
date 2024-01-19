

const Post = require("../model/postsSchema");

exports.createPost = async(req, res)=>{
    try{
        const {title, content} = req.body;
        const post = new Post({title, content});

    const savedPost =  await post.save();

        
        res.status(200).json(
            {
               post: savedPost,
               
            }
        );
    }
    catch(error){
        console.log("Error encounterd in creating post");
        res.status(500).json(
            {
                success:false,
                data: "Internal Server Error",
                message: error.message
            }
        );
    }
}

exports.retrievePost = async(req, res)=>{
    try{
     
        const posts = await Post.find().populate("likes").populate("comments").exec();

       

        res.json(
            {
              posts,
            }
        );
    }
    catch(error){
        console.log("Error in finding post");

        res.status(500).json(
            {
                success:false,
                data: "Internal server error",
                message: error.message
            }
        )
    }
}