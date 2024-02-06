import LetterCard from "./LetterCard";
import { ListWrapper } from "styles/LetterListStyle";

export default function LetterList({ activePlayer, letters }) {
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activePlayer
  );
  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
        <LetterCard key={letter.id} letter={letter} />
      ))}
    </ListWrapper>
  );
}
