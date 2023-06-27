import axios from "axios";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DynamicChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const apiData = response.data;
        setChartData(apiData.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
    
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="black" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DynamicChart;
