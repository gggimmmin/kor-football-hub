import fakeData from "fakeData.json";
import LetterCard from "./LetterCard";
import { ListWrapper } from "styles/LetterListStyle";

export default function LetterList({ activePlayer }) {
  const filteredLetters = fakeData.filter(
    (letter) => letter.writedTo === activePlayer
  );
  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
        <LetterCard letter={letter} />
      ))}
    </ListWrapper>
  );
}
