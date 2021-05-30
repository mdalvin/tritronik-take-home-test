import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormSelect,
  FormWrap,
  Icon,
  LogoContainer,
} from "./EditElements";

const Edit = () => {
  const [id, setId] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newColor, setNewColor] = useState("");
  const [notes, setNotes] = useState("");
  const url = "https://note-dot-dev-tritronik.appspot.com/note";

  useEffect(() => {
    axios
      .get(url, { headers: { token: "a0fd26ac-c3e8-488e-b90b-22bc97e73a58" } })
      .then((res) => {
        console.log(res.data.content);
        setNotes(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    const data = {
      id: id,
      note: newNote,
      color: newColor,
    };

    axios
      .put(url, data, {
        headers: { token: "a0fd26ac-c3e8-488e-b90b-22bc97e73a58" },
      })
      .then((res) => {
        console.log(res.data.content);
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
              <FormLabel htmlFor="id">
                Which note do you want to edit ?
              </FormLabel>
              <FormSelect
                id="id"
                name="id"
                onChange={(e) => setId(e.target.value)}
                required
              >
                <option>- Select note -</option>
                {notes.length !== 0
                  ? notes.map((note) => (
                      <option value={note.id}>{note.note}</option>
                    ))
                  : "No note found"}
              </FormSelect>
              <FormLabel htmlFor="note">New note</FormLabel>
              <FormInput
                type="text"
                id="note"
                name="note"
                placeholder="Edit note here"
                onChange={(e) => setNewNote(e.target.value)}
                required
              />
              <FormLabel htmlFor="color">New color</FormLabel>
              <FormInput
                type="color"
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
