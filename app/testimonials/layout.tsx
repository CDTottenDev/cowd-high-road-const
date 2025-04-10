import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | Your Site Name',
  description: 'What our clients say about us',
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
