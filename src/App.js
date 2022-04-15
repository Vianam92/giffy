import React, { useState } from "react";
import "./App.css";
import Gif from "./componentes/Gif";
import { useLocation, Route } from "wouter";
import useGift from "./hooks/useGift";

function App() {
  const [keyword, setKeyWord] = useState("panda");
  const [path, pushLocation] = useLocation();
  const { isLoading, gifs } = useGift({ keyword });

  return (
    <div className="app">
      <header className="header">
        <h1>Giffy</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            pushLocation(`/search/${keyword}`);
          }}
        >
          <input
            type="text"
            name="search"
            value={keyword}
            placeholder="search your favorite gift"
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
            autoComplete="off"
          />
          <h3>Última búsqueda</h3>
        </form>
        
      </header>
      <Route path={`/search/${keyword}`}>
        <main>
          <Gif gift={gifs} isLoading={isLoading} />
        </main>
      </Route>
    </div>
  );
}

export default App;
