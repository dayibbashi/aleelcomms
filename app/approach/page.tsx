'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { Search, Lightbulb, PenTool, Users, BarChart } from 'lucide-react'
import { getApproach } from '@/lib/data/content'

const iconMap = [Search, Lightbulb, PenTool, Users, BarChart]

export default function ApproachPage() {
  const approachSteps = getApproach()

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
              Our Approach
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              A structured, results-driven methodology to ensure every campaign
              delivers maximum impact.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Process Overview */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              The Astra Process
            </h2>
            <p className='mt-4 text-muted-foreground'>
              Our five-step approach ensures consistent, measurable results for
              every client.
            </p>
          </div>

          <div className='mt-16 relative'>
            {/* Connecting line */}
            <div className='absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block'></div>

            <div className='space-y-12'>
              {approachSteps.map((step, index) => {
                const Icon = iconMap[index] || Search
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className='relative'
                  >
                    <div
                      className={`md:flex items-center ${
                        isEven ? '' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Step number and icon */}
                      <div className='md:w-1/2 flex justify-center md:justify-end md:pr-8'>
                        <div className='relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground'>
                          <span className='text-xl font-bold'>{index + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className='mt-4 md:mt-0 md:w-1/2 md:pl-8'>
                        <Card className='md:text-left'>
                          <div className='flex items-center'>
                            <Icon className='h-6 w-6 text-primary' />
                            <h3 className='ml-2 text-xl font-semibold'>
                              {step.split(':')[0]}
                            </h3>
                          </div>
                          <p className='mt-4 text-muted-foreground'>
                            {step.split(': ')[1]}
                          </p>
                        </Card>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Ready to Get Started?
          </h2>
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            Let&apos;s discuss how our approach can help achieve your
            communication goals.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className='mt-8'
          >
            <Card className='inline-block p-8 max-w-2xl'>
              <p className='text-muted-foreground'>
                &quot;The Astra Process helped us transform our communication
                strategy and achieve a 40% increase in audience engagement
                within six months.&quot;
              </p>
              <p className='mt-4 font-semibold'>— Client Name, Company</p>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
