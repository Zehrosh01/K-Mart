import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const Products = () => {
  // Sample product data - replace with actual data
  const products = [
    {
      id: 1,
      name: 'Premium Water Bottles',
      description: 'High-quality insulated water bottles for wholesale',
      category: 'Drinkware',
      image: null,
    },
    {
      id: 2,
      name: 'Umbrella Collection',
      description: 'Durable umbrellas in various colors and sizes',
      category: 'Accessories',
      image: null,
    },
    {
      id: 3,
      name: 'Car Accessories',
      description: 'Essential car accessories and organizers',
      category: 'Automotive',
      image: null,
    },
    {
      id: 4,
      name: 'Night Lights',
      description: 'Energy-efficient LED night lights',
      category: 'Lighting',
      image: null,
    },
    {
      id: 5,
      name: 'Jewellery Boxes',
      description: 'Elegant storage solutions for jewelry',
      category: 'Storage',
      image: null,
    },
    {
      id: 6,
      name: 'Ladies Handbags',
      description: 'Stylish and functional handbags',
      category: 'Fashion',
      image: null,
    },
    {
      id: 7,
      name: 'Lunch Boxes',
      description: 'Leak-proof lunch containers',
      category: 'Kitchenware',
      image: null,
    },
    {
      id: 8,
      name: 'Stationery Items',
      description: 'Quality office and school supplies',
      category: 'Stationery',
      image: null,
    },
    {
      id: 9,
      name: 'Gift Items',
      description: 'Unique gift options for all occasions',
      category: 'Gifts',
      image: null,
    },
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
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of quality products for wholesale and retail
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us for custom orders and bulk inquiries
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
