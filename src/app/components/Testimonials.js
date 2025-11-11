"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
    <>
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
            <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-2xl p-8 sm:p-12 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-4xl text-emerald-600 mb-4">&rdquo;</div>
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
    </>
  );
}

export default Testimonials;
