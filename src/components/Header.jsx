
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Eventify
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Discover
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              My Events
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Help
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Organize Event
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Discover
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                My Events
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Help
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium w-full">
                Organize Event
              </button>
              <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
