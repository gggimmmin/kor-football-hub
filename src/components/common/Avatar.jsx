import { AvatarFigure } from "styles/LetterCardStyle";
import avatar from "assets/avavtar.png";

export default function Avatar({ src, size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src ?? avatar} alt="아바타이미지" />
    </AvatarFigure>
  );
}
