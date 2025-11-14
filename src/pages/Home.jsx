import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mountain,
  Heart,
  Wind,
  Sparkles,
  Sun,
  Brain,
  Music,
  BookOpen,
  Zap,
  Shield,
  Smile,
  TrendingUp,
  Target,
  Flower2,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle2,
  Mail,
  Phone,
  CircleDot,
  Youtube,
  Facebook,
  Instagram,
  Send,
  Lightbulb,
  Users,
  Video,
  Map,
  Eye,
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: BookOpen, title: "Філософія йоги", color: "from-purple-400 to-pink-400" },
  { icon: Mountain, title: "Асани", color: "from-blue-400 to-cyan-400" },
  { icon: Wind, title: "Пранаями", color: "from-green-400 to-emerald-400" },
  { icon: Sparkles, title: "Крії", color: "from-yellow-400 to-orange-400" },
  { icon: Sun, title: "Сур'я Намаскар", color: "from-red-400 to-pink-400" },
  { icon: Brain, title: "Духовна медитація", color: "from-indigo-400 to-purple-400" },
  { icon: CircleDot, title: "Мантра ОМ", color: "from-cyan-400 to-blue-400" },
  { icon: Flower2, title: "Комплекси практик", color: "from-pink-400 to-rose-400" }
];

const courseFeatures = [
  {
    icon: Heart,
    title: "Духовна глибина",
    desc: "Йога, як шлях до пробудження свідомості, а не лише тілесна практика. Автентична система йоги на основі фундаментальних писань: 'Йога-сутри Патанджалі' і 'Хатха-йога Прадіпіка', як навчали з давніх часів в Індії. Для тих, хто хоче глибшого розуміння йоги, ніж просто практик для фізичного тіла",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_1235.jpg"
  },
  {
    icon: Target,
    title: "Восьми-ступенева система",
    desc: "Комплексний підхід Восьми-ступеневої йоги: морально-етичні принципи, робота з фізичним тілом за допомогою позицій йоги, накопичення енергії і очищення дихальними техніками, і робота з внутрішнім світом в медитації - гармонізація психіки, розкриття Духу, зв'язок з Космічною Свідомістю",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/Screenshot%202025-11-13%20at%2015.53.41.png"
  },
  {
    icon: BookOpen,
    title: "Теорія + Практика",
    desc: "Гармонійне поєднання древніх знань про філософію йоги, фундаментальні закони світобудови, карму і реінкарнацію, будову тонкого тіла людини, вплив звуку і медитації на свідомість людини; так і конкретних технік, для їх застосування у житті",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_2552.jpg"
  },
  {
    icon: Lightbulb,
    title: "Створюйте свій комплекс",
    desc: "До кінця курсу ви матимете достатньо інструментів і знань, щоб складати комплекси практик спеціально під свій стан і потреби ",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/padmasana.jpeg"
  },
  {
    icon: Map,
    title: "Енергія Тенеріфе",
    desc: "Курс записаний на природі Канарських островів в красивих і потужних місцях сили, що додає особливої енергії і натхнення на практику",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_3846.jpg"
  },
  {
    icon: Video,
    title: "Покроковий онлайн формат",
    desc: "8 тижнів структурованого навчання з наростаючою складністю. Займайтесь у своєму темпі, будь-коли і будь-де",
    image: "https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/ardha%20matsiendracana.png"
  }
];

