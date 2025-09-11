import React, { useState } from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 flex flex-col lg:ml-64">
          <Header />
          
          <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
            {children}
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;