import React from 'react';
import RepositoryPage from './components/pages/repository';
import ThemeProvider from './ThemeProvider';

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <RepositoryPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
