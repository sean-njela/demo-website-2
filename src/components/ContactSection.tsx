
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would be connected to an actual email service in production
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section className="container section-padding">
      <h2 className="section-title text-center">Get in Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="bg-paleblue p-6 md:p-10 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  required 
                  className="bg-white"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <Input 
                id="subject" 
                placeholder="Message subject" 
                className="bg-white"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your message" 
                rows={5} 
                required 
                className="bg-white resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full bg-navy hover:bg-navy-light">
              Send Message
            </Button>
          </form>
        </div>
        
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 text-navy flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@piotrsiegoczynski.com" className="text-gray-600 hover:text-navy">
                    contact@piotrsiegoczynski.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-3 text-navy flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+48123456789" className="text-gray-600 hover:text-navy">
                    +48 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-navy flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Warsaw, Poland</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-navy-light transition-colors"
              >
                <Instagram />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
          
          <div className="mt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35439706725!2d20.896111725337375!3d52.23303806921175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1693303371138!5m2!1sen!2sus" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Location map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
