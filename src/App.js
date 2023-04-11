import { useState } from "react";
import { Form } from "./component/Form";

function App() {

  // RESULTS FROM THE API
  const [words, setWords] = useState([{}]);
  // USER OPTION
  const [userOption, setUserOption] = useState('');
  // SHOW FORM
  const [showForm, setShowForm] = useState(false);
  // SHOW RESULTS
  const [showData, setShowData] = useState(false);

  // API call
  const getData = (userData) => {
      fetch(`https://api.datamuse.com/words?${userOption}=${userData}&max=4`)
        .then(res => res.json())
        .then(data => {
          setWords(data);
          setShowData(true);
        });
  }

  return (
    <div className="App">
      <h1>Word Finder</h1>
      <p>An easy way to find the words you're looking for!</p>

      <div className="user-options">
          <button className="btn" onClick={() => {setShowForm(!showForm); setUserOption('ml')}}>Means like</button>
          <button className="btn" onClick={() => {setShowForm(!showForm); setUserOption('sl')}}>Sounds like</button>
          <button className="btn" onClick={() => {setShowForm(!showForm); setUserOption('sp')}}>Spelled like</button>
      </div>

      {showForm && <Form getData={getData}/>}

      <div className="data">
        <h2>Words:</h2>
        {showData && words.map((data, i) => {
          return <p>{i+1}: {data?.word?.charAt(0).toUpperCase() + data?.word?.slice(1)}</p>
        })}
      </div>
    </div>
  );
}

export default App;
