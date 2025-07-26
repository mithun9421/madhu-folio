'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "madhurashanthini@gmail.com",
      link: "mailto:madhurashanthini@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91-9445269043",
      link: "tel:+919445269043"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "madhura-shanthini",
      link: "https://www.linkedin.com/in/madhura-shanthini/"
    }
  ];

  const practiceAreas = [
    "Data Protection & Privacy",
    "Technology Law",
    "Intellectual Property",
    "Commercial Contracts",
    "Regulatory Compliance",
    "Legal Consulting"
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-golden-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your legal needs? Let&apos;s connect and explore how I can help your business succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl golden-border">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-golden-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-golden-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-golden-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="privacy-consultation">Data Protection Consultation</option>
                  <option value="ip-services">Intellectual Property Services</option>
                  <option value="contract-review">Contract Review</option>
                  <option value="compliance-audit">Compliance Audit</option>
                  <option value="legal-advice">General Legal Advice</option>
                  <option value="speaking-engagement">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-golden-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-vertical"
                  placeholder="Please describe your legal needs or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-golden-600 text-white hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-xl golden-border">
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-golden-50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">{info.label}</div>
                      <div className="text-gray-600 group-hover:text-primary transition-colors duration-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Practice Areas</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {practiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST<br/>
                  <strong>Response Time:</strong> Within 24 hours for all inquiries
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary to-golden-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-3">Need Immediate Assistance?</h4>
              <p className="text-sm mb-4 opacity-90">
                For urgent legal matters, please call directly or send an email.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919445269043"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
                <a
                  href="mailto:madhurashanthini@gmail.com"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Email Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg golden-border">
            <h3 className="text-2xl font-bold text-secondary mb-4">Professional Consultation</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I provide personalized legal consultation services for businesses and individuals. 
              Whether you need help with data protection compliance, intellectual property matters, 
              or commercial contract review, I&apos;m here to provide expert guidance tailored to your specific needs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="bg-golden-100 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                📅 Flexible Scheduling
              </span>
              <span className="bg-golden-100 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                💼 Business & Individual Clients
              </span>
              <span className="bg-golden-100 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                🌐 Remote Consultation Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}