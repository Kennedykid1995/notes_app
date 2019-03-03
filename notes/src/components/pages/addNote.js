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
`;
const TextArea = styled.textarea`
  width: 70%;
  height: 250px;
  margin: 30px;
  resize: none; 

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

  const refreshPage = () =>{
    window.location.reload(); 
  }

  const addNewNote = async(e) => {
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
          if(res.data === ""){
            alert("You need to fill the title and content");
            res.status(400)
            
          }
        })
        .then(res => {
          console.log(newNote.title)
          const status = res.data.status;
          if( status === 200){
            const newNoteData = storage.push(newNote);  
            setStorage(...storage, newNoteData)}
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
        <div onClick={addNewNote} >
        <Btn onClick={ refreshPage} to="/">
          Add Note
        </Btn>
        </div>
      </form>
    </NewNotePage>
  );
};
export default AddNote;
