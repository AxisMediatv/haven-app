'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Advanced Crisis Detection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Safety Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
    </div>
  )
} 