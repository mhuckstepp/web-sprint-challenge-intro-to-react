import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { characters, clickChar } = props;

  const CharCard = styled.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: black;
    margin: 3% 4%;
    padding: 0.25em 1em;
    font-size: 40px;
    text-shadow: 2px 2px white;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const CharInfo = styled.button`
    border-radius: 3px;
    border: 2px solid white;
    color: black;
    margin: 3% 4%;
    padding: 0.25em 0.2em;
    font-size: 15px;
    text-shadow: 2px 2px white;
    width: 75%;
  `;

  return (
    <div>
      {characters.map((character) => (
        <CharCard key={character.name}>
          <p>{character.name}</p>
          <CharInfo onClick={() => clickChar(character.name)}> Test </CharInfo>
        </CharCard>
      ))}
    </div>
  );
};

export default Character;
