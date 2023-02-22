import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "../foods.json";

function FoodBox ({foodState, setFoodState, setFoodCopyState}) {

    const deleteFood = (name) => () => {
        setFoodCopyState(foodState.filter((item) => item.name !== name)) 
        setFoodState(foodState.filter((item) => item.name !== name))        
    }

    return (
    <Row style={{ width: "100%", justifyContent: "center" }}>
    {foodState.map(({name, calories, image, servings})=> {
      return (        
        <Col>
          <Card
            title={name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings}</b> kcal
            </p>
            <Button type="primary" onClick={deleteFood(name)}> Delete </Button>
          </Card>
        </Col>
      );
    })}
  </Row>
    )
}

export default FoodBox;