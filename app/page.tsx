import { Metadata } from 'next'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Home',
}

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="container py-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js SEO Boilerplate
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A high-performance, SEO-optimized Next.js starter template with TypeScript, 
            Tailwind CSS, and Prisma. Ready for production.
          </p>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Latest Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group relative flex flex-col space-y-2">
                <h3 className="text-2xl font-medium leading-none">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-muted-foreground">{post.excerpt}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}