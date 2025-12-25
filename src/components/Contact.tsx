import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal<HTMLDivElement>();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "233506605717";
    const messageText = `New Contact Message:
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "You will be redirected to WhatsApp to send your message.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Teshie Fertilizer Road", "Accra, Ghana"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+233 50 66 057 17"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@meshbeemicrocredit.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM"],
    },
  ];

  const getStaggerStyle = (index: number, isVisible: boolean, baseDelay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms`,
        };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <span style={getStaggerStyle(0, headerVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">Get In Touch</span>
          <h2 style={getStaggerStyle(1, headerVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p style={getStaggerStyle(2, headerVisible)} className="text-muted-foreground text-lg">
            Visit us at our office or send us a message. We're here to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            style={getStaggerStyle(0, formVisible)}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Kofi Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <Textarea
                  placeholder="Tell us about your business and loan needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                style={getStaggerStyle(index, infoVisible)}
                className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div 
              style={getStaggerStyle(contactInfo.length, infoVisible)}
              className="h-64 rounded-xl border border-border overflow-hidden"
            >
              <iframe
                src="https://maps.google.com/maps?q=MESHBEE+MICRO-CREDIT+Fertilizer+Rd+Accra+Ghana&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meshbee MicroCredit Location - Fertilizer Road, Teshie, Accra"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
