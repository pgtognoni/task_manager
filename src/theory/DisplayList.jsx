import React from 'react'

function DisplayList() {

    const pets = [
        { name: "Fluffy", type: "cat"},
        { name: "Max", type: "dog"},
        { name: "Nibbles", type: "hamster"},
        { name: "Buddy", type: "dog"},
        { name: "Sassy", type: "cat"}
      ];
      
  return (
    <div>
        <p>Since I was 5 until I left my parents house I had 5 pets</p>
        <p>Let me introduce them: </p>
        {pets.map(pet => {
            return(
                <ul>
                    <li>{pet.name} was a {pet.type}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default DisplayList