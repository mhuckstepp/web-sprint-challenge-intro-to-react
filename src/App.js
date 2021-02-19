import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectChar, setselectChar] = useState(null);

  const clickChar = (postId) => {
    setCharacters(
      characters.map((character) => {
        if (postId === character.name) {
          setselectChar(character);
          return character;
        } else {
          return character;
        }
      })
    );
  };

  const reset = () => {
    setselectChar(null);
  };

  useEffect(() => {
    axios
      .get("http://swapi.dev/api/people/")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid black;
  `;

  const CharInfoText = styled.div`
    width: 50%;
    color: white;
    font-size: 25px;
    align-self: center;
  `;

  const BackButton = styled.button`
    width: 50%;
    align-self: center;
    height: 50px;
    background-color: blue;
  `;

  return (
    <div className="App">
      <h1 className="Header">{selectChar ? selectChar.name : "Characters"}</h1>
      <Container>
        {selectChar ? (
          <div>
            {Object.values(selectChar).map((item) => (
              <CharInfoText>{item}</CharInfoText>
            ))}
            <BackButton onClick={() => reset()}> GO BACK </BackButton>
          </div>
        ) : (
          <Character characters={characters} clickChar={clickChar} />
        )}
      </Container>
    </div>
  );
};

export default App;
