import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, User, AlertTriangle } from "lucide-react";

const Login: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Tricky button logic
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const handleMouseEnter = () => {
    if (hoverCount < 5) {
      // Stops being tricky after 5 tries so it's not actually impossible
      const randomX = (Math.random() - 0.5) * 300;
      const randomY = (Math.random() - 0.5) * 300;
      setBtnPos({ x: randomX, y: randomY });
      setHoverCount((prev) => prev + 1);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("System Error: You are too intelligent to login here.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>

      <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 p-8 rounded-3xl w-full max-w-md shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Access Denied... ?</h1>
          <p className="text-gray-500 text-sm">
            Please provide credentials in reverse order of importance.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Password Field FIRST */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password (Required First)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-neutral-700 rounded-xl bg-neutral-950 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter your secret first"
                required
              />
            </div>
          </div>

          {/* Username Field SECOND */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Username (Optional Context)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-neutral-700 rounded-xl bg-neutral-950 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Who are you again?"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-neutral-800 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Forget me immediately
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Tricky Button Container */}
          <div className="relative h-14">
            <button
              type="submit"
              onMouseEnter={handleMouseEnter}
              style={{
                transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute top-0 left-0"
            >
              {hoverCount > 0 && hoverCount < 5 ? "Catch Me!" : "Sign In (Maybe)"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-neutral-900 text-gray-500">Or don't</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-700 rounded-xl shadow-sm bg-neutral-800 text-sm font-medium text-gray-300 hover:bg-neutral-700">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Continue as Guest (Dangerous)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
