import React from "react";
import { Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- Forgot Password Page ---
export const ForgotPassword: React.FC = () => {
  const handleLeave = () => {
    window.location.href = "about:blank";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-red-950/20">
      <div className="max-w-md w-full bg-neutral-900 border border-red-900/50 p-8 rounded-2xl text-center shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Why?</h1>
        <p className="text-xl text-gray-300 mb-8">Why did you forget your password?</p>
        <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 mb-8">
          <p className="text-gray-400">
            If you forgot, please leave! Our product does not welcome people who forget passwords.
          </p>
        </div>
        <button
          onClick={handleLeave}
          className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          Leave Now <ArrowRight />
        </button>
      </div>
    </div>
  );
};

// --- Products Page (Infinite Loading) ---
export const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-center px-4">
      <Loader2 className="h-24 w-24 text-indigo-500 animate-spin-slow mb-8" />
      <h2 className="text-3xl font-light tracking-widest text-white mb-2">LOADING INNOVATION</h2>
      <p className="text-gray-500 animate-pulse">Calculating zero-value assets...</p>
      <p className="text-lg text-gray-400 mt-32 max-w-2xl font-medium leading-relaxed border border-dashed border-gray-800 p-4 rounded-lg">
        (We are essentially wasting your time, just like we promised in the Efficiency Degradation
        feature.)
      </p>
    </div>
  );
};

// --- Pricing Page ---
export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-neutral-950 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-8">
          PRICING
        </h1>

        <div className="bg-neutral-900 border border-yellow-500/30 p-12 rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold px-4 py-1 transform translate-x-8 translate-y-4 rotate-45">
            BEST VALUE
          </div>

          <h2 className="text-2xl text-gray-400 uppercase tracking-widest mb-4">
            The "Everything & Nothing" Plan
          </h2>

          <div className="flex justify-center items-baseline mb-8 flex-wrap">
            <span className="text-5xl md:text-7xl font-bold text-white">$999,999,999,999</span>
            <span className="text-2xl text-gray-500 ml-2">.00 / mo</span>
          </div>

          <p className="text-xl text-indigo-300 mb-12 italic">— Is it worth it? Probably not.</p>

          <div className="space-y-4 text-left max-w-md mx-auto mb-12 text-gray-400">
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Unlimited access to nothing</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Priority disappointment</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>24/7 Ignored support tickets</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>A badge that says "I spent money"</span>
            </div>
          </div>

          <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed">
            Credit Card Declined (Predicted)
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Privacy Policy ---
export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-neutral-950 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="bg-white p-4 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600&h=400&fit=crop"
          alt="A random placeholder which represents our privacy policy (A Cat)"
          className="rounded"
        />
        <p className="text-black text-center mt-4 font-handwriting text-lg">
          We assume this is a cat. This is our policy. Meow.
        </p>
      </div>
      <p className="mt-8 text-gray-500 max-w-2xl text-center">
        Legal Disclaimer: By looking at the image above, you agree to give us your soul.
      </p>
    </div>
  );
};

// --- Terms of Service ---
export const Terms: React.FC = () => {
  const gibberish = Array(50)
    .fill(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    )
    .join(" ");

  return (
    <div className="min-h-screen pt-24 px-4 bg-neutral-950 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 h-[60vh] overflow-y-scroll font-mono text-xs text-gray-500 leading-tight">
          <h3 className="text-xl text-white mb-4">SECTION 1: THE NONSENSE</h3>
          <p className="break-words">{gibberish}</p>
          <h3 className="text-xl text-white my-4">SECTION 2: MORE NONSENSE</h3>
          <p className="break-words">{gibberish}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300">
            I do not understand, take me home
          </Link>
        </div>
      </div>
    </div>
  );
};
