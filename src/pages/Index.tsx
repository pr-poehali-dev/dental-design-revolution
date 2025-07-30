import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { 
      title: "Терапевтическая стоматология", 
      price: "от 3,500₽", 
      description: "Лечение кариеса, пульпита, периодонтита без боли",
      icon: "Heart"
    },
    { 
      title: "Хирургическая стоматология", 
      price: "от 8,000₽", 
      description: "Удаление зубов, имплантация с комфортом",
      icon: "Scissors"
    },
    { 
      title: "Ортопедия", 
      price: "от 15,000₽", 
      description: "Протезирование и восстановление зубов",
      icon: "Wrench"
    },
    { 
      title: "Ортодонтия", 
      price: "от 25,000₽", 
      description: "Исправление прикуса брекетами и элайнерами",
      icon: "Smile"
    },
    { 
      title: "Пародонтология", 
      price: "от 4,500₽", 
      description: "Лечение десен современными методами",
      icon: "Leaf"
    },
    { 
      title: "Детская стоматология", 
      price: "от 2,000₽", 
      description: "Особый подход к маленьким пациентам",
      icon: "Baby"
    }
  ];

  const doctors = [
    { 
      name: "Анна Петрова", 
      specialty: "Главный врач, терапевт", 
      experience: "15 лет опыта",
      description: "Специализируется на безболезненном лечении"
    },
    { 
      name: "Михаил Сидоров", 
      specialty: "Хирург-имплантолог", 
      experience: "12 лет опыта",
      description: "Эксперт по имплантации и сложным операциям"
    },
    { 
      name: "Елена Кузнецова", 
      specialty: "Ортодонт", 
      experience: "10 лет опыта",
      description: "Специалист по исправлению прикуса"
    }
  ];

  const technologies = [
    { name: "3D-сканирование", description: "Точная диагностика без слепков" },
    { name: "Лазерное лечение", description: "Безболезненное лечение десен" },
    { name: "Цифровая рентгенография", description: "Минимальная лучевая нагрузка" },
    { name: "Седация закисью азота", description: "Полное расслабление во время процедур" }
  ];

  const reviews = [
    { 
      name: "Мария К.", 
      rating: 5, 
      text: "Впервые лечила зубы без страха! Врачи очень внимательные, все объясняют." 
    },
    { 
      name: "Андрей Л.", 
      rating: 5, 
      text: "Поставил имплант, даже не почувствовал боли. Отличная клиника!" 
    },
    { 
      name: "Светлана Р.", 
      rating: 5, 
      text: "Привела сюда ребенка - он не плакал! Врачи нашли подход." 
    }
  ];

  const promotions = [
    { 
      title: "Первичная консультация", 
      oldPrice: "2,000₽", 
      newPrice: "БЕСПЛАТНО", 
      validity: "до 31 декабря" 
    },
    { 
      title: "Комплексная гигиена", 
      oldPrice: "8,000₽", 
      newPrice: "5,500₽", 
      validity: "весь месяц" 
    },
    { 
      title: "Имплантация под ключ", 
      oldPrice: "80,000₽", 
      newPrice: "65,000₽", 
      validity: "ограниченное предложение" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Круговая навигация */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-blue-100">
          <div className="flex items-center space-x-6">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'services', label: 'Услуги', icon: 'Stethoscope' },
              { id: 'doctors', label: 'Врачи', icon: 'Users' },
              { id: 'prices', label: 'Цены', icon: 'Receipt' },
              { id: 'promo', label: 'Акции', icon: 'Percent' },
              { id: 'tech', label: 'Технологии', icon: 'Cpu' },
              { id: 'reviews', label: 'Отзывы', icon: 'MessageCircle' },
              { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <Icon name="Sparkles" size={14} className="mr-1" />
                    Лечение без боли и стресса
                  </Badge>
                  <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                    Современная
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block">
                      Стоматология
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Комфортное лечение зубов с использованием передовых технологий. 
                    Мы заботимся о вашем здоровье и спокойствии.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на прием
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-2xl">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-gray-600">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">5000+</div>
                    <div className="text-gray-600">пациентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">99%</div>
                    <div className="text-gray-600">довольных клиентов</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl transform rotate-3 opacity-20"></div>
                <img 
                  src="/img/f4ec8e21-b7b7-49d7-a869-d1b33eb2bc20.jpg" 
                  alt="Современная стоматологическая клиника" 
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Безопасно</div>
                      <div className="text-gray-600 text-sm">Стерильность 100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Наши Услуги</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полный спектр стоматологических услуг с применением современных технологий
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Doctors Section */}
      {activeSection === 'doctors' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Наши Врачи</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Команда профессионалов с многолетним опытом и современным подходом
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {doctors.map((doctor, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name="User" size={36} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{doctor.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{doctor.specialty}</CardDescription>
                    <Badge variant="secondary" className="mx-auto w-fit">{doctor.experience}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{doctor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="/img/815a25a8-09ab-4695-9408-b7fc62aed7ab.jpg" 
                alt="Команда врачей" 
                className="rounded-3xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Профессиональная команда</h3>
                  <p className="text-white/90">Каждый врач регулярно повышает квалификацию</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prices Section */}
      {activeSection === 'prices' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Прозрачные Цены</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Честная стоимость услуг без скрытых платежей
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                        <Icon name={service.icon} size={20} className="text-white" />
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Популярно
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promotions Section */}
      {activeSection === 'promo' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Специальные Предложения</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выгодные акции и скидки для новых и постоянных пациентов
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promotions.map((promo, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-red-500 text-white hover:bg-red-500">
                        <Icon name="Percent" size={14} className="mr-1" />
                        АКЦИЯ
                      </Badge>
                      <div className="text-sm text-gray-600">{promo.validity}</div>
                    </div>
                    <CardTitle className="text-xl text-gray-800">{promo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-lg text-gray-500 line-through">{promo.oldPrice}</div>
                      <div className="text-3xl font-bold text-red-500">{promo.newPrice}</div>
                    </div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      Воспользоваться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {activeSection === 'tech' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-5xl font-bold text-gray-800 mb-6">Современные Технологии</h2>
                  <p className="text-xl text-gray-600">
                    Используем передовое оборудование для точной диагностики и комфортного лечения
                  </p>
                </div>
                
                <div className="space-y-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Zap" size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <img 
                  src="/img/2c2b2d23-dc98-4351-86a4-30a11339c3a0.jpg" 
                  alt="Современное оборудование" 
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Премиум качество</div>
                      <div className="text-gray-600 text-sm">Европейские стандарты</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {activeSection === 'reviews' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Отзывы Пациентов</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Что говорят о нас наши пациенты
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold text-gray-800">{review.name}</div>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">4.9</div>
                  <div className="text-gray-600 text-sm">Средняя оценка</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">847</div>
                  <div className="text-gray-600 text-sm">Отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">Контакты</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon name="MapPin" size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Адрес</div>
                          <div className="text-gray-600">г. Москва, ул. Лечебная, д. 15</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Icon name="Phone" size={20} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Телефон</div>
                          <div className="text-gray-600">+7 (495) 123-45-67</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <Icon name="Mail" size={20} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Email</div>
                          <div className="text-gray-600">info@smile-clinic.ru</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                          <Icon name="Clock" size={20} className="text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Режим работы</div>
                          <div className="text-gray-600">Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Запишитесь на консультацию</h3>
                    <p className="mb-6 opacity-90">Первичная консультация бесплатно до конца месяца</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться онлайн
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-scale-in">
                <Card className="border-0 shadow-lg bg-gray-100 h-96">
                  <CardContent className="p-0 h-full relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                        <div className="text-lg font-semibold">Интерактивная карта</div>
                        <div className="text-sm">г. Москва, ул. Лечебная, д. 15</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Wave Footer */}
      <footer className="relative">
        <div className="absolute inset-x-0 top-0">
          <svg viewBox="0 0 1440 320" className="w-full h-32">
            <path 
              fill="#1e40af" 
              fillOpacity="0.1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Smile Clinic</h3>
              <p className="opacity-90">Здоровые зубы - красивая улыбка</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Icon name="Mail" size={20} className="mr-2" />
                info@smile-clinic.ru
              </Button>
            </div>
            
            <div className="text-sm opacity-75">
              © 2024 Smile Clinic. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}