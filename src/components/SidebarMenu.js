import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUtensils,
  FaBullseye,
  FaList,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const InteractiveListContainer = styled.div`
  background-color: #2c2c38;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  margin-top: 20px;
  height: 375px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #f1c40f;
  }
`;

const ItemIcon = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  font-size: 1.5rem;
`;

const Details = styled.div`
  margin-top: 10px;
  margin-left: 51px;
  font-size: 1rem;
`;

const SidebarMenu = () => {
  const [activeList, setActiveList] = useState(null);

  const toggleList = (listName) => {
    if (activeList === listName) {
      setActiveList(null);
    } else {
      setActiveList(listName);
    }
  };

  const goals = [
    "Customer Satisfaction",
    "Quality and Consistency",
    "Profitability",
    "Brand Reputation",
    "Operational Efficiency",
  ];
  const popularDishes = [
    "Pasta Carbonara",
    "Cheeseburger",
    "Tacos",
    "Sushi Rolls",
  ];
  const menuItems = ["Item 1", "Item 2", "Item 3"]; // Replace with actual menu items

  return (
    <InteractiveListContainer>
      <ListItem onClick={() => toggleList("goals")}>
        <ItemIcon>
          <IconWrapper color="#e74c3c">
            <FaBullseye />
          </IconWrapper>
          Goals
        </ItemIcon>
        {activeList === "goals" ? <FaChevronDown /> : <FaChevronRight />}
      </ListItem>
      {activeList === "goals" && (
        <Details>
          {goals.map((goal, index) => (
            <div key={index}>{goal}</div>
          ))}
        </Details>
      )}

      <ListItem onClick={() => toggleList("dishes")}>
        <ItemIcon>
          <IconWrapper color="#3498db">
            <FaUtensils />
          </IconWrapper>
          Popular Dishes
        </ItemIcon>
        {activeList === "dishes" ? <FaChevronDown /> : <FaChevronRight />}
      </ListItem>
      {activeList === "dishes" && (
        <Details>
          {popularDishes.map((dish, index) => (
            <div key={index}>{dish}</div>
          ))}
        </Details>
      )}

      <ListItem onClick={() => toggleList("menu")}>
        <ItemIcon>
          <IconWrapper color="#2ecc71">
            <FaList />
          </IconWrapper>
          Menu
        </ItemIcon>
        {activeList === "menu" ? <FaChevronDown /> : <FaChevronRight />}
      </ListItem>
      {activeList === "menu" && (
        <Details>
          {menuItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Details>
      )}
    </InteractiveListContainer>
  );
};

export default SidebarMenu;
