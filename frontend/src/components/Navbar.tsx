import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Sprout, User, Bell, Globe } from "lucide-react";
import { AppContext } from "../context/appcontext.tsx";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within AppContextProvider");
  }
  const { name, setShowlogin, token, language, setLanguage, translate } =
    context;
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    //{ code: "bn", name: "Bengali" },
    // { code: "ta", name: "Tamil" },
    // { code: "te", name: "Telugu" },
  ];

  const [welcomeText, setWelcomeText] = useState("");
  // useEffect(() => {
  //   const doTranslate = async () => {
  //     const translated = await translate("Welcome to SmartCropAdvisor");
  //     setWelcomeText(translated);
  //   };
  //   doTranslate();
  // }, [language]); // 🔥translate ke bajay language rakho

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 
                   bg-gradient-to-r from-green-600 to-green-700 
                   text-white shadow-xl z-50 backdrop-blur-md"
    >
      <div className="h-full px-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-2">
          <Sprout className="w-7 h-7 text-yellow-300" />
          <Link
            to="/"
            className="text-xl font-extrabold tracking-wide hover:text-yellow-200 transition"
          >
            SmartCropAdvisor
          </Link>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notification */}
          <div className="relative z-300" ref={dropdownRef}>
            <button
              onClick={() => setOpenLang((prev) => !prev)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Language ({selectedLang})</span>
              </div>
            </button>
        
            {openLang && (
              <div className="absolute left-0 font-white top-full mt-2 w-56 bg-green-500 shadow-lg rounded-lg border border-gray-200 z-100">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code.toUpperCase());
                      setLanguage(lang.code);
                      setOpenLang(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-green-600 ${
                      selectedLang.toLowerCase() === lang.code
                        ? "bg-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
                <div className="flex items-center space-x-2">
                  <Sprout className="w-7 h-7 text-yellow-300" />
                  <Link
                    to="/"
                    className="text-xl font-extrabold tracking-wide hover:text-yellow-200 transition"
                  >
                    {welcomeText} {/* 🔥 ab translated text yahan dikhega */}
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Profile Button → Link to Profile Page */}
          {!token ? (
            <Link
              to="/login"
              className="w-28 sm:w-32 px-4 py-2 sm:py-3 bg-yellow-400 text-gray-900 text-base sm:text-lg font-semibold 
                   rounded-xl shadow-lg shadow-black/30 hover:bg-yellow-300 hover:shadow-2xl 
                   transform hover: transition-all text-center"
            >
              Sign Up
            </Link>
          ) : (
            <Link
              to="/profile"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 rounded-full px-3 py-1.5 transition-colors"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                {name}
              </span>
            </Link>
          )}
          {/* Hamburger button */}
          {token ? (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 hover:bg-green-800 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
