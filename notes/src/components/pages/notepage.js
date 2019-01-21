import React, { Component } from 'react';
import styled from "styled-components";

const ViewNotesPage = styled.div`
  width: 90%; 
  height: 490px;
  border: 1px solid black; 
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
`

class NotePage extends Component{
    render(){
        return(
            <ViewNotesPage>
            </ViewNotesPage>
        )
    }
}