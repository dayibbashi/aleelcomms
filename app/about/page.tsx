'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { Target, Eye, Heart, Users } from 'lucide-react'
import {
  getCompanyData,
  getMission,
  getVision,
  getCoreValues,
} from '@/lib/data/content'

const values = [
  {
    title: 'Mission',
    description: '',
    icon: Target,
  },
  {
    title: 'Vision',
    description: '',
    icon: Eye,
  },
  {
    title: 'Core Values',
    description: '',
    icon: Heart,
  },
  {
    title: 'Our Team',
    description:
      'A diverse group of communication specialists, strategists, and creatives passionate about storytelling.',
    icon: Users,
  },
]

export default function AboutPage() {
  const companyData = getCompanyData()
  const mission = getMission()
  const vision = getVision()
  const coreValues = getCoreValues()

  // Update the values with actual data
  const updatedValues = [...values]
  updatedValues[0].description = mission
  updatedValues[1].description = vision
  updatedValues[2].description = coreValues
    .map((value) => `${value.name}: ${value.description}`)
    .join(' ')

  return (
    <div className='flex flex-col w-full'>
      {/* Hero Section */}
      <Section className='hero-gradient py-20 md:py-32'>
        <div className='w-full px-4 md:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-3xl'
          >
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
              About {companyData.name}
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              {companyData.tagline}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Company Overview */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl md:text-4xl font-bold'>Our Story</h2>
              <p className='mt-6 text-muted-foreground'>{companyData.about}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='bg-muted rounded-xl aspect-video flex items-center justify-center'
            >
              <div className='text-center'>
                <div className='text-5xl font-bold text-primary'>2010</div>
                <p className='mt-2 text-muted-foreground'>Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>Who We Are</h2>
            <p className='mt-4 text-muted-foreground'>
              Our guiding principles that shape everything we do.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {updatedValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card animateOnHover className='h-full'>
                    <div className='flex flex-col h-full'>
                      <div className='text-primary mb-4'>
                        <Icon className='h-8 w-8' />
                      </div>
                      <h3 className='text-xl font-semibold'>{value.title}</h3>
                      <p className='mt-2 text-muted-foreground flex-grow'>
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>Meet Our Team</h2>
            <p className='mt-4 text-muted-foreground'>
              A diverse group of communication specialists, strategists, and
              creatives.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className='text-center'>
                  <div className='mx-auto bg-muted rounded-full h-24 w-24 flex items-center justify-center'>
                    <div className='bg-primary rounded-full h-12 w-12' />
                  </div>
                  <h3 className='mt-4 text-xl font-semibold'>
                    Team Member {item}
                  </h3>
                  <p className='mt-2 text-muted-foreground'>Position Title</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
