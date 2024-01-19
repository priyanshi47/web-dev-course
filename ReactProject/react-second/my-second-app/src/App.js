// import logo from './logo.svg';
import './App.css';
import NewProduct  from './NewProduct';
import ProductItem from './ProductItem';
function App() {

  function clickHandler() {
    
    console.log("Button Clicked");
  }
  function printData(obj){
    console.log(obj);
  }
  return (
   
    <div>
    <NewProduct printProduct = {printData}></NewProduct>
      <ProductItem className="card">
        <button onClick= {clickHandler}>Add to Cart</button>
      </ProductItem>
    </div>
  ); 
}

export default App;
