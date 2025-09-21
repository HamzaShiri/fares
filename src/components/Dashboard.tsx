import React from 'react';
import { Play, Clock, Star, TrendingUp } from 'lucide-react';

interface DashboardProps {
  setCurrentSection: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentSection }) => {
  const stats = [
    { icon: Play, label: 'تمارين مكتملة', value: '24', color: 'text-pink-500' },
    { icon: Clock, label: 'دقائق التمرين', value: '180', color: 'text-purple-500' },
    { icon: Star, label: 'أيام النشاط', value: '12', color: 'text-orange-500' },
    { icon: TrendingUp, label: 'السعرات المحروقة', value: '2,400', color: 'text-green-500' },
  ];

  const featuredWorkouts = [
    {
      id: 1,
      title: 'تمرين كامل للجسم',
      duration: '30 دقيقة',
      level: 'متوسط',
      thumbnail: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'BHY0FxzoKZE'
    },
    {
      id: 2,
      title: 'يوجا المساء المريحة',
      duration: '20 دقيقة',
      level: 'مبتدئ',
      thumbnail: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'v7AYKMP6rOE'
    },
    {
      id: 3,
      title: 'تمارين البطن',
      duration: '15 دقيقة',
      level: 'متقدم',
      thumbnail: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'DHD1-2P94DI'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">مرحباً بك في رحلة اللياقة!</h1>
        <p className="text-pink-100 mb-4">ابدئي يومك بطاقة إيجابية وتمارين مفيدة</p>
        <button 
          onClick={() => setCurrentSection('workouts')}
          className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          ابدئي التمرين الآن
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Workouts */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">التمارين المميزة</h2>
          <button 
            onClick={() => setCurrentSection('workouts')}
            className="text-pink-600 hover:text-pink-700 font-semibold"
          >
            عرض الكل
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorkouts.map((workout) => (
            <div key={workout.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={workout.thumbnail} 
                  alt={workout.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {workout.level}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{workout.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 ml-1" />
                  {workout.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div 
          onClick={() => setCurrentSection('nutrition')}
          className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <h3 className="text-xl font-bold mb-2">خطة التغذية اليومية</h3>
          <p className="text-green-100">اكتشفي وجبات صحية ولذيذة</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-xl font-bold mb-2">تتبع التقدم</h3>
          <p className="text-purple-100">راقبي إنجازاتك وتطورك</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;