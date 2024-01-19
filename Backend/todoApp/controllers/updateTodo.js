const todo = require('../models/todo');

exports.updateTodo = async (req, res) => {
    try{
        
       const {id} = req.params; 
       const {title, description} = req.body;

       const todos = await todo.findByIdAndUpdate({_id:id},
        {
            title, description, updatedAt: Date.now()
        },
        )

        res.status(200).json({
            success:true,
            data:todos,
            message:"Updated"
        })
        
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