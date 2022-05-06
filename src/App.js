import { useEffect } from 'react';
import './App.css';

const API_URL = "https://rickandmortyapi.com/api";

function App() {

  const searchRickNMorty = async (name) => {
    const response = await fetch(`${API_URL}/character/?=${name}`);

    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {
    searchRickNMorty("Rick");
  }, []);

  return (
    <div className="App">
     Hello 
    </div>
  );
}

export default App;
