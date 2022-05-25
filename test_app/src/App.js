import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          Testing 123
        </p>
      </header>
    </div>
  );
}

export default App;

// import React, {useState, useEffect} from 'react';
// function App() {
//   const [merchants, setMerchants] = useState(false);
//   useEffect(() => {
//     getMerchant();
//   }, []);
//   function getMerchant() {
//     fetch('http://localhost:3001')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setMerchants(data);
//       });
//   }
//   function createMerchant() {
//     let name = prompt('Enter name');
//     fetch('http://localhost:3001/merchants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name}),
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   function deleteMerchant() {
//     let name = prompt('Enter merchant name');
//     fetch(`http://localhost:3001/merchants/${name}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   return (
//     <div>
//       {merchants ? merchants : 'There is no merchant data available'}
//       <br />
//       <button onClick={createMerchant}>Add merchant</button>
//       <br />
//       <button onClick={deleteMerchant}>Delete merchant</button>
//     </div>
//   );
// }
// export default App;
