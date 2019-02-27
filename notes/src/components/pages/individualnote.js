import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEdit } from "../hooks";
import axios from "axios";

const IndividualNotePage = styled.div`
  width: 90%;
  height: 640px;
`;
const TitleInput = styled.input`
  width: 70%;
  height: 25px;
  margin: 30px;
`;
const TextArea = styled.textarea`
  width: 85%;
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

const IndividualNote = props => {
  const noteArr = props.notesData;
  const [storage, setStorage] = useState(noteArr);

  const url = window.location.pathname;
  const identification = url.substring(url.lastIndexOf("/") + 1);

  const initialNote = { title: "", content: "" };
  const [editNote, setEditNote] = useState(initialNote);
  const useInputChange = event => {
    const { name, value } = event.target;
    setEditNote({ ...editNote, [name]: value });
  };

  const deleteNote = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/notes/${identification}`)
      .then(res => {
        console.log(res.data);
        axios.get("http://localhost:3001/notes").then(response => {
          // storage.shift(response.data)
          setStorage(...storage, response.data);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const editIndividualNote = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/notes/${identification}`)
      .then(res => {
        console.log(res.status)
      })
      .catch(err => console.log(err))
  } 
  const [idData] = useEdit(`http://localhost:3001/notes/${identification}`);
  
  useEffect(() => {
    axios
    .get(`http://localhost:3001/notes/${identification}`)
    .then(response => {
      setEditNote({
        title: response.data.title,
        content: response.data.content
      })
    })
    .catch(err => console.log(err)); 

  })
  const changeTitle = e => {
    setEditNote({
      title: e.target.value,
    })
  }
  return (
    <>
      {idData.map(({ id, title, content }) => (
        <IndividualNotePage key={id}>
          <TitleInput
            placeholder="Title"
            name="title"
            type="text"
            value={changeTitle}
            onChange={useInputChange}
          />
          <TextArea
            placeholder="Description"
            name="content"
            type="text"
            value=""
            onChange={useInputChange}
          />
          <Btn to="/"><div onClick={editIndividualNote}>Add Revisions</div></Btn>
          <Btn to="/">
          <div onClick={deleteNote}>
            Delete
            </div>
          </Btn>
        </IndividualNotePage>
      ))}
    </>
  );
};
export default IndividualNote;
