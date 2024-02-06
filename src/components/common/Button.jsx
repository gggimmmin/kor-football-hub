import { BtnWrapper } from "styles/AddFormStyle";

export default function Button({ text }) {
  return (
    <BtnWrapper>
      <button>{text}</button>
    </BtnWrapper>
  );
}
