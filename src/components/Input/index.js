import React, { useState } from "react";
import axios from "axios";
import { MdAdd } from "react-icons/md";
import {
  InputButton,
  InputContainer,
  InputField,
  InputForm,
  InputWrapper,
} from "./InputElements";

const InputSection = () => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const url = "https://note-dot-dev-tritronik.appspot.com/note";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      note: note,
      color: color,
    };

    console.log(data);

    axios
      .post(
        url, data, { headers: { token: "a0fd26ac-c3e8-488e-b90b-22bc97e73a58" } }
      )
      .then((res) => {
        console.log(res.data);
        return window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <InputContainer>
        <InputWrapper>
          <InputForm onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="note"
              id="note"
              placeholder="Add new note here"
              required
              onChange={(e) => setNote(e.target.value)}
            />
            <InputField
              type="color"
              name="color"
              id="color"
              required
              onChange={(e) => setColor(e.target.value)}
            />
            <InputButton type="submit">
              <MdAdd />
            </InputButton>
          </InputForm>
        </InputWrapper>
      </InputContainer>
    </>
  );
};

export default InputSection;
