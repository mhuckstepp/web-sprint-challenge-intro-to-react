import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { characters } = props;

  const CharCard = styled.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    margin: 3% 4%;
    padding: 0.25em 1em;
    font-size: 40px;
    text-shadow: 2px 2px white;
    width: 75%;
  `;

  return (
    <div>
      {characters.map((character) => (
        <CharCard key={character.height}>{character.name} </CharCard>
      ))}
    </div>
  );
};

export default Character;
