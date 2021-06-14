import React from "react";
import { Form } from "semantic-ui-react";
import {useState} from 'react'

function PokemonForm({addToPokeList}) {
const [name, setNames] =useState('')
const [hp, setHp] =useState(0)
const [front, setFront] =useState('')
const [back, setBack] =useState('')

//todo- another way of doing the below on line #40
const handleFront = (e) =>{
  setFront(e.target.value)
}

const handleHp = (e) => {
  let num = parseInt(e.target.value)

   setHp(e.target.value)
 }

const handleSubmit = () =>{
  let formData= {
    name: name,
    hp: parseInt(hp),
    sprites: {
      front: front,
      back: back
    }
  }

fetch("http://localhost:3001/pokemon", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
},
  body: JSON.stringify(formData),
})
.then(response => response.json())
.then(newPokeObj => addToPokeList(newPokeObj))
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit ={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name"  
              value={name} 
              onChange={(e) => setNames(e.target.value)}
              placeholder="Name" 
              name="name" 
              />
          <Form.Input fluid label="hp" 
              value={hp} 
              onChange={(e) => setHp(e.target.value)}
              placeholder="hp" 
              name="hp" 
              />
          <Form.Input
              fluid
              value={front} 
              onChange={handleFront}
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
          <Form.Input
              fluid
              value={back} 
              onChange={(e) => setBack(e.target.value)}
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}


export default PokemonForm;
