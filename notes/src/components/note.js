import React, {useState} from "react";
import { useFetch } from "./hooks";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import IndividualNote from './pages/individualnote';

const Note = styled.div`
  margin: 10px;
  width: 255px;
  height: 250px;
  background: #ffe589;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;
const NoteHeader = styled(NavLink)`
  width: 100%;
  height: auto;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;
const NoteContents = styled.div`
  width: 90%;
  height: 170px;
  border-radius: 5px;
  border: 2px solid #ffc700;
  background: white;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;
const HeaderText = styled.p`
  font-size: 20px;
  color: gray;
`;
const Text = styled.p`
  font-size: 15px;
  color: gray;
  margin: 5px;
`;

function NoteObj() {
  const [data, loading] = useFetch("http://localhost:3001/notes");
  const noteData = data
  console.log(noteData)
  return (
    <>
      {loading ? (
        "...loading"
      ) : (
        <>
          {data.map(({ id, title, content }) => (
            <Note>
              <NoteHeader key={id} to={`/note/${id}`}>
                <HeaderText>{title}</HeaderText>
              </NoteHeader>
              <NoteContents>
                <Text>{content}</Text>
              </NoteContents>
              <Route
                path={`/note`}
                render={() => (<IndividualNote 
                  noteData = {noteData}
                />)}
              />
            </Note>
          ))}
        </>
      )}
    </>
  );
}
export default NoteObj;
