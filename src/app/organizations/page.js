"use client";
import React, { useEffect, useState } from "react";
import { Building2, MapPin, Phone, Link, AlertCircle } from "lucide-react";

const OrganizationsPage = () => {
  const [organizations, setOrganizations] = useState([
    {
      name: "Helping Hands Foundation",
      type: "NGO",
      address: "Gandhi Nagar, Nagpur",
      contact: "Ravi Sharma",
      phone: "+91 9876543210",
      status: "Active",
      portal:
        "https://helpinghands.org/dashboard – Access donor reports, distribution logs, and sustainability metrics.",
    },
    {
      name: "Hope Children Shelter",
      type: "Orphanage",
      address: "Civil Lines, Pune",
      contact: "Anjali Mehta",
      phone: "+91 9988776655",
      status: "Active",
      portal:
        "https://hopechildren.org/portal – Manage meal schedules, volunteer coordination, and impact analytics.",
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    type: "NGO",
    address: "",
    contact: "",
    phone: "",
    status: "Active",
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.contact.trim())
      newErrors.contact = "Contact person is required.";
    if (!/^\+91 \d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be in format +91 xxxxxxxxxx.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Add to organizations (simulate submission)
    setOrganizations((prev) => [
      ...prev,
      {
        ...formData,
        portal:
          "https://yourorg.org/portal – Newly registered access pending approval.",
      },
    ]);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      type: "NGO",
      address: "",
      contact: "",
      phone: "",
      status: "Active",
    });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      <section className="text-center py-20 bg-linear-to-r from-[#2ECC71] to-[#F39C12] text-white">
        <h1 className="text-5xl font-bold mb-6">
          Registered Food Needy Organizations 🍛
        </h1>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed">
          These NGOs and community groups help us ensure no food goes to waste.
          Each organization has access to a dedicated portal for managing
          distributions, tracking impact, and collaborating with donors.
        </p>
      </section>

      {/* Organization Grid */}
      <section className="py-16 px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <Building2 className="text-[#2ECC71] mr-3 w-6 h-6 shrink-0" />
                <h2 className="text-2xl font-bold text-gray-800">{org.name}</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-800 w-16">
                    Type:
                  </span>
                  <span className="ml-2">{org.type}</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="text-[#F39C12] w-5 h-5 mr-2 shrink-0" />
                  <span>{org.address}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-gray-800 w-16">
                    Contact:
                  </span>
                  <span className="ml-2">{org.contact}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="text-[#F39C12] w-5 h-5 mr-2 shrink-0" />
                  <span>{org.phone}</span>
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 text-sm mb-1 flex items-center">
                    <Link className="text-[#2ECC71] w-4 h-4 mr-1" />
                    Organization Portal
                  </p>
                  <p className="text-sm leading-relaxed">{org.portal}</p>
                </div>
              </div>
              <span
                className={`mt-6 inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                  org.status === "Active"
                    ? "bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/20"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {org.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with Form */}
      <section className="text-center py-16 bg-white/50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Are you an organization that supports food distribution? Join our
          portal today!
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Register to gain access to our dedicated portal for seamless food
          distribution management, real-time analytics, and community
          collaboration tools.
        </p>
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-[#2ECC71] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#2ECC71] hover:to-[#27AE60] bg-linear-to-r transform hover:scale-105"
          >
            Register Your Organization
          </button>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Organization Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
              >
                <option value="NGO">NGO</option>
                <option value="Orphanage">Orphanage</option>
                <option value="Food Bank">Food Bank</option>
                <option value="Community Group">Community Group</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.address}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
              />
              {errors.contact && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.contact}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 xxxxxxxxxx"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {errors.phone}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#2ECC71] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#2ECC71] hover:to-[#27AE60] bg-linear-to-r transform hover:scale-105"
            >
              Submit Registration
            </button>
            {submitSuccess && (
              <p className="text-green-600 font-semibold text-center">
                Registration submitted successfully! Portal access will be
                emailed soon.
              </p>
            )}
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="w-full text-sm text-gray-500 underline hover:text-[#2ECC71]"
            >
              Cancel
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default OrganizationsPage;
