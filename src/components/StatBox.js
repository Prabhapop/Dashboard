import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = styled.div`
  background-color: #2c2c38;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex-grow: 1;
  margin-right: 20px;
  position: relative;
  width: ${(props) => (props.large ? "300px" : "65px")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:last-child {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #aaa;
  font-size: 1.2em;
`;

const Value = styled.p`
  font-size: 24px;
  margin: 5px 0;
`;

const Percentage = styled.p`
  color: ${(props) => (props.down ? "#f44336" : "#4caf50")};
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const StatBox = ({ title, value, icon, percentage, down, large }) => (
  <Box large={large}>
    <FontAwesomeIcon icon={icon} size="2x" color="#4caf50" />
    <Title>{title}</Title>
    <Value>{value}</Value>
    <Percentage down={down}>
      {down ? `▼ ${percentage}` : `▲ ${percentage}`}
    </Percentage>
  </Box>
);

export default StatBox;
