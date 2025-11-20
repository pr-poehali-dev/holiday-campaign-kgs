import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
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
    const message = `Здравствуйте! Я хочу заказать вибропогружатель DZJ-90.%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AКомментарий: ${formData.comment}`;
    const whatsappUrl = `https://wa.me/79122410318?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: 'Переход в WhatsApp',
      description: 'Сейчас откроется чат для отправки заявки.',
    });
    setFormData({ name: '', phone: '', email: '', comment: '' });
    setIsDialogOpen(false);
  };

  const features = [
    {
      icon: 'MapPin',
      text: 'В наличии в Екатеринбурге',
    },
    {
      icon: 'Package',
      text: 'Полная комплектация: шкаф + зажим + ЗИП',
    },
    {
      icon: 'Shield',
      text: 'Гарантия 12 месяцев',
    },
    {
      icon: 'Truck',
      text: 'Доставка по России и СНГ',
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#272D49] via-[#273369] to-[#272D49] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#273369] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F6A327] rounded-full blur-3xl opacity-15"></div>

      <header className="relative z-50 py-3 md:py-4 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-3">
            <img
              src="https://cdn.poehali.dev/files/f5d5f064-7217-4ed5-98c0-b6d1dca3d1ba.png"
              alt="КоперГруппСервис"
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex items-center gap-3">
            <a 
              href="tel:+73433467475"
              className="flex md:hidden items-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-3 py-2 rounded-md text-sm"
            >
              <Icon name="Phone" size={16} />
              +7 (343) 346-74-75
            </a>
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+73433467475">
                <Icon name="Phone" size={18} />
                +7 (343) 346-74-75
              </a>
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white border-0 text-sm md:text-base"
              asChild
            >
              <a href="https://wa.me/79122410318" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </a>
            </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <img
                    src="https://cdn.poehali.dev/files/f5d5f064-7217-4ed5-98c0-b6d1dca3d1ba.png"
                    alt="КоперГруппСервис"
                    className="h-20 sm:h-28 w-auto drop-shadow-2xl flex-shrink-0"
                  />
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">КоперГруппСервис</h2>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Производство и поставка оборудования<br />для строительства свайных фундаментов
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:hidden">
                  <a href="tel:+73433467475" className="text-[#F6A327] hover:text-[#F6A327]/80 font-semibold text-base flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (343) 346-74-75
                  </a>
                  <a href="tel:+79122410318" className="text-[#F6A327] hover:text-[#F6A327]/80 font-semibold text-base flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (912) 241-03-18
                  </a>
                </div>

                <div className="hidden sm:flex flex-col gap-1">
                  <a href="tel:+73433467475" className="text-[#F6A327] hover:text-[#F6A327]/80 font-semibold text-base flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (343) 346-74-75
                  </a>
                  <a href="tel:+79122410318" className="text-[#F6A327] hover:text-[#F6A327]/80 font-semibold text-base flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (912) 241-03-18
                  </a>
                </div>

                <div className="inline-block relative w-full sm:w-auto">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#273369] to-[#F6A327] blur-lg opacity-30"></div>
                  <div className="relative bg-[#272D49]/80 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-lg border border-white/20 flex items-center justify-center gap-2 sm:gap-3">
                    <Icon name="Snowflake" size={20} className="text-[#F6A327] animate-pulse flex-shrink-0" />
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-wide">НОВОГОДНЕЕ СПЕЦПРЕДЛОЖЕНИЕ</span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                Вибропогружатель электрический крановый Yongan DZJ-90
              </h1>

              <div className="lg:hidden w-full">
                <img
                  src="https://cdn.poehali.dev/files/7f4f34d5-ee29-4104-befe-d86133ee54c5.png"
                  alt="Вибропогружатель DZJ-90"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-slate-200 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#273369]/30 flex items-center justify-center flex-shrink-0 border border-[#273369]/50">
                      <Icon name={feature.icon} size={18} className="text-[#F6A327]" />
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#272D49]/90 to-[#273369]/90 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border-2 border-[#F6A327]/50 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-300 text-xs sm:text-sm font-semibold uppercase tracking-wide">Специальная цена</div>
                  <div className="flex items-center gap-1 bg-[#F6A327]/20 px-2 sm:px-3 py-1 rounded-full border border-[#F6A327]/40">
                    <Icon name="TrendingDown" size={14} className="text-[#F6A327]" />
                    <span className="text-[#F6A327] font-bold text-xs sm:text-sm">-4%</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex flex-col gap-1">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white">7 990 000 ₽</div>
                    <span className="text-slate-400 text-sm sm:text-base lg:text-lg font-medium">с НДС</span>
                  </div>
                  <div className="mt-2">
                    <span className="line-through text-[#434242] text-sm sm:text-base">Старая цена: 8 300 000 ₽</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white px-6 py-5 text-base sm:text-lg font-bold shadow-xl hover:scale-105 transition-all"
                    asChild
                  >
                    <a href="tel:+79122410318">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#273369] to-[#F6A327] hover:opacity-90 text-white px-6 py-5 text-base sm:text-lg font-bold shadow-xl hover:scale-105 transition-all"
                      >
                        <Icon name="Send" size={20} className="mr-2" />
                        Оставить заявку
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
                          placeholder="Email *"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Комментарий (необязательно)"
                          value={formData.comment}
                          onChange={(e) =>
                            setFormData({ ...formData, comment: e.target.value })
                          }
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-[#273369] to-[#F6A327]" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 text-sm bg-[#272D49]/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10">
                <Icon name="Clock" size={18} className="text-[#F6A327] flex-shrink-0" />
                <span className="font-medium">Предложение действует до 31 декабря 2025</span>
              </div>
            </div>

            <div className="relative animate-fade-in hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#273369]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#F6A327]/20 rounded-full blur-2xl"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.poehali.dev/files/7f4f34d5-ee29-4104-befe-d86133ee54c5.png"
                    alt="Вибропогружатель DZJ-90 Yongan"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;