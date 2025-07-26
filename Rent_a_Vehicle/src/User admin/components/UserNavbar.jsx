import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/Navbar/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const UserNavbar = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [userData, setUserData] = useState({});
  const [userImage, setUserImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Authentication
  const userId = Cookies.get("id");
  const token = Cookies.get("Token");
  const isAuthenticated = Boolean(token);

  // Navigation items
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "For You", href: "/", search: "?scroll=For_You" },
    { label: "Today Events", href: "/", search: "?scroll=Events" },
    { label: "Reviews", href: "/", search: "?scroll=Reviews" }
  ];

  // Mobile navigation items
  const mobileNavigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" }
  ];

  // Fetch user data
  const fetchUserData = async (id) => {
    if (!id) return;
    
    setIsLoading(true);
    try {
      const [userResponse, imageResponse] = await Promise.all([
        axios.get(`${app}userGet/${id}`),
        axios.get(`${app}userImage/${id}`)
      ]);

      setUserData(userResponse.data[0] || {});
      setUserImage(imageResponse.data.img);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    const cookieKeys = Object.keys(Cookies.get());
    cookieKeys.forEach(key => Cookies.remove(key));
    navigate("/login");
  };

  // Handle scroll to section
  useEffect(() => {
    const section = new URLSearchParams(location.search).get("scroll");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Fetch user data on mount
  useEffect(() => {
    if (userId && isAuthenticated) {
      fetchUserData(userId);
    }
  }, [userId, isAuthenticated]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Rentals Logo" className="h-8 w-8 object-contain" />
            <span className="text-2xl font-bold text-gray-900">Rentorent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={{ pathname: item.href, search: item.search || "" }}
                className="text-gray-700 hover:text-primary hover:border-b-2 hover:border-blue-600 pb-1 transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Shop Renter Button */}
            <Link to="/RentalForm">
              <button className="bg-primary text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm">
                Shop-Renter
              </button>
            </Link>

            {isAuthenticated ? (
              <>
                {/* Wishlist Button */}
                <Link to="/WishList">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm flex items-center space-x-2">
                    <i className="fa-regular fa-heart"></i>
                    <span>Wishlist</span>
                  </button>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
                >
                  Logout
                </button>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      {userImage ? (
                        <img
                          src={userImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <i className="fa-solid fa-user text-gray-500"></i>
                      )}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-gray-900 text-sm">
                        {userData.name || "User"}
                      </span>
                    </div>
                    <i className={`fa-solid fa-chevron-down text-gray-400 text-xs transition-transform duration-200 ${profileDropdown ? 'rotate-180' : ''}`}></i>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-medium text-gray-900">{userData.name}</p>
                        <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/userprofile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setProfileDropdown(false)}
                        >
                          <i className="fa-solid fa-user mr-3 text-gray-400"></i>
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setProfileDropdown(false)}
                        >
                          <i className="fa-solid fa-cog mr-3 text-gray-400"></i>
                          Settings
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={() => {
                            setProfileDropdown(false);
                            handleLogout();
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <i className="fa-solid fa-sign-out-alt mr-3"></i>
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-primary text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Navigation Links */}
            {mobileNavigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="px-2 space-y-3 pt-4 border-t border-gray-200">
              {!isAuthenticated ? (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-primary text-white py-3 rounded-lg transition-colors duration-200 font-medium">
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  Logout
                </button>
              )}
              
              <div className="flex space-x-2">
                <Link to="/RentalForm" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors duration-200 font-medium text-sm">
                    Shop-Renter
                  </button>
                </Link>
                
                {isAuthenticated && (
                  <Link to="/WishList" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors duration-200 font-medium text-sm flex items-center justify-center space-x-1">
                      <i className="fa-regular fa-heart"></i>
                      <span>Wishlist</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;