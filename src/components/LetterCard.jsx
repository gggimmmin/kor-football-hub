import {
  LetterWrapper,
  UserInfo,
  AvatarFigure,
  NicknameAndDate,
  Content,
} from "styles/LetterCardStyle";
import avatar from "assets/avavtar.png";
import { useNavigate } from "react-router-dom";

export default function LetterCard({ letter }) {
  const navigate = useNavigate();
  const formattedDate = new Date(letter.createdAt).toLocaleDateString("ko", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <AvatarFigure>
          <img src={letter.avatar ?? avatar} alt="아바타이미지" />
        </AvatarFigure>
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{formattedDate}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}
