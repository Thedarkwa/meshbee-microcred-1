import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const loanProducts = [
    "Business Loans",
    "Personal Loans",
    "Commercial Drivers Loan",
    "Asset Financing",
  ];

  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-lg font-bold text-card">Meshbee</span>
                <span className="text-sm text-card/70 block -mt-1">MicroCredit Enterprise</span>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-4">
              Empowering small businesses across Ghana with accessible, affordable loans. Your success is our mission.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-card/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-card/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-card/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-card/70 hover:text-primary text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-lg font-semibold text-card mb-4">Our Products</h4>
            <ul className="space-y-3">
              {loanProducts.map((product) => (
                <li key={product}>
                  <span className="text-card/70 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-card mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-card/70 text-sm">Teshie Fertilizer Road, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-card/70 text-sm">+233 50 660 5717</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-card/70 text-sm">info@meshbeemicrocredit.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/50 text-sm">
              © {currentYear} Meshbee MicroCredit Enterprise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-card/50 hover:text-card text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-card/50 hover:text-card text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
