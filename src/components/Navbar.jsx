// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, ShoppingBag } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setIsOpen(false)
//   }, [location])

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Products', path: '/products' },
//     { name: 'Menu', path: '/menu' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg' 
//           : 'bg-white/80 backdrop-blur-sm'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <motion.div
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-primary-600 to-accent-500 p-2 rounded-lg"
//             >
//               <ShoppingBag className="w-6 h-6 text-white" />
//             </motion.div>
//             <span className="text-xl md:text-2xl font-bold text-black">
//               Khatija Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
//               >
//                 {link.name}
//                 {location.pathname === link.path && (
//                   <motion.div
//                     layoutId="navbar-indicator"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
//                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white border-t border-gray-200"
//           >
//             <div className="px-4 py-4 space-y-2">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.path}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link
//                     to={link.path}
//                     className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
//                       location.pathname === link.path
//                         ? 'bg-primary-50 text-primary-600'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }

// export default Navbar


import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, ChevronDown, Package, Shirt, Home as HomeIcon, Gift } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProductDropdown, setShowProductDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowProductDropdown(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ]

  // Product categories for dropdown
  const productCategories = [
    { name: 'Drinkware & Bottles', icon: Package, path: '/products?category=drinkware' },
    { name: 'Fashion Accessories', icon: ShoppingBag, path: '/products?category=fashion' },
    { name: 'Home & Living', icon: HomeIcon, path: '/products?category=home' },
    { name: 'Gift Items', icon: Gift, path: '/products?category=gifts' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-300 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-primary-200 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-600 to-accent-200 p-2 rounded-lg"
            >
              <ShoppingBag className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-gray-600">
              Khatija Mart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setShowProductDropdown(true)}
                    onMouseLeave={() => setShowProductDropdown(false)}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${showProductDropdown ? 'rotate-180' : ''}`} />
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {showProductDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {productCategories.map((category, index) => (
                              <Link
                                key={index}
                                to={category.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group"
                              >
                                <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors">
                                  <category.icon className="w-5 h-5 text-primary-600" />
                                </div>
                                <span className="text-gray-700 font-medium group-hover:text-primary-600">
                                  {category.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 p-3 bg-gray-50">
                            <Link
                              to="/products"
                              className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.path}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setShowProductDropdown(!showProductDropdown)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${showProductDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {showProductDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {productCategories.map((category, idx) => (
                                <Link
                                  key={idx}
                                  to={category.path}
                                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                                >
                                  <category.icon className="w-4 h-4" />
                                  {category.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

