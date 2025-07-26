import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Professional Conduct", href: "/conduct" }
    ],
    services: [
      { name: "Data Protection", href: "/services/privacy" },
      { name: "IP Law", href: "/services/intellectual-property" },
      { name: "Commercial Contracts", href: "/services/contracts" },
      { name: "Legal Consulting", href: "/services/consulting" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Legal Guides", href: "/guides" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Downloads", href: "/downloads" }
    ]
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/madhura-shanthini/",
      icon: "💼"
    },
    {
      name: "Email",
      href: "mailto:madhurashanthini@gmail.com",
      icon: "📧"
    },
    {
      name: "Phone",
      href: "tel:+919445269043",
      icon: "📱"
    }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-golden-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MS</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Madhura Shanthini</h3>
                <p className="text-golden-300 text-sm">Legal Professional</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering businesses and individuals with expert legal guidance in 
              privacy law, intellectual property, and technology regulations.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <span className="mr-2">📍</span>
                Chennai, Tamil Nadu, India
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="mr-2">⚖️</span>
                Enrolled with Bar Council of India
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="mr-2">🎓</span>
                ~4 Years Post Qualification Experience
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-golden-300">Legal Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-golden-300">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-golden-300">Connect</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-sm text-gray-300">
                <strong className="text-white">Email:</strong><br/>
                <a href="mailto:madhurashanthini@gmail.com" className="hover:text-primary transition-colors duration-300">
                  madhurashanthini@gmail.com
                </a>
              </div>
              <div className="text-sm text-gray-300">
                <strong className="text-white">Phone:</strong><br/>
                <a href="tel:+919445269043" className="hover:text-primary transition-colors duration-300">
                  +91-9445269043
                </a>
              </div>
            </div>

            {/* Legal Pages */}
            <div>
              <h5 className="font-semibold text-white mb-3">Legal</h5>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-8">
          <div className="bg-gradient-to-r from-primary to-golden-600 rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-white/90 mb-4 text-sm">
              Subscribe to get the latest legal insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-secondary focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>
                © {currentYear} Madhura Shanthini. All rights reserved. | 
                <span className="text-golden-300"> Legal Professional & Privacy Expert</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-xs">Built with</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Professional Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Professional Disclaimer:</strong> This website contains general information about legal matters. 
              The information provided does not constitute legal advice and should not be relied upon as such. 
              Please consult with a qualified attorney for advice regarding your specific legal situation. 
              Attorney advertising. Prior results do not guarantee similar outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}