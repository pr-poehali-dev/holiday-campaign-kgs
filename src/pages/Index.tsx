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
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш менеджер свяжется с вами в ближайшее время.',
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#1B4D9E] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl opacity-10"></div>

      <header className="relative z-50 py-4 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/65576c60-3c33-4021-a0f0-1ab977b5168e.png"
                alt="КоперГруппСервис"
                className="h-16 w-auto drop-shadow-lg"
              />
            </div>
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Icon name="Phone" size={18} />
              +7 (343) 268-00-78
            </Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1B4D9E] to-[#FF8C00] blur-lg opacity-30"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 inline-flex items-center gap-3">
                  <Icon name="Snowflake" size={24} className="text-[#FF8C00] animate-pulse" />
                  <span className="text-white font-bold text-lg tracking-wide">НОВОГОДНЕЕ СПЕЦПРЕДЛОЖЕНИЕ</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Вибропогружатель электрический крановый Yongan DZJ-90
              </h1>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-200 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1B4D9E]/30 flex items-center justify-center flex-shrink-0 border border-[#1B4D9E]/50">
                      <Icon name={feature.icon} size={20} className="text-[#1B4D9E]" />
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border-2 border-[#FF8C00]/50 shadow-2xl">
                <div className="text-slate-300 text-sm mb-2 font-semibold uppercase tracking-wide">Специальная цена</div>
                <div className="flex items-baseline gap-3 mb-1">
                  <div className="text-6xl font-black text-white">7 990 000 ₽</div>
                </div>
                <div className="text-slate-400 text-base font-medium mb-6">с НДС</div>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#1B4D9E] to-[#FF8C00] hover:opacity-90 text-white px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all"
                    >
                      <Icon name="Send" size={22} className="mr-2" />
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
                      <Button type="submit" className="w-full bg-gradient-to-r from-[#1B4D9E] to-[#FF8C00]" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center gap-3 text-slate-300 text-sm bg-slate-800/50 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10">
                <Icon name="Clock" size={18} className="text-[#FF8C00] flex-shrink-0" />
                <span className="font-medium">Предложение действует до 31 декабря 2025</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#1B4D9E]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#FF8C00]/20 rounded-full blur-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <div className="absolute -top-6 left-8 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl blur-md"></div>
                      <div className="relative bg-slate-800 px-6 py-3 rounded-xl border-2 border-white/30 shadow-2xl">
                        <div className="text-white font-bold text-lg tracking-wide">НОВОГОДНЕЕ</div>
                        <div className="text-white font-bold text-lg tracking-wide">СПЕЦПРЕДЛОЖЕНИЕ</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
                    <img
                      src="https://cdn.poehali.dev/files/7d1bdcbb-4347-46e5-85ce-de85e428a2a8.jpg"
                      alt="Вибропогружатель DZJ-90 Yongan"
                      className="w-full h-auto object-cover brightness-110 contrast-110"
                      style={{ 
                        filter: 'brightness(1.1) contrast(1.15) saturate(1.05)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                  </div>
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
