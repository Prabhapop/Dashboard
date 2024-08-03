// src/RecentOrders.js

import React from "react";
import styled from "styled-components";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const Container = styled.div`
  padding: 20px;
  background-color: #2b2b2b;
  color: white;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 640px;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid #444;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #3b3b3b;
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
  vertical-align: middle;
`;

const Status = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case "Delivered":
        return "green";
      case "Cancelled":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "grey";
    }
  }};
`;

const RecentOrders = () => {
  return (
    <Container>
      <h2>Recent Orders</h2>
      <Table>
        <thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Order No.</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>{order.customer}</Td>
              <Td>{order.orderNo}</Td>
              <Td>{order.amount}</Td>
              <Td>
                <Status status={order.status}>{order.status}</Status>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RecentOrders;
