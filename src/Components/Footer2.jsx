import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';

const Footer2 = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HiArrowLeft className="text-xl" />
            <span className="text-lg font-semibold">UIvault</span>
          </div>
         <p className="text-sm mb-2">
  Built by{" "}
  <a
    href="https://www.linkedin.com/in/biswajitdas-/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-400 hover:underline"
  >
    @biswajit
  </a>
  {" "}
  &{" "}
  <a
    href="https://www.linkedin.com/in/biswabhusan-sahoo-22b704292/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-400 hover:underline"
  >
    @biswabhusan
  </a>
</p>

          <button className="flex items-center justify-between bg-zinc-800 px-4 py-2 rounded-md mt-2 text-sm hover:bg-zinc-700 transition">
            Share Your Thoughts On
            <FaXTwitter className="ml-2 text-lg" />
          </button>
          <p className="text-zinc-500 text-xs mt-6">© 2025 UIvault. All rights reserved.</p>
        </div>

        {/* Middle Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Pages</h4>
            <ul className="space-y-1 text-zinc-400 text-sm">
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blocks</a></li>
              <li><a href="#">Colors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Socials</h4>
            <ul className="space-y-1 text-zinc-400 text-sm">
              <li><a href="#">Github</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-zinc-400 text-sm">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big Blurred Text Background */}
      <div className="absolute bottom-0 left-0 text-[15rem] font-bold text-zinc-900 opacity-10 leading-none select-none pointer-events-none">
        UIVAULT
      </div>
    </footer>
  );
};

export default Footer2;
