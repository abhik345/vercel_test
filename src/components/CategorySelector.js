'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PropTypes from "prop-types";

export default function CategorySelector({ tabsData }) {
  const [selectedCategory, setSelectedCategory] = useState(tabsData && tabsData[0]?.id || 1051);
  const [selectedService, setSelectedService] = useState(null);
    

  const toggleService = (id) => {
    setSelectedService((prev) => (prev === id ? null : id));
  };

  const primaryCategories = tabsData?.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const spiritualServices =
    tabsData?.find((category) => category.id === selectedCategory)?.subcategories || [];
 

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {primaryCategories?.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  category.id === selectedCategory
                    ? "bg-[#FF8B00] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <motion.div>
              <motion.button className="flex items-center">
                <Check
                  className={`w-5 h-5 text-white rounded bg-[#FF8B00] scale-125
                  ${selectedService === null ? "bg-[#FF8B00]" : "hidden"}`}
                />
                <span className="text-xl font-semibold ml-3">
                  Select Your Category From Below:
                </span>
              </motion.button>
            </motion.div>

            <hr className="border-t border-gray-800" />
            <div className="space-y-3">
              {spiritualServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 4 }}
                >
                  <motion.button
                    onClick={() => toggleService(service.id)}
                    className={`w-6 h-6 rounded border flex items-center justify-center
                      ${
                        selectedService === service.id
                          ? "bg-[#FF8B00] border-[#FF8B00]"
                          : "border-gray-300 hover:border-[#FF8B00]"
                      }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {selectedService === service.id && <Check className="w-4 h-4 text-white" />}
                  </motion.button>
                  <span className="text-[#595959] font-semibold">{service.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-12 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Please Select Your Area Of
              </h2>
              <p className="text-3xl text-gray-400 font-bold">Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CategorySelector.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      subcategories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          parent_id: PropTypes.number.isRequired,
        })
      ),
    })
  ).isRequired,
};
