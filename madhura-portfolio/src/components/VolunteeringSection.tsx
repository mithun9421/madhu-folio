export default function VolunteeringSection() {
  const volunteeringExperience = {
    organization: "Bhumi NGO",
    role: "Board Member & Multi-Department Leader",
    duration: "2015 - Present",
    focus: "Education of Underprivileged Children",
    description: "Leading various initiatives to provide quality education and opportunities to underprivileged children across India.",
    departments: [
      "Human Resources",
      "Event Management", 
      "Strategy & Planning",
      "Leadership Team"
    ],
    achievements: [
      {
        title: "Trail Blazer of the Year 2016",
        description: "Recognized for outstanding contribution and leadership within Bhumi organization",
        year: "2016"
      },
      {
        title: "Youth Champion Award Finalist",
        description: "Honored by Maharashtra State Minister for Education & Cultural Affairs",
        year: "2017"
      }
    ]
  };

  const impactStats = [
    { number: "8+", label: "Years of Service", icon: "⏰" },
    { number: "500+", label: "Children Impacted", icon: "👶" },
    { number: "25+", label: "Events Organized", icon: "🎯" },
    { number: "4", label: "Departments Led", icon: "👥" }
  ];

  const volunteeringValues = [
    {
      title: "Education Access",
      description: "Ensuring every child has access to quality education regardless of their background",
      icon: "📚"
    },
    {
      title: "Leadership Development",
      description: "Building leadership skills in young people to create future change-makers",
      icon: "🌟"
    },
    {
      title: "Community Building",
      description: "Fostering strong communities through collaborative social impact initiatives",
      icon: "🤝"
    },
    {
      title: "Sustainable Change",
      description: "Creating long-term solutions that address root causes of educational inequality",
      icon: "🌱"
    }
  ];

  return (
    <section id="volunteering" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Social Impact & Volunteering</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Committed to creating positive change through education and community development
          </p>
        </div>

        {/* Main Volunteering Experience */}
        <div className="bg-gradient-to-br from-golden-50 to-white rounded-2xl p-8 mb-12 golden-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-golden-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">{volunteeringExperience.organization}</h3>
                  <p className="text-primary font-semibold">{volunteeringExperience.role}</p>
                  <p className="text-gray-600">{volunteeringExperience.duration}</p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Focus Area</h4>
                <p className="text-gray-700">{volunteeringExperience.focus}</p>
              </div>

              <p className="text-gray-700 leading-relaxed">{volunteeringExperience.description}</p>

              <div>
                <h4 className="font-bold text-secondary mb-3">Departments Managed</h4>
                <div className="flex flex-wrap gap-2">
                  {volunteeringExperience.departments.map((dept, index) => (
                    <span
                      key={index}
                      className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-golden-200 to-golden-400 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-6xl mb-4">🌟</div>
                  <p className="text-xl font-semibold">Empowering Through Education</p>
                  <p className="text-sm opacity-90 mt-2">Photo Coming Soon</p>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center card-hover golden-border">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-secondary rounded-2xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Recognition & Awards</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteeringExperience.achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{achievement.title}</h4>
                      <span className="bg-primary px-2 py-1 rounded text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values and Approach */}
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Values & Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteeringValues.map((value, index) => (
              <div key={index} className="bg-golden-50 rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-bold text-secondary mb-3">{value.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary to-golden-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Interested in contributing to education and social impact? Let&apos;s collaborate to create meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn About Bhumi
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Volunteer Opportunities
            </button>
          </div>
        </div>

        {/* Additional Images Placeholder */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gradient-to-br from-golden-100 to-golden-300 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="font-medium">Volunteering Photo {index}</p>
                  <p className="text-sm opacity-75">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}