import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-green-50">
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
              <div className="aspect-square rounded-2xl bg-linear-to-br from-emerald-400 to-green-600 p-8 shadow-2xl">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-8xl">
                  <Image
                    src={"/hero.png"}
                    alt="hero"
                    width={700}
                    height={700}
                  />
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
    </>
  );
}

export default HeroSection;
