export default function WorkSection() {
  const experiences = [
    {
      company: "KRIA Law",
      position: "Senior Associate",
      duration: "2023 - Present",
      type: "Current Role",
      description: "Leading technology law practice with focus on emerging legal frameworks and regulatory compliance.",
      highlights: [
        "Technology law specialization",
        "Regulatory compliance advisory",
        "Client relationship management"
      ]
    },
    {
      company: "Zoho Corporation",
      position: "Junior Associate Counsel",
      duration: "2020 - 2022",
      type: "Multinational Technology Company",
      description: "Handled comprehensive legal operations for global SaaS company with focus on privacy and technology contracts.",
      highlights: [
        "Drafted 200+ technology contracts",
        "Led data protection compliance initiatives",
        "Managed international data transfer requirements",
        "Conducted ISO/SOC compliance audits"
      ]
    },
    {
      company: "L.R.Swami & Co",
      position: "Junior Associate",
      duration: "2019 - 2020",
      type: "IP Law Firm",
      description: "Specialized in intellectual property prosecution and trademark law practice.",
      highlights: [
        "Trademark prosecution and opposition",
        "IP portfolio management",
        "Litigation support and legal research"
      ]
    }
  ];

  const achievements = [
    {
      title: "Asia-Pacific Moot Court",
      description: "Runners-up at International Trademark Association (INTA) Competition",
      year: "2019",
      icon: "🏆"
    },
    {
      title: "Best Speaker Award",
      description: "National Seminar on Law & Banking Services",
      year: "2018",
      icon: "🎤"
    },
    {
      title: "Trial Advocacy Winner",
      description: "All India Gurucharan Singh Tulsi Criminal Law Moot Court",
      year: "2018",
      icon: "⚖️"
    },
    {
      title: "Youth Champion Finalist",
      description: "Maharashtra State Minister Recognition",
      year: "2017",
      icon: "🌟"
    }
  ];

  const majorSkills = [
    "Data Protection & Privacy",
    "Commercial Contracts",
    "Intellectual Property",
    "Technology Law",
    "Regulatory Compliance"
  ];

  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building expertise in technology law, privacy protection, and commercial legal practice
          </p>
        </div>

        {/* Major Skills Banner */}
        <div className="bg-gradient-to-r from-primary to-golden-600 rounded-2xl p-6 mb-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-4 text-center">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {majorSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-golden-50 rounded-xl p-6 card-hover golden-border">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-secondary">{exp.position}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.type}</p>
                    </div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards and Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-8">Awards & Recognition</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover border border-golden-200">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 flex-shrink-0">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-secondary">{achievement.title}</h4>
                        <span className="bg-golden-100 text-primary px-2 py-1 rounded text-sm font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-700">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-br from-secondary to-gray-800 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Ready to Collaborate?</h4>
              <p className="text-gray-300 mb-4">
                Let&apos;s discuss your legal needs and how I can help your business succeed.
              </p>
              <button className="bg-primary hover:bg-golden-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-golden-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-secondary mb-6 text-center">Education & Qualifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 golden-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">B.Com.B.L (Hons)</h4>
                  <p className="text-gray-600">Dr. Ambedkar Law University</p>
                </div>
              </div>
              <p className="text-gray-700">2014 - 2019 • Chennai</p>
            </div>

            <div className="bg-white rounded-xl p-6 golden-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📜</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Additional Certifications</h4>
                  <p className="text-gray-600">Professional Development</p>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• CS50 for Lawyers - Harvard University</li>
                <li>• ISO 27001:2013 Auditor Training</li>
                <li>• Entrepreneurship & Business Laws Diploma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}