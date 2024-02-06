import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import React, { useState } from "react";
import { Container } from "styles/HomeStyle";

export default function Home() {
  const [activePlayer, setActivePlayer] = useState("손흥민");
  return (
    <Container>
      <Header activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
      <AddForm />
      <LetterList activePlayer={activePlayer} />
    </Container>
  );
}