const modules = [
  {
    number: 1,
    theory: "Раджа йога. Вісім ступенів йоги",
    asanas: [
      "Джану ширшасана – позиція голова до коліна",
      "Ґомукхасана – позиція голова корови",
      "Бадгаконасана – позиція зв'язаного кута"
    ],
    pranayama: "Повне йогівське дихання",
    meditation: "Концентрація на диханні"
  },
  {
    number: 2,
    theory: "Основи філософії Санкх'ї. Основні елементи творення Всесвіту",
    asanas: [
      "Чатуранґа дандасана – позиція палиці з чотирма опорами",
      "Урдгва мукха шванасана – позиція собаки мордою вверх",
      "Адго мукха шванасана – позиція собаки мордою вниз",
      "Шашанкасана – позиція зайця",
      "Баласана – позиція дитини",
      "Ваджрасана – позиція алмазу"
    ],
    pranayama: "Уджаї – дихання переможця",
    meditation: "Збирання концентрації в одну точку"
  },
  {
    number: 3,
    theory: "Ґуни – якості матеріальної природи",
    asanas: [
      "Тадасана – позиція гори",
      "Врікшасана – позиція дерева",
      "Натараджасана – позиція короля танців",
      "Вірабгадрасана 2 – позиція благородного воїна"
    ],
    pranayama: "Наді шодхана – очищення енергетичних каналів",
    meditation: "Пратьяхара – перенесення свідомості в астральне місце для медитації"
  },
  {
    number: 4,
    theory: "Закон карми",
    asanas: [
      "Шалабгасана – позиція саранчі",
      "Дганурасана – позиція лука",
      "Ардга бгуджанґасана – половинна позиція кобри"
    ],
    pranayama: "Брамарі – дзижчання бджоли",
    meditation: "Концентрація на чакрах"
  },
  {
    number: 5,
    theory: "Яма, Ніяма - морально-етичні принципи йоги",
    asanas: [
      "Халасана – позиція плуга",
      "Сарванґасана – позиція свічки",
      "Віпаріта карані мудра – позиція перевернутої дії",
      "Матсьясана – позиція риби"
    ],
    pranayama: "Капалабгаті – сяючий череп",
    meditation: "Проходження увагою по Мікро-космічній орбіті"
  },
  {
    number: 6,
    theory: "Чакри – енергетичні центри людини",
    asanas: [
      "Парівріта тріконасана – позиція перевернутого трикутника",
      "Рудрасана – позиція Рудри (ступа)",
      "Ардга Матсьєндрасана – половинна позиція мудреця Матсьєндри",
      "Джатхара Парівартанасана – позиція скручування живота"
    ],
    pranayama: "Капалабгаті з затримками дихання і енергетичними замками",
    meditation: "Концентрація на Аджня чакрі з повторенням мантри"
  },
  {
    number: 7,
    theory: "Мантри – використання звуку для духовної практики",
    asanas: [
      "Пашчимоттанасана – інтенсивне витягнення задньої поверхні",
      "Чакрасана – позиція колеса",
      "Маюрасана – позиція павліна",
      "Падахастасана – позиція руки до ніг"
    ],
    kriya: "Аґнісара – дія розпалювання внутрішнього вогню",
    pranayama: "Бгастріка – ковальські міхи",
    meditation: "Оспівування мантри ОМ"
  },
  {
    number: 8,
    theory: "Медитація",
    asanas: [
      "Ширшасана – стійка на голові",
      "Мандукасана – позиція жаби",
      "Ардга навасана – половинна позиція човна",
      "Падмасана – позиція лотосу"
    ],
    kriya: "Наулі – хвиля",
    pranayama: "Апанасаті – усвідомленість в диханні",
    meditation: "Шавасана – розслаблення в позиції трупа"
  }
];

const benefits = [
  { icon: Heart, title: "Покращення здоров'я", desc: "Зміцнення імунної системи та загальне оздоровлення організму" },
  { icon: Zap, title: "Збільшення енергії", desc: "Накопичення життєвої енергії та підвищення витривалості" },
  { icon: Shield, title: "Гнучкість тіла", desc: "Розвиток фізичної гнучкості та сили м'язів" },
  { icon: Brain, title: "Спокій психіки", desc: "Заспокоєння розуму та емоційна гармонія" },
  { icon: Target, title: "Усвідомленість", desc: "Переусвідомлення сенсу життя і життєвих мотивацій" },
  { icon: Smile, title: "Благородні якості", desc: "Розвиток внутрішніх чеснот та характеру" },
  { icon: TrendingUp, title: "Духовний розвиток", desc: "Пробудження вищої свідомості та самореалізація" },
  { icon: Sparkles, title: "Внутрішній потенціал", desc: "Розкриття прихованих здібностей та можливостей" }
];

const testimonials = [
  {
    name: "Олена М.",
    text: "Цей курс повністю змінив моє життя. Я навчилася бути в спокої навіть у стресових ситуаціях. Дякую за ancient wisdom!",
    rating: 5
  },
  {
    name: "Андрій К.",
    text: "Дуже структурований та глибокий курс. Покрокове навчання допомогло мені освоїти складні техніки без перевантаження.",
    rating: 5
  },
  {
    name: "Марія С.",
    text: "Красиві локації на Тенеріфе додають особливої атмосфери. Відчуваєш зв'язок з природою під час практики.",
    rating: 5
  }
];

