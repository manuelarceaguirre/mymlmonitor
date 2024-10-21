import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Model Drift Detection</h1>
        <FileUpload />
      </header>
    </div>
  );
};

export default App;
