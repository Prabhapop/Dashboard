// src/components/SidebarMenu.js

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faUtensils,
  faBookOpen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MenuContainer = styled.div`
  background-color: #2c2c38;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  &:last-child {
    border-bottom: none;
  }
`;

const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItemText = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const SidebarMenu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuItemContent>
          <FontAwesomeIcon icon={faBullseye} color="#e57373" size="2x" />
          <MenuItemText>Goals</MenuItemText>
        </MenuItemContent>
        <FontAwesomeIcon icon={faChevronRight} color="#aaa" />
      </MenuItem>
      <MenuItem>
        <MenuItemContent>
          <FontAwesomeIcon icon={faUtensils} color="#64b5f6" size="2x" />
          <MenuItemText>Popular Dishes</MenuItemText>
        </MenuItemContent>
        <FontAwesomeIcon icon={faChevronRight} color="#aaa" />
      </MenuItem>
      <MenuItem>
        <MenuItemContent>
          <FontAwesomeIcon icon={faBookOpen} color="#4db6ac" size="2x" />
          <MenuItemText>Menus</MenuItemText>
        </MenuItemContent>
        <FontAwesomeIcon icon={faChevronRight} color="#aaa" />
      </MenuItem>
    </MenuContainer>
  );
};

export default SidebarMenu;
