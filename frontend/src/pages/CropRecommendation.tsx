import React from 'react';
import { Star, MapPin, Calendar } from 'lucide-react';

const CropRecommendation: React.FC = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Tomatoes',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High yield variety perfect for current season. Excellent market demand and weather compatibility.',
      rating: 4.8,
      season: 'Summer',
      region: 'All regions'
    },
    {
      id: 2,
      name: 'Wheat',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Drought-resistant variety ideal for your soil type. Strong market prices expected.',
      rating: 4.6,
      season: 'Winter',
      region: 'Northern regions'
    },
    {
      id: 3,
      name: 'Corn',
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fast-growing hybrid variety with excellent pest resistance and high nutritional value.',
      rating: 4.7,
      season: 'Summer',
      region: 'Central regions'
    },
    {
      id: 4,
      name: 'Rice',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Water-efficient variety suitable for limited irrigation. High demand in local markets.',
      rating: 4.5,
      season: 'Monsoon',
      region: 'Coastal regions'
    },
    {
      id: 5,
      name: 'Soybeans',
      image: 'https://images.pexels.com/photos/6419734/pexels-photo-6419734.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Protein-rich crop with excellent soil improvement properties. Export quality standards.',
      rating: 4.4,
      season: 'Spring',
      region: 'All regions'
    },
    {
      id: 6,
      name: 'Potatoes',
      image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Disease-resistant variety with excellent storage life. Stable year-round demand.',
      rating: 4.6,
      season: 'Winter',
      region: 'Hill regions'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Crop field"
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personalized Crop Recommendations</h2>
            <p className="text-gray-600">
              Based on your location, soil type, and current market trends, here are the best crops for you.
            </p>
          </div>
        </div>
        
        {/* Filter Options */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
            All Seasons
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Summer
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Winter
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            Monsoon
          </button>
        </div>
      </div>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((crop) => (
          <div
            key={crop.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{crop.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{crop.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{crop.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Best Season: {crop.season}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Suitable for: {crop.region}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                View Details
              </button>
              
              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <span>Expected Yield: High</span>
                <span>Investment: Medium</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Success Stories from Fellow Farmers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-green-100 mb-3">
              "Following CropAdvisor's recommendations, I increased my tomato yield by 40% this season!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">RK</span>
              </div>
              <div>
                <p className="font-medium">Raj Kumar</p>
                <p className="text-xs text-green-200">Punjab</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-green-100 mb-3">
              "The soil-specific recommendations helped me choose the right crops and save 30% on fertilizers."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">MS</span>
              </div>
              <div>
                <p className="font-medium">Maya Singh</p>
                <p className="text-xs text-green-200">Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;