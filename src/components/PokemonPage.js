import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react'

function PokemonPage() {
const [pokeList, setPokeList] = useState([])
const PokeUrl = 'http://localhost:3001/pokemon'
const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
fetch(PokeUrl)
.then(res => res.json())
.then(data => setPokeList(data))
}, [])

const handleTermChange = (e) =>{
  setSearchTerm(e.target.value)
    console.log(e.target.value);
}

const addToPokeList = (pokeObj) =>{
 let newArr = [pokeObj,...pokeList]
 setPokeList(newArr)

  //todo-another way of doing the above
  // console.log(pokeObj);
  // newArr.unshift(pokeObj)
  // setPokeList(newArr)
}


const filteredList = () => {
  return pokeList.filter(pokemon=> pokemon.name.includes(searchTerm))
}

//todo1 - another way of doing the above = filter without invocation
// const filteredList = (pokemon=> pokemon.name.includes(searchTerm))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        addToPokeList={addToPokeList}
      />
      <br />
      <Search 
      //passdown as props
      searchTerm={searchTerm} 
      handleTermChange={handleTermChange}
      />
      <br />
      <PokemonCollection pokeList={filteredList()}/>
      {/* //todo1 */}
      {/* <PokemonCollection pokeList={filteredList}/> */}
    </Container>
  );
}





export default PokemonPage;
