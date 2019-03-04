import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";
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

//add the note to the api
const AddNote = props => {
  const noteArr = props.notesData;
  const [storage, setStorage] = useState(noteArr);

  const initialNote = { title: "", content: "" };
  const [newNote, setNewNote] = useState(initialNote);
  const useInputChange = event => {
    const { name, value } = event.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const addNewNote = async e => {
    e.preventDefault();
    axios
      .post("https://enigmatic-bayou-92631.herokuapp.com/notes", newNote)
      .then(res => {
        setNewNote({
          id: "",
          title: "",
          content: ""
        })
          .catch(res => {
            if (res.data === "") {
              alert("You need to fill the title and content");
              res.status(400);
            }
          })
          .then(res => {
            console.log(newNote.title);
            const status = res.data.status;
            if (status === 200) {
              const newNoteData = storage.push(newNote);
              setStorage(...storage, newNoteData);
            }
          });
      })
      .catch(err => console.log(err));
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
        <div onClick={addNewNote}>
          <Btn onClick={refreshPage} to="/">
            Add Note
          </Btn>
        </div>
      </form>
    </NewNotePage>
  );
};
export default AddNote;
