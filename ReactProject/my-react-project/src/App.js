
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const res =[
    {
      itemName: "Nirma",
      itemDay: "20",
      itemMonth: "September",
      itemYear: "2004"
    }
  ];
  return (
    <div>
  <Card>
  <Item name= {res[0].itemName} className= 'nirma' >
    <p>Hello</p>
  </Item>
  <ItemDate day= {res[0].itemDay} month={res[0].itemMonth} year= {res[0].itemYear}></ItemDate>
  <Item className= 'nirma'name="Wheel" ></Item>
  <ItemDate day="10" month="July" year="2010"></ItemDate>
  <Item className= 'nirma'name="Rin"></Item>
  <ItemDate day="1" month="December" year="1980"></ItemDate>
  <div className="App">Hello Everyone</div>
  </Card>
    </div>

    
  );
}

export default App;
