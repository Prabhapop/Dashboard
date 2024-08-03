import React from "react";
import styled from "styled-components";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #2c2c38;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          style={{
            marginLeft: "10px",
            background: "none",
            border: "none",
            color: "white",
          }}
        />
      </SearchBar>
      <Profile>
        <FaEnvelope />
        <FaBell style={{ marginLeft: "15px" }} />
        <ProfileImage src="./profile1.jpg" alt="Profile" />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
