'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/shared/Section'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl'>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Privacy Content */}
      <Section>
        <div className='w-full px-4 md:px-8'>
          <div className='max-w-4xl mx-auto prose prose-headings:font-bold prose-a:text-primary'>
            <div className='bg-card rounded-xl p-6 md:p-8'>
              <h2 className='text-2xl font-bold mt-0'>Introduction</h2>
              <p>
                Astra Comms (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>

              <h2 className='text-2xl font-bold'>Information We Collect</h2>
              <h3 className='text-xl font-semibold'>Personal Information</h3>
              <p>
                We may collect personally identifiable information, such as your
                name, email address, phone number, and company details when you:
              </p>
              <ul>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request our services</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className='text-xl font-semibold'>Usage Data</h3>
              <p>
                We may also collect information about how you access and use our
                website, including:
              </p>
              <ul>
                <li>Your IP address</li>
                <li>Browser type and version</li>
                <li>Pages you visit on our website</li>
                <li>Time and date of your visit</li>
                <li>Time spent on each page</li>
              </ul>

              <h2 className='text-2xl font-bold'>
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners
                </li>
                <li>
                  Send you updates, marketing communications, and other
                  information
                </li>
                <li>Process your transactions and manage your orders</li>
              </ul>

              <h2 className='text-2xl font-bold'>
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and store certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>

              <h2 className='text-2xl font-bold'>Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to
                facilitate our services, provide services on our behalf, perform
                service-related services, or assist us in analyzing how our
                services are used.
              </p>

              <h2 className='text-2xl font-bold'>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect the security of your personal information.
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure.
              </p>

              <h2 className='text-2xl font-bold'>
                Your Data Protection Rights
              </h2>
              <p>
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul>
                <li>
                  The right to access, update, or delete the information we have
                  on you
                </li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right of restriction</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2 className='text-2xl font-bold'>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date.
              </p>

              <h2 className='text-2xl font-bold'>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                Astra Comms
                <br />
                Email: privacy@astracomms.com
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
