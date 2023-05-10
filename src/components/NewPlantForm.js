import React from "react";

function NewPlantForm({addPlant, updateFormData}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Plant name" required/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required/>
        <input onChange={updateFormData} type="number" name="price" step="0.01" placeholder="Price" required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
