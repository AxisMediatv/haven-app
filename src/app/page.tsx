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
  Play,
  Phone,
  UserCheck,
  DollarSign,
  Clock,
  Users as UsersIcon,
  Award,
  ExternalLink,
  Leaf,
  Sparkles,
  Target
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
      description: 'Develop self-awareness and emotional regulation skills through AI-powered insights and personalized guidance.',
    },
    {
      icon: Heart,
      title: 'Emotional Wellness',
      description: 'Track your emotional patterns and receive personalized wellness recommendations for better emotional balance.',
    },
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Advanced AI monitoring to detect emotional distress and provide immediate support with 988 integration.',
    },
    {
      icon: MessageCircle,
      title: '24/7 Companion',
      description: 'Always available emotional support and guidance when you need it most.',
    },
    {
      icon: Leaf,
      title: 'Personal Growth',
      description: 'Build resilience, develop healthy coping strategies, and cultivate emotional strength.',
    },
    {
      icon: Sparkles,
      title: 'Affiliate Program',
      description: 'Earn 30% commissions by helping others access emotional wellness support.',
    }
  ]

  const plans = [
    {
      name: 'Starter',
      price: '$4.99',
      period: 'per month',
      hours: '5 hours',
      features: [
        'Basic emotional intelligence assessment',
        'Daily emotional wellness tracking',
        '5 hours of AI chat sessions',
        'Crisis detection system',
        'Community support',
        'Mobile-responsive design'
      ],
      popular: false,
      color: 'calm'
    },
    {
      name: 'Regular',
      price: '$19.99',
      period: 'per month',
      hours: '25 hours',
      features: [
        'Advanced emotional intelligence tools',
        'Unlimited emotional wellness tracking',
        '25 hours of AI chat sessions',
        'Crisis detection with 988 integration',
        'Professional therapy referrals',
        'Progress analytics',
        'Priority support',
        'Session-based message history'
      ],
      popular: true,
      color: 'serenity'
    },
    {
      name: 'Family',
      price: '$39.99',
      period: 'per month',
      hours: '60 hours',
      users: '4 users',
      features: [
        'Everything in Regular',
        '60 hours of AI chat sessions',
        'Up to 4 family members',
        'Family wellness dashboard',
        'Individual progress tracking',
        'Family therapy referrals',
        'Dedicated family support',
        'Advanced crisis monitoring'
      ],
      popular: false,
      color: 'peace'
    }
  ]

  const affiliateBenefits = [
    'Earn 30% commission on referrals',
    'Track your earnings in real-time',
    'Access to marketing materials',
    'Professional affiliate dashboard',
    'Monthly payout system',
    'Support for your community'
  ]

  const wellnessResources = [
    'Emotional intelligence exercises',
    'Mindfulness and meditation guides',
    'Stress management techniques',
    'Relationship building skills',
    'Self-compassion practices',
    'Personal growth workshops'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden calm-gradient py-20">
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
              Develop emotional intelligence, build emotional resilience, and cultivate personal growth 
              with AI-powered support. Your journey to emotional wellness starts here.
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
              Our AI-powered platform helps you develop emotional intelligence and build emotional resilience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-calm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-calm-600" />
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
              Start your journey to better emotional intelligence with flexible plans designed for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative hover:shadow-lg transition-shadow duration-300 ${
                  plan.popular ? 'ring-2 ring-calm-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-calm-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{plan.hours} of chat sessions</span>
                  </div>
                  {plan.users && (
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <UsersIcon className="w-4 h-4" />
                      <span>Up to {plan.users}</span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-calm-600 hover:bg-calm-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Start Free Trial
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="py-20 serenity-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Affiliate Program
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help others access emotional wellness support while earning 30% commissions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Earn While Helping Others
              </h3>
              <div className="space-y-4">
                {affiliateBenefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-serenity-600 hover:bg-serenity-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2">
                Become an Affiliate
                <ExternalLink className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-serenity-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-serenity-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Affiliate Dashboard
                </h4>
                <p className="text-gray-600 mb-6">
                  Track your referrals, earnings, and impact in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-serenity-600">30%</div>
                    <div className="text-sm text-gray-600">Commission Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-serenity-600">$0</div>
                    <div className="text-sm text-gray-600">Startup Cost</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emotional Wellness Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access tools and resources to support your emotional intelligence journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {wellnessResources.map((resource, index) => (
                  <div key={resource} className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-calm-500 flex-shrink-0" />
                    <span className="text-gray-700">{resource}</span>
                  </div>
                ))}
              </div>
              <button className="bg-calm-600 hover:bg-calm-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2">
                Explore Resources
                <ExternalLink className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-calm-50 to-serenity-50 rounded-xl p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-calm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-calm-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Personal Growth Tools
                </h4>
                <p className="text-gray-600 mb-4">
                  Build emotional resilience and develop healthy coping strategies.
                </p>
                <div className="bg-calm-50 border border-calm-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-calm-700 mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold">Daily Wellness Practices</span>
                  </div>
                  <p className="text-sm text-calm-600">
                    Access guided exercises for emotional intelligence development
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Emotional Intelligence?
          </h2>
          <p className="text-xl text-calm-100 mb-8">
            Join thousands of users who have improved their emotional wellness with Haven.
          </p>
          <button 
            onClick={() => setShowChat(true)}
            className="bg-white text-calm-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
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