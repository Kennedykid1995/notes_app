import React from 'react';
import styled from "styled-components";
import NoteObj from "../note"; 

const ViewNotesPage = styled.div`
  width: 90%; 
  height: 640px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const NotePage = props =>{
        return(
            <ViewNotesPage>
                <NoteObj note={props.noteDa} load={props.useLoad} />
            </ViewNotesPage>
        )
}
export default NotePage;