import React, { useState , useEffect} from 'react';
import styled from "styled-components";
import NoteObj from "../note"; 

const ViewNotesPage = styled.div`
  width: 90%; 
  height: 640px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
`

function NotePage(){
        return(
            <ViewNotesPage>
                <NoteObj />
            </ViewNotesPage>
        )
}
export default NotePage;