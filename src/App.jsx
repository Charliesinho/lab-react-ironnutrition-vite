import { useState } from "react";
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodState, setFoodState] = useState(foods);
  const [foodCopyState, setFoodCopyState] = useState(foods);
 

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button></Button>
      <AddFoodForm setFoodState={setFoodState} setFoodCopyState = {setFoodCopyState}/> 
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={""} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={"Fancy Card"}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
      {/* Display Search component here */}
      <Search setFoodState={setFoodState} foodState={foodState} foodCopyState={foodCopyState}/>
      <Divider>Food List</Divider>

      <p>component here</p>
      <FoodBox foodState={foodState} setFoodState={setFoodState} setFoodCopyState = {setFoodCopyState}/>
    </div>
  );
}

export default App;
