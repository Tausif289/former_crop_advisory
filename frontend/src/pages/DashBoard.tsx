import React, { useContext, useState,useEffect } from 'react';
import {AppContext} from '../context/appcontext';
import { Sprout, DollarSign, Cloud, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

interface TranslationData {
  hero: {
    welcome: string;
    description: string;
    farmers: string;
    award: string;
  };
  overview: {
    title: string;
    subtitle: string;
  };
  summaryCards: {
    activeCrops: string;
    marketValue: string;
    weatherScore: string;
    growthRate: string;
  };
  recentActivities: {
    title: string;
    viewAll: string;
    activity1: {
      title: string;
      details: string;
      status: string;
    };
    activity2: {
      title: string;
      details: string;
      status: string;
    };
    activity3: {
      title: string;
      details: string;
      status: string;
    };
  };
  quickActions: {
    title: string;
    cropRecommendations: { title: string; description: string };
    marketPrices: { title: string; description: string };
    weatherForecast: { title: string; description: string };
  };
}



const Dashboard: React.FC = () => {
  const context = useContext(AppContext);
    
      if (!context) {
        throw new Error("AppContext must be used within AppContextProvider");
      }
   const {language} =context;
   const [translations, setTranslations] = useState<TranslationData | null>(null);
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/translate/dashboard?lng=${language}`
        );
        const data = await res.json();
        console.log(data.hero.welcome);
        setTranslations(data);
      } catch (err) {
        console.error("Error fetching translations:", err);
      }
    };

    fetchTranslations();
  }, [language]); // language change hone pe fetch dobara hoga

  if (!translations) return <p>Loading...</p>;
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
        <h2 className="text-4xl font-bold mb-4">{translations?.hero?.welcome}</h2>
        <p className="text-green-100 text-lg mb-6">
          {translations?.hero?.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{translations?.hero?.farmers}</span>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="font-medium">{translations?.hero?.award}</span>
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
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {translations?.overview?.title}
        </h3>
        <p className="text-gray-600">
          {translations?.overview?.subtitle}
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
            <p className="text-gray-600 text-sm font-medium">
              {translations?.summaryCards?.activeCrops}
            </p>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {card.value}
            </p>
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
      <h3 className="text-xl font-bold text-gray-800">
        {translations?.recentActivities?.title}
      </h3>
      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
        {translations?.recentActivities?.viewAll}
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
          <p className="font-medium text-gray-800">{translations?.recentActivities?.activity1?.title}</p>
          <p className="text-sm text-gray-600">{translations?.recentActivities?.activity1?.details}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {translations?.recentActivities?.activity1?.status}
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
          <p className="font-medium text-gray-800">{translations?.recentActivities?.activity2?.title}</p>
          <p className="text-sm text-gray-600">{translations?.recentActivities?.activity2?.details}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
            {translations?.recentActivities?.activity2?.status}
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
          <p className="font-medium text-gray-800">{translations?.recentActivities?.activity3?.title}</p>
          <p className="text-sm text-gray-600">{translations?.recentActivities?.activity3?.details}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
            {translations?.recentActivities?.activity3?.status}
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Quick Actions */}
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-4">
      {translations?.quickActions?.title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button className="p-4 text-left bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-200 border border-green-200">
        <Sprout className="w-8 h-8 text-green-600 mb-3" />
        <h4 className="font-semibold text-gray-800 mb-1">
          {translations?.quickActions?.cropRecommendations?.title}
        </h4>
        <p className="text-sm text-gray-600">
          {translations?.quickActions?.cropRecommendations?.description}
        </p>
      </button>

      <button className="p-4 text-left bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-200 border border-blue-200">
        <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
        <h4 className="font-semibold text-gray-800 mb-1">
          {translations?.quickActions?.marketPrices?.title}
        </h4>
        <p className="text-sm text-gray-600">
          {translations?.quickActions?.marketPrices?.description}
        </p>
      </button>

      <button className="p-4 text-left bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg transition-all duration-200 border border-purple-200">
        <Cloud className="w-8 h-8 text-purple-600 mb-3" />
        <h4 className="font-semibold text-gray-800 mb-1">
          {translations?.quickActions?.weatherForecast?.title}
        </h4>
        <p className="text-sm text-gray-600">
          {translations?.quickActions?.weatherForecast?.description}
        </p>
      </button>
    </div>
  </div>
</div>

  );
};

export default Dashboard;