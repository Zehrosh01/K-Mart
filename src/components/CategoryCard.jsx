import { motion } from 'framer-motion'

const CategoryCard = ({ category, index }) => {
  const IconComponent = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
    >
      <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-primary-600" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
      
      <div className="text-primary-600 text-sm font-semibold flex items-center">
        Explore
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="ml-1"
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}

export default CategoryCard
