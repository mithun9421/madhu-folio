'use client';

import { useState } from 'react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('legal');

  const skillCategories = {
    legal: {
      title: "Legal Expertise",
      icon: "⚖️",
      skills: [
        { name: "Data Protection & Privacy Law", level: 95, description: "GDPR, CCPA, Indian data protection regulations" },
        { name: "Intellectual Property Law", level: 90, description: "Trademarks, copyrights, trade secrets" },
        { name: "Commercial Contracts", level: 92, description: "Technology agreements, licensing, NDAs" },
        { name: "Technology Law", level: 88, description: "Software licensing, SaaS agreements, IT law" },
        { name: "Regulatory Compliance", level: 85, description: "ISO standards, SOC compliance, audits" },
        { name: "Legal Research & Analysis", level: 93, description: "Case law analysis, statutory interpretation" }
      ]
    },
    technical: {
      title: "Technical Skills",
      icon: "💻",
      skills: [
        { name: "Contract Management Software", level: 85, description: "Legal tech platforms and automation" },
        { name: "Legal Document Drafting", level: 95, description: "Agreements, policies, legal opinions" },
        { name: "Legal Writing", level: 92, description: "Briefs, articles, legal communications" },
        { name: "MS Office & Google Suite", level: 88, description: "Advanced document processing and collaboration" },
        { name: "Basic Programming & Web Dev", level: 70, description: "Understanding technology for better legal advice" },
        { name: "Design Tools (Canva/Figma)", level: 75, description: "Legal infographics and presentations" }
      ]
    },
    soft: {
      title: "Professional Skills",
      icon: "🤝",
      skills: [
        { name: "Client Communication", level: 95, description: "Clear, professional client interactions" },
        { name: "Negotiation", level: 90, description: "Contract negotiations, dispute resolution" },
        { name: "Public Speaking", level: 88, description: "Conferences, seminars, moot courts" },
        { name: "Team Leadership", level: 85, description: "Managing interns, training programs" },
        { name: "Project Management", level: 87, description: "Complex legal projects, deadlines" },
        { name: "Cross-cultural Communication", level: 82, description: "International clients and regulations" }
      ]
    }
  };

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Tamil", level: "Native", flag: "🇮🇳" },
    { name: "Hindi", level: "Beginner", flag: "🇮🇳" },
    { name: "French", level: "Beginner", flag: "🇫🇷" }
  ];

  const certifications = [
    {
      name: "CS50 for Lawyers",
      issuer: "Harvard University",
      year: "2022",
      description: "Technology and law intersection",
      icon: "🎓"
    },
    {
      name: "ISO 27001:2013 Internal Auditor",
      issuer: "TÜV SÜD South Asia",
      year: "2021",
      description: "Security management systems",
      icon: "🔒"
    },
    {
      name: "Entrepreneurship & Business Laws",
      issuer: "NUJS Kolkata",
      year: "2016",
      description: "Business law specialization",
      icon: "💼"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-golden-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of practice in technology law and legal innovation
          </p>
        </div>

        {/* Skills Categories */}
        <div className="mb-12">
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg border-2 border-golden-200">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === key
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-primary hover:bg-golden-50'
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="bg-white rounded-2xl p-8 shadow-xl golden-border">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-secondary">{skill.name}</h4>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-golden-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-golden-600 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages and Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-white rounded-2xl p-8 shadow-xl golden-border">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-golden-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-semibold text-secondary">{lang.name}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    lang.level === 'Native' || lang.level === 'Fluent'
                      ? 'bg-primary text-white'
                      : 'bg-golden-200 text-secondary'
                  }`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl golden-border">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-golden-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-secondary text-lg">{cert.name}</h4>
                        <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 bg-gradient-to-r from-secondary to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Put Skills to Work</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            With a unique combination of legal expertise and technical understanding, 
            I help businesses navigate complex legal challenges in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-golden-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Case Studies
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}