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
      icon: 'BoxSeam',
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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KGS</span>
              </div>
              <div>
                <div className="font-bold text-xl text-slate-900">КолергруппСервис</div>
                <div className="text-sm text-slate-600">Промышленное оборудование</div>
              </div>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={18} />
              +7 (343) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/fc5cbb07-4f40-45b4-80ac-008c501705bb.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg mb-6 shadow-lg animate-fade-in">
              <Icon name="Snowflake" size={20} />
              <span className="font-bold text-lg">НОВОГОДНЕЕ СПЕЦПРЕДЛОЖЕНИЕ</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl animate-fade-in">
              Вибропогружатель электрический крановый<br />
              <span className="text-blue-400">Yongan DZJ-90</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-slate-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl mb-6 animate-scale-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-slate-600 text-lg mb-2">Цена</div>
                  <div className="text-5xl md:text-6xl font-black text-slate-900">
                    7 990 000 ₽
                  </div>
                  <div className="text-slate-500 text-lg mt-1">с НДС</div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-bold shadow-xl hover:scale-105 transition-transform"
                    >
                      <Icon name="Send" size={24} className="mr-2" />
                      Оставить заявку
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Оставить заявку</DialogTitle>
                      <DialogDescription>
                        Заполните форму, и наш менеджер свяжется с вами в течение 15 минут
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

            <div className="text-white/80 text-sm animate-fade-in flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Предложение действует до 31 декабря 2025
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-slate-50 to-white border-slate-200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={spec.icon} size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-slate-600 text-sm mb-1">{spec.label}</div>
                    <div className="text-2xl font-bold text-slate-900">{spec.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Комплектация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Вибропогружатель DZJ-90',
                items: ['Основной блок', 'Вибрационный механизм', 'Электродвигатель'],
                icon: 'Wrench',
              },
              {
                title: 'Электрический шкаф',
                items: ['Панель управления', 'Защитная автоматика', 'Пульт дистанционный'],
                icon: 'Settings',
              },
              {
                title: 'Зажим и ЗИП',
                items: ['Гидравлический зажим', 'Запасные части', 'Техническая документация'],
                icon: 'Package',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <Icon name="CheckCircle" size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">КолергруппСервис</div>
              <p className="text-slate-400">
                Поставка промышленного оборудования для строительства
              </p>
            </div>
            <div>
              <div className="font-bold mb-4">Контакты</div>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (343) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@kgs-ural.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Екатеринбург
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-4">Режим работы</div>
              <div className="text-slate-400">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: Выходной
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            © 2025 КолергруппСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
