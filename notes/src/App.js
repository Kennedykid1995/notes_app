import React, { Component } from 'react';
import './design-system.css';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const AppHolder = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
`
const NoteBox = styled.div`
  width: 90%;
  height:560px;
  margin-top: 15px;
  background: white;
`
const NavBar = styled.div`
  width: 100%;
  height: auto; 
  display: flex; 
  justify-content: space-evenly;
`
const NavItem = styled(NavLink)`
  font-size: 20px;
  padding: 20px;
  text-decoration: none; 
  color: black; 
`
const PageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`
const ViewNotesPage = styled.div`
  width: 90%; 
  height: 490px;
  border: 1px solid black; 
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
`
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
const NoteHeader = styled.header`
  width: 100%; 
  height: auto; 
  background: red; 
  padding-bottom: 15px;
`
const NoteContents = styled.div`
  width: 90%; 
  height: 145px;
  border: 1px solid blue;
  margin-top: 7px;
`

class App extends Component {
  render() {
    return (
      <AppHolder>
        <NoteBox>
          <NavBar>
            <NavItem to="/">
              View Notes
            </NavItem>
            <NavItem to="/add-note">
              Add Note
            </NavItem>
          </NavBar>
          <PageContainer>
            <ViewNotesPage>
              <Note>
                <NoteHeader>Title</NoteHeader>
                <NoteContents>
                  blah 
                </NoteContents>
              </Note>
            </ViewNotesPage>
          </PageContainer>
        </NoteBox>
      </AppHolder>
    );
  }
}

export default App;
