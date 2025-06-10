// DashboardUI.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

const lineOptions = {
  responsive: true,
  scales: {
    x: { ticks: { color: "white" } },
    y: { ticks: { color: "white" } },
  },
  plugins: {
    legend: { display: false },
  },
};

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1150, 1120, 1110, 1125, 1300, 1520],
      borderColor: "white",
      backgroundColor: "white",
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "white",
    },
  ],
};

const areaData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Subscriptions",
      data: [200, 800, 400, 950],
      borderColor: "white",
      backgroundColor: "rgba(255,255,255,0.1)",
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "white",
    },
  ],
};

const miniBarData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "Calories",
      data: [240, 300, 280, 260, 320, 350, 340],
      backgroundColor: "white",
      borderRadius: 4,
    },
  ],
};
export default function DashboardUI() {
  return (
    <div
      id="dashboard-grid"
      className="bg-black min-h-screen text-white pt-14 p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/* Revenue Card */}
      <div
        id="revenue-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="text-sm text-zinc-400">Total Revenue</h2>
        <p className="text-3xl font-bold">$15,231.89</p>
        <p className="text-green-500 text-sm">+20.1% from last month</p>
        <Line options={lineOptions} data={lineData} height={120} />
      </div>

      {/* Subscriptions */}
      <div
        id="subscriptions-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <div className="flex justify-between">
          <h2 className="text-sm text-zinc-400">Subscriptions</h2>
          <p className="text-xs text-zinc-400 cursor-pointer">View More</p>
        </div>
        <p className="text-3xl font-bold">+2,350</p>
        <p className="text-green-500 text-sm">+180.1% from last month</p>
        <Line options={lineOptions} data={areaData} height={120} />
      </div>

      {/* Calendar */}
      <div
        id="calendar-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="text-sm text-zinc-400 mb-2">June 2025</h2>
        <div className="grid grid-cols-7 gap-2 text-sm text-center">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d, i) => (
            <div key={i} className="text-zinc-400">
              {d}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const highlight = [5, 6, 13].includes(day);
            return (
              <div
                key={i}
                className={`rounded-full px-2 py-1 ${
                  highlight ? "bg-zinc-700 text-white" : "text-zinc-300"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Move Goal */}
      <div
        id="move-goal-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="text-sm text-zinc-400 mb-2">Move Goal</h2>
        <p className="text-3xl font-bold">350</p>
        <p className="text-sm text-zinc-400 mb-3">CALORIES/DAY</p>
        <div className="mb-2">
          <Line options={lineOptions} data={miniBarData} height={90} />
        </div>
        <button className="bg-white w-full py-2 rounded-xl text-black text-base font-semibold mt-5">
          Set Goal
        </button>
      </div>

      {/* Upgrade Subscription Form */}
      <div
        id="upgrade-form-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="font-semibold text-white mb-2">
          Upgrade your subscription
        </h2>
        <p className="text-sm text-zinc-400 mb-4">
          You are currently on the free plan. Upgrade to the pro plan to get
          access to all features.
        </p>
        <input
          className="bg-gray-900 w-full mb-2 px-3 py-2 rounded-lg text-sm"
          placeholder="Name"
        />
        <input
          className="bg-gray-900 w-full mb-2 px-3 py-2 rounded-lg text-sm"
          placeholder="Email"
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            className="bg-gray-900 px-3 py-2 rounded-lg text-sm"
            placeholder="1234 1234 1"
          />
          <input
            className="bg-gray-900 px-3 py-2 rounded-lg text-sm"
            placeholder="MM/YY"
          />
          <input
            className="bg-gray-900 px-3 py-2 rounded-lg text-sm"
            placeholder="CVC"
          />
        </div>
        <button className="bg-white w-full py-2 p-3 rounded-xl text-black text-base font-semibold mt-4">
          Upgrade your plan
        </button>
      </div>

      {/* Create Account */}
      <div
        id="create-account-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="font-semibold text-white mb-2 text-xl">
          Create an account
        </h2>
        <p className="text-sm text-zinc-400 mb-4">
          Enter your email below to create your account
        </p>
        <div className="flex gap-2 mb-3">
          <button className="bg-gray-900 flex-1 py-2 rounded-xl text-sm font-semibold">
            GitHub
          </button>
          <button className="bg-gray-900 flex-1 py-2 rounded-xl text-sm font-semibold">
            Google
          </button>
        </div>
        <p className="text-center text-xs text-zinc-500 mb-2">
          OR CONTINUE WITH
        </p>
        <input
          className="bg-gray-900 w-full px-3 py-2 rounded-lg text-sm"
          placeholder="m@example.com"
        />
        <input
          className="bg-gray-900 w-full px-3 py-2 rounded-lg text-sm mt-2"
          placeholder="Password"
        />
        <button className="bg-white w-full py-2 p-3 rounded-xl text-black text-base font-semibold mt-4">
          Create account
        </button>
      </div>

      {/* Exercise Minutes */}
      <div
        id="exercise-minutes-card"
        className="bg-gray-950 p-5 rounded-xl shadow-lg shadow-gray-800"
      >
        <h2 className="text-sm text-white mb-1">Exercise Minutes</h2>
        <p className="text-sm text-zinc-400 mb-2">
          Your exercise minutes are ahead of where you normally are.
        </p>
        <Line
          options={lineOptions}
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "You",
                data: [10, 12, 8, 40, 25, 16, 18],
                borderColor: "white",
                backgroundColor: "white",
                pointBackgroundColor: "white",
                tension: 0.4,
              },
              {
                label: "Average",
                data: [15, 14, 12, 18, 17, 15, 16],
                borderColor: "gray",
                backgroundColor: "gray",
                pointBackgroundColor: "gray",
                borderDash: [5, 5],
                tension: 0.4,
              },
            ],
          }}
          height={100}
        />
      </div>
      <div className="bg-gray-950 p-6 rounded-xl  text-center shadow-lg shadow-gray-800">
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <h2 className="text-lg font-bold">Webby Ui</h2>
        <p className="text-sm text-zinc-400 mb-4">@biswajitdev</p>
        <p>
          <span className="font-semibold">Email</span>: biswabhusan@gmail.com
        </p>
        <p>
          <span className="font-semibold">Location</span>: San Francisco, CA
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Software developer passionate about creating user-friendly
          applications.
        </p>
        <button className="mt-4 bg-white text-black font-semibold px-4 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>
      <div className="bg-gray-950 p-6 rounded-xl shadow-lg shadow-gray-800">
        <h2 className="text-xl font-bold mb-2">Productivity Tracker</h2>
        <p className="text-sm text-zinc-400 mb-4">Your daily task overview</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-white" />
            <s className="text-zinc-400">Complete project proposal</s>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-white" />
            Review team submissions
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-white" />
            Prepare for client meeting
          </label>
        </div>
        <p className="text-sm text-zinc-400 mt-4">2 of 3 tasks completed</p>
        <button className="mt-2 bg-white text-black font-semibold px-4 py-2 rounded-lg">
          Add Task
        </button>
      </div>
    </div>
  );
}
