import React, { useState } from 'react';
import Search from './components/Search/Search.tsx';

const App = () => {
  // B: useState:
  const [searchTerm, setSearchTerm] = useState('Get over 10M resualts from over 200+ portals right here...');

  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="Hero Banner"></img>
            <h1>
              Find <span className="text-gradient">Most Watched Movies</span> At Your Finguretips !
            </h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
        </div>
      </main>
    </>
  );
};

export default App;
