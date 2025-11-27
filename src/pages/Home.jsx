import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Products' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ]

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-200  to-accent-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Khatija Mart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing quality products and excellent service to our customers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-primary-500 to-accent-50 rounded-2xl"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-primary-200  to-accent-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Khatija Mart
              </h2>
              <p className="text-gray-600 mb-4">
                Khatija Mart is your trusted partner for wholesale and retail products. We specialize in providing high-quality goods at competitive prices, serving both businesses and individual customers.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience in the industry, we've built a reputation for reliability, quality, and excellent customer service. Our extensive product range ensures you'll find everything you need under one roof.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/products"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Explore Our Products
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">🏪</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
