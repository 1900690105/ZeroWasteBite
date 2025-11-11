"use client";
import React, { useState } from "react";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function FoodDonationHome() {
  const stats = [
    { number: "1200+", label: "Meals Shared", icon: "🍱" },
    { number: "500+", label: "Volunteers", icon: "👥" },
    { number: "50+", label: "Cities Covered", icon: "🌍" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-linear-to-br from-emerald-50 to-green-50 hover:shadow-xl transition transform hover:scale-105"
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
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-emerald-600 to-green-700">
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
      <Footer />
    </div>
  );
}
