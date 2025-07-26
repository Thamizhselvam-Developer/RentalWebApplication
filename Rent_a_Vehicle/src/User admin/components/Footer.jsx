import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://facebook.com/rentorent",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/rentorent",
      color: "hover:bg-blue-400"
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://instagram.com/rentorent",
      color: "hover:bg-pink-600"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/company/rentorent",
      color: "hover:bg-blue-700"
    }
  ];

  // Footer sections
  const footerSections = [
    {
      title: "Account",
      links: [
        { name: "My Profile", href: "/profile" },
        { name: "Account Settings", href: "/settings" },
        { name: "Billing & Payments", href: "/billing" },
        { name: "Notifications", href: "/notifications" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Browse Rentals", href: "/browse" },
        { name: "List Property", href: "/list-property" },
        { name: "Pricing Plans", href: "/pricing" },
        { name: "Property Management", href: "/management" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Community", href: "/community" },
        { name: "Safety Guidelines", href: "/safety" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 font-main">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                RentToRent
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Connecting property owners with trusted renters. Find your perfect rental space or list your property with confidence.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:shadow-lg`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear}</span>
              <span className="font-bold text-white">RentToRent</span>
              <span>. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <i className="fas fa-shield-alt"></i>
                <span className="text-sm">Secure Platform</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <i className="fas fa-award"></i>
                <span className="text-sm">Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </footer>
  );
};

export default Footer;