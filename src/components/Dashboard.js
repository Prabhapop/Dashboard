import React from "react";
import styled from "styled-components";
import StatBox from "./StatBox";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import SidebarMenu from "./SidebarMenu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBox,
  faBan,
  faDollarSign,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column; /* Changed to column to stack elements vertically */
  height: 100vh;
  width: 100vw; /* Changed to 100vw to take full viewport width */
  box-sizing: border-box;
  overflow-y: auto; /* Added to allow vertical scrolling */
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap; /* Added to wrap stat boxes to next line on smaller screens */
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  flex-grow: 1; /* Added to make main content take available space */
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Added to make left column take full height */
  width: 100%;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <StatsContainer>
        <StatBox
          title="Total Orders"
          value="75"
          icon={faShoppingCart}
          percentage="3%"
        />
        <StatBox
          title="Total Delivered"
          value="70"
          icon={faBox}
          percentage="-3%"
          down
        />
        <StatBox
          title="Total Cancelled"
          value="5"
          icon={faBan}
          percentage="3%"
        />
        <StatBox
          title="Total Revenue"
          value="$12k"
          icon={faDollarSign}
          percentage="-3%"
          down
        />
        <StatBox
          title="Net Profit"
          value="$6759.25"
          icon={faChartPie}
          percentage="3%"
          large
        />
      </StatsContainer>
      <MainContent>
        <LeftColumn>
          <ActivityChart />
          <RecentOrders />
        </LeftColumn>
        <RightColumn>
          <SidebarMenu />
          <CustomerFeedback />
        </RightColumn>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
