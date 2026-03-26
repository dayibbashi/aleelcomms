'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { AnimatedText } from '@/components/shared/AnimatedText'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getCompanyData, getServices, getWhyChooseUs } from '@/lib/data/content'

export default function Home() {
  const companyData = getCompanyData()
  const services = getServices()
  const strengths = getWhyChooseUs()

  return (
    <div className='flex flex-col w-full'>
      {/* Hero Section */}
      <Section className='py-16 md:py-24 lg:py-32 overflow-hidden'>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='order-2 lg:order-1'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedText
                  text={companyData.tagline}
                  className='text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight'
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'
              >
                {companyData.about.substring(0, 200)}...
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='mt-8 flex flex-col sm:flex-row gap-4'
              >
                <Button asChild size='lg' className='rounded-full px-8'>
                  <Link href='/services'>Our Services</Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='rounded-full px-8'
                >
                  <Link href='/contact'>Contact Us</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='mt-12 flex items-center gap-8'
              >
                <div className='flex items-center'>
                  <div className='flex -space-x-3'>
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className='h-10 w-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center'
                      >
                        <div className='h-6 w-6 rounded-full bg-primary' />
                      </div>
                    ))}
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-semibold'>
                      Trusted by 50+ clients
                    </p>
                    <p className='text-xs text-muted-foreground'>Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='order-1 lg:order-2 relative'
            >
              <div className='relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10'>
                {/* Background image with overlay */}
                <div className='absolute inset-0 bg-[url("/images/hero-bg.jpg")] bg-cover bg-center' />
                <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-primary/5' />

                <div className='absolute bottom-6 left-6 right-6 z-10'>
                  <Card className='p-4 backdrop-blur-sm bg-background/80 border-primary/10'>
                    <div className='flex items-center'>
                      <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center'>
                        <div className='h-6 w-6 rounded-full bg-primary' />
                      </div>
                      <div className='ml-4'>
                        <p className='font-semibold'>Award Winning</p>
                        <p className='text-sm text-muted-foreground'>
                          Communication Strategy
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='absolute -bottom-6 -left-6 bg-background border border-primary/10 rounded-xl p-4 shadow-lg w-48'
              >
                <div className='flex items-center'>
                  <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                    <div className='h-5 w-5 rounded-full bg-primary' />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-semibold'>10+ Years</p>
                    <p className='text-xs text-muted-foreground'>Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className='py-16 md:py-24 bg-muted/30'>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl md:text-4xl font-bold'>
                About {companyData.name}
              </h2>
              <p className='mt-4 text-muted-foreground line-clamp-6'>
                {companyData.about}
              </p>
              <Button asChild variant='link' className='mt-6 p-0 h-auto'>
                <Link href='/about' className='flex items-center'>
                  Learn more about us <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='relative rounded-2xl overflow-hidden aspect-video'
            >
              <div className='absolute inset-0 bg-[url("/images/about-bg.jpg")] bg-cover bg-center' />
              <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-background/5' />
              <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent'>
                <Card className='inline-block backdrop-blur-sm bg-background/30 border-primary/10'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
                      <div className='h-5 w-5 rounded-full bg-primary' />
                    </div>
                    <div className='ml-3'>
                      <p className='font-semibold'>Global Presence</p>
                      <p className='text-sm text-muted-foreground'>
                        Somalia & Beyond
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>Our Services</h2>
            <p className='mt-4 text-muted-foreground'>
              Comprehensive communication solutions tailored to your unique
              needs and objectives.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  animateOnHover
                  className='h-full overflow-hidden relative'
                >
                  <div className='absolute inset-0 bg-[url("/images/service-bg.jpg")] bg-cover bg-center opacity-5' />
                  <div className='relative flex flex-col h-full'>
                    <div className='text-primary mb-4'>
                      <div className='h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <div className='h-5 w-5 bg-primary rounded-sm' />
                      </div>
                    </div>
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                    <p className='mt-2 text-muted-foreground flex-grow'>
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant='link'
                      className='mt-4 p-0 h-auto w-fit'
                    >
                      <Link href='/services' className='flex items-center'>
                        Learn more <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <Button asChild variant='outline' className='rounded-full'>
              <Link href='/services'>View All Services</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Why Choose {companyData.name}
            </h2>
            <p className='mt-4 text-muted-foreground'>
              What sets us apart from other communications agencies.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='relative'
              >
                <div className='absolute inset-0 bg-[url("/images/why-choose-bg.jpg")] bg-cover bg-center rounded-xl opacity-5' />
                <div className='relative bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10'>
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                  <p className='ml-3 text-muted-foreground'>{strength}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
