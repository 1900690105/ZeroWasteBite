"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Heart,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function FoodDonationHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { number: "1200+", label: "Meals Shared", icon: "🍱" },
    { number: "500+", label: "Volunteers", icon: "👥" },
    { number: "50+", label: "Cities Covered", icon: "🌍" },
  ];

  const steps = [
    {
      step: "01",
      title: "Donor Posts Food",
      description:
        "Share details about leftover food including quantity, location, and pickup time.",
      icon: "📝",
    },
    {
      step: "02",
      title: "Volunteer Accepts",
      description:
        "Nearby volunteers receive notifications and accept food pickup requests.",
      icon: "✋",
    },
    {
      step: "03",
      title: "Food Delivered",
      description:
        "Volunteers collect and deliver food to those in need in their community.",
      icon: "🚗",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Restaurant Owner",
      text: "Instead of wasting food every evening, we now feed 20+ families. This platform made it so easy to connect with volunteers.",
      image: "👩‍🍳",
    },
    {
      name: "Rahul Kumar",
      role: "Volunteer",
      text: "Being able to help my community while reducing food waste gives me immense satisfaction. The app makes coordination seamless.",
      image: "🙋‍♂️",
    },
    {
      name: "Anita Desai",
      role: "NGO Coordinator",
      text: "We receive fresh donations daily through this platform. It has transformed how we serve our beneficiaries.",
      image: "👩‍💼",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🍱</div>
              <span className="text-xl font-bold text-emerald-600">
                FoodShare
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                About
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                How It Works
              </a>
              <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                Login
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  About
                </a>
                <a
                  href="#how-it-works"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  How It Works
                </a>
                <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg text-left">
                  Login
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Join Hands to Stop Food Waste{" "}
                <span className="inline-block">🍱</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Donate leftover food or help distribute it to the needy.
                Together, we can end hunger and reduce waste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-semibold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                  Donate Food
                </button>
                <button className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 font-semibold text-lg transition">
                  Become a Volunteer
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 p-8 shadow-2xl">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-8xl">
                  🤝
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-400 text-white px-6 py-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm">Food Wasted Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple three-step process to connect food donors with volunteers
              and those in need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl">{step.icon}</span>
                    <span className="text-5xl font-bold text-emerald-100">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-400 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impact Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from our community members
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 sm:p-12 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-4xl text-emerald-600 mb-4">"</div>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 italic">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-emerald-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
                >
                  <ChevronLeft className="w-6 h-6 text-emerald-600" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full transition ${
                        index === currentTestimonial
                          ? "bg-emerald-600 w-8"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
                >
                  <ChevronRight className="w-6 h-6 text-emerald-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Be the reason someone sleeps with a full stomach tonight
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Every meal counts. Every volunteer matters. Join us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl hover:bg-gray-100 font-semibold text-lg shadow-xl transition transform hover:scale-105">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-emerald-700 text-white border-2 border-white rounded-xl hover:bg-emerald-800 font-semibold text-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🍱</div>
                <span className="text-xl font-bold text-white">FoodShare</span>
              </div>
              <p className="text-sm">
                Connecting hearts, sharing meals, building communities.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  <span className="text-xl">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  <span className="text-xl">📷</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2025 FoodShare. All rights reserved. Made with ❤️ for a
              hunger-free world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
