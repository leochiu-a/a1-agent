import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Bot, Menu, X, Skull, ExternalLink } from "lucide-react";
import { useState } from "react";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Login", path: "/login", highlight: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tighter">
                  A1 <span className="text-neutral-500 font-normal text-sm">agent</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      link.highlight
                        ? "bg-white text-black hover:bg-gray-200 hover:scale-105"
                        : "text-gray-300 hover:text-white hover:bg-neutral-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Skull className="h-5 w-5 text-red-500" />
                System Failure
              </h3>
              <p className="text-gray-400 text-sm">
                Something went wrong while rendering this footer column. Please try ignoring it.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Useless Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/products" className="hover:text-white hover:underline decoration-wavy">
                    Non-existent Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-white hover:underline decoration-dotted"
                  >
                    Absurd Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:text-white cursor-help"
                  >
                    Help Center (404)
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">Don't Contact Us</h3>
              <p className="text-gray-400 text-sm">
                We process all emails by immediately deleting them to ensure zero response time
                latency.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center">
              &copy; 2025 A1 is not AI. All rights reserved. But we are not sure what rights.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                Privacy Policy <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                to="/terms"
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                Terms of Service <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
