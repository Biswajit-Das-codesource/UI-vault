import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';

const loginCardCode = `
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

<div
  className="p-6 rounded-lg shadow-lg w-full max-w-md mx-auto bg-[#18181b] text-white border-2 border-gray-700"
>
  <h2 className="text-2xl font-semibold mb-4">Login</h2>
  <div className="space-y-4">
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium mb-1 text-gray-300"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-700"
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium mb-1 text-gray-300"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#23232b] text-white border-gray-700"
        placeholder="Enter your password"
      />
    </div>
    <button
      className="w-full py-2 rounded-md font-medium bg-blue-600 text-white"
    >
      Sign In
    </button>
    <div className="flex items-center my-4">
      <div className="flex-grow h-px bg-gray-700" />
      <span className="mx-2 text-gray-500 text-xs">OR</span>
      <div className="flex-grow h-px bg-gray-700" />
    </div>
    <div className="flex flex-col gap-2">
      <button className="w-full py-2 rounded-md font-medium bg-blue-600 text-white flex items-center justify-center gap-2">
        <FaFacebookF /> Continue with Facebook
      </button>
      <button className="w-full py-2 rounded-md font-medium bg-red-600 text-white flex items-center justify-center gap-2">
        <FaGoogle /> Continue with Google
      </button>
      <button className="w-full py-2 rounded-md font-medium bg-gray-800 text-white flex items-center justify-center gap-2">
        <FaGithub /> Continue with GitHub
      </button>
    </div>
  </div>
</div>
`.trim();

const LoginForm = () => (
  <div
    className="p-7 rounded-2xl shadow-lg w-full max-w-sm mx-auto bg-black text-white border-2 border-gray-800"
  >
    <h2 className="text-3xl font-semibold mb-4">Login</h2>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-700"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium mb-1 text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-700"
          placeholder="Enter your password"
        />
      </div>
      <button
        className="w-full py-2 rounded-md font-medium bg-gray-900 border-2 border-gray-800 text-white"
      >
        Sign In
      </button>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-700" />
        <span className="mx-2 text-gray-500 text-xs">OR</span>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full py-2 rounded-md font-medium bg-white text-black flex items-center justify-center gap-2">
          <FaFacebookF /> Continue with Facebook
        </button>
        <button className="w-full py-2 rounded-md font-medium bg-white text-black flex items-center justify-center gap-2">
          <FaGoogle /> Continue with Google
        </button>
        <button className="w-full py-2 rounded-md font-medium bg-white text-black flex items-center justify-center gap-2">
          <FaGithub /> Continue with GitHub
        </button>
      </div>
    </div>
  </div>
);

// Button row with Show in Browser
function ButtonRow({ currentTab, setCurrentTab }) {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-4 mb-4 w-full items-center">
      <button
        onClick={() => setCurrentTab('preview')}
        className={`px-4 py-2 rounded-md ${currentTab === 'preview' ? 'bg-white text-black font-bold' : 'bg-gray-700 text-gray-300 font-bold'}`}
      >
        Preview
      </button>
      <button
        onClick={() => setCurrentTab('code')}
        className={`px-4 py-2 rounded-md ${currentTab === 'code' ? 'bg-white text-black font-bold' : 'bg-gray-700 text-gray-300 font-bold'}`}
      >
        Code
      </button>
      <div className="flex-1" />
      <button
        onClick={() => navigate('/browser')}
        className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-emerald-700 transition-colors ml-auto font-bold"
        style={{ marginLeft: 'auto' }}
      >
        Show in Browser
      </button>
    </div>
  );
}

// Button for leaving browser view
function LeaveBrowserButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 right-6 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors z-10"
    >
      ← Back
    </button>
  );
}

const LoginCard = () => {
  const [currentTab, setCurrentTab] = useState('preview');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(loginCardCode);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/browser"
          element={
            <div className="min-h-screen flex items-center justify-center relative" style={{ background: '#111112' }}>
              <LeaveBrowserButton />
              <LoginForm />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div
              className="min-h-screen flex justify-center items-center p-4"
              style={{ background: "black" }}
            >
              <motion.div
                className="w-full max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h1 className="text-4xl text-white font-bold">LoginCard</h1>
                    <p className="text-gray-400 text-sm">
                      Description according to a login card
                    </p>
                  </div>
                </div>

                <ButtonRow currentTab={currentTab} setCurrentTab={setCurrentTab} />

                <motion.div
                  className="border border-gray-700 rounded-lg p-4 bg-black relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentTab === 'preview' ? (
                    <LoginForm />
                  ) : (
                    <div className="relative">
                      <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition"
                        title="Copy code"
                      >
                        Copy
                      </button>
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{
                          background: '#18181b',
                          borderRadius: '8px',
                          padding: '16px',
                          color: '#fff',
                        }}
                      >
                        {loginCardCode}
                      </SyntaxHighlighter>
                    </div>
                  )}
                  {showToast && (
                    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow z-50 transition">
                      Copied to clipboard!
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginCard;