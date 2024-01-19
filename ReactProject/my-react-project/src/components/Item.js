import './Item.css';

function Item(props) {
  const itemName = props.name;
  
  return(
  <div>
 <p className='nirma'>{itemName}</p>
 {props.children}
  </div>
 );
}

export default Item = (props,{className}) => {
  
  return (
    <div>
      <p className= {props.className}>{props.name}</p>
 {props.children}
    </div>
  )
};