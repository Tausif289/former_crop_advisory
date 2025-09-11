import React from 'react';
import { Menu, Sprout, LogOut, User } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-green-600 text-white shadow-lg z-50">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-green-700 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <Sprout className="w-7 h-7" />
            <span className="text-xl font-bold">SmartCropAdvisor</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline text-sm font-medium">Welcome, Farmer</span>
          
          {/* Profile Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 rounded-lg px-3 py-2 transition-colors">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">Profile</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Farmer Name</p>
                  <p className="text-xs text-gray-600">farmer@example.com</p>
                </div>
                
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
                
                <button 
                  onClick={() => {
                    // Handle logout logic here
                    alert('Logged out successfully!');
                    window.location.href = '/login';
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;