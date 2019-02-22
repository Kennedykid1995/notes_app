import React, { Component } from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

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
`
const NoteHeader = styled(NavLink)`
  width: 100%; 
  height: auto; 
  text-decoration: none;
  display: flex; 
  justify-content: center;
`
const NoteContents = styled.div`
  width: 90%; 
  height: 170px;
  border-radius: 5px;
  border: 2px solid #ffc700;
  background: white;
  overflow-y: scroll; 
  display: flex; 
  justify-content: center;
`
const HeaderText = styled.p`
  font-size: 20px; 
  color: gray;
`
const Text = styled.p`
  font-size: 15px; 
  color: gray;
  margin: 5px;
`

class NoteObj extends Component {
    render(){
        return(
            <Note>
                <NoteHeader to="/note"> 
                  <HeaderText>Work Schedule </HeaderText>
                </NoteHeader>
                <NoteContents>
                 <Text></Text>
                </NoteContents>
            </Note>
        )
    }
} 
export default NoteObj;