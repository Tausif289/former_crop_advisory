import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  AlertTriangle
} from 'lucide-react';

const WeatherForecast: React.FC = () => {
  const currentWeather = {
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 6,
    feelsLike: 32
  };

  const forecast = [
    {
      day: 'Today',
      icon: Sun,
      high: 32,
      low: 22,
      humidity: 65,
      precipitation: 10
    },
    {
      day: 'Tomorrow',
      icon: CloudRain,
      high: 28,
      low: 20,
      humidity: 80,
      precipitation: 70
    },
    {
      day: 'Wednesday',
      icon: CloudRain,
      high: 25,
      low: 18,
      humidity: 85,
      precipitation: 90
    },
    {
      day: 'Thursday',
      icon: Cloud,
      high: 27,
      low: 19,
      humidity: 70,
      precipitation: 30
    },
    {
      day: 'Friday',
      icon: Sun,
      high: 30,
      low: 21,
      humidity: 60,
      precipitation: 5
    }
  ];

  const cropAdvice = [
    {
      icon: Droplets,
      title: 'Irrigation Recommendation',
      message: 'Light irrigation recommended for tomatoes and peppers. Avoid overwatering due to high humidity.',
      type: 'info'
    },
    {
      icon: AlertTriangle,
      title: 'Weather Alert',
      message: 'Heavy rainfall expected tomorrow. Cover sensitive crops and ensure proper drainage.',
      type: 'warning'
    },
    {
      icon: Sun,
      title: 'Harvesting Window',
      message: 'Perfect weather for harvesting wheat. Dry conditions expected for the next 2 days.',
      type: 'success'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Current Weather Card with Background */}
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Sky and clouds"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Current Weather Conditions</h2>
            <p className="text-blue-100 flex items-center space-x-2">
              <span>📍 Your farm location - Rajasthan, India</span>
            </p>
            <p className="text-blue-200 text-sm mt-1">Last updated: 15 minutes ago</p>
          </div>
          <div className="text-center">
            <Sun className="w-20 h-20 text-yellow-300 mb-2" />
            <p className="text-blue-100 text-sm">Partly Cloudy</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">{currentWeather.temperature}°C</div>
            <p className="text-blue-100 text-sm">Temperature</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold">{currentWeather.humidity}%</div>
            <p className="text-blue-100 text-sm">Humidity</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold">{currentWeather.windSpeed} km/h</div>
            <p className="text-blue-100 text-sm">Wind Speed</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold">{currentWeather.feelsLike}°C</div>
            <p className="text-blue-100 text-sm">Feels Like</p>
          </div>
        </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <Droplets className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold text-gray-800">Humidity</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800">{currentWeather.humidity}%</div>
          <p className="text-sm text-gray-600 mt-1">Good for most crops</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <Wind className="w-6 h-6 text-green-500" />
            <h3 className="font-semibold text-gray-800">Wind Speed</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800">{currentWeather.windSpeed} km/h</div>
          <p className="text-sm text-gray-600 mt-1">Moderate breeze</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <Eye className="w-6 h-6 text-purple-500" />
            <h3 className="font-semibold text-gray-800">Visibility</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800">{currentWeather.visibility} km</div>
          <p className="text-sm text-gray-600 mt-1">Good visibility</p>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">5-Day Weather Forecast</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Extended Forecast
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-800 mb-2">{day.day}</p>
              <day.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <div className="space-y-1">
                <div className="flex justify-center space-x-2 text-sm">
                  <span className="font-semibold">{day.high}°</span>
                  <span className="text-gray-500">{day.low}°</span>
                </div>
                <p className="text-xs text-gray-600">{day.precipitation}% rain</p>
                <p className="text-xs text-gray-500">Humidity: {day.humidity}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crop Advisory */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <img
            src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Crop advisory"
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Weather-Based Crop Advisory</h3>
            <p className="text-gray-600 text-sm">Personalized recommendations based on current conditions</p>
          </div>
        </div>
        <div className="space-y-4">
          {cropAdvice.map((advice, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                advice.type === 'warning' 
                  ? 'bg-yellow-50 border-yellow-400' 
                  : advice.type === 'success'
                  ? 'bg-green-50 border-green-400'
                  : 'bg-blue-50 border-blue-400'
              }`}
            >
              <div className="flex items-start space-x-3">
                <advice.icon className={`w-6 h-6 mt-1 ${
                  advice.type === 'warning' 
                    ? 'text-yellow-600' 
                    : advice.type === 'success'
                    ? 'text-green-600'
                    : 'text-blue-600'
                }`} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{advice.title}</h4>
                  <p className="text-gray-600 text-sm">{advice.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Smart Farming Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-200 border border-blue-200">
            <Droplets className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Schedule Irrigation</h4>
            <p className="text-sm text-gray-600">Plan watering based on forecast</p>
            <div className="mt-2 text-xs text-blue-600 font-medium">Next: Tomorrow 6 AM</div>
          </button>
          
          <button className="p-4 text-left bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-200 border border-green-200">
            <Sun className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Harvest Planning</h4>
            <p className="text-sm text-gray-600">Optimal harvest windows</p>
            <div className="mt-2 text-xs text-green-600 font-medium">Best: Friday-Sunday</div>
          </button>
          
          <button className="p-4 text-left bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 rounded-lg transition-all duration-200 border border-yellow-200">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Weather Alerts</h4>
            <p className="text-sm text-gray-600">Set up custom notifications</p>
            <div className="mt-2 text-xs text-yellow-600 font-medium">2 Active Alerts</div>
          </button>
        </div>
      </div>

      {/* Weather Impact on Crops */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Weather Impact on Your Crops</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=50"
                alt="Tomatoes"
                className="w-8 h-8 object-cover rounded"
              />
              <span className="font-medium">Tomatoes</span>
            </div>
            <p className="text-green-100 text-sm">
              Current weather is ideal for tomato growth. Expected 15% yield increase.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=50"
                alt="Wheat"
                className="w-8 h-8 object-cover rounded"
              />
              <span className="font-medium">Wheat</span>
            </div>
            <p className="text-green-100 text-sm">
              Upcoming rain will benefit wheat crops. Reduce irrigation by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;