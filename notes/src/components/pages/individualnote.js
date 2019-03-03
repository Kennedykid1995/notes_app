import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEdit } from "../hooks";
import axios from "axios";

const IndividualNotePage = styled.div`
  width: 90%;
  height: 640px;
  display: flex;
  flex-direction:column;
`;
const TitleInput = styled.input`
  width: 70%;
  height: 25px;
  margin: 30px;
`;
const TextArea = styled.textarea`
  width: 70%;
  height: 150px;
  margin: 30px;
  resize: none; 
`;
const Btn = styled(NavLink)`
  width: 100px;
  height: 25px;
  border: 1px solid black;
  margin: 10px 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer: cursor;
  font-size: 12px;
`;

const IndividualNote = props => {
  const noteArr = props.notesData;
  const [storage, setStorage] = useState(noteArr);
  const url = window.location.pathname;
  const identification = url.substring(url.lastIndexOf("/") + 1);
  const [editNote, setEditNote] = useState({ title: "", content: "" });
  // const [editNote, setEditNote] = useState(initialNote);
  const useInputChange = event => {
    const { name, value } = event.target;
    setEditNote({ ...editNote, [name]: value });
  };
  const refreshPage = () =>{
    window.location.reload(); 
  }
  const editANote = (e) => {
    e.preventDefault(); 
    console.log(editNote.title)
    axios.put(`http://localhost:3001/notes/${identification}`, editNote)
    .then( res => {
      console.log(res.data)
      setEditNote({editNote});
    })
    .catch(err => console.log(err))
}
  const deleteNote = e => {
    e.preventDefault();
    axios
      .delete(`https://enigmatic-bayou-92631.herokuapp.com/notes/${identification}`)
      .then(res => {
        console.log(res.data);
        axios.get("https://enigmatic-bayou-92631.herokuapp.com/notes").then(response => {
          setStorage(...storage, response.data);
          console.log(response.data)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [idData] = useEdit(`https://enigmatic-bayou-92631.herokuapp.com/notes/${identification}`);
  return (
    <>
      {idData.map(({ id, title, content }) => (
        <IndividualNotePage key={id}>
          <TitleInput
            placeholder="Title"
            name="title"
            defaultValue={title}
            onChange={useInputChange}
          />
          <TextArea
            placeholder="Description"
            name="content"
            defaultValue={content}
            onChange={useInputChange}
          />
          <div onClick={editANote}><Btn onClick={refreshPage} to="/">Add Revisions</Btn></div>
          <div onClick={deleteNote}><Btn onClick={refreshPage} to="/"> Delete </Btn></div>
        </IndividualNotePage>
      ))}
    </>
  );
};
export default IndividualNote;
