import React from 'react';
import { Sprout, DollarSign, Cloud, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const summaryCards = [
    {
      title: 'Active Crops',
      value: '12',
      icon: Sprout,
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-600'
    },
    {
      title: 'Market Value',
      value: '$24,500',
      icon: DollarSign,
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Weather Score',
      value: '85%',
      icon: Cloud,
      color: 'bg-purple-100 text-purple-600',
      bgColor: 'bg-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '+12%',
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600',
      bgColor: 'bg-orange-600'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section with Crop Image */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-500 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Golden wheat field"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Welcome back, Farmer!</h2>
            <p className="text-green-100 text-lg mb-6">
              Your smart farming companion is here to help you grow better crops, 
              maximize yields, and increase profits with data-driven insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">50,000+ Farmers</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Today's Farm Overview</h3>
            <p className="text-gray-600">
              Here's your personalized dashboard with real-time insights and recommendations.
            </p>
          </div>
          <BarChart3 className="w-12 h-12 text-green-500" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{card.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
              </div>
              <div className={`p-3 rounded-full ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Recent Farm Activities</h3>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-100">
            <img
              src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Wheat"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div>
              <p className="font-medium text-gray-800">Wheat crop harvested successfully</p>
              <p className="text-sm text-gray-600">2 hours ago • 15 acres • 2.5 tons yield</p>
            </div>
            <div className="ml-auto">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <img
              src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Tomatoes"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div>
              <p className="font-medium text-gray-800">New market price alert for tomatoes</p>
              <p className="text-sm text-gray-600">5 hours ago • Price increased by 12%</p>
            </div>
            <div className="ml-auto">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                Price Alert
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
            <img
              src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Weather"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div>
              <p className="font-medium text-gray-800">Weather forecast updated</p>
              <p className="text-sm text-gray-600">1 day ago • Rain expected in 3 days</p>
            </div>
            <div className="ml-auto">
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                Weather
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-200 border border-green-200">
            <Sprout className="w-8 h-8 text-green-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-1">Get Crop Recommendations</h4>
            <p className="text-sm text-gray-600">Find the best crops for your soil and climate</p>
          </button>
          
          <button className="p-4 text-left bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-200 border border-blue-200">
            <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-1">Check Market Prices</h4>
            <p className="text-sm text-gray-600">Stay updated with latest crop prices</p>
          </button>
          
          <button className="p-4 text-left bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg transition-all duration-200 border border-purple-200">
            <Cloud className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-1">Weather Forecast</h4>
            <p className="text-sm text-gray-600">Plan your farming activities with weather insights</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;