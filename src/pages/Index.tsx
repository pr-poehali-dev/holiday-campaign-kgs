import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const giftCategories = [
  {
    id: 1,
    title: "Термосы с гравировкой",
    budget: "Средний бюджет",
    description: "Термосы с именной гравировкой в фирменных цветах",
    variants: [
      "Soft-touch матовый термос 0,75–1 л",
      "Металлический термос с ручкой",
      "Термос-кружка 0,5 л",
      "Термос с прорезиненным корпусом"
    ],
    colors: ["Оранжевый", "Синий", "Темно-синий", "Серый"],
    images: [
      "https://illan-gifts.ru/wp-content/uploads/2023/03/89105_99-600x600.jpg",
      "https://rusarctica.ru/d/101-1000s.jpg",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Ежедневники в кожаной обложке",
    budget: "Средний бюджет",
    description: "Премиальные ежедневники с тиснением логотипа KGS",
    variants: [
      "Эко-кожа с тиснением логотипа",
      "Натуральная кожа базового уровня",
      "Кожа с резинкой в корпоративном цвете",
      "Кольцевой механизм с металлическим шильдом",
      "Ежедневник с кремовыми листами"
    ],
    colors: ["Оранжевый", "Синий", "Темно-синий", "Серый"],
    images: [
      "https://www.oasiscatalog.com/media/product/4qN/notebook-a5-textured-pu-cover-silver-colored-edges-no-1-000098757-4qN.jpg",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Новогодний настольный календарь",
    budget: "Средний бюджет",
    description: "Календари с корпоративным дизайном на 2025 год",
    variants: [
      "Календарь фанера с лазерной гравировкой",
      "Календарь домиком из картона",
      "Календарь с металлической спиралью",
      "Календарь со вставкой тех-принта KGS",
      "Календарь-пирамида/куб с логотипом"
    ],
    colors: ["Синий", "Темно-синий", "Серый"],
    images: [
      "https://www.admos-gifts.ru/images/products/32562/main_image_32562.jpg",
      "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=800&q=80",
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Мини календарь-открытка",
    budget: "Средний бюджет",
    description: "Карманный календарь с поздравлением от директора",
    variants: [
      "Карманный календарь крафт/картон",
      "Двусторонний календарь",
      "Календарь-визитка с фольгой",
      "Календарь с факсимиле подписи",
      "QR на Telegram-канал + поздравление"
    ],
    colors: ["Синий", "Оранжевый"],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "Тёплый плед",
    budget: "Средний бюджет",
    description: "Однотонные пледы премиального качества",
    variants: [
      "Флисовый плед 140×200 см серый",
      "Плед графит",
      "Вязаный плед крупной вязки с биркой KGS",
      "Плед темно-синий с вышитым логотипом",
      "Бирка из крафта с тех. принтом"
    ],
    colors: ["Серый", "Графит", "Темно-синий"],
    images: [
      "https://karavan-agency.ru/upload/iblock/eb7/rq6f3e3vv8u0rj6prcjl6jdm1q42rbwv.jpg",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80"
    ]
  },
  {
    id: 6,
    title: "Подарочные боксы чай/кофе",
    budget: "Средний бюджет",
    description: "Наборы чая, кофе с конфетами и шоколадом",
    variants: [
      "Крафт бокс + черный чай + шоколад",
      "Темно-синий бокс + кофе + конфеты",
      "Белая коробка с синей лентой + микс",
      "Мини-бокс с открыткой",
      "Бокс с брендированным саше"
    ],
    colors: ["Крафт", "Темно-синий", "Белый"],
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
      "https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=800&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80"
    ]
  },
  {
    id: 7,
    title: "Зимний бокс",
    budget: "Средний бюджет",
    description: "Набор: перчатки, шапка, носки",
    variants: [
      "Бокс 'Работа на объекте' - рабочие перчатки + шапка + термо носки",
      "Бокс 'Гео-минимализм' - серые перчатки с принтом координат",
      "Бокс 'KGS-Urban winter' - повседневный теплый набор",
      "Бокс 'Tech-accent' - черный набор с голубой тишью",
      "Бокс 'Safe-winter' - утепленные перчатки со светоотражением"
    ],
    colors: ["Черный", "Серый", "Темно-синий"],
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
      "https://images.unsplash.com/photo-1514922623700-efa27684eb4b?w=800&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80"
    ]
  },
  {
    id: 8,
    title: "Письменный набор премиум",
    budget: "Премиум",
    description: "Ручка Parker + блокнот с гравировкой",
    variants: [
      "Parker Roller metal + блокнот hard cover",
      "Премиум ручка в черной коробке + блокнот с тиснением",
      "Металлическая ручка + блокнот с гравировкой на обрезе",
      "Набор в магнитном футляре",
      "Набор с биркой KGS из металла/акрила"
    ],
    colors: ["Черный", "Синий", "Серебро"],
    images: [
      "https://presentique.ru/upload/iblock/ec2/0l8hd8w94hjj9oq0e46vugvbnkv4dgwm.jpg",
      "https://craft-me.ru/upload/iblock/945/lku5cfr0z6l7cwlz9kkj0a1vnlbyfzr7.jpg",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
    ]
  },
  {
    id: 9,
    title: "Элитный чай/кофе",
    budget: "Премиум",
    description: "Премиальные наборы чая и кофе",
    variants: [
      "Черная коробка + листовой чай + ложечка с логотипом",
      "Деревянный бокс с гравировкой + specialty-coffee",
      "Бокс двух уровней чай + кофе + шоколад",
      "Набор в тубусах Tea/Coffee + конфеты",
      "Коробка с фирменной тишью и биркой"
    ],
    colors: ["Черный", "Дерево", "Темно-синий"],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=800&q=80",
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80"
    ]
  },
  {
    id: 10,
    title: "Корпоративный пакет",
    budget: "Премиум",
    description: "Твердый подарочный пакет премиум-класса",
    variants: [
      "Пакет soft-touch с белой шелкографией",
      "Плотный картон, синий, ручки-канат",
      "Черный пакет с голубой тишью",
      "Пакет с УФ-печатью логотипа тон в тон",
      "Пакет-коробка с крышкой"
    ],
    colors: ["Синий", "Черный", "Белый"],
    images: [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
      "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80",
      "https://images.unsplash.com/photo-1564015709377-c0b1b0d84c0d?w=800&q=80"
    ]
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredGifts = selectedCategory === "all" 
    ? giftCategories 
    : giftCategories.filter(gift => 
        selectedCategory === "medium" ? gift.budget === "Средний бюджет" : gift.budget === "Премиум"
      );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-[hsl(var(--kgs-blue))] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <img 
              src="https://cdn.poehali.dev/files/9501b69f-6f77-479a-aead-63c0849c468f.png" 
              alt="KGS Logo" 
              className="h-16 w-auto"
            />
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Корпоративные подарки
              </h1>
              <p className="text-xl text-blue-100">KGS-URAL • Новый год 2025</p>
            </div>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            Премиальные подарочные решения с фирменной символикой для деловых партнёров и сотрудников
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">
              <Icon name="Grid3x3" className="mr-2 h-4 w-4" />
              Все
            </TabsTrigger>
            <TabsTrigger value="medium">
              <Icon name="Gift" className="mr-2 h-4 w-4" />
              Средний бюджет
            </TabsTrigger>
            <TabsTrigger value="premium">
              <Icon name="Crown" className="mr-2 h-4 w-4" />
              Премиум
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGifts.map((gift) => (
                <Card 
                  key={gift.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => {}}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="grid grid-cols-3 h-full">
                      {gift.images.map((img, idx) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${gift.title} вариант ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ))}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={gift.budget === "Премиум" ? "default" : "secondary"}
                        className={gift.budget === "Премиум" ? "bg-[hsl(var(--kgs-orange))] text-white" : ""}
                      >
                        {gift.budget}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[hsl(var(--kgs-blue))]">
                      {gift.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {gift.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">ВАРИАНТЫ ИСПОЛНЕНИЯ:</p>
                      <ul className="space-y-1">
                        {gift.variants.slice(0, 3).map((variant, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <Icon name="Check" className="h-4 w-4 mr-2 mt-0.5 text-[hsl(var(--kgs-orange))] flex-shrink-0" />
                            <span>{variant}</span>
                          </li>
                        ))}
                      </ul>
                      {gift.variants.length > 3 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{gift.variants.length - 3} вариантов
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">ЦВЕТОВАЯ ПАЛИТРА:</p>
                      <div className="flex gap-2 flex-wrap">
                        {gift.colors.map((color, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-gradient-to-r from-[hsl(var(--kgs-blue))] to-[hsl(var(--kgs-dark-blue))] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Фирменный стиль KGS</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Все подарки оформляются в корпоративных цветах компании с нанесением логотипа 
                профессиональными методами: гравировка, тиснение, шелкография, вышивка.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Palette" className="h-5 w-5 mr-3 text-[hsl(var(--kgs-orange))]" />
                  <span>Фирменная цветовая палитра</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" className="h-5 w-5 mr-3 text-[hsl(var(--kgs-orange))]" />
                  <span>Премиальные материалы и упаковка</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Sparkles" className="h-5 w-5 mr-3 text-[hsl(var(--kgs-orange))]" />
                  <span>Индивидуальная персонализация</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[hsl(var(--kgs-orange))] h-32 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">RGB</div>
                  <div className="text-sm mt-1">246/163/39</div>
                </div>
              </div>
              <div className="bg-[hsl(var(--kgs-blue))] h-32 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">RGB</div>
                  <div className="text-sm mt-1">39/51/105</div>
                </div>
              </div>
              <div className="bg-[hsl(var(--kgs-dark-blue))] h-32 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">RGB</div>
                  <div className="text-sm mt-1">39/45/73</div>
                </div>
              </div>
              <div className="bg-[hsl(var(--kgs-gray))] h-32 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">RGB</div>
                  <div className="text-sm mt-1">67/66/66</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--kgs-blue))] text-white py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/9501b69f-6f77-479a-aead-63c0849c468f.png" 
            alt="KGS Logo" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-blue-100">
            КОПЕРGRUПСЕРВИС • КGS-URAL • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}