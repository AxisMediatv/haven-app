'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Shield, 
  MessageCircle, 
  Users, 
  Zap,
  Check,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CrisisDetection from '@/components/CrisisDetection'
import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  const features = [
    {
      icon: Brain,
      title: 'Emotional Intelligence',
      description: 'Develop self-awareness and emotional regulation skills through AI-powered insights.'
    },
    {
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Track your mood patterns and receive personalized wellness recommendations.'
    },
    {
      icon: Shield,
      title: 'Crisis Detection',
      description: 'Advanced AI monitoring to detect and respond to mental health crises.'
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Always available emotional support and guidance when you need it most.'
    }
  ]

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic emotional intelligence assessment',
        'Daily mood tracking',
        'Limited chat sessions',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Advanced emotional intelligence tools',
        'Unlimited chat sessions',
        'Personalized wellness plans',
        'Crisis detection system',
        'Priority support',
        'Progress analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Team management',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-haven-50 to-haven-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Your Personal
              <span className="text-gradient block">Emotional Intelligence</span>
              Companion
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Develop emotional intelligence, track your mental wellness, and get 24/7 AI-powered support. 
              Your journey to better mental health starts here.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => setShowChat(true)}
                className="btn-primary flex items-center gap-2"
              >
                Start Chat
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Haven?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform helps you develop emotional intelligence and maintain mental wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-haven-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-haven-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Detection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CrisisDetection />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your journey to better emotional intelligence today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${plan.popular ? 'ring-2 ring-haven-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-haven-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-haven-600 hover:bg-haven-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Emotional Intelligence?
          </h2>
          <p className="text-xl text-haven-100 mb-8">
            Join thousands of users who have improved their mental wellness with Haven.
          </p>
          <button 
            onClick={() => setShowChat(true)}
            className="bg-white text-haven-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />

      {/* Chat Interface Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ChatInterface />
          </div>
        </div>
      )}
    </div>
  )
} 