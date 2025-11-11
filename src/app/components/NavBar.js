"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                About
              </Link>
              <Link
                href="/organizations"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Organization
              </Link>
              <Link
                href="/donor/dashboard"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Donor
              </Link>
              <Link
                href="/volunteer/dashboard"
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Volunteer
              </Link>
              <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                Login
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  About
                </Link>
                <Link
                  href="/organizations"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  Organization
                </Link>
                <Link
                  href="/donor/dashboard"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  Donor
                </Link>
                <Link
                  href="/volunteer/dashboard"
                  className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  Volunteer
                </Link>
                <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg text-left">
                  Login
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
