import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import { Link, useParams } from "react-router-dom";
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

export default function Detail({ letters }) {
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );

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
          <Button text="삭제" />
        </BtnsWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
}
