'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Affiliate', href: '/affiliate' },
    { name: 'About', href: '#about' },
=======
import { 
  Menu, 
  X, 
  Heart, 
  User, 
  LogIn, 
  UserPlus,
  Bell,
  Settings
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Therapy', href: '#therapy' },
    { name: 'Affiliate', href: '#affiliate' },
    { name: 'Support', href: '#support' }
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-calm-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Haven</span>
            </div>
          </div>
=======
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-haven-pink rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Haven</span>
          </motion.div>
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
<<<<<<< HEAD
                className="text-gray-600 hover:text-calm-600 transition-colors duration-200 font-medium"
=======
                className="text-gray-600 hover:text-haven-pink transition-colors duration-200 font-medium"
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
              >
                {item.name}
              </a>
            ))}
          </nav>

<<<<<<< HEAD
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-calm-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="btn-primary">
=======
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-haven-pink transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-haven-pink transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">Account</span>
              </button>
              
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                  <hr className="my-2" />
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <LogIn className="w-4 h-4" />
                    Sign Out
                  </a>
                </motion.div>
              )}
            </div>

            <button className="btn-secondary">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </button>
            <button className="btn-primary">
              <UserPlus className="w-4 h-4 mr-2" />
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
<<<<<<< HEAD
              className="text-gray-600 hover:text-calm-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
              className="text-gray-600 hover:text-haven-pink transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
<<<<<<< HEAD
            <div className="flex flex-col space-y-4">
=======
            <div className="space-y-4">
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="text-gray-600 hover:text-calm-600 transition-colors duration-200 font-medium"
=======
                  className="block text-gray-600 hover:text-haven-pink transition-colors duration-200 font-medium"
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
<<<<<<< HEAD
              <div className="pt-4 border-t border-gray-200">
                <button className="text-gray-600 hover:text-calm-600 font-medium transition-colors duration-200 block mb-2">
                  Sign In
                </button>
                <button className="btn-primary w-full">
=======
              
              <hr className="my-4" />
              
              <div className="space-y-3">
                <button className="w-full btn-secondary justify-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </button>
                <button className="w-full btn-primary justify-center">
                  <UserPlus className="w-4 h-4 mr-2" />
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
} 