import Link from 'next/link'

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
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <path d='M2 9h4v12H2z' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                </svg>
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
