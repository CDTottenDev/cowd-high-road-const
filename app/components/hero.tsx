import Link from "next/link"
import Image from "next/image"

import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero background.jpg"
          alt="Construction site"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>
      <div className="relative z-10 w-full px-4 lg:pl-72 lg:pr-6 mx-auto">
        <div className="max-w-xl bg-black rounded-lg p-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">Building Excellence</h1>
          <p className="mt-6 text-lg text-gray-200">
            High Road Construction delivers quality construction services with unmatched expertise and dedication.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Get a Quote
              </Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
