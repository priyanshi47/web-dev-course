import './NewProduct.css';
import React, {useState} from 'react';

function NewProduct(props) {


    // const [fullProductInput, setFullProduct] = useState(
    //     {
    //         title:'',
    //         date:''
    //     }
    // );

    

    
      const [newTitle,setTitle] = useState('');
     const[newDate, setDate] = useState('');
    function titleChangeHandler(event, prevState)
    {
        //  console.log(event.target.value);
        // let obj={...prevState, title:event.target.value};
        // console.log(obj);
        // return obj;
        setTitle( event.target.value);
    }
    function dateChangeHandler(event)
    {
        // console.log(event.target.value);
         setDate(event.target.value);
        // console.log(title);
        // console.log(date);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData={
            title:newTitle,
            date:newDate
        };
        console.log(productData);
        props.printProduct(productData);
        setTitle('');
        setDate('');
    }
    return (
        <div className='wrapper'>

        
        <form onSubmit={submitHandler}>
         <div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={newTitle}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min = "2023-01-01" max="2023-12-01" onChange={dateChangeHandler} value = {newDate}></input>
            </div>
           
            <div>
                <button>Add Product</button>
            </div>
        </form>
        </div>
    )
}

export default NewProduct;