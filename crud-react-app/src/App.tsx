import React from 'react';
import './App.css';
import { User } from './components';
import AppProvider from './Provider/AppProvider';

function App() {
  
  return (
    <div>
      <AppProvider>
        <User />
      </AppProvider>
    </div>
  );
}

export default App;
