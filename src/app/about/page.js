"use client";
import Image from "next/image";
import { HandHeart, Truck, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-green-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Together, We Can Stop Food Waste
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Connecting generous donors with compassionate volunteers to ensure no
          food goes to waste.
        </p>
      </section>

      {/* ---------- MISSION, VISION, GOALS ---------- */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Our Mission, Vision & Goals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform aims to eliminate food wastage by bridging the gap
            between those who have surplus food and those in need — using
            technology for a better tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-green-50 rounded-2xl shadow-sm"
          >
            <HandHeart className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Our Mission
            </h3>
            <p>
              To connect donors and volunteers seamlessly, ensuring surplus food
              reaches the needy before it’s wasted.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-green-50 rounded-2xl shadow-sm"
          >
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Our Vision
            </h3>
            <p>
              To create a hunger-free community where every leftover meal finds
              a deserving plate.
            </p>
          </motion.div>

          {/* Goals */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-green-50 rounded-2xl shadow-sm"
          >
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Our Goals
            </h3>
            <p>
              Reduce food waste, empower local volunteers, and promote social
              responsibility through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- IMAGE GALLERY ---------- */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Our Impact in Action
          </h2>
          <p className="text-gray-600">
            Real moments of generosity, compassion, and change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["abt1.png", "abt3.png", "abt2.png"].map((img, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition"
            >
              <Image
                src={`/${img}`}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-20 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform is simple to use and impactful for everyone involved.
            Whether you’re a donor or a volunteer — every action counts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donor Flow */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
              For Donors 🍱
            </h3>
            <div className="space-y-6">
              {[
                "Post details of leftover food after your event or meal.",
                "Nearby volunteers get notified instantly.",
                "Volunteers collect food and distribute it responsibly.",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 bg-green-50 p-5 rounded-xl shadow-sm"
                >
                  <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    {i + 1}
                  </span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Volunteer Flow */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
              For Volunteers 🙌
            </h3>
            <div className="space-y-6">
              {[
                "Sign up and share your location to find nearby donations.",
                "Accept pickup requests and contact donors.",
                "Deliver food to local shelters or needy individuals.",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 bg-green-50 p-5 rounded-xl shadow-sm"
                >
                  <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    {i + 1}
                  </span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-24 bg-green-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Movement 🌍
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Be a part of the change. Together, we can ensure every leftover meal
          reaches someone in need.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Become a Donor
          </button>
          <button className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition">
            Join as Volunteer
          </button>
        </div>
      </section>
    </div>
  );
}
