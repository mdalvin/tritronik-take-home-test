import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const [notes, setNotes] = useState("");
  const url = "https://note-dot-dev-tritronik.appspot.com/note";

  useEffect(() => {
    axios
      .get(url, { headers: { token: "5e2767bb-1518-4d0d-8c36-98536d54a7a8" } })
      .then((res) => {
        console.log(res.data.content);
        setNotes(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      id: id,
      note: note,
      color: color,
    };

    axios
      .put(url, data, {
        headers: { token: "5e2767bb-1518-4d0d-8c36-98536d54a7a8" },
      })
      .then((res) => {
        Swal.fire(
          'Done!',
          'Your changes has been saved!',
          'success'
        );
        return window.location.href="/";
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
                onChange={(e) => setNote(e.target.value)}
                required
              />
              <FormLabel htmlFor="color">New color</FormLabel>
              <FormInput
                type="color"
                id="color"
                name="color"
                onChange={(e) => setColor(e.target.value)}
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
