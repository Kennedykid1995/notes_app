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
  animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @keyframes scale-in-center {
    0% {
              transform: scale(0);
      opacity: 1;
    }
    100% {
              transform: scale(1);
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
                <HeaderText className="title">{title}</HeaderText>
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
