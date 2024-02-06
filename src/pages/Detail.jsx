import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import { LetterContext } from "context/LetterContext";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  DetailContainer,
  HomeBtn,
  DetailWrapper,
  UserInfo,
  AvatarAndNickname,
  Nickname,
  ToMember,
  Content,
  BtnsWrapper,
  Textarea,
} from "styles/DetailStyle";
import { getFormattedDate } from "util/date";

export default function Detail() {
  const { letters, setLetters } = useContext(LetterContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );

  const onDeleteBtn = () => {
    const answer = window.confirm("정말 삭제하시겠습니까?");
    if (!answer) return;

    const newLetters = letters.filter((letter) => letter.id !== id);
    navigate("/");
    setLetters(newLetters);
  };

  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다!");

    const newLetters = letters.map((letter) => {
      if (letter.id === id) {
        return { ...letter, content: editingText };
      }
      return letter;
    });
    setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };
  return (
    <DetailContainer>
      <Link to="/">
        <HomeBtn>
          <Button text="홈으로" />
        </HomeBtn>
      </Link>
      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>{nickname}</Nickname>
          </AvatarAndNickname>
          <time>{getFormattedDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To: {writedTo}</ToMember>
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(event) => setEditingText(event.target.value)}
            />
            <BtnsWrapper>
              <Button text="취소" onClick={() => setIsEditing(false)} />
              <Button text="수정완료" onClick={onEditDone} />
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <BtnsWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)} />
              <Button text="삭제" onClick={onDeleteBtn} />
            </BtnsWrapper>
          </>
        )}
      </DetailWrapper>
    </DetailContainer>
  );
}
