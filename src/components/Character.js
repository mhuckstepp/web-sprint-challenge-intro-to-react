import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { characters } = props;

  return (
    <div>
      {characters.map((character) => (
        <div className="card" key={character.height}>
          {character.name}{" "}
        </div>
      ))}
    </div>
  );
};

export default Character;
