import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import styles from "./styles.css";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("http://swapi.dev/api/people/")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} />
    </div>
  );
};

export default App;
