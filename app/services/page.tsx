'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import {
  Megaphone,
  Building,
  Globe,
  Palette,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { getServices } from '@/lib/data/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Megaphone,
  Building,
  Globe,
  Palette,
  Calendar,
}

// Since the JSON doesn't have icons, we'll map them by index
const serviceIcons = ['Megaphone', 'Building', 'Globe', 'Palette', 'Calendar']

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className='flex flex-col w-full'>
      {/* Hero Section */}
      <Section className='hero-gradient py-20 md:py-32'>
        <div className='container px-4 md:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-3xl'
          >
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
              Our Services
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              Comprehensive communication solutions tailored to your unique
              needs and objectives.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => {
              const iconKey = serviceIcons[index] || 'Megaphone'
              const Icon = iconMap[iconKey] || Megaphone

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card animateOnHover className='h-full flex flex-col'>
                    <div className='text-primary mb-4'>
                      <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <Icon className='h-6 w-6' />
                      </div>
                    </div>
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                    <p className='mt-2 text-muted-foreground flex-grow'>
                      {service.description}
                    </p>
                    <Link
                      href='/contact'
                      className='mt-4 inline-flex items-center text-primary hover:underline'
                    >
                      Learn more
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Need a Custom Solution?
          </h2>
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            We combine our core services to create tailored communication
            strategies for complex challenges.
          </p>
          <div className='mt-8'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors'
            >
              Discuss Your Project
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
