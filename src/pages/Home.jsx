import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import React, { useState } from "react";
import { Container } from "styles/HomeStyle";
import fakeData from "fakeData.json";

export default function Home() {
  const [activePlayer, setActivePlayer] = useState("손흥민");
  const [letters, setLetters] = useState(fakeData);
  return (
    <Container>
      <Header activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
      <AddForm setLetters={setLetters} />
      <LetterList letters={letters} activePlayer={activePlayer} />
    </Container>
  );
}
