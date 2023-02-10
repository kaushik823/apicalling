import './App.css';
import { useEffect, useState } from "react";
const axios = require('axios')

function App() {

  const [char, setchar] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        setchar(response.data.results)
        console.log(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      })
     
  }, [])

  return (
    <div className="App">

      {
        char.map((item)=>{
          return(
            <div>
                <img src={item.image}></img>
                <h2>{item.name}</h2>
                <h3>{item.status}</h3>
                <h4>{item.species}</h4>
                <h5>{item.gender}</h5>
                <h6>{item.origin.name}</h6>
                <h6>{item.location.name}</h6>
                <h6>{item.name.episode}</h6>

            </div>
          )
        })
      }

    </div>
  );
}

export default App;
