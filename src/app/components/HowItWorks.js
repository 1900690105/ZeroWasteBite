import React from "react";

function HowItWorks() {
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
  return (
    <>
      <section
        id="how-it-works"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-emerald-50"
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
    </>
  );
}

export default HowItWorks;
