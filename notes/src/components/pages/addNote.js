import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NewNotePage = styled.div`
  width: 90%;
  height: 640px;
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  width: 70%;
  height: 25px;
  margin: 30px;
`;
const TextArea = styled.textarea`
  width: 70%;
  height: 250px;
  margin: 30px;
`;
const Btn = styled(NavLink)`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  margin: 10px 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer: cursor;
`;



export default function AddNote() {
  const initialNote = {id: null, title: "", content: "" };
  const [newNote, setNewNote] = useState(initialNote);
  const useInputChange = event => {
    const { name, value } = event.target;
    setNewNote({ ...newNote, [name]: value });
  };


  
  return (
    <NewNotePage>
      <form>
        <TitleInput
          placeholder="Title"
          name="title"
          value={newNote.title}
          onChange={useInputChange}
        />
        <TextArea
          placeholder="Description"
          name="content"
          value={newNote.content}
          onChange={useInputChange}
        />
        <Btn to="/">Add Note</Btn>
      </form>
    </NewNotePage>
  );
}
