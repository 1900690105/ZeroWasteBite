"use client";
import React, { useState } from "react";
import {
  MapPin,
  LogOut,
  Filter,
  Navigation,
  Clock,
  Package,
  User,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("nearby");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    distance: "all",
    foodType: "all",
    urgency: "all",
  });
  const nearbyDonations = [
    {
      id: 1,
      foodName: "Fresh Vegetable Curry & Rice",
      donor: "Green Valley Restaurant",
      address: "123 MG Road, Pune",
      distance: "1.2 km",
      expiryTime: "2 hours",
      foodType: "veg",
      urgency: "high",
      quantity: "5 meals",
      lat: 18.5204,
      lng: 73.8567,
    },
    {
      id: 2,
      foodName: "Chicken Biryani & Raita",
      donor: "Spice Garden",
      address: "456 FC Road, Pune",
      distance: "2.5 km",
      expiryTime: "4 hours",
      foodType: "non-veg",
      urgency: "medium",
      quantity: "8 meals",
      lat: 18.5314,
      lng: 73.8446,
    },
    {
      id: 3,
      foodName: "Paneer Tikka & Naan",
      donor: "Taste of India",
      address: "789 Koregaon Park, Pune",
      distance: "3.8 km",
      expiryTime: "6 hours",
      foodType: "veg",
      urgency: "low",
      quantity: "10 meals",
      lat: 18.5362,
      lng: 73.8958,
    },
  ];

  // Mock data for accepted pickups
  const myPickups = [
    {
      id: 1,
      foodName: "Dal Makhani & Roti",
      donor: "Hotel Sunshine",
      pickupAddress: "321 Shivaji Nagar, Pune",
      deliveryAddress: "Hope Foundation, Camp Area",
      status: "in-progress",
      acceptedAt: "30 mins ago",
    },
    {
      id: 2,
      foodName: "Mixed Veg Pulao",
      donor: "Royal Kitchen",
      pickupAddress: "654 Deccan, Pune",
      deliveryAddress: "Care Home, Kothrud",
      status: "completed",
      acceptedAt: "2 hours ago",
    },
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-700 border-red-300";
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "low":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const filteredDonations = nearbyDonations.filter((donation) => {
    if (
      filters.distance !== "all" &&
      parseFloat(donation.distance) > parseFloat(filters.distance)
    )
      return false;
    if (filters.foodType !== "all" && donation.foodType !== filters.foodType)
      return false;
    if (filters.urgency !== "all" && donation.urgency !== filters.urgency)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 font-sans">
      {/* Topbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-linear-to-r from-green-400 to-green-600 p-3 rounded-full shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Welcome, Volunteer!
                </h1>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1 text-green-600" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-linear-to-br from-green-400 to-green-600 p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Total Deliveries
                </p>
                <p className="text-3xl font-bold mt-1">24</p>
              </div>
              <TrendingUp className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-linear-to-br from-orange-400 to-orange-600 p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Meals Delivered
                </p>
                <p className="text-3xl font-bold mt-1">186</p>
              </div>
              <Package className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-linear-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Active Pickups
                </p>
                <p className="text-3xl font-bold mt-1">1</p>
              </div>
              <Navigation className="w-12 h-12 opacity-80" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("nearby")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                activeTab === "nearby"
                  ? "bg-linear-to-r from-green-400 to-green-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Nearby Donations</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab("mypickups")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                activeTab === "mypickups"
                  ? "bg-linear-to-r from-green-400 to-green-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <Package className="w-5 h-5" />
                <span>My Pickups</span>
              </span>
            </button>
          </div>

          {/* Nearby Donations Tab */}
          {activeTab === "nearby" && (
            <div>
              {/* Filters */}
              <div className="p-4 border-b border-gray-200">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-all duration-300"
                >
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-700">Filters</span>
                </button>

                {showFilters && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Distance
                      </label>
                      <select
                        value={filters.distance}
                        onChange={(e) =>
                          setFilters({ ...filters, distance: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="all">All Distances</option>
                        <option value="2">Within 2 km</option>
                        <option value="5">Within 5 km</option>
                        <option value="10">Within 10 km</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Food Type
                      </label>
                      <select
                        value={filters.foodType}
                        onChange={(e) =>
                          setFilters({ ...filters, foodType: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="all">All Types</option>
                        <option value="veg">Vegetarian</option>
                        <option value="non-veg">Non-Vegetarian</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency
                      </label>
                      <select
                        value={filters.urgency}
                        onChange={(e) =>
                          setFilters({ ...filters, urgency: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="all">All Urgencies</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Placeholder */}
              <div className="p-4 border-b border-gray-200">
                <div className="bg-linear-to-br from-green-100 to-green-200 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500 opacity-10">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">
                      Interactive Map View
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Showing {filteredDonations.length} nearby donations
                    </p>
                  </div>
                </div>
              </div>

              {/* Donation Cards */}
              <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {filteredDonations.map((donation) => (
                  <div
                    key={donation.id}
                    className="bg-linear-to-br from-white to-gray-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {donation.foodName}
                        </h3>
                        <p className="text-gray-600 text-sm flex items-center mb-1">
                          <User className="w-4 h-4 mr-1 text-orange-500" />
                          {donation.donor}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-green-600" />
                          {donation.address}
                        </p>
                      </div>
                      <span
                        className={`mt-2 sm:mt-0 px-3 py-1 text-xs font-semibold rounded-full border ${getUrgencyColor(
                          donation.urgency
                        )}`}
                      >
                        {donation.urgency.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-600 font-medium">
                          Distance
                        </p>
                        <p className="text-sm font-bold text-blue-800">
                          {donation.distance}
                        </p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-xs text-red-600 font-medium">
                          Expires In
                        </p>
                        <p className="text-sm font-bold text-red-800">
                          {donation.expiryTime}
                        </p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-xs text-purple-600 font-medium">
                          Type
                        </p>
                        <p className="text-sm font-bold text-purple-800 capitalize">
                          {donation.foodType}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-green-600 font-medium">
                          Quantity
                        </p>
                        <p className="text-sm font-bold text-green-800">
                          {donation.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-white border-2 border-green-600 text-green-600 py-2.5 px-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md">
                        View Details
                      </button>
                      <button className="flex-1 bg-linear-to-r from-green-400 to-green-600 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Accept Pickup
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Pickups Tab */}
          {activeTab === "mypickups" && (
            <div className="p-4 space-y-4">
              {myPickups.map((pickup) => (
                <div
                  key={pickup.id}
                  className="bg-linear-to-br from-white to-gray-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {pickup.foodName}
                      </h3>
                      <p className="text-gray-600 text-sm flex items-center mb-1">
                        <User className="w-4 h-4 mr-1 text-orange-500" />
                        {pickup.donor}
                      </p>
                      <p className="text-gray-500 text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Accepted {pickup.acceptedAt}
                      </p>
                    </div>
                    {pickup.status === "completed" ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Completed
                      </span>
                    ) : (
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Navigation className="w-4 h-4 mr-1" />
                        In Progress
                      </span>
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-3">
                    <p className="text-xs text-blue-600 font-medium mb-1">
                      Pickup Location
                    </p>
                    <p className="text-sm text-blue-900 font-semibold">
                      {pickup.pickupAddress}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-xs text-green-600 font-medium mb-1">
                      Delivery Location
                    </p>
                    <p className="text-sm text-green-900 font-semibold">
                      {pickup.deliveryAddress}
                    </p>
                  </div>

                  {pickup.status === "in-progress" && (
                    <button className="w-full bg-linear-to-r from-green-400 to-green-600 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      Mark as Delivered
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
