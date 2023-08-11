import React from "react";

function Pet({pet, onAdoptPet}) {
  const {name, gender, type, age, weight, id, isAdopted} = pet
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender==="female" ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted? <button className="ui primary button">Already adopted</button> :
        <button className="ui primary button"  onClick={e=>onAdoptPet(id)}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;