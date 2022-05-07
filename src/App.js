import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg'
import CharacterCard from './CharacterCard';


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

  const [characters, setCharacters] = useState([]);

  const searchRickNMorty = async(name) => {
    const response = await fetch(`${API_URL}/character/?name=${name}`);

    const data = await response.json();

    setCharacters(data.results);
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
      
      {
        characters?.length > 0
        ? (
          <div className='container'>
            { characters.map((character) => (
              <CharacterCard character={character} />
            ))}
            
          </div> 
        ) : (
          <div className='empty'>
            <h2>No Characters Found :( </h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
