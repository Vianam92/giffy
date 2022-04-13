import React, { useEffect, useState } from "react";
import "./App.css";
import Gif from "./componentes/Gif";
import getApi from "./services/Api";
import {Route} from 'wouter';

function App() {

  
  const [gift, setGift] = useState([]);
  const [keyword, setKeyWord] = useState("panda");

  useEffect(() => {
    getApi({ keyword }).then((gift) =>
      setGift(gift));
  }, [keyword]);

  return (
    <main className="app">
      <input type="text" name="search" placeholder="search your favorite gift" onChange={(e) => {
      setKeyWord(e.target.value);
      }}/>
      <Route path="/gif/:keyword" > 
      <Gif gift={gift}/>
      </Route>
    </main>
  );
}

export default App;
