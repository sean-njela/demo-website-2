
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sukces!",
      description: "Dziękujemy za zapisanie się do newslettera.",
    });
    setEmail('');
  };

  return (
    <section className="bg-navy text-white section-padding">
      <div className="container container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pozostań Zmotywowany</h2>
          <p className="text-lg mb-8 opacity-90">
            Otrzymuj cotygodniowe wskazówki treningowe, motywację i ekskluzywne treści prosto na swoją skrzynkę.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Wpisz swój email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-white text-navy hover:bg-paleblue hover:text-navy-light">
              Zapisz się
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
