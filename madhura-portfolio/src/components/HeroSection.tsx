'use client';

import { useState, useEffect } from 'react';

// Mock blog posts data - this would come from your CMS/database
const mockTopPosts = [
  {
    id: 1,
    title: "Understanding Data Protection Laws in India",
    excerpt: "A comprehensive guide to navigating India's evolving data protection landscape and compliance requirements for businesses.",
    readTime: "5 min read",
    category: "Privacy Law"
  },
  {
    id: 2,
    title: "Intellectual Property Rights in the Digital Age",
    excerpt: "Exploring how traditional IP laws adapt to modern digital challenges and emerging technologies.",
    readTime: "7 min read",
    category: "Intellectual Property"
  },
  {
    id: 3,
    title: "Commercial Contract Essentials for Tech Startups",
    excerpt: "Key legal considerations and contract clauses that every technology startup should understand.",
    readTime: "6 min read",
    category: "Commercial Law"
  }
];

export default function HeroSection() {
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPost((prev) => (prev + 1) % mockTopPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-white via-golden-50 to-golden-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary opacity-10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-golden-300 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Hero Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                <span className="block">Madhura</span>
                <span className="block text-gradient">Shanthini</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Privacy Law Expert
                </span>
                <span className="bg-golden-200 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  Chennai Based
                </span>
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                  ~4 Years PQE
                </span>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Legal Professional specializing in <strong>intellectual property</strong>, 
                <strong> data protection</strong>, and <strong>commercial contracts</strong>. 
                Empowering businesses and individuals with legal knowledge through accessible content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="btn-primary">
                  View My Work
                </button>
                <button className="btn-secondary">
                  Read Latest Articles
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-golden-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-gray-600">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">People Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Top 3 Posts Carousel */}
          <div className="space-y-6 animate-fade-in">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-secondary mb-2">Featured Articles</h2>
              <p className="text-gray-600">Knowledge that empowers millions</p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden golden-border">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {mockTopPosts[currentPost].category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {mockTopPosts[currentPost].readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4 leading-tight">
                  {mockTopPosts[currentPost].title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {mockTopPosts[currentPost].excerpt}
                </p>
                
                <button className="text-primary font-semibold hover:text-golden-600 transition-colors duration-300 flex items-center">
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="bg-golden-100 h-1">
                <div 
                  className="bg-primary h-full transition-all duration-5000 ease-linear"
                  style={{ width: `${((currentPost + 1) / mockTopPosts.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Post indicators */}
            <div className="flex justify-center space-x-2">
              {mockTopPosts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPost ? 'bg-primary' : 'bg-golden-200'
                  }`}
                  onClick={() => setCurrentPost(index)}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center space-x-4">
              <button
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-golden-50"
                onClick={() => setCurrentPost((prev) => prev === 0 ? mockTopPosts.length - 1 : prev - 1)}
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-golden-50"
                onClick={() => setCurrentPost((prev) => (prev + 1) % mockTopPosts.length)}
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}