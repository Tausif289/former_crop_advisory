import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/DashBoard.tsx';
import CropRecommendation from './pages/CropRecommendation';
import CropFarmingGuide from './pages/CropFarmingGuide';
import MarketPrice from './pages/MarketPrice.tsx';
import WeatherForecast from './pages/WeatherForecast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crop-recommendation" element={<CropRecommendation />} />
              <Route path="/farming-guide" element={<CropFarmingGuide />} />
              <Route path="/market-price" element={<MarketPrice />} />
              <Route path="/weather-forecast" element={<WeatherForecast />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;