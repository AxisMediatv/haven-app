'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Heart, 
  Brain, 
  Leaf, 
  Sparkles, 
  Target, 
  Users, 
  Clock,
  ExternalLink,
  Play,
  Download,
  Star
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resources() {
  const categories = [
    {
      title: 'Emotional Intelligence',
      description: 'Develop self-awareness and emotional regulation skills',
      icon: Brain,
      color: 'calm',
      resources: [
        {
          title: 'Understanding Your Emotions',
          description: 'Learn to identify and process your emotional responses',
          type: 'Guide',
          duration: '15 min read',
          rating: 4.8
        },
        {
          title: 'Emotional Regulation Techniques',
          description: 'Practical strategies for managing intense emotions',
          type: 'Interactive',
          duration: '20 min exercise',
          rating: 4.9
        },
        {
          title: 'Building Self-Awareness',
          description: 'Develop deeper understanding of your emotional patterns',
          type: 'Assessment',
          duration: '10 min quiz',
          rating: 4.7
        }
      ]
    },
    {
      title: 'Emotional Wellness',
      description: 'Cultivate balance and resilience in your daily life',
      icon: Heart,
      color: 'serenity',
      resources: [
        {
          title: 'Daily Wellness Practices',
          description: 'Simple routines to maintain emotional balance',
          type: 'Routine',
          duration: '5 min daily',
          rating: 4.9
        },
        {
          title: 'Stress Management',
          description: 'Effective techniques for managing daily stressors',
          type: 'Guide',
          duration: '12 min read',
          rating: 4.6
        },
        {
          title: 'Mindfulness Basics',
          description: 'Introduction to mindfulness and present-moment awareness',
          type: 'Audio',
          duration: '8 min session',
          rating: 4.8
        }
      ]
    },
    {
      title: 'Personal Growth',
      description: 'Build resilience and develop healthy coping strategies',
      icon: Leaf,
      color: 'peace',
      resources: [
        {
          title: 'Building Resilience',
          description: 'Develop the ability to bounce back from challenges',
          type: 'Workshop',
          duration: '30 min session',
          rating: 4.7
        },
        {
          title: 'Healthy Coping Strategies',
          description: 'Replace unhealthy habits with positive alternatives',
          type: 'Guide',
          duration: '18 min read',
          rating: 4.8
        },
        {
          title: 'Goal Setting for Growth',
          description: 'Set meaningful goals for personal development',
          type: 'Interactive',
          duration: '25 min exercise',
          rating: 4.9
        }
      ]
    },
    {
      title: 'Relationship Skills',
      description: 'Improve communication and emotional connection',
      icon: Users,
      color: 'calm',
      resources: [
        {
          title: 'Effective Communication',
          description: 'Learn to express emotions clearly and respectfully',
          type: 'Guide',
          duration: '15 min read',
          rating: 4.7
        },
        {
          title: 'Empathy Development',
          description: 'Build deeper understanding of others\' emotions',
          type: 'Exercise',
          duration: '20 min practice',
          rating: 4.8
        },
        {
          title: 'Conflict Resolution',
          description: 'Navigate disagreements with emotional intelligence',
          type: 'Workshop',
          duration: '35 min session',
          rating: 4.6
        }
      ]
    }
  ]

  const featuredResources = [
    {
      title: 'Emotional Intelligence Assessment',
      description: 'Take our comprehensive assessment to understand your current emotional intelligence level',
      type: 'Assessment',
      duration: '15 min',
      rating: 4.9,
      featured: true
    },
    {
      title: 'Daily Emotional Wellness Journal',
      description: 'Track your emotional patterns and build self-awareness with guided journaling',
      type: 'Tool',
      duration: '5 min daily',
      rating: 4.8,
      featured: true
    },
    {
      title: 'Mindfulness Meditation Series',
      description: 'A 7-day series to develop mindfulness and emotional regulation skills',
      type: 'Audio Series',
      duration: '10 min daily',
      rating: 4.9,
      featured: true
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'calm':
        return 'bg-calm-100 text-calm-600'
      case 'serenity':
        return 'bg-serenity-100 text-serenity-600'
      case 'peace':
        return 'bg-peace-100 text-peace-600'
      default:
        return 'bg-calm-100 text-calm-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="calm-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Emotional Wellness Resources
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Access tools, guides, and exercises to support your emotional intelligence journey 
              and build lasting emotional wellness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600">
              Start with these popular tools and guides
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-calm-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-calm-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-calm-600">{resource.type}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <button className="bg-calm-600 hover:bg-calm-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Access
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find resources tailored to your specific needs
            </p>
          </div>
          
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (resourceIndex * 0.1) }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-calm-600 bg-calm-100 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{resource.rating}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{resource.duration}</span>
                        </div>
                        <button className="text-calm-600 hover:text-calm-700 text-sm font-medium transition-colors duration-200">
                          Start →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who have improved their emotional intelligence with our resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Browse All Resources
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 