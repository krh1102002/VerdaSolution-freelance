import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: null,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.target.name === "file") {
      setFormData({
        ...formData,
        file: e.target.files[0] || null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      await axios.post("http://localhost:5000/api/contact", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStatus("success");
      setStatusMessage(
        "Thank you for your message! We will get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        file: null,
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly."
      );
    }
  };

  const offices = [
    {
      country: "India",
      city: "Mumbai, Maharashtra",
      phone: "+91 9167878003",
      icon: MapPin,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      country: "United States",
      city: "Lady Lake, Fl",
      phone: "+1 (832) 282-0459",
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      country: "United Kingdom",
      city: "Readings, UK",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Ready to start your clinical research journey? Get in touch with
              our global team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-green-800">{statusMessage}</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <p className="text-red-800">{statusMessage}</p>
                  </motion.div>
                )}

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="clinical-trials">
                          Clinical Trial Services
                        </option>
                        <option value="regulatory">Regulatory Affairs</option>
                        <option value="data-management">Data Management</option>
                        <option value="pharmacovigilance">
                          Pharmacovigilance
                        </option>
                        <option value="partnership">
                          Partnership Opportunities
                        </option>
                        <option value="other">Other Inquiry</option>
                      </motion.select>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-vertical"
                      placeholder="Please describe your project requirements, therapeutic area of interest, or any specific questions you have..."
                    />
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Attach Document (Optional)
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl flex items-center justify-center group"
                  >
                    {status === "loading" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our global team is ready to discuss your clinical research
                    needs and provide tailored solutions for your projects.
                  </p>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div 
                      className="flex items-center group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      </motion.div>
                      <span className="text-gray-700">
                        info@verdasolutions.com
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Global Offices
                  </h4>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {offices.map((office, index) => {
                      const IconComponent = office.icon;
                      return (
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
                          className={`p-4 ${office.bgColor} rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer`}
                        >
                          <div className="flex items-start">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent
                                className={`w-5 h-5 ${office.color} mr-3 mt-0.5`}
                              />
                            </motion.div>
                            <div>
                              <h5 className="font-semibold text-gray-900">
                                {office.country}
                              </h5>
                              <p className="text-sm text-gray-600">
                                {office.city}
                              </p>
                              <p className="text-sm font-medium text-gray-800">
                                {office.phone}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
