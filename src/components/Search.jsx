import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const SearchBar = ({setFoodState, foodState, foodCopyState}) => {
    const [name, setName] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    
    const foodsCopy = structuredClone(foodCopyState)
    

    const handleUpdateEvent = (event) => {       

        if(event.target.value !== "" && event.target.value !== " ") {            
        setFoodState(foodsCopy)
        setFoodState(foodsCopy.filter(item => item.name.includes(event.target.value)))             
        } else {
            setFoodState(foodsCopy)
        }
        console.log(foodsCopy[0].id)
        setSearchTerm(event.target.value)
    }      

    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} >        
        <label>
          Search
          <input
            type='text'
            value={searchTerm}
            onChange={handleUpdateEvent}
          />
        </label>       
        
      </form>
    )
}


export default SearchBar;