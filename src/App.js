import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

const AppContainer = styled.div`
  display: flex;
  /* height: 100vh; */
  width: 100vw;
  max-height: 100vh; /* Full viewport height */
  /* overflow: hidden; Prevents scrolling */
  /* flex-wrap: wrap; */
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #1e1e2f;
  color: white;
  height: 200vh;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Dashboard />
      </MainContent>
    </AppContainer>
  );
}

export default App;