export default function Home() {
  const [expandedModule, setExpandedModule] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const heroHeight = window.innerHeight;
      const nearBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 500;
      
      setShowScrollButton(currentScrollY > heroHeight && !nearBottom);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEnroll = () => {
    document.getElementById("enrollment").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/hero-video-slow.mp4" type="video/mp4" />
        </video>
        {/* <div
          className="absolute inset-0 z-0 hero-bg"
          style={{
            backgroundImage: "url(https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_2499.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/40 to-indigo-900/60 z-0" />
        
        <div className="relative z-10 container mx-auto px-4 text-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="mb-10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png"
                alt="Logo"
                className="h-48 md:h-60 mx-auto filter drop-shadow-lg"
              />
            </div>

            <h1 className="hero-title text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              Raja Yoga
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              Автентичний курс Королівської йоги для гармонізації на всіх рівнях буття
            </p>
            <Button
              onClick={scrollToEnroll}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-xl rounded-full shadow-2xl border border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                Записатись на курс
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
              </span>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Course Features */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-purple-900/50" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Особливості курсу
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-6 max-w-3xl mx-auto">
              Йога - означає звʼязок. Звʼязок з нашим справжнім Я, іншими словами з Космічною Свідомістю, 
              з Духом. Раджа-йога — одна з автентичних систем досягнення цієї єдності за допомогою розширення 
              свідомості в медитації. Це комплексна наука, що включає методи для гармонізації людини на всіх 
              рівнях, від грубого тілесного, до духовного. 
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-20 h-20">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full"
                  fill="white"
                  opacity="0.8"
                >
                  <text 
                    x="50" 
                    y="70" 
                    fontSize="60" 
                    textAnchor="middle" 
                    fontFamily="Arial, sans-serif"
                  >
                    ॐ
                  </text>
                </svg>
              </div>
            </motion.div>
          </motion.div>
            
          <div>
            {courseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-stretch`}
                >
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <div className="relative overflow-hidden h-full md:min-h-[28rem] md:max-h-[30rem]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 bg-indigo-900/40">
                    <div className="backdrop-blur-xl bg-white/10 border-0 h-full flex flex-col justify-center p-8 md:p-12 md:min-h-[28rem]">
                      <div className="w-14 h-14 aspect-square rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-lg flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg text-white/80 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 categories-bg"
          style={{
            backgroundImage: "url(https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_1684.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-purple-900/60" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Що входить в курс
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl h-full hover:bg-white/15 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg mx-auto md:mb-2`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-purple-900/50 to-indigo-900/50">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Програма курсу
          </motion.h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="py-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:bg-white/15 transition-all duration-300">
                  <button
                    onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                        {module.number}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                          Модуль {module.number}
                        </h3>
                        <p className="text-white/80 text-sm md:text-sm">
                          {module.theory}
                        </p>
                      </div>
                    </div>
                    {expandedModule === index ? (
                      <ChevronUp className="w-6 h-6 text-white flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 space-y-4">
                        <div>
                          <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
                            <Mountain className="w-5 h-5" />
                            Асани:
                          </h4>
                          <ul className="space-y-1 text-white/80 ml-7">
                            {module.asanas.map((asana, i) => (
                              <li key={i} className="text-sm md:text-sm">• {asana}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
                            <Wind className="w-5 h-5" />
                            Пранаяма:
                          </h4>
                          <p className="text-white/80 text-sm md:text-sm ml-7">{module.pranayama}</p>
                        </div>
                        
                        {module.kriya && (
                          <div>
                            <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
                              <Sparkles className="w-5 h-5" />
                              Крія:
                            </h4>
                            <p className="text-white/80 text-sm md:text-sm ml-7">{module.kriya}</p>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="text-white text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
                            <Brain className="w-5 h-5" />
                            Медитація:
                          </h4>
                          <p className="text-white/80 text-sm md:text-sm ml-7">{module.meditation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 benefits-bg"
          style={{
            backgroundImage: "url(https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_3534.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/65 to-purple-900/65" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Результати практики
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="benefits-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl h-full hover:bg-white/15 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-purple-300 md:mb-4" />
                  <h3 className="text-lg md:text-lg font-semibold text-white md:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-sm">
                    {benefit.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Про мене
              </h2>
              <div className="space-y-4 text-white/90 text-base md:text-base leading-relaxed">
                <div className="about-image-wrapper md:float-left md:mr-6 mb-4 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mx-auto md:mx-0">
                  <img
                    src="https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/me-gaze%20(1).jpeg"
                    alt="Instructor"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <p>
                  З дитинства я відчував себе чужим на цій планеті, серед суспільства, де є розділення на своїх і чужих, 
                  а мотиваціями на життя є досягнення, конкуренція, примноження матеріального. Аж поки я не натрапив на 
                  духовні знання, я жив без особливого сенсу. До шляху самопізнання мене вели страждання, як тілесні, 
                  так і прихована депресія, сум за чимось вищим, що було втрачене і забуте. Паралельно з тим, інтерес 
                  до всього таємничого і містичного, розкриття того, як людина може бачити світ в залежності від її стану свідомості.
                </p>
                <p>
                  З того часу було багато цікавого і глибокого досвіду: я прославляв Бога з крішнаїтами,
                  заглиблювався у внутрішній світ на ретритах медитації Віпасана, жив і практикував в монастирях
                  Таїланду, пив священну аяуаску в джунглях Амазонки, пройшов навчання на викладача йоги,
                  досліджував травми і досвід цього і минулих своїх втілень, отримав ініціацію в медитацію 
                  на зв'язок з Космічною Свідомістю у традиції тантра-йоги - Ананда марґа.
                </p>
                <p>
                  Зараз життя привело мене на острів Тенеріфе, де я живу в печері в простих умовах,
                  але в тісному зв'язку з силами природи. Тут на острові, оточений неймовірною красою,
                  у мене з'явилось натхнення поділитись з вами тими знаннями і практиками, які вдихають
                  в моє життя сенс і дають силу відчувати магію і красу світу.
                </p>
                <p className="text-white font-semibold text-base md:text-lg">
                  Нехай знання і інструменти, які я записав в цьому курсі,
                  допоможуть вам залишатись в спокої і силі навіть в тяжких життєвих ситуаціях і врешті приведуть
                  до самореалізації!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 testimonials-bg"
          style={{
            backgroundImage: "url(https://efkeiqakqzecqmoxpuzg.supabase.co/storage/v1/object/public/base44-prod/pics/IMG_2997.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/65 to-indigo-900/65" />
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Відгуки учнів
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl h-full hover:bg-white/15 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm md:text-sm mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-white font-semibold text-sm md:text-sm">
                    {testimonial.name}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment" className="py-20 px-4 relative bg-gradient-to-b from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Записатись на курс
              </h2>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 mb-8">
                <div className="text-center mb-6">
                  <p className="text-white/80 text-base md:text-base mb-2">Вартість курсу</p>
                  <p className="text-4xl md:text-4xl font-bold text-white mb-2">88 €</p>
                  <p className="text-white/70 text-sm md:text-sm">8 тижнів навчання</p>
                </div>
                
                <div className="space-y-3 text-white/90 text-sm md:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>8 модулів з теорією та практикою</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>40+ годин відео уроків</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Закрита група в Телеграм для обговорення</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Відеоуроки в Full HD якості</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Необмежений доступ до матеріалів</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Практикуйте у своєму темпі</span>
                  </div>
                </div>
              </div>

              <div
                onclick="fbq('track', 'AddToCart');"
                class="ws-embed-button-enroll"
                data-ws-enroll='eyJjb3Vyc2VfaWQiOiI2Yjk3ZTAyMi02ODIwLTRmYWEtYWMyOC1iY2M0NTgxZDljNTAiLCJidXNpbmVzcyI6InJhamEteW9nYSJ9'
                className="ws-embed-button-enroll w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-6 text-base md:text-base rounded-xl shadow-2xl border border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer text-center"
              >
                Оформити замовлення
              </div>

              <div className="mt-8 text-center text-white/70 text-xs md:text-xs">
                <p>Після оформлення замовлення ви одразу отримаєте доступ до навчальних матеріалів</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 relative bg-black/30 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ff94128c7b01ef8df60cce/20e3577cc_logo.png"
              alt="Logo"
              className="h-12 mx-auto filter drop-shadow-lg"
            />
          </div>
          <p className="text-white/70 text-sm md:text-sm mb-4">
            Раджа Йога - Шлях до самореалізації
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://t.me/+EhEyiskXTrw1N2Iy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Send className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@yogaasitis5261" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/vita1ity19/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/vitalii.oleksiv/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-6 text-white/50 text-xs md:text-xs">
            © 2025 Raja Yoga
          </div>
        </div>
      </footer>

      {/* Scroll to Enrollment Button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToEnroll}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
          aria-label="Записатись на курс"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      )}

      <style jsx>{`
        @media (max-width: 767px) {
          .hero-title {
            font-size: 3rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .hero-bg {
            background-attachment: fixed;
            transform: translateY(${scrollY * 0.5}px);
          }
          .categories-bg,
          .benefits-bg,
          .testimonials-bg {
            background-attachment: fixed;
          }
        }
        
        * {
          box-sizing: border-box;
        }
        
        .text-card-foreground {
          justify-content: center;
          gap: 1rem;
        }
          
        
      `}</style>
    </div>
  );
}