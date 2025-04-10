import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Your Site Name',
  description: 'About page description',
}

export default function AboutLayout({
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
