import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { 
      title: "Терапия", 
      price: "3,500₽", 
      description: "Безболезненное лечение кариеса",
      icon: "Heart",
      color: "from-pink-500 to-blue-500"
    },
    { 
      title: "Хирургия", 
      price: "8,000₽", 
      description: "Комфортные операции",
      icon: "Scissors",
      color: "from-blue-500 to-green-500"
    },
    { 
      title: "Ортопедия", 
      price: "15,000₽", 
      description: "Протезирование премиум",
      icon: "Wrench",
      color: "from-green-500 to-orange-500"
    },
    { 
      title: "Ортодонтия", 
      price: "25,000₽", 
      description: "Невидимые брекеты",
      icon: "Smile",
      color: "from-orange-500 to-purple-500"
    },
    { 
      title: "Пародонтология", 
      price: "4,500₽", 
      description: "Лазерное лечение десен",
      icon: "Leaf",
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Детская", 
      price: "2,000₽", 
      description: "Игровой подход",
      icon: "Baby",
      color: "from-blue-500 to-orange-500"
    }
  ];

  const doctors = [
    { 
      name: "Анна Петрова", 
      specialty: "Главный врач", 
      experience: "15 лет",
      emoji: "👩‍⚕️"
    },
    { 
      name: "Михаил Сидоров", 
      specialty: "Хирург-имплантолог", 
      experience: "12 лет",
      emoji: "👨‍⚕️"
    },
    { 
      name: "Елена Кузнецова", 
      specialty: "Ортодонт", 
      experience: "10 лет",
      emoji: "🦷"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Floating cursor effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Diagonal Navigation */}
      <nav className="fixed top-0 right-0 z-50 transform rotate-45 origin-top-right">
        <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-8 shadow-2xl">
          <div className="transform -rotate-45 flex space-x-6">
            <button className="text-white hover:text-black transition-colors font-space font-bold">
              ГЛАВНАЯ
            </button>
            <button className="text-white hover:text-black transition-colors font-space font-bold">
              УСЛУГИ
            </button>
            <button className="text-white hover:text-black transition-colors font-space font-bold">
              ВРАЧИ
            </button>
            <button className="text-white hover:text-black transition-colors font-space font-bold">
              КОНТАКТЫ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Asymmetric Layout */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/30 to-blue-500/30 transform rotate-12 rounded-3xl blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 transform -rotate-12 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-r from-orange-500/40 to-green-500/40 transform rotate-45 blur-lg"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text Content - Asymmetric positioning */}
            <div className="lg:col-span-7 lg:col-start-2 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-blue-500 text-black font-bold text-lg px-6 py-2 transform -rotate-2">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  БЕЗ БОЛИ & СТРЕССА
                </Badge>
                
                <h1 className="font-fredoka text-8xl font-bold leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-500">
                    ЗУБЫ
                  </span>
                  <br />
                  <span className="font-caveat text-6xl text-orange-500 transform rotate-3 inline-block">
                    будущего
                  </span>
                </h1>
                
                <p className="font-space text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  Революционная стоматология с технологиями завтрашнего дня. 
                  Лечим зубы как в <span className="text-blue-500 font-bold">2050 году</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-black font-bold text-xl px-10 py-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Icon name="Zap" size={24} className="mr-3" />
                  ЗАПИСАТЬСЯ СЕЙЧАС
                </Button>
                <Button size="lg" variant="outline" className="border-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold text-xl px-10 py-8 rounded-full transform hover:rotate-3 transition-all duration-300">
                  <Icon name="Phone" size={24} className="mr-3" />
                  +7 (495) FUTURE
                </Button>
              </div>

              {/* Stats with Creative Layout */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div className="text-center transform rotate-3 bg-gradient-to-r from-pink-500/20 to-blue-500/20 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="text-5xl font-fredoka font-bold text-blue-500">15+</div>
                  <div className="font-space text-gray-300">лет в космосе</div>
                </div>
                <div className="text-center transform -rotate-2 bg-gradient-to-r from-green-500/20 to-orange-500/20 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="text-5xl font-fredoka font-bold text-green-500">5000+</div>
                  <div className="font-space text-gray-300">счастливых улыбок</div>
                </div>
                <div className="text-center transform rotate-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="text-5xl font-fredoka font-bold text-pink-500">99%</div>
                  <div className="font-space text-gray-300">довольных пациентов</div>
                </div>
              </div>
            </div>

            {/* Visual Element - Floating 3D-style elements */}
            <div className="lg:col-span-4 relative">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl transform rotate-12 shadow-2xl flex items-center justify-center">
                  <Icon name="Smile" size={48} className="text-white" />
                </div>
                <div className="absolute bottom-20 right-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transform -rotate-12 shadow-2xl flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transform rotate-45 shadow-2xl flex items-center justify-center">
                  <div className="transform -rotate-45">
                    <Icon name="Zap" size={56} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Diagonal Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-fredoka text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                УСЛУГИ
              </span>
            </h2>
            <p className="font-space text-2xl text-gray-300 max-w-4xl mx-auto">
              Технологии, которых еще нет в других клиниках
            </p>
          </div>
          
          {/* Diagonal services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform rotate-2">
            {services.map((service, index) => (
              <Card key={index} className={`group bg-gradient-to-r ${service.color} p-1 rounded-3xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} hover:rotate-0 transition-all duration-500 hover:scale-110 shadow-2xl`}>
                <div className="bg-black rounded-3xl p-8 h-full">
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-500`}>
                      <Icon name={service.icon} size={32} className="text-black" />
                    </div>
                    <CardTitle className="font-fredoka text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 transition-all">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-space text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="font-fredoka text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                        {service.price}
                      </span>
                      <Button variant="outline" size="sm" className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black font-bold">
                        GO!
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section with Creative Layout */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-pink-500/10 transform -skew-y-2"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-transparent to-blue-500/10 transform skew-y-2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-caveat text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 transform -rotate-2 inline-block">
              Космическая команда
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {doctors.map((doctor, index) => (
              <div key={index} className={`transform ${index === 1 ? 'scale-110 -rotate-2' : index === 0 ? 'rotate-3' : '-rotate-1'} hover:scale-125 hover:rotate-0 transition-all duration-500`}>
                <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-3xl overflow-hidden shadow-2xl">
                  <CardHeader className="text-center pb-4">
                    <div className="text-8xl mb-4 transform hover:scale-125 transition-transform duration-300">
                      {doctor.emoji}
                    </div>
                    <CardTitle className="font-fredoka text-2xl text-white">{doctor.name}</CardTitle>
                    <CardDescription className="font-space text-blue-500 font-bold text-lg">{doctor.specialty}</CardDescription>
                    <Badge className="bg-gradient-to-r from-green-500 to-orange-500 text-black font-bold mx-auto w-fit">
                      {doctor.experience}
                    </Badge>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Futuristic Design */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-fredoka text-7xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-500">
                ГОТОВ К БУДУЩЕМУ?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <Card className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-3xl p-8 transform rotate-2 hover:-rotate-1 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-black" />
                    </div>
                    <div className="text-left">
                      <div className="font-fredoka text-xl text-white font-bold">Адрес</div>
                      <div className="font-space text-gray-300">Космопорт Москва, д. 2050</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-black" />
                    </div>
                    <div className="text-left">
                      <div className="font-fredoka text-xl text-white font-bold">Телефон</div>
                      <div className="font-space text-gray-300">+7 (495) FUTURE-1</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-pink-500/50 rounded-3xl p-8 transform -rotate-2 hover:rotate-1 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-fredoka text-3xl font-bold text-white mb-6">Запись в будущее</h3>
                  <p className="font-space text-gray-300 mb-8">Первая консультация БЕСПЛАТНО</p>
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-black font-bold text-xl px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Icon name="Rocket" size={24} className="mr-3" />
                    ПОЕХАЛИ!
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Gradient Border */}
      <footer className="relative">
        <div className="h-1 bg-gradient-to-r from-pink-500 via-blue-500 via-green-500 to-orange-500"></div>
        <div className="bg-gradient-to-r from-purple-500 to-black py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="font-fredoka text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                DENTAL FUTURE
              </span>
            </h3>
            <p className="font-caveat text-2xl text-gray-300">Стоматология космической эры</p>
            
            <div className="mt-8 text-sm text-gray-500 font-space">
              © 2024 Dental Future. Все права защищены в этой и параллельных вселенных.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}