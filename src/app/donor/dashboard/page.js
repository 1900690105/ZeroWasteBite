"use client";
import React, { useState } from "react";
import {
  LogOut,
  Plus,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Package,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Map,
} from "lucide-react";

export default function DonorDashboard() {
  const [showMapView, setShowMapView] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  // Sample data
  const donorInfo = {
    name: "Rajesh Kumar",
    email: "rajesh@restaurant.com",
    profileImage: "👨‍🍳",
    totalDonations: 48,
    pickedUp: 42,
    pending: 6,
  };

  const donations = [
    {
      id: 1,
      foodType: "Rice & Curry",
      quantity: "15 kg",
      status: "Picked Up",
      postedOn: "2025-11-09",
      location: "Pune, Maharashtra",
      volunteer: "Amit Singh",
      coordinates: { lat: 18.5204, lng: 73.8567 },
    },
    {
      id: 2,
      foodType: "Fresh Vegetables",
      quantity: "10 kg",
      status: "Pending",
      postedOn: "2025-11-11",
      location: "Pune, Maharashtra",
      volunteer: null,
      coordinates: { lat: 18.5314, lng: 73.8446 },
    },
    {
      id: 3,
      foodType: "Bread & Pastries",
      quantity: "25 pieces",
      status: "Accepted",
      postedOn: "2025-11-10",
      location: "Pune, Maharashtra",
      volunteer: "Priya Desai",
      coordinates: { lat: 18.5074, lng: 73.8077 },
    },
    {
      id: 4,
      foodType: "Cooked Meals",
      quantity: "30 servings",
      status: "Pending",
      postedOn: "2025-11-11",
      location: "Pune, Maharashtra",
      volunteer: null,
      coordinates: { lat: 18.5642, lng: 73.7769 },
    },
    {
      id: 5,
      foodType: "Fruits",
      quantity: "8 kg",
      status: "Picked Up",
      postedOn: "2025-11-08",
      location: "Pune, Maharashtra",
      volunteer: "Rahul Patil",
      coordinates: { lat: 18.5362, lng: 73.8954 },
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Picked Up":
        return "bg-green-100 text-green-800 border-green-200";
      case "Accepted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Picked Up":
        return <CheckCircle className="w-4 h-4" />;
      case "Accepted":
        return <Clock className="w-4 h-4" />;
      case "Pending":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🍱</div>
              <span className="text-xl font-bold text-emerald-600">
                FoodShare
              </span>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-900">
                  {donorInfo.name}
                </p>
                <p className="text-xs text-gray-500">{donorInfo.email}</p>
              </div>
              <div className="w-10 h-10 bg-linear-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center text-2xl">
                {donorInfo.profileImage}
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {donorInfo.name}! 👋
          </h1>
          <p className="text-gray-600">
            Track your donations and make a difference in your community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12%
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Total Donations
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {donorInfo.totalDonations}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8%
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Picked Up
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {donorInfo.pickedUp}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-yellow-600 text-sm font-medium">
                Awaiting
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Pending Donations
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {donorInfo.pending}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <Plus className="w-5 h-5" />
            <span>Add New Donation</span>
          </button>
          <button
            onClick={() => setShowMapView(!showMapView)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold transition"
          >
            <Map className="w-5 h-5" />
            <span>{showMapView ? "Hide Map" : "Show Map View"}</span>
          </button>
        </div>

        {/* Map View */}
        {showMapView && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Donation Locations
            </h2>
            <div className="relative bg-linear-to-br from-emerald-50 to-green-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              {/* Simple Map Representation */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="border border-emerald-200"></div>
                ))}
              </div>

              {/* Map Pins */}
              {donations.map((donation, index) => (
                <div
                  key={donation.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 3) * 20}%`,
                  }}
                  onClick={() => setSelectedDonation(donation)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition transform group-hover:scale-125 ${
                      donation.status === "Picked Up"
                        ? "bg-green-500"
                        : donation.status === "Accepted"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    <p className="font-semibold text-sm text-gray-900">
                      {donation.foodType}
                    </p>
                    <p className="text-xs text-gray-600">{donation.quantity}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {donation.location}
                    </p>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-3 text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Picked Up</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Donations Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Active Donations
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage and track all your food donations
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Food Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Posted On
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Volunteer
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {donations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {donation.foodType}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {donation.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          donation.status
                        )}`}
                      >
                        {getStatusIcon(donation.status)}
                        <span>{donation.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(donation.postedOn).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {donation.volunteer || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition">
                          <Eye className="w-4 h-4" />
                        </button>
                        {donation.status === "Pending" && (
                          <>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {donation.foodType}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {donation.quantity}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      donation.status
                    )}`}
                  >
                    {getStatusIcon(donation.status)}
                    <span>{donation.status}</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                  <div>
                    <span className="font-medium">Posted:</span>{" "}
                    {new Date(donation.postedOn).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <div>
                    <span className="font-medium">Volunteer:</span>{" "}
                    {donation.volunteer || "-"}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-emerald-600 bg-emerald-50 rounded-lg text-xs font-medium hover:bg-emerald-100 transition">
                    <Eye className="w-3 h-3" />
                    <span>View</span>
                  </button>
                  {donation.status === "Pending" && (
                    <>
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg text-xs font-medium hover:bg-blue-100 transition">
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button className="flex items-center justify-center px-3 py-2 text-red-600 bg-red-50 rounded-lg text-xs font-medium hover:bg-red-100 transition">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State (if no donations) */}
        {donations.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No donations yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start making a difference by posting your first donation
            </p>
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-semibold transition">
              <Plus className="w-5 h-5" />
              <span>Add Your First Donation</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
