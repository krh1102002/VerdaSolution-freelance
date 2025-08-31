import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Target,
  FileText,
  Database,
  Shield,
  Users,
  CheckCircle,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeTab, setActiveTab] = useState("clinical-trial");

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
  const serviceCategories = [
    {
      id: "clinical-trial",
      title: "End-to-End Clinical Trial Management",
      icon: "🧪",
      description:
        "Comprehensive clinical trial services from Phase I to IV with complete regulatory and operational support",
      color: "blue",
      services: [
        "Phase I–IV Trial Execution",
        "Site Selection & Monitoring",
        "Regulatory Submissions",
        "Data Management & Biostatistics",
        "Medical Writing & Safety Reporting",
        "Registry Studies",
        "BA/BE studies",
      ],
    },
    {
      id: "additional",
      title: "Additional Services",
      icon: "🎯",
      description:
        "Specialized consulting and support services tailored to your unique research requirements",
      color: "green",
      services: [
        "Phase Specific Consultancy",
        "Project Management / Program Management Consultancy",
        "Feasibility Studies",
        "Protocol Development",
        "Pharmacovigilance",
        "Quality Assurance Audits",
      ],
    },
  ];

  const activeCategory = serviceCategories.find((cat) => cat.id === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 123, 255, 0.9), rgba(0, 123, 255, 0.8)), url("https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
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
            <motion.div 
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2 
              }}
            >
              🧪
            </motion.div>
            <h1 className="text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive clinical research solutions designed to accelerate
              your path from discovery to market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Service Categories with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp} 
            className="text-center mb-16"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert clinical research services delivered with precision and
              excellence
            </p>
          </motion.div>

          {/* Service Category Tabs */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex bg-white rounded-lg p-2 shadow-xl">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-500 ${
                    activeTab === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Category Content */}
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`bg-gradient-to-r ${
                activeCategory.color === "blue"
                  ? "from-blue-500 to-blue-600"
                  : "from-green-500 to-green-600"
              } text-white rounded-2xl p-12 shadow-2xl`}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="text-8xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatDelay: 2 
                  }}
                >
                  {activeCategory.icon}
                </motion.div>
                <h3 className="text-4xl font-bold mb-4">
                  {activeCategory.title}
                </h3>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  {activeCategory.description}
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {activeCategory.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -40, scale: 0.8 },
                      animate: { opacity: 1, x: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/25 transition-all duration-500 cursor-pointer"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-white font-medium">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            {...fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Clinical Research Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you navigate the complexities of clinical research
              with our comprehensive service offerings and expert guidance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl inline-block"
              >
              Discuss Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
