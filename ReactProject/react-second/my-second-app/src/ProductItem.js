import './ProductItem.css';
import ProductDate from './ProductDate';
import React, {useState} from 'react';

function ProductItem (props){


    const data = [
        {
            name:"Nirma",
            month:"September",
            year:2021,
            day:10
        },
        {
            name:"Sirf Excel",
            month:"March",
            year:2021,
            day:2
        },
        {
            name:"Tide",
            month:"January",
            year:2022,
            day:28
        },
        {
            name:"Maggi",
            month:"June",
            year:2021,
            day:5
        }
    ];

    // let title = data[0].name;
    const [title, setTitle] = useState(data[0].name);
    function clickHandles()
    {
        // title = "chocolate";
        setTitle("Chocolate");
        console.log("first button");
    }


    return (
        <div className="wrapper">
        <div className= {props.className}>
        <div className = 'productItem'>
            <ProductDate month = {data[0].month} year= {data[0].year} day = {data[0].day}className="productDate"></ProductDate>
            <h2>{title} </h2>
            <button onClick = {clickHandles}>Cart</button>
        </div>
        <div className = 'productItem'>
            <ProductDate month = {data[1].month} year= {data[1].year} day = {data[1].day}className="productDate"></ProductDate>
            <h2>{data[1].name} </h2>
            {props.children}
            {/* <button onClick = {clickHandles}>Cart</button> */}
         </div>
         <div className = 'productItem'>
            <ProductDate month = {data[2].month} year= {data[2].year} day = {data[2].day}className="productDate"></ProductDate>
            <h2>{data[2].name} </h2>
            {props.children}
        </div>
        <div className = 'productItem'>
            <ProductDate month = {data[3].month} year= {data[3].year} day = {data[3].day}className="productDate"></ProductDate>
            <h2>{data[3].name} </h2>
            {props.children}
        </div>
        
        </div>
        
        </div>
    );
}

export default ProductItem;