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
  padding: 5px;
  border-radius: 20px;
  border: 2px solid #fcc600;
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @keyframes slide-in-top {
    0% {
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
              transform: translateY(0);
      opacity: 1;
    }
  }
`;
const TextArea = styled.textarea`
  width: 70%;
  height: 170px;
  margin: 30px;
  resize: none; 
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #fcc600;
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @keyframes slide-in-top {
    0% {
              transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
              transform: translateY(0);
      opacity: 1;
    }
  }
`;
const Btn = styled(NavLink)`
  width: 100px;
  height: 25px;
  border-radius: 15px;
  background: #ffbb00; 
  margin: 10px 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer: cursor;
  color: white;
  font-size: 12px;
  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @keyframes scale-up-center {
      0% {transform: scale(0.5);}
      100% { transform: scale(1);}
    }  
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
    axios.put(`https://enigmatic-bayou-92631.herokuapp.com/notes/${identification}`, editNote)
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
          <div onClick={editANote}><Btn className="editBtn" onClick={refreshPage} to="/">Add Revisions</Btn></div>
          <div onClick={deleteNote}><Btn className="deleteBtn" onClick={refreshPage} to="/"> Delete </Btn></div>
        </IndividualNotePage>
      ))}
    </>
  );
};
export default IndividualNote;
