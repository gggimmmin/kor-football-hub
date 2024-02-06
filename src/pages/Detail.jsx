import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
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
} from "styles/DetailStyle";
import { getFormattedDate } from "util/date";

export default function Detail({ letters, setLetters }) {
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
        <Content>{content}</Content>
        <BtnsWrapper>
          <Button text="수정" />
          <Button text="삭제" onClick={onDeleteBtn} />
        </BtnsWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
}
