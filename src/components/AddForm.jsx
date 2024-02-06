import { useState } from "react";
import {
  Form,
  InputWrapper,
  BtnWrapper,
  SelectWrapper,
} from "styles/AddFormStyle";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";

export default function AddForm({ setLetters }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("손흥민");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수 입력입니다!");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avartar: null,
      writedTo: member,
      createdAt: new Date(),
    };

    setLetters((prev) => [newLetter, ...prev]);
    setNickname("");
    setContent("");
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임 : </label>
        <input
          onChange={(event) => setNickname(event.target.value)}
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용 : </label>
        <textarea
          onChange={(event) => setContent(event.target.value)}
          value={content}
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 남기실 건가요?</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>손흥민</option>
          <option>이강인</option>
          <option>김민재</option>
          <option>황희찬</option>
        </select>
      </SelectWrapper>
      <Button text="팬 레터 등록" />
    </Form>
  );
}
