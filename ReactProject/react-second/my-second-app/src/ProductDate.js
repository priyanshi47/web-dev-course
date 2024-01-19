import './ProductDate.css';

function ProductDate(props){
    const month = props.month;
    const year = props.year;
    const day = props.day;
    return (
        <div className={props.className}>
           <p className="month">{month}</p> 
           <p className="year"> {year} </p>
           <p className="date"> {day} </p>
        </div>
    );
}

export default ProductDate;