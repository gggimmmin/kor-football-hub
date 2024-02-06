import { BtnWrapper } from "styles/AddFormStyle";

export default function Button({ text, onClick = () => {} }) {
  return (
    <BtnWrapper>
      <button onClick={onClick}>{text}</button>
    </BtnWrapper>
  );
}
