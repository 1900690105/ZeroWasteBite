"use client";
import React, { useEffect, useState } from "react";
import { Building2, MapPin, Phone } from "lucide-react";

const OrganizationsPage = () => {
  const [organizations, setOrganizations] = useState([
    {
      name: "Helping Hands Foundation",
      type: "NGO",
      address: "Gandhi Nagar, Nagpur",
      contact: "Ravi Sharma",
      phone: "+91 9876543210",
      status: "Active",
    },
    {
      name: "Hope Children Shelter",
      type: "Orphanage",
      address: "Civil Lines, Pune",
      contact: "Anjali Mehta",
      phone: "+91 9988776655",
      status: "Active",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-400 to-yellow-300 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Registered Food Needy Organizations 🍛
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          These NGOs and community groups help us ensure no food goes to waste.
        </p>
      </section>

      {/* Organization Grid */}
      <section className="py-12 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Building2 className="text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">{org.name}</h2>
              </div>
              <p className="text-gray-700 mb-1">
                <strong>Type:</strong> {org.type}
              </p>
              <p className="text-gray-700 mb-1 flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> {org.address}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Contact:</strong> {org.contact}
              </p>
              <p className="text-gray-700 flex items-center">
                <Phone className="w-4 h-4 mr-1" /> {org.phone}
              </p>
              <span
                className={`mt-3 inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  org.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {org.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 bg-green-50">
        <h2 className="text-2xl font-semibold mb-4">
          Are you an organization that supports food distribution?
        </h2>
        <a
          href="/organizations/register"
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
        >
          Register Your Organization
        </a>
      </section>
    </div>
  );
};

export default OrganizationsPage;
