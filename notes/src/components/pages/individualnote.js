import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const IndividualNotePage = styled.div`
  width: 90%; 
  height: 640px;
`
const TitleInput = styled.input`
  width: 70%;
  height: 25px;
  margin: 30px;
`
const TextArea = styled.textarea`
  width: 85%; 
  height: 250px;
  margin: 30px;
`
const Btn = styled(NavLink)`
  width: 150px;
  height: 50px;
  border: 1px solid black; 
  margin: 10px 30px;
  text-decoration: none; 
  display: flex; 
  justify-content: center;
  align-items: center;
  pointer: cursor;
`

function IndividualNote(){
    return (
      <IndividualNotePage>
        <TitleInput placeholder="Title" />
        <TextArea placeholder="Description" />
        <Btn to="/">Add Revisions</Btn>
        <Btn to="/">Delete</Btn>
      </IndividualNotePage>
    );
}
export default IndividualNote;
