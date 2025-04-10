import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Your Site Name',
  description: 'Blog page description',
}

export default function BlogLayout({
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
