import React, { Component } from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const Note = styled.div`
  margin: 10px;
  width: 250px;
  height: 250px;
  background: #ffe589;
  border-radius: 5px; 
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
const NoteHeader = styled(NavLink)`
  width: 100%; 
  height: auto; 
  padding-bottom: 15px;
  text-decoration: none;
  color: black;
`
const NoteContents = styled.div`
  width: 90%; 
  height: 195px;
  border-radius: 5px;
  border: 2px solid #ffc700;
  background: white;
  margin-top: 8px;
  overflow-y: scroll; 
`

class NoteObj extends Component {
    render(){
        return(
            <Note>
                <NoteHeader to="/note">Title</NoteHeader>
                <NoteContents>
                  blah 
                </NoteContents>
            </Note>
        )
    }
} 
export default NoteObj;