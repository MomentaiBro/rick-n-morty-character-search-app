import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg'

const API_URL = "https://rickandmortyapi.com/api";

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
    <div className="App">
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

      </div> 
    </div>
  );
}

export default App;
