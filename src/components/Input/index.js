import React, { useState } from "react";
import axios from "axios";
import { MdAdd } from "react-icons/md";
import Swal from "sweetalert2";
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
        url, data, { headers: { token: "5e2767bb-1518-4d0d-8c36-98536d54a7a8" } }
      )
      .then((res) => {
        Swal.fire(
          'Awesome!',
          'Your note has been saved!',
          'success'
        );
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
