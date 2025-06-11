import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaChartBar, FaChartLine, FaDotCircle } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Users",
      data: [400, 800, 600, 500, 700, 650],
      backgroundColor: "#38bdf8",
      borderColor: "#38bdf8",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      ticks: { color: "#ccc" },
      grid: { display: false },
    },
  },
};

const ChartCard = () => {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="max-w-md mx-auto p-4 bg-black text-white rounded-2xl shadow-xl space-y-6 font-sans">
      <div>
        <h2 className="text-xl font-bold">Data Visualization</h2>
        <p className="text-gray-400 text-sm">Interactive chart types</p>
      </div>

      {/* Chart Tabs */}
      <div className="flex bg-gray-900 text-sm rounded-full w-fit px-1 py-1 space-x-1">
        <button
          onClick={() => setChartType("bar")}
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition ${
            chartType === "bar"
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <FaChartBar size={14} /> Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition ${
            chartType === "line"
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <FaChartLine size={14} /> Line
        </button>
    
      </div>

      {/* Chart Card */}
      <div className="bg-gray-950 rounded-xl p-4 shadow-sm shadow-emerald-50 space-y-4">
        <h3 className="text-lg font-semibold">
          {chartType === "bar" ? "Bar" : "Line"} Chart
        </h3>
        <p className="text-sm text-gray-400 mb-4">January - June 2024</p>

        {chartType === "bar" ? (
          <Bar data={data} options={options} />
        ) : (
          <Line data={data} options={options} />
        )}

        <div className="mt-4 text-sm">
          <p className="text-white font-semibold">
            Trending up by <span className="text-green-400">5.2%</span> this
            month <span className="inline-block ml-1">↗</span>
          </p>
          <p className="text-gray-400 mt-1">
            Chart updates dynamically based on recent metrics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
