import react from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {

const [plants, setPlants] = useState([])
const [formData, setFormData] = useState({})
const [searchText, setSearchText] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(plantData => setPlants(plantData))
}, [])

function addPlant(event){
  event.preventDefault()

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(newPlant => setPlants([...plants, newPlant]))
}


function updateFormData(event){
  if(event.target.name === "price"){
    setFormData({...formData, [event.target.name]: Number (event.target.value)})
  } else {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  }


  function updateSearchText(event){
 setSearchText(event.target.value)
  }


  const filteredPlants = plants.filter(plant => {
    if(searchText === ""){
      return true
    }
    return plant.name.toUpperCase().includes(searchText.toUpperCase()) 
  })

  
return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} addPlant={addPlant} updateFormData={updateFormData} updateSearchText={updateSearchText}/>
    </div>
  );
}

export default App;
