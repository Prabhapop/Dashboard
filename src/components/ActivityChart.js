// // src/components/ActivityChart.js

// import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import styled from "styled-components";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const ChartContainer = styled.div`
//   background-color: #2c2c38;
//   padding: 20px;
//   border-radius: 10px;
//   color: #fff;
// `;

// const TitleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const Dropdown = styled.select`
//   background-color: #444;
//   color: #fff;
//   border: none;
//   padding: 5px;
//   border-radius: 5px;
// `;

// const ActivityChart = () => {
//   const [period, setPeriod] = useState("Weekly");

//   const handlePeriodChange = (event) => {
//     setPeriod(event.target.value);
//   };

//   const data = {
//     labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
//     datasets: [
//       {
//         label: "Activity",
//         data: [10, 7, 8, 6, 9, 14, 10, 15, 13, 12, 9],
//         backgroundColor: "#5b73e8",
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         grid: {
//           color: "#444",
//         },
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5,
//           callback: (value) => `${value}k`,
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         backgroundColor: "#333",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//       },
//     },
//   };

//   return (
//     <ChartContainer>
//       <TitleContainer>
//         <h3>Activity</h3>
//         <Dropdown value={period} onChange={handlePeriodChange}>
//           <option value="Weekly">Weekly</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Yearly">Yearly</option>
//           <option value="Quarterly">Quarterly</option>
//         </Dropdown>
//       </TitleContainer>
//       <Bar data={data} options={options} />
//     </ChartContainer>
//   );
// };

// export default ActivityChart;

// src/components/ActivityChart.js

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartContainer = styled.div`
  background-color: #2c2c38;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  height: 300px; /* Set a fixed height */
  /* overflow: hidden; Make it non-scrollable */
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Dropdown = styled.select`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 5px;
  border-radius: 5px;
`;

const ActivityChart = () => {
  const [period, setPeriod] = useState("Weekly");

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const data = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
    datasets: [
      {
        label: "Activity",
        data: [10, 7, 8, 6, 9, 14, 10, 15, 13, 12, 9],
        backgroundColor: "#5b73e8",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#444",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          callback: (value) => `${value}k`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <ChartContainer>
      <TitleContainer>
        <h3>Activity</h3>
        <Dropdown value={period} onChange={handlePeriodChange}>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          <option value="Quarterly">Quarterly</option>
        </Dropdown>
      </TitleContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default ActivityChart;
