import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Microscope,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
                src="/WhatsApp Image 2025-08-27 at 09.21.40_0c41ec94.png"
                alt="Verda Solutions Logo"
                className="h-14 w-auto"
              />
            </motion.div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Accelerating innovation through ethical, efficient, and
              patient-centric clinical research. We are your trusted partner in
              advancing medical knowledge and elevating patient care.
            </p>
            <motion.div 
              className="flex space-x-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-blue-900/30"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-blue-900/30"
              >
                <Twitter size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.li
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:underline"
                  >
                  Home
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:underline"
                  >
                  About Us
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:underline"
                  >
                  Services
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/therapeutic-areas"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:underline"
                  >
                  Therapeutic Areas
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:underline"
                  >
                  Contact
                  </Link>
                </motion.div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Global Presence</h3>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">India</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra</p>
                  <p className="text-gray-300 text-sm">+91 9167878003</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">US</p>
                  <p className="text-gray-300 text-sm">Lady Lake, Fl</p>
                  <p className="text-gray-300 text-sm">+1 (832) 282-0459</p>
                  <motion.div 
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                    </motion.div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">EU</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400">
            © 2025 Verda Solutions. All rights reserved. | GCP Compliant
            Research Organization
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
