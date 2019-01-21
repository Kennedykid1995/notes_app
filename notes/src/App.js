import React, { Component } from 'react';
import './design-system.css';
import styled from "styled-components";
import {NavLink, Route} from 'react-router-dom';

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
          </PageContainer>
        </NoteBox>
      </AppHolder>
    );
  }
}

export default App;
