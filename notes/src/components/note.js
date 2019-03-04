import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom";
 
const Note = styled.div`
  margin: 10px;
  width: 200px;
  height: 195px;
  background: #ffe589;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  animation: roll-in-left 1s ease-out both;
  @keyframes roll-in-left {
    0% {
              transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
              transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
  
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
  height: 135px;
  border-radius: 5px;
  border: 2px solid #ffc700;
  background: white;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;
const HeaderText = styled.p`
  font-size: 15px;
  color: gray;
`;
const Text = styled.p`
  font-size: 12px;
  color: gray;
  margin: 5px;
`;


const NoteObj = props => {
 return (
    <>
      {props.load ? (
        "...loading"
      ) : (
        <>
          {props.note.map(({ id, title, content }) => (
            <Note key={id}>
              <NoteHeader to={`/note/${id}`}>
                <HeaderText>{title}</HeaderText>
              </NoteHeader>
              <NoteContents>
                <Text>{content}</Text>
              </NoteContents>
            </Note>
          ))}
        </>
      )}
    </>
  );
}
export default NoteObj;
