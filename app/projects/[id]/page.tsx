'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/shared/Section'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data/projects'

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const projectId = parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  // Related projects (excluding the current one)
  const relatedProjects = projects.filter((p) => p.id !== projectId).slice(0, 2)

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
            <Button asChild variant='ghost' className='mb-6 pl-0'>
              <Link href='/projects'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Projects
              </Link>
            </Button>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
              {project.title}
            </h1>
            <div className='mt-4 flex flex-wrap items-center gap-4'>
              <div className='flex items-center text-muted-foreground'>
                <Tag className='mr-2 h-4 w-4' />
                {project.category}
              </div>
              <div className='flex items-center text-muted-foreground'>
                <Calendar className='mr-2 h-4 w-4' />
                2025
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Project Content */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='aspect-video bg-muted rounded-xl flex items-center justify-center mb-12'>
              <div className='text-center'>
                <div className='bg-primary rounded-lg h-24 w-24 mx-auto' />
                <p className='mt-4 text-muted-foreground'>Project Image</p>
              </div>
            </div>

            <div className='prose prose-headings:font-bold prose-a:text-primary max-w-none'>
              <h2 className='text-2xl font-bold'>Project Overview</h2>
              <p className='text-lg text-muted-foreground'>
                {project.description}
              </p>

              <h2 className='text-2xl font-bold mt-12'>Our Approach</h2>
              <p>
                For this project, our team implemented a comprehensive strategy
                that focused on achieving measurable results while maintaining
                brand consistency across all touchpoints.
              </p>
              <ul>
                <li>
                  Conducted in-depth research and analysis of the target
                  audience
                </li>
                <li>
                  Developed a tailored communication strategy aligned with
                  client goals
                </li>
                <li>Created compelling content and visual assets</li>
                <li>Executed multi-channel campaign with precise timing</li>
                <li>
                  Monitored performance and optimized throughout the campaign
                </li>
              </ul>

              <h2 className='text-2xl font-bold mt-12'>Results</h2>
              <p>
                The campaign delivered exceptional results, exceeding client
                expectations and industry benchmarks:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
                <Card className='p-6 text-center'>
                  <div className='text-3xl font-bold text-primary'>+300%</div>
                  <p className='mt-2 text-muted-foreground'>
                    Engagement Increase
                  </p>
                </Card>
                <Card className='p-6 text-center'>
                  <div className='text-3xl font-bold text-primary'>2M+</div>
                  <p className='mt-2 text-muted-foreground'>People Reached</p>
                </Card>
                <Card className='p-6 text-center'>
                  <div className='text-3xl font-bold text-primary'>40%</div>
                  <p className='mt-2 text-muted-foreground'>
                    Improvement in Metrics
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className='bg-muted/30'>
        <div className='w-full px-4 md:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold'>Related Projects</h2>
            <p className='mt-2 text-muted-foreground'>
              Check out some of our other successful projects
            </p>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
              {relatedProjects.map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className='overflow-hidden h-full flex flex-col'>
                    <div className='aspect-video bg-muted rounded-t-lg flex items-center justify-center'>
                      <div className='text-center'>
                        <div className='bg-primary rounded-lg h-12 w-12 mx-auto' />
                        <p className='mt-2 text-sm text-muted-foreground'>
                          {relatedProject.category}
                        </p>
                      </div>
                    </div>
                    <div className='p-6 flex-grow flex flex-col'>
                      <h3 className='text-xl font-semibold'>
                        {relatedProject.title}
                      </h3>
                      <p className='mt-2 text-muted-foreground flex-grow'>
                        {relatedProject.description}
                      </p>
                      <Button
                        asChild
                        variant='link'
                        className='mt-4 p-0 h-auto w-fit'
                      >
                        <Link href={`/projects/${relatedProject.id}`}>
                          View case study
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='mt-12 text-center'>
              <Button asChild>
                <Link href='/projects'>View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
