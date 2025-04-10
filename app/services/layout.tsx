import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Your Site Name',
  description: 'Our services and offerings',
}

export default function ServicesLayout({
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
