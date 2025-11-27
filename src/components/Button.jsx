import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const MotionComponent = motion.div

  const content = (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props}
    >
      {children}
    </MotionComponent>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  }
  
  return <button onClick={onClick}>{content}</button>
}

export default Button
