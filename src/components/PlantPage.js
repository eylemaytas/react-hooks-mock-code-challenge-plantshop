import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant,updateFormData, updateSearchText}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} updateFormData={updateFormData}/>
      <Search updateSearchText={updateSearchText}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
