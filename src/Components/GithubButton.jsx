import React, { useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";

const NpmDownloadButton = () => {
  const [downloads, setDownloads] = useState("");

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const res = await fetch("https://img.shields.io/npm/dt/ui-vault.json");
        const data = await res.json();

        if (data?.value) {
          setDownloads(data.value);
        } else {
          setDownloads("0");
        }
      } catch (err) {
        console.error("Failed to fetch NPM downloads:", err);
        setDownloads("0");
      }
    };

    fetchDownloads();
  }, []);

  return (
    <a
      href="https://www.npmjs.com/package/ui-vault"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-2 py-2 border rounded-full text-sm font-medium bg-white backdrop-blur border-white/10 text-black hover:bg-white/100 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
    >
      <FaBoxOpen className="text-black text-lg" />
      Downloads on NPM
      <span className="flex items-center gap-1 text-sm font-semibold">
        📦 {downloads !== "" ? downloads : "Loading..."}
      </span>
    </a>
  );
};

export default NpmDownloadButton;
