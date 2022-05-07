import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg'
import CharacterCard from './CharacterCard';


const API_URL = "https://rickandmortyapi.com/api";


function App() {

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <h1>
        Find a Character
        <br />
         From Ricky and Morty
        </h1>
      <div className='search-bar'>
        <input
          placeholder='Looking for someone?'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={searchIcon}
            alt="search icon"
            onClick={() => searchRickNMorty(searchTerm)}
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
