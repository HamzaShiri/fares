import React, { useState } from 'react';
import { Play, Clock, Star, Filter } from 'lucide-react';
import VideoModal from './VideoModal';

const Workouts: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع التمارين' },
    { id: 'cardio', label: 'الكارديو' },
    { id: 'strength', label: 'القوة' },
    { id: 'yoga', label: 'اليوجا' },
    { id: 'dance', label: 'الرقص' },
    { id: 'pilates', label: 'البيلاتس' }
  ];

  const levels = [
    { id: 'all', label: 'جميع المستويات' },
    { id: 'beginner', label: 'مبتدئ' },
    { id: 'intermediate', label: 'متوسط' },
    { id: 'advanced', label: 'متقدم' }
  ];

  const workouts = [
    {
      id: 1,
      title: 'تمرين HIIT للجسم كامل',
      duration: '25 دقيقة',
      level: 'intermediate',
      category: 'cardio',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'BHY0FxzoKZE',
      description: 'تمرين عالي الكثافة لحرق السعرات وتقوية العضلات'
    },
    {
      id: 2,
      title: 'يوجا الصباح المنعشة',
      duration: '30 دقيقة',
      level: 'beginner',
      category: 'yoga',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: '2IcWJobNDck',
      description: 'ابدئي يومك بطاقة إيجابية مع تمارين اليوجا المريحة'
    },
    {
      id: 3,
      title: 'تمارين البطن المتقدمة',
      duration: '20 دقيقة',
      level: 'advanced',
      category: 'strength',
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'DHD1-2P94DI',
      description: 'تمارين مكثفة لتقوية عضلات البطن والحصول على خصر مثالي'
    },
    {
      id: 4,
      title: 'رقص زومبا للمبتدئات',
      duration: '35 دقيقة',
      level: 'beginner',
      category: 'dance',
      rating: 4.6,
      thumbnail: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'Hq5uanDiJbM',
      description: 'استمتعي بالرقص واحرقي السعرات في نفس الوقت'
    },
    {
      id: 5,
      title: 'بيلاتس للمرونة',
      duration: '40 دقيقة',
      level: 'intermediate',
      category: 'pilates',
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: '3d6eybjkiFo',
      description: 'تحسني مرونتك وقوامك مع تمارين البيلاتس'
    },
    {
      id: 6,
      title: 'تمارين المقاومة للأرداف',
      duration: '28 دقيقة',
      level: 'intermediate',
      category: 'strength',
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'YQq10otKxws',
      description: 'اشعلي عضلات الأرداف والساقين بتمارين المقاومة'
    }
  ];

  const filteredWorkouts = workouts.filter(workout => {
    const categoryMatch = selectedCategory === 'all' || workout.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || workout.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelLabel = (level: string) => {
    const levelMap: { [key: string]: string } = {
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم'
    };
    return levelMap[level] || level;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">مكتبة التمارين</h1>
        <p className="text-gray-600">اختاري التمرين المناسب لك وابدئي رحلة اللياقة</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-gray-600 ml-2" />
          <h3 className="text-lg font-semibold text-gray-800">تصفية التمارين</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نوع التمرين</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">مستوى الصعوبة</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>{level.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Workouts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <img 
                src={workout.thumbnail} 
                alt={workout.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedVideo(workout.videoId)}
              >
                <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute top-4 right-4 flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 ml-1" />
                <span className="text-sm font-semibold">{workout.rating}</span>
              </div>
              <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {getLevelLabel(workout.level)}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{workout.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{workout.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 ml-1" />
                  {workout.duration}
                </div>
                <button 
                  onClick={() => setSelectedVideo(workout.videoId)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  ابدئي التمرين
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal 
          videoId={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
};

export default Workouts;