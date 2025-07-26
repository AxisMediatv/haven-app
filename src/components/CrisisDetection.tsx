'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import { Shield, AlertTriangle, Phone, MessageCircle, Heart } from 'lucide-react'

export default function CrisisDetection() {
  const [isMonitoring, setIsMonitoring] = useState(false)

  const crisisResources = [
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '988',
      description: '24/7 crisis support and suicide prevention',
      icon: Phone
    },
    {
      name: 'Crisis Text Line',
      text: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis counseling via text',
      icon: MessageCircle
    },
    {
      name: 'Emergency Services',
      phone: '911',
      description: 'For immediate life-threatening emergencies',
      icon: AlertTriangle
    }
  ]

=======
import { 
  Shield, 
  Phone, 
  AlertTriangle, 
  Heart, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function CrisisDetection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const crisisFeatures = [
    {
      icon: Shield,
      title: 'Real-time Monitoring',
      description: 'Advanced AI continuously analyzes conversations to detect crisis indicators and provide immediate support.'
    },
    {
      icon: Phone,
      title: '988 Integration',
      description: 'Direct connection to the National Suicide Prevention Lifeline for immediate crisis intervention.'
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Alerts',
      description: 'Instant notifications when crisis indicators are detected, ensuring timely intervention.'
    },
    {
      icon: Users,
      title: 'Professional Support',
      description: 'Connect users with licensed mental health professionals and crisis counselors.'
    }
  ]

  const crisisResources = [
    {
      name: '988 Suicide & Crisis Lifeline',
      description: 'Call or text 988 for immediate support',
      phone: '988',
      available: '24/7'
    },
    {
      name: 'Crisis Text Line',
      description: 'Text HOME to 741741 for crisis support',
      phone: '741741',
      available: '24/7'
    },
    {
      name: 'Emergency Services',
      description: 'Call 911 for immediate emergency assistance',
      phone: '911',
      available: '24/7'
    }
  ]

  const safetyFeatures = [
    'AI-powered crisis detection',
    'Real-time risk assessment',
    'Automatic crisis alerts',
    'Direct 988 integration',
    'Professional referral system',
    '24/7 monitoring support'
  ]

>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
<<<<<<< HEAD
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-red-600" />
=======
        <div className="w-16 h-16 bg-haven-pink rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-white" />
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Advanced Crisis Detection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
          Our AI-powered system continuously monitors your emotional state and provides 
          immediate support when you need it most. Your safety is our priority.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* AI Monitoring */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <div className="w-16 h-16 bg-calm-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-calm-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            AI-Powered Monitoring
          </h3>
          <p className="text-gray-600 mb-6">
            Our advanced AI analyzes your messages, emotional patterns, and behavior to detect 
            potential crisis situations and provide timely intervention.
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Real-time emotional analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Pattern recognition</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Immediate crisis alerts</span>
            </div>
          </div>
        </motion.div>

        {/* Crisis Resources */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Crisis Resources
          </h3>
          <p className="text-gray-600 mb-6">
            Immediate access to professional crisis support and emergency resources 
            when you need them most.
          </p>
          <div className="space-y-4">
            {crisisResources.map((resource) => (
              <div key={resource.name} className="text-left p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <resource.icon className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-gray-900">{resource.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                {resource.phone && (
                  <a
                    href={`tel:${resource.phone}`}
                    className="text-red-600 font-medium hover:text-red-700"
                  >
                    {resource.phone}
                  </a>
                )}
                {resource.text && (
                  <span className="text-red-600 font-medium">{resource.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

=======
          Our AI-powered system monitors conversations in real-time to detect crisis indicators 
          and provide immediate support when needed.
        </p>
      </motion.div>

      {/* Crisis Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-red-800">
            Crisis Support Available 24/7
          </h3>
        </div>
        <p className="text-red-700 mb-4">
          If you or someone you know is in crisis, help is available immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:988"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call 988 Now
          </a>
          <button className="bg-white hover:bg-gray-50 text-red-600 font-medium py-3 px-6 rounded-lg border border-red-200 transition-colors duration-200 flex items-center justify-center gap-2">
            Text HOME to 741741
          </button>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {crisisFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card text-center"
          >
            <div className="w-12 h-12 bg-haven-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-6 h-6 text-haven-pink" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Crisis Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Crisis Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {crisisResources.map((resource, index) => (
            <div key={resource.name} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-haven-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-haven-pink" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                {resource.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {resource.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{resource.available}</span>
              </div>
              <a
                href={`tel:${resource.phone}`}
                className="inline-block mt-3 bg-haven-pink hover:bg-haven-pink-dark text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                Call {resource.phone}
              </a>
            </div>
          ))}
        </div>
      </motion.div>

>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
      {/* Safety Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
        className="bg-gradient-to-r from-calm-50 to-red-50 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Your Safety is Our Priority
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-calm-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-calm-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Privacy First</h4>
            <p className="text-gray-600 text-sm">
              All crisis detection is handled with complete privacy and confidentiality.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Immediate Response</h4>
            <p className="text-gray-600 text-sm">
              Instant alerts and support when crisis situations are detected.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Professional Support</h4>
            <p className="text-gray-600 text-sm">
              Direct connection to trained crisis counselors and mental health professionals.
            </p>
          </div>
        </div>
      </motion.div>
=======
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Safety Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {safetyFeatures.map((feature, index) => (
            <div key={feature} className="flex items-center gap-3 p-3 bg-haven-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-haven-pink flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Learn More Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-haven-50 to-haven-100 rounded-xl p-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-haven-pink" />
          <h3 className="text-xl font-semibold text-gray-900">
            Your Safety is Our Priority
          </h3>
        </div>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Haven's crisis detection system is designed to provide immediate support when you need it most. 
          Our AI monitors conversations for crisis indicators and connects you with professional help.
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-haven-pink hover:bg-haven-pink-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
        >
          Learn More About Crisis Detection
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Expanded Information */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-8 bg-white rounded-xl p-6 border border-gray-200"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            How Crisis Detection Works
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h5 className="font-medium text-gray-900 mb-2">AI Monitoring</h5>
              <p className="text-sm text-gray-600">
                Our advanced AI analyzes conversation patterns, keywords, and emotional indicators 
                to identify potential crisis situations in real-time.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Immediate Response</h5>
              <p className="text-sm text-gray-600">
                When crisis indicators are detected, the system immediately provides resources, 
                support options, and direct connections to professional help.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Professional Integration</h5>
              <p className="text-sm text-gray-600">
                Seamless integration with licensed mental health professionals, crisis counselors, 
                and emergency services when needed.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-2">Privacy & Safety</h5>
              <p className="text-sm text-gray-600">
                All crisis detection is conducted with the highest standards of privacy and safety, 
                ensuring your information is protected while providing necessary support.
              </p>
            </div>
          </div>
        </motion.div>
      )}
>>>>>>> fe3bc02c87b27ff52437d2d312cc779a164adc8b
    </div>
  )
} 