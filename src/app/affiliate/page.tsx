'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  DollarSign, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Share2,
  ExternalLink,
  Check,
  Star,
  Heart,
  Target,
  Zap,
  Download
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Affiliate() {
  const benefits = [
    {
      icon: DollarSign,
      title: '30% Commission Rate',
      description: 'Earn 30% on every subscription you refer',
      color: 'calm'
    },
    {
      icon: TrendingUp,
      title: 'Unlimited Earnings',
      description: 'No cap on your earning potential',
      color: 'serenity'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track your performance and earnings',
      color: 'peace'
    },
    {
      icon: Share2,
      title: 'Marketing Materials',
      description: 'Access to professional promotional content',
      color: 'calm'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with other affiliates',
      color: 'serenity'
    },
    {
      icon: Award,
      title: 'Performance Bonuses',
      description: 'Extra rewards for top performers',
      color: 'peace'
    }
  ]

  const commissionTiers = [
    {
      tier: 'Starter',
      commission: '30%',
      requirement: '0-10 referrals',
      bonus: 'None',
      color: 'calm'
    },
    {
      tier: 'Silver',
      commission: '35%',
      requirement: '11-50 referrals',
      bonus: '$50 bonus',
      color: 'serenity'
    },
    {
      tier: 'Gold',
      commission: '40%',
      requirement: '51-100 referrals',
      bonus: '$100 bonus',
      color: 'peace'
    },
    {
      tier: 'Platinum',
      commission: '45%',
      requirement: '100+ referrals',
      bonus: '$200 bonus',
      color: 'calm'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wellness Coach',
      earnings: '$2,400',
      period: 'last 3 months',
      content: 'Haven\'s affiliate program has been incredible. I\'ve been able to help my clients access emotional wellness support while earning a great income.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Therapist',
      earnings: '$1,800',
      period: 'last 3 months',
      content: 'The marketing materials are professional and the commission structure is fair. It\'s been a great way to supplement my practice.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Life Coach',
      earnings: '$3,200',
      period: 'last 3 months',
      content: 'I love that I\'m helping people improve their emotional intelligence while earning. The platform is easy to use and support is excellent.',
      rating: 5
    }
  ]

  const marketingTools = [
    {
      title: 'Social Media Templates',
      description: 'Ready-to-use posts for Instagram, Facebook, and LinkedIn',
      type: 'Templates',
      downloads: '1.2k'
    },
    {
      title: 'Email Campaigns',
      description: 'Professional email sequences for your audience',
      type: 'Campaigns',
      downloads: '856'
    },
    {
      title: 'Video Content',
      description: 'Short videos explaining emotional wellness benefits',
      type: 'Videos',
      downloads: '2.1k'
    },
    {
      title: 'Webinar Slides',
      description: 'Presentation templates for educational webinars',
      type: 'Presentations',
      downloads: '634'
    },
    {
      title: 'Case Studies',
      description: 'Success stories and testimonials to share',
      type: 'Content',
      downloads: '1.5k'
    },
    {
      title: 'Landing Pages',
      description: 'Custom landing pages for your referrals',
      type: 'Pages',
      downloads: '723'
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
      <section className="serenity-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Join Our Affiliate Program
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Help others access emotional wellness support while earning up to 45% commission. 
              Join thousands of successful affiliates helping people improve their emotional intelligence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="btn-primary flex items-center gap-2">
                <Award className="w-5 h-5" />
                Become an Affiliate
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                View Analytics
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Our Affiliate Program?
            </h2>
            <p className="text-lg text-gray-600">
              Earn while helping others improve their emotional wellness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(benefit.color)}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commission Tiers
            </h2>
            <p className="text-lg text-gray-600">
              Earn more as you help more people
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card text-center hover:shadow-lg transition-shadow duration-300 ${
                  tier.tier === 'Gold' ? 'ring-2 ring-calm-500 scale-105' : ''
                }`}
              >
                {tier.tier === 'Gold' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-calm-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(tier.color)}`}>
                  <Award className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tier.tier}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-calm-600 mb-1">
                    {tier.commission}
                  </div>
                  <div className="text-sm text-gray-600">
                    Commission Rate
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{tier.requirement}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600">{tier.bonus}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our top-performing affiliates
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-calm-600">{testimonial.earnings}</div>
                    <div className="text-xs text-gray-500">{testimonial.period}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Marketing Tools & Resources
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed as an affiliate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-calm-600 bg-calm-100 px-2 py-1 rounded">
                    {tool.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Download className="w-3 h-3" />
                    <span>{tool.downloads}</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {tool.description}
                </p>
                
                <button className="text-calm-600 hover:text-calm-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1">
                  Download
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-calm-100 mb-8">
              Join our affiliate program and start helping others while earning great commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-calm-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Apply Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-calm-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 