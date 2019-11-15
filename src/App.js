import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:8888/.netlify/functions/hello')
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data && <pre><code>{JSON.stringify(data, null, 2)}</code></pre>}
      </header>
    </div>
  );
}

export default App;
