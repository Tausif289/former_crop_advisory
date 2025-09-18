// src/pages/FarmingMaterials.tsx
import React, { useState } from "react";
import products from '../assets/seeds.ts';

const FarmingMaterials = () => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const filteredItems = products.filter(item => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "" || item.type === filterType)
    );
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">Seeds & Farming Materials</h1>

      {/* Seeds Shop Image Section */}
      <div className="bg-green-50 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6 shadow-md">
        <img
          src="https://i0.wp.com/ymwsolution.com/wp-content/uploads/2023/01/fertilizer-shop-products.jpg?resize=800%2C445&ssl=1"
          alt="Seeds Shop"
          className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Market prices of fertilizer & seeds</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-quality seeds for wheat, rice, maize, and more.</li>
            <li>Organic fertilizers and pesticides to boost crop yield.</li>
            <li>Modern farming tools and equipment available.</li>
            <li>Expert guidance for choosing the right products for your farm.</li>
          </ul>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-green-500"
        />

        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 w-full md:w-1/4"
        >
          <option value="">All Types</option>
          <option value="Seed">Seed</option>
          <option value="Fertilizer">Fertilizer</option>
          <option value="Pesticide">Pesticide</option>
          <option value="Tool">Tool</option>
        </select>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              {item.image && (
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-gray-600 mb-1">{item.type}</p>
                <p className="text-green-700 font-medium">₹{item.price} / {item.unit}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default FarmingMaterials;
