import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш менеджер свяжется с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', comment: '' });
    setIsDialogOpen(false);
  };

  const features = [
    {
      icon: 'Package',
      title: 'В наличии в Екатеринбурге',
      description: 'Готов к отгрузке',
    },
    {
      icon: 'Box',
      title: 'Полная комплектация',
      description: 'Шкаф + зажим + ЗИП',
    },
    {
      icon: 'Shield',
      title: 'Гарантия 12 месяцев',
      description: 'Официальная гарантия',
    },
    {
      icon: 'Truck',
      title: 'Доставка по РФ и СНГ',
      description: 'Быстрая логистика',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-[#FF8C00]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/65576c60-3c33-4021-a0f0-1ab977b5168e.png"
                alt="КоперГруппСервис"
                className="h-14 w-auto"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-slate-900">КоперГруппСервис</div>
                <div className="text-xs text-slate-600">Промышленное оборудование</div>
              </div>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Phone" size={18} />
              +7 (343) 268-00-78
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg mb-6 shadow-lg animate-fade-in">
                <Icon name="Snowflake" size={20} className="animate-pulse" />
                <span className="font-bold text-base md:text-lg">НОВОГОДНЕЕ СПЕЦПРЕДЛОЖЕНИЕ KGS</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight animate-fade-in">
                Вибропогружатель электрический крановый
              </h1>
              <div className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ color: '#1B4D9E' }}>
                DZJ-90 Yongan
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg shadow-md border border-slate-200 animate-fade-in hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Icon name={feature.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm leading-tight mb-0.5">{feature.title}</div>
                      <div className="text-xs text-slate-600">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl mb-5 animate-scale-in border-t-4 border-[#FF8C00]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-slate-600 text-sm mb-1 font-semibold">Специальная цена до конца года</div>
                    <div className="text-4xl md:text-5xl font-black text-slate-900 mb-0.5">
                      7 990 000 ₽
                    </div>
                    <div className="text-slate-500 text-sm font-medium">с НДС</div>
                  </div>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-5 text-base font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                      >
                        <Icon name="Send" size={20} className="mr-2" />
                        Получить предложение
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Оставить заявку</DialogTitle>
                        <DialogDescription>
                          Заполните форму, и наш менеджер свяжется с вами в течение 30 минут
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                          <Input
                            placeholder="Ваше имя *"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            placeholder="Телефон *"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Комментарий к заявке"
                            value={formData.comment}
                            onChange={(e) =>
                              setFormData({ ...formData, comment: e.target.value })
                            }
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="text-slate-700 text-sm animate-fade-in flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2.5 rounded-lg shadow-sm">
                <Icon name="Clock" size={16} className="text-red-600 flex-shrink-0" />
                <span className="font-semibold">Предложение действует до 31 декабря 2025</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://cdn.poehali.dev/files/7d1bdcbb-4347-46e5-85ce-de85e428a2a8.jpg"
                  alt="Вибропогружатель DZJ-90 Yongan"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                  В НАЛИЧИИ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Фотографии оборудования
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Профессиональное оборудование для свайных работ в зимних условиях
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group">
              <img
                src="https://cdn.poehali.dev/files/373a86eb-473d-4aa1-942e-8a9bf434e628.jpg"
                alt="Вибропогружатель DZJ-90 на объекте"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                <p className="text-white font-semibold">DZJ-90 на строительной площадке</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group">
              <img
                src="https://cdn.poehali.dev/files/7d1bdcbb-4347-46e5-85ce-de85e428a2a8.jpg"
                alt="Детальный вид вибропогружателя"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                <p className="text-white font-semibold">Детальный вид механизма</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Мощность', value: '90 кВт', icon: 'Zap' },
              { label: 'Частота', value: '1500 об/мин', icon: 'Gauge' },
              { label: 'Вес', value: '1850 кг', icon: 'Weight' },
              { label: 'Амплитуда', value: '8-16 мм', icon: 'Activity' },
              { label: 'Усилие', value: '90 кН', icon: 'ArrowUpDown' },
              { label: 'Напряжение', value: '380 В', icon: 'Plug' },
            ].map((spec, index) => (
              <Card
                key={index}
                className="p-5 hover:shadow-xl transition-all hover:-translate-y-1 bg-white border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2.5 rounded-lg">
                    <Icon name={spec.icon} size={26} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs mb-0.5 font-medium">{spec.label}</div>
                    <div className="text-2xl font-bold text-slate-900">{spec.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Комплектация поставки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Вибропогружатель DZJ-90',
                items: ['Основной блок', 'Вибрационный механизм', 'Электродвигатель 90 кВт'],
                icon: 'Wrench',
              },
              {
                title: 'Электрический шкаф управления',
                items: ['Панель управления', 'Защитная автоматика', 'Пульт дистанционный'],
                icon: 'Settings',
              },
              {
                title: 'Зажим и комплект ЗИП',
                items: ['Гидравлический зажим', 'Запасные части', 'Техническая документация'],
                icon: 'Package',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white border-t-4 border-primary">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <ul className="space-y-2.5">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                      <Icon name="CheckCircle" size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать работу с DZJ-90?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Оставьте заявку прямо сейчас и получите консультацию специалиста по вашему проекту
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-12 py-6 text-lg font-bold shadow-xl">
                <Icon name="MessageCircle" size={22} className="mr-2" />
                Связаться со специалистом
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Связаться со специалистом</DialogTitle>
                <DialogDescription>
                  Наш эксперт ответит на все ваши вопросы по оборудованию
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <Input
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Textarea
                  placeholder="Ваш вопрос"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={3}
                />
                <Button type="submit" className="w-full" size="lg">
                  Отправить
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 border-t-4 border-[#FF8C00]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://cdn.poehali.dev/files/65576c60-3c33-4021-a0f0-1ab977b5168e.png"
                alt="KGS"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 text-sm">
                Надежный поставщик промышленного оборудования для строительства
              </p>
            </div>
            <div>
              <div className="font-bold mb-4 text-[#FF8C00]">Контакты</div>
              <div className="space-y-3 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (343) 268-00-78
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  kgs-ekb@mail.ru
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>г. Екатеринбург, ул. Фронтовых Бригад, 22, оф. 911</span>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4 text-[#FF8C00]">Режим работы</div>
              <div className="text-slate-400 text-sm space-y-2">
                <div>Пн-Пт: 9:00 - 18:00</div>
                <div>Сб-Вс: Выходной</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4 text-[#FF8C00]">Преимущества</div>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>✓ Официальная гарантия</li>
                <li>✓ Быстрая доставка</li>
                <li>✓ Техническая поддержка</li>
                <li>✓ Сертификаты качества</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            © 2025 КоперГруппСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;