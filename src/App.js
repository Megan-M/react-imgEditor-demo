import React from 'react';
import './App.css';
import Editor from './editor';

function Header() {
    return (
        <div class="header">
            <span class='logo'>React Image Editor Demo</span>
        </div>
    )
}

function App() {
    
  return (
      <div class='App'>
        <Header />
        <Editor />
      </div>
   
  );
}

export default App;
