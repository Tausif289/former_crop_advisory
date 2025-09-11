import React, { useState } from "react";

interface Crop {
  name: string;
  price: number;
  location: string;
  image: string;
}

const MarketPrice: React.FC = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const crops: Crop[] = [
    { name: "Wheat", price: 2200, location: "Delhi", image: "/images/wheat.jpg" },
    { name: "Rice", price: 1800, location: "Lucknow", image: "/images/rice.jpg" },
    { name: "Maize", price: 1500, location: "Bhopal", image: "/images/maize.jpg" },
    { name: "Barley", price: 1700, location: "Jaipur", image: "/images/barley.jpg" },
    { name: "Sugarcane", price: 3000, location: "Meerut", image: "/images/sugarcane.jpg" },
    { name: "Cotton", price: 4500, location: "Surat", image: "/images/cotton.jpg" },
    { name: "Soybean", price: 3600, location: "Indore", image: "/images/soybean.jpg" },
    { name: "Mustard", price: 5200, location: "Alwar", image: "/images/mustard.jpg" },
    { name: "Groundnut", price: 4800, location: "Rajkot", image: "/images/groundnut.jpg" },
    { name: "Potato", price: 1200, location: "Agra", image: "/images/potato.jpg" },
    { name: "Onion", price: 1400, location: "Nashik", image: "/images/onion.jpg" },
    { name: "Tomato", price: 1600, location: "Pune", image: "/images/tomato.jpg" },
  ];

  // Filter + Sort
  const filteredCrops = crops
    .filter((crop) => crop.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="p-6">
      {/* Banner Image */}
      <div className="relative h-56 w-full mb-6">
        <img
          src="/images/market-banner.jpg"
          alt="Market"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h1 className="text-3xl font-bold text-white">Market Prices</h1>
        </div>
      </div>

      {/* Search + Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search crops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-green-600"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-32 h-32 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold">{crop.name}</h2>
            <p className="text-green-700 font-medium">₹{crop.price} / quintal</p>
            <p className="text-sm text-gray-500">📍 {crop.location} Market</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPrice;
