import React, { Component } from 'react';
import styled from "styled-components";
import NoteObj from "../note"; 

const ViewNotesPage = styled.div`
  width: 90%; 
  height: 640px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
`

class NotePage extends Component{
    render(){
        return(
            <ViewNotesPage>
                <NoteObj />
            </ViewNotesPage>
        )
    }
}
export default NotePage;