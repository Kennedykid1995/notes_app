import React, { Component } from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const Note = styled.div`
  margin: 10px;
  width: 150px;
  height: 200px;
  border: 1px solid red; 
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
const NoteHeader = styled(NavLink)`
  width: 100%; 
  height: auto; 
  background: red; 
  padding-bottom: 15px;
  text-decoration: none;
  color: black;
`
const NoteContents = styled.div`
  width: 90%; 
  height: 145px;
  border: 1px solid blue;
  margin-top: 8px;
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