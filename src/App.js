import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg'

const API_URL = "https://rickandmortyapi.com/api";

const characterData1 = {
  "id": 14,
  "name": "Alien Morty",
  "status": "unknown",
  "species": "Alien",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "unknown",
      "url": ""
  },
  "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/10"
  ],
  "url": "https://rickandmortyapi.com/api/character/14",
  "created": "2017-11-04T20:51:31.373Z"
}

function App() {

  const searchRickNMorty = async(name) => {
    const response = await fetch(`${API_URL}/character/?name=${name}`);

    const data = await response.json();
    console.log(data.results);
  }
  
  useEffect(() => {
    searchRickNMorty("Morty");
  }, []);

  return (
    <div className="app">
      <h1>Who The Heck R U ?</h1>
      <div className='search-bar'>
        <input
          placeholder='Looking for someone?'
          value="Summer"
          onChange={() =>{}}
          />
          <img 
            src={searchIcon}
            alt="search icon"
            onClick={()=>{}}
          />
      </div>
      <div className='container'>
        <div className='character'>
          <div>
            <p>{characterData1.name}</p>
          </div>
          <div>
            <img 
              src={characterData1.image}
              alt={characterData1.name}
            />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
