import { useContext } from "react";
import LetterCard from "./LetterCard";
import { ListWrapper } from "styles/LetterListStyle";
import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";

export default function LetterList() {
  const { activePlayer } = useContext(MemberContext);
  const { letters } = useContext(LetterContext);
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activePlayer
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activePlayer}에게 남겨진 팬 레터가 없습니다. 첫 번째 펜 레터의
          주인공이 되어 보세요!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}
