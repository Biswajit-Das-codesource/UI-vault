import React, { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";

const GithubStarButton = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/Biswajit-Das-codesource/UI-library");
        const data = await res.json();

        if (typeof data?.stargazers_count === "number") {
          setStars(data.stargazers_count);
        } else {
          setStars(0);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stars:", err);
        setStars(0);
      }
    };

    fetchStars();
  }, []);

  return (
    <a
      href="https://github.com/Biswajit-Das-codesource/UI-library"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2.5 border rounded-full text-sm font-medium bg-white backdrop-blur border-white/10 text-black hover:bg-white/100 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
    >
      <FaGithub className="text-black text-lg" />
      Star on GitHub
      <span className="flex items-center gap-1 text-sm font-semibold">
        <FaStar className="text-yellow-400 text-lg" />
        {stars !== null ? stars.toLocaleString() : "Loading..."}
      </span>
    </a>
  );
};

export default GithubStarButton;
