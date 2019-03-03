import React from "react";
import "./design-system.css";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import NotePage from "./components/pages/notepage";
import AddNote from "./components/pages/addNote";
import IndividualNote from "./components/pages/individualnote";
import { useFetch} from "./components/hooks";

const AppHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const NavBox = styled.div`
  width: 90%;
  height: 550px;
  margin-top: 15px;
  background: white;
  border-radius: 5px;
  overflow-y: scroll;
`;
const NavBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
`;
const NavItem = styled(NavLink)`
  font-size: 20px;
  padding: 20px;
  text-decoration: none;
  color: black;
`;
const PageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = props => {
  const [data, loading] = useFetch("https://enigmatic-bayou-92631.herokuapp.com/notes");
  return (
    <AppHolder>
      <NavBox>
        <NavBar>
          <NavItem to="/">View Notes</NavItem>
          <NavItem to="/add-note">Add Note</NavItem>
        </NavBar>
        <PageContainer>
          <Route
            exact
            path="/"
            render={props => (
              <NotePage {...props} noteDa={data} useLoad={loading} />
            )}
          />
          <Route path="/add-note" render={props => <AddNote {...props} notesData = {data} />} />
          <Route path="/note/:id" render={props => <IndividualNote {...props} notesData = {data} />} />
        </PageContainer>
      </NavBox>
    </AppHolder>
  );
};

export default App;
