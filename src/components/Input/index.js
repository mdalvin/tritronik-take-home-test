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
  const token = "dd83aee0-2bdd-4740-b89c-611dbc9b9190";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      note: note,
      color: color,
    };

    console.log(data);

    axios
      .post(
        url,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        data
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
              onChange={(e) => setNote(e.target.value)}
            />
            <InputField
              type="text"
              name="color"
              id="color"
              placeholder="Set the color here"
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
