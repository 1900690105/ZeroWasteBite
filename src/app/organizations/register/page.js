"use client";
import React, { useState } from "react";
import { Building2, Upload } from "lucide-react";

const OrganizationRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    address: "",
    city: "",
    contact: "",
    email: "",
    phone: "",
    description: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Organization Registered Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-linear-to-r from-green-500 to-yellow-400 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Register Your Organization 🤝
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join our mission to ensure no food goes to waste. Fill in your details
          and become part of our food distribution network.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md mb-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Organization Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter organization name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Type</option>
              <option value="NGO">NGO</option>
              <option value="Orphanage">Orphanage</option>
              <option value="Shelter">Shelter</option>
              <option value="Community Kitchen">Community Kitchen</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter complete address"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Person
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact person name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              suppressHydrationWarning
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter organization email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter contact number"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Briefly describe your organization and mission"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Upload Document */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Proof Document (optional)
            </label>
            <div className="flex items-center space-x-3">
              <label className="cursor-pointer flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">
                <Upload className="mr-2" size={18} />
                Choose File
                <input
                  type="file"
                  name="document"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              {formData.document && (
                <span className="text-sm text-gray-600">
                  {formData.document.name}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Registration
          </button>
        </form>
      </section>
    </div>
  );
};

export default OrganizationRegisterPage;
