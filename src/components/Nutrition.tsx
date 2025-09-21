import React, { useState } from 'react';
import { Clock, Users, ChefHat, Heart, Leaf, Zap } from 'lucide-react';

const Nutrition: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع الوجبات', icon: ChefHat },
    { id: 'breakfast', label: 'الإفطار', icon: Heart },
    { id: 'lunch', label: 'الغداء', icon: Zap },
    { id: 'dinner', label: 'العشاء', icon: Leaf },
    { id: 'snacks', label: 'الوجبات الخفيفة', icon: Users }
  ];

  const meals = [
    {
      id: 1,
      title: 'سموذي البروتين الأخضر',
      category: 'breakfast',
      prepTime: '5 دقائق',
      servings: 1,
      calories: 280,
      protein: '25g',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: [
        'كوب سبانخ طازجة',
        'موزة واحدة',
        '½ كوب أناناس',
        'ملعقة كبيرة بروتين نباتي',
        'كوب حليب لوز',
        'ملعقة صغيرة عسل'
      ],
      instructions: [
        'اغسلي السبانخ جيداً وضعيها في الخلاط',
        'أضيفي الموز المقطع والأناناس',
        'أضيفي البروتين وحليب اللوز',
        'اخلطي المكونات لمدة دقيقتين حتى تحصلي على قوام ناعم',
        'أضيفي العسل للتحلية حسب الرغبة',
        'قدميه فوراً في كوب مبرد'
      ],
      benefits: ['غني بالبروتين', 'مليء بالفيتامينات', 'مضادات الأكسدة', 'سهل الهضم']
    },
    {
      id: 2,
      title: 'سلطة الكينوا بالخضروات',
      category: 'lunch',
      prepTime: '15 دقيقة',
      servings: 2,
      calories: 320,
      protein: '12g',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: [
        'كوب كينوا مطبوخة',
        'خيارة مقطعة مكعبات',
        'طماطم كرزية مقطعة نصفين',
        '¼ كوب جزر مبشور',
        'ملعقتان كبيرتان جبن فيتا',
        'ملعقة كبيرة زيت زيتون',
        'عصير نصف ليمونة',
        'ملح وفلفل أسود'
      ],
      instructions: [
        'اتركي الكينوا المطبوخة تبرد قليلاً',
        'قطعي الخضروات إلى قطع صغيرة',
        'اخلطي زيت الزيتون مع عصير الليمون والملح والفلفل',
        'امزجي الكينوا مع الخضروات',
        'أضيفي الجبن الفيتا واخلطي برفق',
        'اسكبي التتبيلة وقلبي جيداً',
        'اتركيها في الثلاجة لمدة 30 دقيقة قبل التقديم'
      ],
      benefits: ['بروتين كامل', 'ألياف عالية', 'فيتامينات متنوعة', 'طاقة مستدامة']
    },
    {
      id: 3,
      title: 'سلمون مشوي بالليمون والأعشاب',
      category: 'dinner',
      prepTime: '25 دقيقة',
      servings: 2,
      calories: 280,
      protein: '35g',
      image: 'https://images.pexels.com/photos/3622479/pexels-photo-3622479.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: [
        'قطعتان من فيليه السلمون',
        'ليمونة مقطعة شرائح',
        'ملعقة كبيرة زيت زيتون',
        'ملعقة صغيرة إكليل الجبل',
        'ملعقة صغيرة زعتر',
        'فلفل أسود وملح',
        'فص ثوم مهروس'
      ],
      instructions: [
        'سخني الفرن على درجة 200 مئوية',
        'اخلطي زيت الزيتون مع الثوم والأعشاب',
        'ادهني قطع السلمون بالخليط',
        'رتبي شرائح الليمون على السلمون',
        'اشوي في الفرن لمدة 15-20 دقيقة',
        'تأكدي من نضج السلمون بالكامل',
        'قدميه مع الخضروات المشوية أو السلطة'
      ],
      benefits: ['أوميجا 3', 'بروتين عالي الجودة', 'قليل السعرات', 'مفيد للقلب']
    },
    {
      id: 4,
      title: 'كرات الطاقة بالتمر واللوز',
      category: 'snacks',
      prepTime: '10 دقائق',
      servings: 8,
      calories: 90,
      protein: '3g',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      ingredients: [
        'كوب تمر منزوع النوى',
        '½ كوب لوز محمص',
        'ملعقتان كبيرتان جوز هند مبشور',
        'ملعقة صغيرة فانيليا',
        'رشة ملح',
        'جوز هند للتغليف (اختياري)'
      ],
      instructions: [
        'انقعي التمر في ماء دافئ لمدة 10 دقائق',
        'صفي التمر واهرسيه في محضرة الطعام',
        'أضيفي اللوز واخلطي حتى يصبح خشناً',
        'أضيفي جوز الهند والفانيليا والملح',
        'شكلي الخليط إلى كرات صغيرة',
        'غلفي الكرات بجوز الهند إذا رغبتِ',
        'احفظيها في الثلاجة لمدة ساعة قبل التقديم'
      ],
      benefits: ['طاقة طبيعية', 'دهون صحية', 'ألياف', 'مضادات أكسدة']
    }
  ];

  const filteredMeals = meals.filter(meal => 
    selectedCategory === 'all' || meal.category === selectedCategory
  );

  const [selectedMeal, setSelectedMeal] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">دليل التغذية الصحية</h1>
        <p className="text-gray-600">وصفات صحية ومغذية لدعم رحلة اللياقة البدنية</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 shadow-md'
              }`}
            >
              <Icon className="h-5 w-5 ml-2" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Meals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMeals.map((meal) => (
          <div 
            key={meal.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedMeal(selectedMeal === meal.id ? null : meal.id)}
          >
            <img 
              src={meal.image} 
              alt={meal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{meal.title}</h3>
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 ml-1" />
                  {meal.prepTime}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 ml-1" />
                  {meal.servings} حصص
                </div>
                <div className="text-pink-600 font-semibold">
                  {meal.calories} كالوري
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  بروتين: {meal.protein}
                </span>
                <button className="text-pink-600 hover:text-pink-700 font-semibold text-sm">
                  {selectedMeal === meal.id ? 'إخفاء التفاصيل' : 'عرض الوصفة'}
                </button>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedMeal === meal.id && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">الفوائد الغذائية:</h4>
                  <div className="flex flex-wrap gap-2">
                    {meal.benefits.map((benefit, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">المقادير:</h4>
                  <ul className="space-y-2">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full ml-3"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">طريقة التحضير:</h4>
                  <ol className="space-y-3">
                    {meal.instructions.map((instruction, index) => (
                      <li key={index} className="flex text-gray-700">
                        <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ml-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Nutrition Tips */}
      <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">نصائح التغذية الصحية</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">🥗 تناولي وجبات متوازنة</h4>
            <p className="text-green-100">احرصي على تضمين البروتين والكربوهيدرات والدهون الصحية في كل وجبة</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">💧 اشربي الماء بكثرة</h4>
            <p className="text-green-100">8-10 أكواب يومياً لترطيب الجسم وتحسين الأداء الرياضي</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🍎 تناولي وجبات صغيرة متكررة</h4>
            <p className="text-green-100">5-6 وجبات صغيرة أفضل من 3 وجبات كبيرة لزيادة معدل الحرق</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🥜 لا تتجاهلي الدهون الصحية</h4>
            <p className="text-green-100">الأفوكادو والمكسرات وزيت الزيتون مهمة لصحة الهرمونات</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;