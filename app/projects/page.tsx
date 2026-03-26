'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { projects } from '@/lib/data/projects'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
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
              Featured Projects
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              A showcase of our recent work and the impact we&apos;ve delivered
              for our clients.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card animateOnHover className='overflow-hidden'>
                  <div className='aspect-video bg-muted rounded-lg flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='bg-primary rounded-lg h-16 w-16 mx-auto' />
                      <p className='mt-2 text-sm text-muted-foreground'>
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <p className='mt-2 text-muted-foreground'>
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.id}`}
                      className='mt-4 inline-flex items-center text-primary hover:underline'
                    >
                      View case study
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </div>
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
            Interested in Our Work?
          </h2>
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            Let&apos;s discuss how we can create similar impact for your
            organization.
          </p>
          <div className='mt-8'>
            <Link
              href='/contact'
              className='inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors'
            >
              Start a Project
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
