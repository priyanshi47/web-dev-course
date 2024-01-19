const todo = require('../models/todo');

exports.deleteTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const todos = await todo.findByIdAndDelete(id);

       

        res.json(
            {
                success:true,
                
                message: "todo deleted",
            }
        )

        
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message: error.message
            }
        );
    }
}