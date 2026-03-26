'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/shared/Section'

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Terms Content */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='max-w-4xl mx-auto prose prose-headings:font-bold prose-a:text-primary'>
            <div className='bg-card rounded-xl p-6 md:p-8'>
              <h2 className='text-2xl font-bold mt-0'>Introduction</h2>
              <p>
                Welcome to Astra Comms. These terms and conditions outline the
                rules and regulations for the use of Astra Comms&apos; website
                and services.
              </p>
              <p>
                By accessing this website, we assume you accept these terms and
                conditions. Do not continue to use Astra Comms if you do not
                agree to all of the terms stated here.
              </p>

              <h2 className='text-2xl font-bold'>Intellectual Property</h2>
              <p>
                Unless otherwise stated, Astra Comms and/or its licensors own
                the intellectual property rights for all material on this
                website. All intellectual property rights are reserved.
              </p>

              <h2 className='text-2xl font-bold'>User Responsibilities</h2>
              <p>By using our website and services, you agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information when requested
                </li>
                <li>Maintain the security of your account and password</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Not use our services for any illegal or unauthorized purpose
                </li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className='text-2xl font-bold'>Services</h2>
              <p>
                Astra Comms provides communication and public relations
                services. The specific terms of any service agreement will be
                provided separately and will govern the provision of those
                services.
              </p>

              <h2 className='text-2xl font-bold'>Limitation of Liability</h2>
              <p>
                In no event shall Astra Comms, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses.
              </p>

              <h2 className='text-2xl font-bold'>Termination</h2>
              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the
                Terms.
              </p>

              <h2 className='text-2xl font-bold'>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of Somalia, without regard to its conflict of law
                provisions.
              </p>

              <h2 className='text-2xl font-bold'>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days&apos; notice prior to any new
                terms taking effect.
              </p>

              <h2 className='text-2xl font-bold'>Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                Astra Comms
                <br />
                Email: terms@astracomms.com
                <br />
                Phone: +252 61 9112709
              </p>

              <p className='text-sm text-muted-foreground mt-8'>
                Last Updated: September 27, 2025
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
