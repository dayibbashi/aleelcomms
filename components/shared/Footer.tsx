import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Approach', href: '/approach' },
      { name: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Projects', href: '/projects' },
      { name: 'Offerings', href: '/offerings' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='container py-12 md:py-16 px-4 md:px-8 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <h3 className='text-xl font-bold'>Astra Comms</h3>
            <p className='mt-4 text-muted-foreground max-w-md'>
              Designed to Communicate. Built to Impact.
            </p>
            <p className='mt-2 text-muted-foreground max-w-md'>
              Strategic communications for forward-thinking organizations.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className='text-sm font-semibold uppercase tracking-wider'>
                  {section.title}
                </h3>
                <ul className='mt-4 space-y-2'>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-muted-foreground hover:text-foreground transition-colors'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className='text-sm font-semibold uppercase tracking-wider'>
              Connect
            </h3>
            <div className='mt-4 flex space-x-4'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-center items-center'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} Astra Comms. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0 md:ml-6 flex space-x-6'>
            <Link
              href='/privacy'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
