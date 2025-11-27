import { motion } from 'framer-motion'
import CategoryCard from '../components/CategoryCard'
import { 
  Package, 
  Shirt, 
  Home, 
  Laptop, 
  Utensils, 
  Gift,
  ShoppingBag,
  Sparkles,
  Car
} from 'lucide-react'

const Menu = () => {
  const categories = [
    {
      name: 'Drinkware & Bottles',
      description: 'Water bottles, flasks, and drinkware items',
      icon: Package,
    },
    {
      name: 'Fashion Accessories',
      description: 'Bags, wallets, and fashion items',
      icon: ShoppingBag,
    },
    {
      name: 'Home & Living',
      description: 'Decorative items and home essentials',
      icon: Home,
    },
    {
      name: 'Electronics & Gadgets',
      description: 'Tech accessories and gadgets',
      icon: Laptop,
    },
    {
      name: 'Kitchenware',
      description: 'Kitchen tools and storage solutions',
      icon: Utensils,
    },
    {
      name: 'Gift Items',
      description: 'Special gifts for all occasions',
      icon: Gift,
    },
    {
      name: 'Automotive',
      description: 'Car accessories and organizers',
      icon: Car,
    },
    {
      name: 'Personal Care',
      description: 'Beauty and personal care products',
      icon: Sparkles,
    },
    {
      name: 'Clothing',
      description: 'Apparel and textile products',
      icon: Shirt,
    },
  ]

  const services = [
    'Wholesale Supply',
    'Retail Services',
    'Bulk Orders',
    'Custom Packaging',
    'Fast Delivery',
    'Quality Assurance',
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our diverse range of product categories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our <span className="text-gradient">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                <span className="font-semibold text-gray-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
