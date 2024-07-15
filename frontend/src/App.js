import React from 'react';
import './App.css';
import TabTree from './components/TabTree';
import AiEnhancedTree from './components/AiEnhancedTree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chaos Manager</h1>
      </header>
      <main>
        <TabTree />
        <AiEnhancedTree />
      </main>
    </div>
  );
}

export default App;
