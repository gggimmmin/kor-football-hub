import {
  LetterWrapper,
  UserInfo,
  NicknameAndDate,
  Content,
} from "styles/LetterCardStyle";
import { useNavigate } from "react-router-dom";
import Avatar from "./common/Avatar";
import { getFormattedDate } from "util/date";

export default function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <Avatar src={letter.avatar} />
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}
