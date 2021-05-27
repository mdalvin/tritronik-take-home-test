import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  LogoContainer,
} from "./EditElements";

const Edit = () => {
  const [newNote, setNewNote] = useState("");
  const [newColor, setNewColor] = useState("");
  const url = "https://note-dot-dev-tritronik.appspot.com/note";
  const token = "8e60a5f5-d344-4d7b-8a8c-99f53e6dca44";

  const handleSubmit = (e) => {
    const data = {
      newNote: newNote,
      newColor: newColor,
    };

    axios
      .put(url, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
      <Container>
        <FormWrap>
          <Icon to="/">
            <LogoContainer>
              <span style={{ color: "#FEE453" }}>No</span>
              <span style={{ color: "#FEC14A" }}>Ta</span>
            </LogoContainer>
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Edit your note here and then click Save</FormH1>
              <FormLabel htmlFor="for">New note</FormLabel>
              <FormInput
                type="text"
                id="note"
                name="note"
                placeholder="Edit note here"
                onChange={(e) => setNewNote(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">New color</FormLabel>
              <FormInput
                type="text"
                id="color"
                name="color"
                placeholder="Edit color here"
                onChange={(e) => setNewColor(e.target.value)}
                required
              />
              <FormButton type="submit">Save</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Edit;
