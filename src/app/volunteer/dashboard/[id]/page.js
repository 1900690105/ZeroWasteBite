"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  MapPin,
  User,
  Phone,
  Clock,
  Package,
  AlertCircle,
  CheckCircle,
  XCircle,
  Navigation,
  ImageIcon,
  Calendar,
  Utensils,
} from "lucide-react";
import Image from "next/image";

const DonationDetails = () => {
  const [status, setStatus] = useState("available"); // available, accepted, delivered
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Mock donation data
  const donation = {
    id: "DON123456",
    foodName: "Fresh Vegetable Curry & Rice",
    quantity: "5 meals",
    foodType: "Vegetarian",
    description:
      "Freshly prepared vegetable curry with steamed rice, including dal and mixed vegetables. Prepared with hygiene standards maintained.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    donor: {
      name: "Green Valley Restaurant",
      phone: "+91 98765 43210",
      rating: 4.8,
      totalDonations: 45,
    },
    pickup: {
      address: "123 MG Road, Shivajinagar, Pune, Maharashtra 411005",
      landmark: "Near ABC Mall, opposite to XYZ Bank",
      lat: 18.5204,
      lng: 73.8567,
    },
    delivery: {
      address: "Hope Foundation, Camp Area, Pune",
      contact: "+91 98765 12345",
    },
    expiryTime: "2024-11-11T20:00:00",
    createdAt: "2024-11-11T16:30:00",
    urgency: "high",
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusConfig = () => {
    switch (status) {
      case "available":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-300",
          icon: <Package className="w-5 h-5" />,
          label: "Available",
        };
      case "accepted":
        return {
          bg: "bg-orange-100",
          text: "text-orange-700",
          border: "border-orange-300",
          icon: <Navigation className="w-5 h-5" />,
          label: "In Progress",
        };
      case "delivered":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          border: "border-green-300",
          icon: <CheckCircle className="w-5 h-5" />,
          label: "Delivered",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-300",
          icon: <Package className="w-5 h-5" />,
          label: "Unknown",
        };
    }
  };

  const statusConfig = getStatusConfig();

  const handleAccept = () => {
    setStatus("accepted");
  };

  const handleMarkDelivered = () => {
    setStatus("delivered");
  };

  const handleCancel = () => {
    setShowCancelModal(false);
    setStatus("available");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-300">
              <ArrowLeft className="w-6 h-6" />
              <span className="font-semibold">Back to Dashboard</span>
            </button>
            <span className="text-sm text-gray-500 font-medium">
              ID: {donation.id}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status & Timer Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <span
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border} font-semibold`}
                  >
                    {statusConfig.icon}
                    <span>{statusConfig.label}</span>
                  </span>
                </div>
                <div
                  className={`${
                    timeLeft < 3600
                      ? "bg-red-50 border-red-300"
                      : "bg-orange-50 border-orange-300"
                  } border-2 px-6 py-3 rounded-xl`}
                >
                  <div className="flex items-center space-x-2">
                    <Clock
                      className={`w-5 h-5 ${
                        timeLeft < 3600 ? "text-red-600" : "text-orange-600"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-xs font-medium ${
                          timeLeft < 3600 ? "text-red-600" : "text-orange-600"
                        }`}
                      >
                        Time Remaining
                      </p>
                      <p
                        className={`text-2xl font-bold ${
                          timeLeft < 3600 ? "text-red-700" : "text-orange-700"
                        }`}
                      >
                        {formatTime(timeLeft)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Details Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-64 sm:h-80 bg-linear-to-br from-green-100 to-green-200">
                <Image
                  src={donation.image}
                  alt={donation.foodName}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center">
                  <ImageIcon className="w-20 h-20 text-green-600 opacity-50" />
                </div>
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-700">
                    📸 Food Image
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  {donation.foodName}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-2 mb-1">
                      <Package className="w-5 h-5 text-green-600" />
                      <p className="text-xs text-green-600 font-medium">
                        Quantity
                      </p>
                    </div>
                    <p className="text-lg font-bold text-green-800">
                      {donation.quantity}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <div className="flex items-center space-x-2 mb-1">
                      <Utensils className="w-5 h-5 text-purple-600" />
                      <p className="text-xs text-purple-600 font-medium">
                        Type
                      </p>
                    </div>
                    <p className="text-lg font-bold text-purple-800">
                      {donation.foodType}
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 col-span-2 sm:col-span-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <p className="text-xs text-orange-600 font-medium">
                        Urgency
                      </p>
                    </div>
                    <p className="text-lg font-bold text-orange-800 capitalize">
                      {donation.urgency}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {donation.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pickup Location Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-linear-to-r from-green-400 to-green-600 p-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Pickup Location
                </h2>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-linear-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold">
                      Interactive Map
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Lat: {donation.pickup.lat}, Lng: {donation.pickup.lng}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-4">
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    Address
                  </p>
                  <p className="text-gray-800 font-semibold">
                    {donation.pickup.address}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {donation.pickup.landmark}
                  </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donor Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-linear-to-br from-orange-400 to-orange-600 p-3 rounded-full">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Donor Information</h3>
                  <p className="text-sm text-gray-600">Verified Donor</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-xs text-gray-600 font-medium mb-1">Name</p>
                  <p className="text-gray-800 font-bold">
                    {donation.donor.name}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-xs text-gray-600 font-medium mb-1">
                    Contact
                  </p>
                  <a
                    href={`tel:${donation.donor.phone}`}
                    className="text-green-600 font-bold hover:underline flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {donation.donor.phone}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-xs text-yellow-600 font-medium">
                      Rating
                    </p>
                    <p className="text-lg font-bold text-yellow-700">
                      ⭐ {donation.donor.rating}
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                    <p className="text-xs text-green-600 font-medium">
                      Donations
                    </p>
                    <p className="text-lg font-bold text-green-700">
                      {donation.donor.totalDonations}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Info Card */}
            {status === "accepted" && (
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 border-2 border-green-300">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-green-600" />
                  Delivery Details
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Destination
                    </p>
                    <p className="text-gray-800 font-semibold text-sm">
                      {donation.delivery.address}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      Contact
                    </p>
                    <a
                      href={`tel:${donation.delivery.contact}`}
                      className="text-green-600 font-bold text-sm hover:underline flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {donation.delivery.contact}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                {status === "available" && (
                  <button
                    onClick={handleAccept}
                    className="w-full bg-linear-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Accept Donation
                  </button>
                )}

                {status === "accepted" && (
                  <button
                    onClick={handleMarkDelivered}
                    className="w-full bg-linear-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mark as Delivered</span>
                  </button>
                )}

                {status === "delivered" && (
                  <div className="bg-green-50 border-2 border-green-300 text-green-700 py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Delivery Complete!</span>
                  </div>
                )}

                {status !== "delivered" && (
                  <button
                    onClick={() => setShowCancelModal(true)}
                    className="w-full bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 py-3 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Cancel</span>
                  </button>
                )}
              </div>
            </div>

            {/* Metadata Card */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">Timeline</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Posted</p>
                    <p className="text-gray-800 font-semibold">
                      Nov 11, 2024 - 4:30 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-gray-600">Expires</p>
                    <p className="text-gray-800 font-semibold">
                      Nov 11, 2024 - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              Cancel Pickup?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to cancel this pickup? This action cannot be
              undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Go Back
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationDetails;
