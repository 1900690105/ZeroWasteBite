"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  Upload,
  MapPin,
  Clock,
  Users,
  Utensils,
  Loader,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";

export default function AddDonation() {
  const [formData, setFormData] = useState({
    foodName: "",
    foodType: "veg",
    quantity: "",
    expiryHours: "",
    expiryMinutes: "",
    address: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size should be less than 5MB",
        }));
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const detectLocation = () => {
    setIsDetectingLocation(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          setTimeout(() => {
            const mockAddress = `${latitude.toFixed(4)}, ${longitude.toFixed(
              4
            )} - Pune, Maharashtra, India`;
            setFormData((prev) => ({ ...prev, address: mockAddress }));
            setIsDetectingLocation(false);
            setErrors((prev) => ({ ...prev, address: "" }));
          }, 1500);
        },
        (error) => {
          setIsDetectingLocation(false);
          setErrors((prev) => ({
            ...prev,
            address: "Unable to detect location. Please enter manually.",
          }));
        }
      );
    } else {
      setIsDetectingLocation(false);
      setErrors((prev) => ({
        ...prev,
        address: "Geolocation is not supported by your browser",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.foodName.trim()) {
      newErrors.foodName = "Food name is required";
    }

    if (!formData.quantity || formData.quantity <= 0) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    if (!formData.expiryHours && !formData.expiryMinutes) {
      newErrors.expiry = "Please specify expiry time";
    }

    if (
      formData.expiryHours &&
      (formData.expiryHours < 0 || formData.expiryHours > 72)
    ) {
      newErrors.expiryHours = "Hours must be between 0 and 72";
    }

    if (
      formData.expiryMinutes &&
      (formData.expiryMinutes < 0 || formData.expiryMinutes > 59)
    ) {
      newErrors.expiryMinutes = "Minutes must be between 0 and 59";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Pickup address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        window.location.href = "#/donor/dashboard";
      }, 2000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Donation Posted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your donation has been posted and volunteers will be notified
            shortly.
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full animate-pulse"></div>
          <p className="text-sm text-gray-500 mt-4">
            Redirecting to dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Donation 🍛
          </h1>
          <p className="text-gray-600">
            Share details about the food you want to donate and help feed those
            in need
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <Utensils className="w-4 h-4 text-emerald-600" />
              <span>Food Name / Type *</span>
            </label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleInputChange}
              placeholder="e.g., Rice & Curry, Biryani, Fresh Vegetables"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${
                errors.foodName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.foodName && (
              <p className="mt-1 text-sm text-red-600">{errors.foodName}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Food Type *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, foodType: "veg" }))
                }
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 font-medium transition ${
                  formData.foodType === "veg"
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-2xl">🥗</span>
                <span>Vegetarian</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, foodType: "non-veg" }))
                }
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 font-medium transition ${
                  formData.foodType === "non-veg"
                    ? "bg-red-50 border-red-500 text-red-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-2xl">🍗</span>
                <span>Non-Vegetarian</span>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Quantity (Number of People it Can Serve) *</span>
            </label>
            <div className="relative">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 10"
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${
                  errors.quantity ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                people
              </div>
            </div>
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Expiry Time (Best Before) *</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  name="expiryHours"
                  value={formData.expiryHours}
                  onChange={handleInputChange}
                  placeholder="Hours"
                  min="0"
                  max="72"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${
                    errors.expiryHours ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <p className="mt-1 text-xs text-gray-500">Hours (0-72)</p>
                {errors.expiryHours && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.expiryHours}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="expiryMinutes"
                  value={formData.expiryMinutes}
                  onChange={handleInputChange}
                  placeholder="Minutes"
                  min="0"
                  max="59"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${
                    errors.expiryMinutes ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <p className="mt-1 text-xs text-gray-500">Minutes (0-59)</p>
                {errors.expiryMinutes && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.expiryMinutes}
                  </p>
                )}
              </div>
            </div>
            {errors.expiry && (
              <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Pickup Address *</span>
            </label>
            <div className="space-y-3">
              <button
                type="button"
                onClick={detectLocation}
                disabled={isDetectingLocation}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 font-medium transition disabled:opacity-50"
              >
                {isDetectingLocation ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Detecting Location...</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5" />
                    <span>Use Current Location</span>
                  </>
                )}
              </button>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter complete pickup address with landmarks"
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address}</p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
              <Upload className="w-4 h-4 text-emerald-600" />
              <span>Food Image (Optional)</span>
            </label>
            {!imagePreview ? (
              <label className="block w-full cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 hover:bg-emerald-50 transition">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, JPEG up to 5MB
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                <Image
                  src={imagePreview}
                  alt="Food preview"
                  className="w-full h-64 object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-semibold text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Posting Donation...</span>
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  <span>Post Donation</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-semibold text-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Tips for Better Donations
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Provide accurate expiry time to ensure food safety</li>
                <li>• Include clear pickup instructions in the address</li>
                <li>
                  • Upload a clear image to help volunteers identify the food
                </li>
                <li>• Specify dietary information (veg/non-veg) accurately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
