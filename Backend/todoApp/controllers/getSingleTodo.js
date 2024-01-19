const todo = require('../models/todo');

exports.getSingleTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const todos = await todo.findById({_id: id});

        if(!todos){
            return res.status(404).json(
                {
                    success:false,
                    message: "No data found"
                }
            )
        }

        res.status(500).json(
            {
                success:true,
                data:todos,
                message: `todo at ${id}`
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