import styled from "styled-components";

export const Form = styled.form`
  background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;

export const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 200px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
