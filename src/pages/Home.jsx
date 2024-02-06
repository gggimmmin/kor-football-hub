import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import React, { useState } from "react";
import { Container } from "styles/HomeStyle";

export default function Home({ letters, setLetters }) {
  const [activePlayer, setActivePlayer] = useState("손흥민");

  return (
    <Container>
      <Header activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
      <AddForm setLetters={setLetters} />
      <LetterList letters={letters} activePlayer={activePlayer} />
    </Container>
  );
}
