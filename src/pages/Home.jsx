import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import React from "react";
import { Container } from "styles/HomeStyle";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddForm />
      <LetterList />
    </Container>
  );
}
