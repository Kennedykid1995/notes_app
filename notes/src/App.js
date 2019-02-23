import React, { useState, useEffect } from 'react';
import './design-system.css';
import styled from "styled-components";
import {NavLink, Route} from 'react-router-dom';
import NotePage from "./components/pages/notepage"; 
import AddNote from './components/pages/addNote';
import IndividualNote from './components/pages/individualnote';

const AppHolder = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
`
const NavBox = styled.div`
  width: 90%;
  height:650px;
  margin-top: 15px;
  background: white;
  border-radius: 5px;
  overflow-y: scroll;
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
  flex-wrap: wrap;
  justify-content: center;
`

function App() {
    return (
      <AppHolder>
        <NavBox>
          <NavBar>
            <NavItem to="/">
              View Notes
            </NavItem>
            <NavItem to="/add-note">
              Add Note
            </NavItem>
          </NavBar>
          <PageContainer>
            <Route
            exact
            path="/"
            render={props =><NotePage {...props} /> }
            />
            <Route
            path="/add-note"
            render={props =><AddNote {...props} /> }
            />
            <Route
            path="/note"
            render={props =><IndividualNote {...props} /> }
            />
          </PageContainer>
        </NavBox>
      </AppHolder>
    );
}

export default App;
