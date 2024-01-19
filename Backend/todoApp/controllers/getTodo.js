const todo = require('../models/todo');

exports.getTodo = async (req, res) => {
    try{
      const todos = await todo.find({});

      res.status(200).json(
        {
            success:true,
            data:todos,
            message:"Entire todos list!"
        }
      )
    }
    catch(error){
       console.log("error");
       res.status(500).json(
        {
            success:false,
            data:error.message,
            message:"server error"
        }
       )
    }
}