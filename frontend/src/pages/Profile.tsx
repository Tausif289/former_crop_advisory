// src/pages/Profile.tsx
import React, { useContext,useState } from "react";
import { AppContext } from "../context/appcontext";

const Profile: React.FC = () => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error("AppContext must be used within AppContextProvider");
    }
    const {email,name,mobilenumber,state,district,soiltype,setToken,setDistrict,setEmail,setMobilenumber,setSoiltype,setState,setName,} =context;
  const [formData, setFormData] = useState({
    email: "ramesh@example.com",
    password: "********",
    name: "Ramesh Kumar",
    mobilenumber: "+91 9876543210",
    state: "Uttar Pradesh",
    district: "Lucknow",
    soiltype: "Alluvial",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
  // remove token from localStorage
  localStorage.removeItem("token");

  // clear states
  setToken(null);
  setName("");
  setEmail("");
  setMobilenumber("");
  setState("");
  setDistrict("");
  setSoiltype("");

  // optional: redirect to login
  window.location.href = "/login"; 
};


  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green via-green-200 to-green-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 text-center">
        {/* Profile Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="mt-20">
          <h1 className="text-3xl font-bold text-green-800">{name}</h1>
          <p className="text-gray-500">{email}</p>
          <p className="text-gray-600">{mobilenumber}</p>
          <p className="text-gray-500">
            {district}, {state}
          </p>
          <p className="mt-1 text-gray-600">🌱 Soil: {soiltype}</p>

          {/* Edit / View */}
          {!isEditing ? (
            <>
              {/* Stats row just for style */}
            

              {/* Buttons */}
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="mt-6 space-y-3 text-left">
              {[
                "name",
                "email",
                "password",
                "mobilenumber",
                "state",
                "district",
                "soiltype",
              ].map((field) => (
                <input
                  key={field}
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="w-full p-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
                />
              ))}

              {/* Save / Cancel */}
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
