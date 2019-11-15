import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      axios.get('http://localhost:8888/.netlify/functions/getData')
        .then(data => {
          const mappedData = data.data.map(d => {
            const location = d.map_data.candidates.length > 0 && d.map_data.candidates[0].geometry.location
            return { ...d, status: d.status.split(' '), location }
          })
          setData(mappedData);
        })
        .catch(error => {
          console.log(error);
        })
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data && (<pre><code>{JSON.stringify(data, null, 2)}</code></pre>)}
      </header>
    </div>
  );
}

export default App;
