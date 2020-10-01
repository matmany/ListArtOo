import React from 'react';
import logo from './logo.svg';
import './App.css';



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Baby"></Welcome>
      <Welcome name="Mat"/>
    </div>
  );
}
export default App;
