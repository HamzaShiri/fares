import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Workouts from './components/Workouts';
import Nutrition from './components/Nutrition';

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard setCurrentSection={setCurrentSection} />;
      case 'workouts':
        return <Workouts />;
      case 'nutrition':
        return <Nutrition />;
      default:
        return <Dashboard setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" dir="rtl">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {renderCurrentSection()}
      </main>
    </div>
  );
}

export default App;