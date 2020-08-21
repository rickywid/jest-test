import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const increment = () => {
    setCount(count + 1);
  }

    const decrement = () => {
    setCount(count - 1);
  }

  const fetchData = () => {
    
    fetch('https://random.dog/woof.json').then(res => {
      return res.json()
    }).then(data => {

      console.log(data)
      const fileType = data.url.slice(-3);
      if(fileType === 'mp4') {
        console.log('Mp4!')
        setImage('');
        setError('invalid file type')

      } else {
        console.log('image file')
        setImage(data.url);
        setError('');
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button data-testid="add" onClick={increment}>+</button>
        <button data-testid="minus" onClick={decrement}>-</button>
        <button data-testid="fetch" onClick={fetchData}>fetch</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 data-testid="counter">{count}</h1>
        </a>
        {image ? <img data-testid="image" src={image} alt=""/> : <span data-testid="error">{error}</span> }
      </header>
    </div>
  );
}

export default App;
