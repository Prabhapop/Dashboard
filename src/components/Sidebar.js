import React from "react";
import styled from "styled-components";
import { FaHome, FaChartPie, FaFileAlt, FaCog } from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const NavText = styled.span`
  margin-left: 15px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavItem>
        <FaHome />
        <NavText>Home</NavText>
      </NavItem>
      <NavItem>
        <FaChartPie />
        <NavText>Analytics</NavText>
      </NavItem>
      <NavItem>
        <FaFileAlt />
        <NavText>Reports</NavText>
      </NavItem>
      <NavItem>
        <FaCog />
        <NavText>Settings</NavText>
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
