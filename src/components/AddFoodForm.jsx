import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import foods from "../foods.json";

const AddFoodForm = ({setFoodState, setFoodCopyState}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        console.log({name, image, calories, servings, id: uuidv4()})
        setFoodState(prevFoods => {
          return [...prevFoods, {name, image, calories, servings, id: uuidv4()}]
        })
        setFoodCopyState(prevFoods => {
            return [...prevFoods, {name, image, calories, servings, id: uuidv4()}]
          })
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
      }

    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Image
          <input
            type='text'
            value={image}
            onChange={event => setImage(event.target.value)}
          />
        </label>
        <label>
          Calories
          <input
            type='number'
            value={calories}
            onChange={event => setCalories(event.target.value)}
          />
        </label>
        <label>
          Servings
          <input
            type='number'
            value={servings}
            onChange={event => setServings(event.target.value)}
          />
        </label>       
        <button type='submit'>Add Food</button>
      </form>
    )
}


export default AddFoodForm;