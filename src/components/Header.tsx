import React, { useState } from 'react';
import { Menu, X, Crown, User, Heart } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Heart },
    { id: 'workouts', label: 'التمارين', icon: Crown },
    { id: 'nutrition', label: 'التغذية', icon: User },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Heart className="h-8 w-8 text-pink-500 ml-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              FitLady
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <Icon className="h-4 w-4 ml-2" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Premium Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Crown className="h-4 w-4 inline ml-2" />
              الاشتراك المميز
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none focus:text-pink-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <Icon className="h-5 w-5 ml-2" />
                  {item.label}
                </button>
              );
            })}
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium">
              <Crown className="h-5 w-5 inline ml-2" />
              الاشتراك المميز
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;