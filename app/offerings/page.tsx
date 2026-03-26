'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getSpecializedOfferings } from '@/lib/data/content'

export default function OfferingsPage() {
  const offerings = getSpecializedOfferings()

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
              Specialized Offerings
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              Focused services designed to complement our core communication
              strategies.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Offerings Grid */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card animateOnHover className='h-full flex flex-col'>
                  <div className='bg-muted rounded-lg aspect-video flex items-center justify-center mb-6'>
                    <div className='bg-primary rounded-lg h-12 w-12' />
                  </div>
                  <h3 className='text-xl font-semibold'>{offering.title}</h3>
                  <p className='mt-2 text-muted-foreground flex-grow'>
                    {offering.description}
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
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Need Something Else?
          </h2>
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            We&apos;re always expanding our capabilities to meet evolving
            communication needs.
          </p>
          <div className='mt-8'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors'
            >
              Request Custom Service
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
