'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail } from 'lucide-react'
import { getCompanyData, getContactInfo } from '@/lib/data/content'

export default function ContactPage() {
  const companyData = getCompanyData()
  const contactInfo = getContactInfo()

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
              Contact Us
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              Ready to elevate your communication strategy? Let&apos;s start a
              conversation.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Content */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <h2 className='text-2xl font-bold'>Send us a message</h2>
                <p className='mt-2 text-muted-foreground'>
                  We&apos;ll get back to you within 24 hours.
                </p>

                <form className='mt-6 space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' placeholder='Your name' />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='your.email@example.com'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='How can we help you?'
                      rows={5}
                    />
                  </div>

                  <Button type='submit' className='w-full'>
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className='h-full'>
                <h2 className='text-2xl font-bold'>Get in touch</h2>
                <p className='mt-2 text-muted-foreground'>
                  We&apos;d love to hear from you. Here&apos;s how you can reach
                  us.
                </p>

                <div className='mt-8 space-y-6'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-primary/10 p-3 rounded-lg'>
                      <Phone className='h-5 w-5 text-primary' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-semibold'>Phone</h3>
                      {contactInfo.phone.map((phone, index) => (
                        <p key={index} className='mt-1 text-muted-foreground'>
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-primary/10 p-3 rounded-lg'>
                      <Mail className='h-5 w-5 text-primary' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-semibold'>Email</h3>
                      <p className='mt-1 text-muted-foreground'>
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-primary/10 p-3 rounded-lg'>
                      <MapPin className='h-5 w-5 text-primary' />
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-semibold'>Office</h3>
                      <p className='mt-1 text-muted-foreground'>
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className='mt-8 aspect-video bg-muted rounded-lg flex items-center justify-center'>
                  <div className='text-center'>
                    <MapPin className='h-8 w-8 text-muted-foreground mx-auto' />
                    <p className='mt-2 text-muted-foreground'>
                      Interactive Map
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}
