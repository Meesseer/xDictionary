import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  const [definition, setDefinition] = useState('')

  const onChange =(e) =>{
    setText(e.target.value)
  }
  const handleSubmit = () =>{
    const dict = dictionary.find((entry) => entry.word.toLowerCase() === text.toLowerCase())
    if(dict){
      setDefinition(dict.meaning)
    }else{ 
      setDefinition("Word not found in the dictionary.")
    }
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input type='text' placeholder='Search for a word' onChange={onChange}></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <h1>Definition:</h1>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default App;
