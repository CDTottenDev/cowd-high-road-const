import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Your Site Name',
  description: 'Contact page description',
}

export default function ContactLayout({
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
