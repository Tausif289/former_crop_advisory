import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Lightbulb,
  BookOpen,
  DollarSign,
  Cloud,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: "/", name: "Dashboard", icon: Home },
    { path: "/crop-recommendation", name: "Crop Recommendation", icon: Lightbulb },
    { path: "/farming-guide", name: "Crop Farming Guide", icon: BookOpen },
    { path: "/market-price", name: "Market Price", icon: DollarSign },
    { path: "/weather-forecast", name: "Weather Forecast", icon: Cloud },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar at right */}
      <div
        className={`
          fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 lg:static lg:shadow-none
        `}
      >
        <div className="p-4">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <nav className="space-y-2 mt-8 lg:mt-0">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-green-100 text-green-700 border-l-4 border-green-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
